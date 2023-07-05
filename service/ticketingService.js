import { Ticketing } from "../schemaModel/model.js";

export const createTicketingService = async({data}) => Ticketing.create(data)

export const getSpecifiedTicketingService = async({id}) => Ticketing.findById(id)

export const getAllTicketingService = async({
    find = {},
    sort = "",
    limit = "",
    skip = "",
    select = ""
}) => Ticketing.find(find).sort(sort).limit(limit).skip(skip).select(select)