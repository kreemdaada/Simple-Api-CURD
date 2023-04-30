
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routers/users.js';

//app definition Und port 
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// app benutzt json um data als json object zu zeigen 
app.use(bodyParser.json());
app.use('/users',userRoutes);

app.get('/', (req, res)=>{
        res.send('hallo from home page');
});


app.listen(PORT, ()=> console.log(`Server Listening on port: http://localhost:${PORT}`));
