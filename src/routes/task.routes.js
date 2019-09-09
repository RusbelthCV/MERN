const express = require ('express');
const router = express.Router();

const cupones = require('../models/tasks');
router.get('/',(req,res) => {
    cupones.getCupones((err,data) => {
        console.log(data);
    });
});

router.use((req,res) => {
    res.redirect('/');
});

module.exports = router;