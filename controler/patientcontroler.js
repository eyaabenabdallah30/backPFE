import asyncHandler from "express-async-handler";
import mysql from "mysql"

const  AddPatient = asyncHandler(async (req, res) => {
  
    let sql ="insert into patient set ?" 
    cnx.query(sql, req.body, function (err,result){
       res.json({msg:'Ajouter effective',patient:req.body})
        
       })
  });

  const  GetPatients = asyncHandler(async (req, res) => {
  
    let sql = "select * from  patient " 
    cnx.query(sql, function (err,result){
       res.json({patients:result})
        
       })
  });

  
  const  detailPatient = asyncHandler(async (req, res) => {
  let id=req.params.id
    let sql = "select * from  patient where id =? " 
    cnx.query(sql,id, function (err,result){
       res.json({patient:result[0]})
        
       })
  });

  const  deletePatient = asyncHandler(async (req, res) => {
   let id=req.params.id
    let sql = "delete  from  patient where id =? " 
    let sqlRDV = "delete  from  rendezvous where id_patient =? " 
    let sqlOrd = "delete  from  ordonnance where id_patient =? "
    let sqlCons = "delete  from  consultation where id_patient =? "
    let sqlCertif = "delete  from  certificat where id_patient =? "
     cnx.query(sql,id, function (err,result){
      cnx.query(sqlRDV,id)
      cnx.query(sqlOrd,id)
      cnx.query(sqlCons,id)
      cnx.query(sqlCertif,id)
        res.json({msg:'delete OK'})
         
        })
   });

   const  searchPatient = asyncHandler(async (req, res) => {
      let param=req.params.param
      let params=param.split(' ')
      console.log('nom '+params[0]+' Pre '+params[1])
        let sql = "select * from  patient where nompatient =? and prenompatient=?" 
        cnx.query(sql,[params[0],params[1]], function (err,result){
           res.json({patients:result})
            
           })
      });
      const  ModifierPatient = asyncHandler(async (req, res) => {
         const etatcivil=req.body.etatcivil
         const telephone=req.body.telephone
         const email=req.body.email
         const adresse=req.body.adresse
         const id=req.body.id
         const sexe=req.body.sexe
         const dateNais=req.body.datenaissance
         let sql = "update patient set etatcivil=?,telephone=?,email=?,adresse=?,sexe=?,datenaissance=? where id=?" 
         cnx.query(sql, [etatcivil,telephone,email,adresse,sexe,dateNais,id], function (err,result){
            res.json({msg:'Modifier effective',patient:req.body})
             
            })
         });
   
  export { AddPatient,GetPatients,detailPatient,deletePatient,searchPatient, ModifierPatient }