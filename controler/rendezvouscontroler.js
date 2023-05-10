import asyncHandler from "express-async-handler";
import mysql from "mysql"

const  AddRDV = asyncHandler(async (req, res) => {
    const {Nompatient,Prenompatient,Contact,Date,Heure,id_patient }=req.body
    let sql = "insert into  rendezvous set ?" 
    cnx.query(sql, req.body, function (err,result){
       res.json({msg:'Ajouter effective',rdv:req.body})
        
       })
  });

  const  GetRDVS = asyncHandler(async (req, res) => {
    let sql = "select * from  rendezvous " 
    cnx.query(sql, function (err,result){
       res.json({data:result})
       })
  });

  const  GetRDVSAujourdhui = asyncHandler(async (req, res) => {
   let dates=new Date();
   let js=0
   let ms=0
   let j=dates.getDate()
   let m=dates.getMonth()+1
   let y=dates.getFullYear()
   console.log('Jour '+j+' Mois '+m)
   if(j<10){js='0'+j}
   else {js=j}
   if(m<11){ms='0'+m}
   else {ms=m}
   let dateAct=y+'-'+ms+'-'+js
  console.log(dateAct+' ************ ')
    let sql = "select * from  rendezvous where Date=?" 
    cnx.query(sql,dateAct, function (err,result){
       res.json({data:result})
        
       })
  });
  const  GetRDVSSearch = asyncHandler(async (req, res) => {
   let date=req.params.date
    let sql = "select * from  rendezvous where Date=?" 
    cnx.query(sql,date, function (err,result){
       res.json({data:result})
        
       })
  });

// delete RDV by ID
const  deleteRDVById = asyncHandler(async (req, res) => {
   let id=req.params.id
    let sql = "delete from  rendezvous where id=?" 
    cnx.query(sql,id, function (err,result){
       res.json({msg:'delete OK'})
        
       })
  })

// delete All Dv

const  deleteAllRDV = asyncHandler(async (req, res) => {
  
    let sql = "delete from  rendezvous" 
    cnx.query(sql, function (err,result){
       res.json({msg:'delete OK'})
        
       })
  })


  const  detailRDV = asyncHandler(async (req, res) => {
   let id=req.params.id
     let sql = "select * from  rendezvous where id =? " 
     cnx.query(sql,id, function (err,result){
        res.json({rdv:result[0]})
         
        })
   });

// Modifier RDV
const  ModifierRDV = asyncHandler(async (req, res) => {
   const date=req.body.Date
   const heure=req.body.Heure
   const id=req.body.id
   let sql = "update  rendezvous set Date=?,Heure=? where id=?" 
   cnx.query(sql, [date,heure,id], function (err,result){
      res.json({msg:'Modifier effective',rdv:req.body})
       
      })
 });
  export { AddRDV,GetRDVS,GetRDVSAujourdhui,GetRDVSSearch,deleteRDVById,deleteAllRDV,detailRDV,ModifierRDV}