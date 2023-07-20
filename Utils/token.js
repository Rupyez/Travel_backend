import jwt from "jsonwebtoken";

export const generateToken = async(infoObj={}, secretKey = "", expiresIn = "365") => {
    try{
        let expiresInfo = { expiresIn : expiresIn}
        let token = await jwt.sign(infoObj, secretKey , expiresInfo)
        return token
    } catch (error) {
        let err = new Error(error.message)
        error.statusCode = "400"
        throw err
    }
}

export const verifyToken = async(token = "", secretKey = "") => {
    try{
        let infoObj = await jwt.verify(token,secretKey)
        return infoObj
    } catch(error) {
        let err = new Error(error.message)
        error.statusCode = "401"
        throw err
    }
}