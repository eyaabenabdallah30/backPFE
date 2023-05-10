import express, { Router } from "express"
import bodyParser from "body-parser"
import mysql from "mysql"
import cors from "cors"
import RouterPatient from "./routes/patientroot.js"
import RouteRDV from "./routes/rendezvousroot.js"
import RouterOrd from "./routes/ordonnancecroot.js"
import RouterCONS from "./routes/consultationroot.js"
import RouterCertif from "./routes/certificatroot.js"
const port=5000
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use (bodyParser.json())
// connexion
let cnx=mysql.createConnection({host:'localhost',user:'root',password:'',database:'database'})
cnx.connect(function(err){
    if(err)
   { console.log('Erreur de connexion')}
   console.log('Connect to BD Success')
})

global.cnx=cnx

app.use(cors({
    origin: 'http://localhost:4200'
}))

app.use(RouterCONS)
app.use(RouterPatient)
app.use(RouteRDV)
app.use(RouterCertif)
app.use(RouterOrd)
app.post('/adduser',(req,res)=> {
    //  {Nom ,Prenom,Email,Motdepasse,Utilisateur,Role} =req.body
      console.log(req.body.Nom)
    
     let sql = "insert into user set ?" 
  cnx.query(sql, req.body, function (err,result){
     res.json({msg:'Ajouter effective',user:req.body})
      
     })
     
    })
     app.post('/login',(req,res)=> {

     let sql=`select * from user where Utilisateur='${req.body.Email}' || Email='${req.body.Email}' && Motdepasse='${req.body.Motdepasse}'`
     var msg =null
     cnx.query(sql,req.body, function (err,result)
     { if( result!= ''){
        msg="succes"
     }
     else {
        msg="login ou Mot de passe incorrect / le compte n'existe pas " 
    
     }
     
      res.json({user:result , msg:msg})

      
        })
  })


app.get('/gererCompte',(req,res)=>{
    let param='administrateur'
    let sql = "select * from  user where Role!=? " 
     
     cnx.query(sql,param, function (err,result){
           res.send(result)
            
           })
})

app.delete('/deleteUser/:id',(req,res)=>{
    let param=req.params.id
    let sql = "delete from  user where id=? " 
     
     cnx.query(sql,param, function (err,result){
        res.send({msg:'Delete Effectuée'})
            
           })
})
app.get('/detail/:id',(req,res)=>{
    let param=req.params.id
    let sql = "select * from  user where id=? " 
     
     cnx.query(sql,param, function (err,result){
           res.send(result[0])
            
           })
})

app.put('/update/:id',(req,res)=>{
    let id=req.params.id
    const {Nom,Prenom,Email,Motdepasse,Utilisateur,Role }=req.body
    let sql = "update user set ? where id=? " 
     
     cnx.query(sql,[req.body,id], function (err,result){
           res.send({msg:'ok'})
            
           })
})
app.listen(`${port}`,()=>{
    console.log(`Application demarre sur le port ${port}`)
})



