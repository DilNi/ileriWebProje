const express = require('express');
const path=require('path');

const router=express.Router();

const rootDir=require('../util/path');
const yoneticiVerisi = require('./yonetici');

const duyuruController=require('../controllers/duyuru');
const yetkiKontrol = require('../util/yetkiKontrol');

router.get('/', duyuruController.getDuyurular);




module.exports=router;

