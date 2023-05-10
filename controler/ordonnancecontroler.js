import asyncHandler from "express-async-handler";
import mysql from "mysql"

const AddOrd = asyncHandler(async (req, res) => {
    const {nompatient,prenompatient,date,categorie ,prescription , id_patient }=req.body
     let sql = "insert into ordonnance set ?" 
     cnx.query(sql, req.body, function (err,result){
        res.json({msg:'Ajouter effective',ord:req.body})
         
        })
   });
 
   const  GetOrd = asyncHandler(async (req, res) => {
    let id_patient=req.params.id_patient
     let sql = "select * from ordonnance where 	id_patient='"+id_patient+"'" 
     cnx.query(sql, function (err,result){
        res.json({ord:result})
        })
   });
   const   deleteOrd = asyncHandler(async (req, res) => {
    let id=req.params.id
     let sql = "delete from  ordonnance where id=?" 
     cnx.query(sql,id, function (err,result){
        res.json({msg:'delete OK'})
         
        })
   })
 
   const  detailOrd = asyncHandler(async (req, res) => {
    let id=req.params.id
      let sql = "select * from ordonnance where id =? " 
      cnx.query(sql,id, function (err,result){
         res.json({ord:result[0]})
          
         })
    });
 
    const  ModifierOrd = asyncHandler(async (req, res) => {
       const prescription=req.body.prescription
       const date=req.body.date
       const categorie=req.body.categorie
       const id=req.body.id
       let sql = "update  ordonnance set date=? ,prescription=?,categorie=? where id=?" 
       cnx.query(sql, [date,prescription,categorie,id], function (err,result){
          res.json({msg:'Modifier effective',certif:req.body})
           
          })
   });
 



export{ AddOrd,GetOrd,detailOrd,ModifierOrd,deleteOrd  }