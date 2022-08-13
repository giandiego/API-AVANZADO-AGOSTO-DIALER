import auth from '../middleware/auth';
import { Router } from "express";
import * as Asterisk from '../controllers/asterisk.controllers';

const router = Router();

router.post("/DialManager", auth,Asterisk.DialManager);
router.post("/CreateLeads", auth,Asterisk.CreateLeads);

export default router;