const express = require('express'); // llamo al modulo express
const router = express.Router(); // esto me permite crear multiples rutas y mantenerlas en archivos por separado

router.get('/', (req,res)=>{
    //res.sendFile(path.join(__dirname, '/views/index.html'));
    res.render('index',{title: 'The Ripper'});
   
});

router.get('/contact', (req,res)=>{
    res.render('contact', {title: 'Contact page'});
   
});



module.exports = router;