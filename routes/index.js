import { Router } from "express";
import aboutRouter from "./aboutRoute.js";
import contactRouter from "./contactRoute.js";
import tripbookingRouter from "./tripbookingRoute.js";

const apiRouter = Router()

const ourRoutes = [
    {
        path:`/about`,
        router : aboutRouter
    },
    {
        path:`/contact`,
        router : contactRouter
    },
    {
        path : `/tripbooking`,
        router : tripbookingRouter
    }
]
ourRoutes.forEach((route) => {
    apiRouter.use(route.path,route.router)
})

export default apiRouter