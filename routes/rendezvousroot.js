import express from "express";
const router=express.Router() 
import {AddRDV,GetRDVS,GetRDVSAujourdhui,GetRDVSSearch,deleteRDVById,deleteAllRDV,detailRDV,ModifierRDV} from '../controler/rendezvouscontroler.js'
// Add 
router.route('/RDV/addRDV').post(AddRDV)
router.route('/RDV/Afficher').get(GetRDVS)
router.route('/RDV/Aujourdhui').get(GetRDVSAujourdhui)
// Search 
router.route('/RDV/Search/:date').get(GetRDVSSearch)
//delete RDVBy Id
router.route('/RDV/delete/:id').delete(deleteRDVById)
router.route('/RDV/deleteAll/').delete(deleteAllRDV)
//
router.route('/RDV/detail/:id').get(detailRDV)
router.route('/RDV/UpdateRDV').put(ModifierRDV)
export default router