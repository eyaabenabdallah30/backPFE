import express from "express";
const router=express.Router() 
import {GetOrd, ModifierOrd, deleteOrd, detailOrd,AddOrd} from '../controler//ordonnancecontroler.js'

router.route('/Ord/AddOrd').post(AddOrd)
router.route('/Ord/Afficher/:id_patient').get(GetOrd)
router.route('/Ord/detail/:id').get(detailOrd)
router.route('/Ord/Update').put(ModifierOrd)
router.route('/Ord/delete/:id').delete(deleteOrd)
export default router