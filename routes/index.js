import { Router } from "express";
import aboutRouter from "./aboutRoute.js";
import contactRouter from "./contactRoute.js";
import tripbookingRouter from "./tripbookingRoute.js";
import tripinfoRouter from "./tripinfoRoute.js";
import categoryRouter from "./categoryRoute.js";
import fileUploadRouter from "./fileUploadRoute.js";
import searchRouter from "./searchRoute.js";

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
    },
    {
        path : `/category`,
        router : categoryRouter
    },
    {
        path : `/file`,
        router : fileUploadRouter
    },
    {
        path : `/search`,
        router : searchRouter
    }
]
ourRoutes.forEach((route) => {
    apiRouter.use(route.path,route.router)
})

export default apiRouter