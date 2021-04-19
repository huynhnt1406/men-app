const express = require('express')

const router = express.Router()
//login page
router.get('/users/login',(req,res) => {
    res.render('login')
})
//register
router.get('/users/register',(req,res) => {
    res.render('register')
})
//register handle
router.post('/users/register', (req,res) => {
    const {name, email, password, password2} = req.body
    let errors = []
    //check required feilds
     if(!name || !email || !password || !password2){
         errors.push({msg:'Please fill full the blank'});
     }
     //check password match
     if(password !== password2){
         errors.push({msg: 'password is not matched'});
     }
     //check password length
     if(password.length < 6){
         errors.push({msg:'Password should be at least 6 characters'});
     }
     if(errors.length > 0 ){
        res.render('register',{
            email,
            name,
            password2,
            password
        })
     }else{
        res.send('pass')
     }
})
module.exports = router