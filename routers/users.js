import express from 'express';



import { createUser,updateUser,deleteUser,getUsers,getUser } from '../controllers/users.js';
const router = express.Router();


// bath to users.js 
router.get('/', getUsers);

router.post('/',createUser);

router.get('/:id',getUser) ;

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);

export default router;