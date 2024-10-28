const Users = require("../models").user;
const bcrypt = require("bcrypt");

const { where, Op } = require("sequelize");
const {
  book,
  issueBook,
  user,
  sequelize,
  requestedBooks,
} = require("../models");
const { raw } = require("express");
const { generateToken } = require("../utils/generateToken");
const logger = require("../logger");

exports.register = async (req, res) => {
  try {
    console.log("------------------register api----------------------------");

    const password = bcrypt.hashSync(req.body.password, 10);
    const result = await Users.create({ ...req.body, password: password });

    return {
      status: true,
      result: result,
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};
exports.login = async (req, res) => {
  try {
    console.log("------------------login api----------------------------");

    // logger.warn("warning Information")
    logger.info("------------------login api----------------------------")
    // logger.debug("debug Information")  
    console.log(req.body);
    
    // const password=await bcrypt.hashSync(req.body.password,10)
    
    const response = await Users.findOne({
      where: { email: req.body.userName },
    });

    if (response) {
      

      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        response.password,
      );
      console.log(isPasswordCorrect);

      if (isPasswordCorrect) {
      }

      if (isPasswordCorrect) {
        const tokenData = {
          id: response.id,
          role: response.role,
        };

        const token = generateToken(tokenData);

        if (token) {
          return {
            status: true,
            result: token,
            details:response.dataValues
          };
        } else {
          return {
            status: false,
          };
        }
      } else {
        return {
          status: false,
        };
      }
    } else {
      return {
        status: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};

exports.addBook = async (req, res) => {
  try {
    console.log("------------------add book api----------------------------");

    console.log(req.body);

    const response = await book.create({ ...req.body });

    if (response) {
      return {
        status: true,
        result: response,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};

exports.issueBook = async (req, res) => {
  try {
    console.log("------------------issue book api----------------------------");
    console.log(req.body);

    const response = await issueBook.create({ ...req.body });

    if (response) {
      return {
        status: true,
        result: response,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};

exports.assignedBooks = async (req, res) => {
  try {
   
    const approvedBooks=await requestedBooks.findAll({
      where:{
        userId: req.params.id,
        isApproved:true,
      },
      include: [
        {
          model: book,
          attributes:['id']
        },
      ],
    })


    const books=approvedBooks.map((i)=>i.dataValues.book.dataValues.id)
    console.log("approvedBooks-are -----------------------------------",books);

    const response = await issueBook.findAll({
      where: {

         
        userId: req.params.id,
        bookId: { [Op.in]: [...books] },
        submitted: "notSubmitted",
      },
      include: [
        {
          model: book,
        },
      ],
    });

    console.log("response-are -----------------------------------",response);

    if (response) {
      return {
        status: true,
        result: response,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};

exports.allBooks = async (req, res) => {
  try {
    console.log("------------------all books api----------------------------");

    const response = await book.findAndCountAll();

    if (response) {
      return {
        status: true,
        result: response,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};

exports.allUsers = async (req, res) => {
  try {
    console.log("------------------all users api----------------------------");

    const response = await Users.findAndCountAll({
      where: { role: "Student" },
      order: [["id", "DESC"]],
    });

    if (response) {
      return {
        status: true,
        result: response,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};

exports.allIssuedBooks = async (req, res) => {
  try {
    console.log(
      "------------------all issued books api----------------------------",
    );

    const response = await issueBook.findAndCountAll();

    if (response) {
      return {
        status: true,
        result: response,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};

exports.getRequestedBooks = async (req, res) => {
  try {
    console.log(
      "-----------------getRequestedBooks books api----------------------------",
    );

    const response = await requestedBooks.findAll({
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: book,
        },
        {
          model: user,
          attributes: { exclude: ["password"] },
        },
      ],
    });

    if (response) {
      return {
        status: true,
        result: response,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};
exports.approveBookRequest = async (req, res) => {
  try {
    console.log(
      "-----------------approveBookRequest books api----------------------------",
    );
    console.log(req.body);

    const response = await requestedBooks.update(
      { isApproved: req.body.toApprove },
      { where: { id: req.params.id } },
    );
    if (response) {

     

        
      return {
        status: true,
        result: response,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};

exports.submitBook = async (req, res) => {
  try {
    console.log(
      "------------------submit book api----------------------------",
    );

    console.log(req.body);

    const response = await issueBook.update(
      {
        penalty: req.body.penalty,
        submitted: "submitted",
        actualReturnedDate: req.body.returnedDate,
      },
      {
        where: {
          userId: req.body.userId,
          bookId: req.body.bookId,
        },
      },
    );

    return {
      status: true,
      result: response,
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};

exports.updateStatus = async (req, res) => {
  try {
    console.log(
      "------------------update status api----------------------------",
    );

    console.log(req.body);

    const response = await user.update(
      { status: req.body.status },
      {
        where: { id: req.body.userId },
      },
    );

    if (response) {
      return {
        status: true,
        result: response,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};
exports.deleteBook = async (req) => {
  try {
    console.log(
      "------------------deleteBook  api----------------------------",
    );

    const assignedUsers = await issueBook.destroy({
      where: { bookId: req.params.id },
    });
    console.log(assignedUsers);
    const response = await book.destroy({ where: { id: req.params.id } });

    if (response) {
      return {
        status: true,
        result: response,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};
exports.penaltyCollected = async (req) => {
  try {
    console.log(
      "------------------penaltyCollected  api----------------------------",
    );

    const result = await issueBook.findAll({
      attributes: [
        [sequelize.fn("SUM", sequelize.col("penalty")), "total_amount"],
      ],
      raw: true,
    });

    console.log(result);

    if (result) {
      return {
        status: true,
        result: result,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};

exports.studentIssuedBooks = async (req) => {
  try {
    console.log(
      "------------------studentIssuedBooks  api----------------------------",
    );

    const studentIssuedBooks = await issueBook.findAndCountAll({
      where: { userId: req.params.id, submitted: "notSubmitted" },
      include: [
        {
          model: book,
        },
      ],
    });
    console.log(studentIssuedBooks);

    if (studentIssuedBooks) {
      return {
        status: true,
        result: studentIssuedBooks,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};

exports.studentBooksHistory = async (req) => {
  try {
    console.log(
      "------------------studentBooksHistory  api----------------------------",
    );

    const studentIssuedBooks = await issueBook.findAndCountAll({
      where: { userId: req.params.id },
      include: [
        {
          model: book,
        },
      ],
    });
    console.log(studentIssuedBooks);

    if (studentIssuedBooks) {
      return {
        status: true,
        result: studentIssuedBooks,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};

exports.requestBook = async (req) => {
  try {
    console.log(
      "------------------requestBook  api----------------------------",
    );
    console.log(req.params.id);
    console.log("body-", req.body);

    const result = await requestedBooks.create({
      userId: req.params.id,
      bookId: req.body.bookId,
      duration: req.body.duration,
    });

    console.log(result);

    if (result) {
      return {
        status: true,
        result: result,
      };
    } else {
      return {
        status: false,
      };
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      result: error,
    };
  }
};
