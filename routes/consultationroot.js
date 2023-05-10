import express from "express";
const router=express.Router() 
import {AddCONS,GetCONS,detailCONS,ModifierCONS,deleteCONS  } from '../controler/consultaioncontroler.js'
// Add consultation
router.route('/CONS/Addcons').post(AddCONS)
router.route('/CONS/Afficher/:id_patient').get(GetCONS)
router.route('/CONS/detail/:id').get(detailCONS)
router.route('/CONS/UpdateCONS').put(ModifierCONS)
router.route('/CONS/delete/:id').delete(deleteCONS)
export default router
