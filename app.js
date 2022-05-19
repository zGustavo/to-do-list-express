const express = require('express');
const checkListRouter = require('./src/routes/checklist');
require('./config/database');

const app = express();

app.use(express.json()); 

app.use('/checklists', checkListRouter);

app.listen(3000, () => {
    console.log("Servidor iniciado!");
})



/* const log = (req, res, next) => {
    console.log(req.body);
    console.log(`Data: ${Date.now()}`);
    next();
}

app.use(log);

app.get('/', (req, res) => {
    res.send('<h1>Minha lista de tarefas</h1>');
})

app.get('/json', (req, res) => {
    console.log(req.body);
    res.json({title: 'Tarefas X', done: true});
});
 */