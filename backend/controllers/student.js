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
