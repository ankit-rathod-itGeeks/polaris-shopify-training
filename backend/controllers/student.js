const { SuccessMessage } = require("../constants/messages");
const statusCodes = require("../constants/statusCodes");
const getService = require("../services/student");
const { sendResponse } = require("../utils/sendResponse");

exports.getAllrequestedBooks = async (req, res) => {
  const result = await getService.getAllrequestedBooks(req);

  if (result.status && result.result) {
    sendResponse(
      res,
      statusCodes.OK,
      true,
      SuccessMessage.FETCH,
      result.result,
    );
  }
};


exports.uploadProfileImage = async (req, res) => {
  const result = await getService.uploadProfileImage(req);
  

  if (result.status && result.result) {
    sendResponse(
      res,
      statusCodes.OK,
      true,
      SuccessMessage.FETCH,
      result.result,
    );
  }
};
exports.getProfileImage = async (req, res) => {
  const result = await getService.getProfileImage(req);
  

  if (result.status && result.result) {
    sendResponse(
      res,
      statusCodes.OK,
      true,
      SuccessMessage.FETCH,
      result.result,
    );
  }
};
