import { Router } from "express";
import aboutRouter from "./aboutRoute.js";

const apiRouter = Router()

const ourRoutes = [
    {
        path:`/about`,
        router: aboutRouter
    }
]
ourRoutes.forEach((route) => {
    apiRouter.use(route.path,route.router)
})

export default apiRouter