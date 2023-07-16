import { User,TokenData } from "../schemaModel/model.js";

export const createUserService = async ({ body }) => User.create(body);

export const getSpecificUser = async ({ id }) => User.findById({ id })

export const getMyProfileService = async ({ id }) => User.findById({ id })

export const getAllUserService = async ({
    find = {},
    sort = "",
    limit = "",
    skip = "",
    select = "",
}) => User.find(find).sort(sort).limit(limit).skip(skip).select(select);



export const updateSpecificUserService = async ({ id, body }) =>
    User.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
    });

export const deleteSpecificUserService = async ({ id }) =>
    User.findByIdAndDelete(id);

export const getSpecificUserByAny = async ({ email }) =>
    User.findOne({ email: email });

export const createTokenService = async ({ data }) => TokenData.create(data);

export const deleteSpecificTokenService = async ({ id }) =>
    TokenData.findByIdAndDelete(id);