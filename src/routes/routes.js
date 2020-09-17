const {Router} = require('express');
const path = require('path');
const router = Router();


router.get('/',(reg,res) =>{
  res.send('Mi primera clase Backend');
});

router.get('/Saludo',(req,res) =>{
  res.send('Hola Karen Bienvenida');
});
module.exports = router;