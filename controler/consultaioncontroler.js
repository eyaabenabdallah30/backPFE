import asyncHandler from "express-async-handler";
import mysql from "mysql"

const AddCONS = asyncHandler(async (req, res) => {
   const {nompatient,prenompatient,consultaion,date, id_patient }=req.body
   
    let sql = "insert into consultation set ?" 
    cnx.query(sql, req.body, function (err,result){
       res.json({msg:'Ajouter effective',cons:req.body})
        
       })
  });

  const  GetCONS = asyncHandler(async (req, res) => {
   let id_patient=req.params.id_patient
    let sql = "select * from  consultation where 	id_patient='"+id_patient+"'" 
    cnx.query(sql, function (err,result){
       res.json({consultaion:result})
       })
  });
  const   deleteCONS = asyncHandler(async (req, res) => {
   let id=req.params.id
    let sql = "delete from  consultation where id=?" 
    cnx.query(sql,id, function (err,result){
       res.json({msg:'delete OK'})
        
       })
  })

  const  detailCONS = asyncHandler(async (req, res) => {
   let id=req.params.id
     let sql = "select * from  consultation where id =? " 
     cnx.query(sql,id, function (err,result){
        res.json({cons:result[0]})
         
        })
   });

   const  ModifierCONS = asyncHandler(async (req, res) => {
      const date=req.body.date
      const consultation=req.body.consultation
      const id=req.body.id
      let sql = "update  consultation set date=?,consultation=? where id=?" 
      cnx.query(sql, [date,consultation,id], function (err,result){
         res.json({msg:'Modifier effective',cons:req.body})
          
         })
  });

    
  export{AddCONS,GetCONS ,detailCONS,ModifierCONS,deleteCONS}