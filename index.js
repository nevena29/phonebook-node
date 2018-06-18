//load required packages
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

//initialize app
const app = express();
app.use(cors());

//create connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'project_adressbook',
  
  });

connection.connect(err =>{
    if(err){return err;}
});
// query to get the data
const selectSQL = 'SELECT * FROM adress_book'

app.get('/',(req,res)=>{
    connection.query(selectSQL,(err,results) =>{
        if(err){
            return res.send(err);
        }else{
            return res.json({
                data: results
            })
        }
    });
});


app.get('/add_contact',(req,res)=>{
    const {fn,ln,tn}=req.query;
    const insertSQL = `INSERT INTO adress_book (first_name,last_name,telephone) VALUES ('${fn}','${ln}','${tn}')`;
    connection.query(insertSQL,(err,results)=>{
        if(err){
            return res.send(err);
        }else{
            return res.send('Added 1 contact sucessfuly.')
        }
    })
});

/*app.delete('/delete_contact:id',(req,res)=>{
    const deleteSQL = `DELETE FROM adress_book WHERE id=?)`;
    connection.query(deleteSQL,[req.param.id],(err,results)=>{
        if(err){
            return res.send(err);
        }else{
            return res.send('Deleted 1 contact sucessfuly.')
        }
    })
});
*/

app.listen(4000,()=>{

    console.log('listening on port 4000')

});