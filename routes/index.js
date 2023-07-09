import { Router } from "express";
import aboutRouter from "./aboutRoute.js";
import contactRouter from "./contactRoute.js";

const apiRouter = Router()

const ourRoutes = [
    {
        path:`/about`,
        router : aboutRouter
    },
    {
        path:`/contact`,
        router : contactRouter
    }
]
ourRoutes.forEach((route) => {
    apiRouter.use(route.path,route.router)
})

export default apiRouter