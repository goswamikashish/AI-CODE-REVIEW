const { response } = require("express");
const aiService=require("../services/ai.service")

module.exports.getReview=async (req,resp)=>{
try{
    const code = req.body.code;

    if(!code){
        return resp.status(400).send("prompt is required");
    }

    const response=await aiService(code);

    resp.send(response);

} catch (error) {

    console.error(error);

        return resp.status(500).json({
            success: false,
            message: error.message,
           
        });
    }
};

