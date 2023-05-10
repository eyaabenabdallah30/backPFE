import asyncHandler from "express-async-handler";
import mysql from "mysql"

const AddCertifcat = asyncHandler(async (req, res) => {
    const {nompatient,prenompatient,diagno,datedebut,datefin, id_patient }=req.body
    console.log(req.body)
     let sql = "insert into  certificat set ?" 
     cnx.query(sql, req.body, function (err,result){
        res.json({msg:'Ajouter effective',certif:req.body})
         
        })
   });
 
   const  GetCertifcat = asyncHandler(async (req, res) => {
    let id_patient=req.params.id_patient
     let sql = "select * from  certificat where 	id_patient='"+id_patient+"'" 
     cnx.query(sql, function (err,result){
        res.json({certif:result})
        })
   });
   const   deleteCertifcat = asyncHandler(async (req, res) => {
    let id=req.params.id
     let sql = "delete from  certificat where id=?" 
     cnx.query(sql,id, function (err,result){
        res.json({msg:'delete OK'})
         
        })
   })
 
   const  detailCertifcat = asyncHandler(async (req, res) => {
    let id=req.params.id
      let sql = "select * from certificat where id =? " 
      cnx.query(sql,id, function (err,result){
         res.json(result[0])
          
         })
    });
 
    const  ModifierCertifcat = asyncHandler(async (req, res) => {
       const datedebut=req.body.datedebut
       const datefin=req.body.datefin
       const diagno=req.body.diagno
       const id=req.body.id
       let sql = "update  certificat set datedebut=?,datefin=?,diagno=? where id=?" 
       cnx.query(sql, [datedebut,datefin,diagno,id], function (err,result){
          res.json({msg:'Modifier effective',certif:req.body})
           
          })
   });
 



export{ AddCertifcat,GetCertifcat,detailCertifcat,ModifierCertifcat,deleteCertifcat  }