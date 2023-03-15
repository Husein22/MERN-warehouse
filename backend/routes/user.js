const expres=require('express');
 

//kontroler funkcije
const {registerUser,loginUser}=require('../controllers/userKontroler')


const route=expres.Router();


//login route

route.post('/login',loginUser);

//register route
route.post('/register',registerUser);

module.exports=route;