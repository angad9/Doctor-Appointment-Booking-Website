import  express  from "express";

import { 
    updateUser, 
    deletUser,
    getAllUser, 
    getSingleUser,  
} from "../Controllerrs/userController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get('/:id' , authenticate, restrict(['patient']), getSingleUser)
router.get('/',authenticate, restrict(['admin']), getAllUser)
router.put('/:id', authenticate, restrict(['patient']), updateUser)
router.delete('/:id', authenticate, restrict(['patient']), deletUser)

export default router;