import express from 'express';
import bodyParser from 'body-parser';
import apiRoutes from './routes/api/index.js';
import { db } from './models/index.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
// app.use('/users',usersRoutes);
app.use('/api', apiRoutes)

app.get('/', (req,res) =>res.send('Hello from homepage'));

db.sync()
    .then(()=>{
        app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
    });