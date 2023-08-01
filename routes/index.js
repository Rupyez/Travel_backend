import { Router } from "express";
import aboutRouter from "./aboutRoute.js";
import contactRouter from "./contactRoute.js";
import tripbookingRouter from "./tripbookingRoute.js";
import tripinfoRouter from "./tripinfoRoute.js";
import fileUploadRouter from "./fileUploadRoute.js";
import searchRouter from "./searchRoute.js";
import tripcategoryRouter from "./tripcategoryRoute.js";
import reviewRouter from "./reviewRoute.js";
import userRouter from "./userRoutes.js";
import socialmediaRouter from "./socialmediaRoute.js";
import inquiryRouter from "./inquiryRoute.js"
import searchfeatureRouter from "./searchfeatureRoute.js";

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
        path : `/file`,
        router : fileUploadRouter
    },
    {
        path : `/search`,
        router : searchRouter
    }, 
    {
        path : `/tripcategory`,
        router : tripcategoryRouter
    },
    {
        path : `/review`,
        router : reviewRouter
    },
    {
        path : `/user`,
        router : userRouter
    },
    {
        path : `/social`,
        router : socialmediaRouter
    },
    {
        path : `/inquiry`,
        router : inquiryRouter
    },
    {
        path : `/searchfeature`,
        router : searchfeatureRouter
    }
]
ourRoutes.forEach((route) => {
    apiRouter.use(route.path,route.router)
})

export default apiRouter