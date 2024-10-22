const { requestedBooks, book } = require("../models");

exports.getAllrequestedBooks = async (req) => {
  const result = await requestedBooks.findAll({
    where: { userId: req.params.id },
    attributes: { exclude: ["createdAt", "updatedAt"] },
    include: [
      {
        model: book,
        attributes: ["bookName"],
      },
    ],
  });
  if (result) {
    return {
      status: true,
      result: result,
    };
  }
};
