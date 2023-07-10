import { Router } from "express";
import aboutRouter from "./aboutRoute.js";
import contactRouter from "./contactRoute.js";
import tripbookingRouter from "./tripbookingRoute.js";
import tripinfoRouter from "./tripinfoRoute.js";

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
    },
    {
        path : `/tripinfo`,
        router : tripinfoRouter
    }
]
ourRoutes.forEach((route) => {
    apiRouter.use(route.path,route.router)
})

export default apiRouter