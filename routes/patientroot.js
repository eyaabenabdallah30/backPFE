import express from "express";
const router=express.Router() 

import {AddPatient,GetPatients,detailPatient,deletePatient,searchPatient,ModifierPatient } from '../controler/patientcontroler.js'
// Add Patient
router.route('/Patient/AddPatient').post(AddPatient)
router.route('/Patient/Afficher').get(GetPatients)
router.route('/Patient/detail/:id').get(detailPatient)
router.route('/Patient/delete/:id').get(deletePatient)
router.route('/Patient/search/:param').get(searchPatient)
router.route('/Patient/UpdatePatient').put(ModifierPatient)

export default router