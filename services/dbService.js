

const sendSuccess = require("../utilities/responseHandler");
const asyncWrapper = require("../utilities/asyncWrapper");

const createService = (Model, message = "Successfully Created") => 
    asyncWrapper(async (req, res) => {
        const document = await Model.create(req.body);

        sendSuccess({
            res, data: document, message
        })
    })


const getAllService = (Model, message = "Successfully fetched") => 
    asyncWrapper(async (req, res) => {
        const documents = await Model.find().sort({ createdAt: -1 });

        sendSuccess({ res, data: documents, message });
    })


module.exports = { createService, getAllService };