import express from "express";
const router=express.Router() 
import {AddCertifcat,GetCertifcat,detailCertifcat,ModifierCertifcat,deleteCertifcat } from '../controler/certificatcontroler.js'
// Add
router.route('/Certif/AddCertif').post(AddCertifcat)
router.route('/Certif/Afficher/:id_patient').get(GetCertifcat)
router.route('/Certif/detail/:id').get(detailCertifcat)
router.route('/Certif/UpdateCertif').put(ModifierCertifcat)
router.route('/Certif/delete/:id').delete(deleteCertifcat)
export default router
