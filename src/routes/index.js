import express  from "express";


import V1ApiRoutes from "./v1/index.js";


const router=express.Router();

router.use('/v1',V1ApiRoutes);

export default router;
