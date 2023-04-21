import { Router } from "express";

const router = Router();

router.get("/back", (req, res)=>{
    res.render("backoffice", {nombre: ""});
})

export default router;