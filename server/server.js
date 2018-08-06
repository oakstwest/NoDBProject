const express = require('express')
const bodyParser = require('body-parser');
const ac = require('./zoltar_controller');

const app = express();
app.use(bodyParser.json());




app.get('/api/zoltar/:letter', ac.getZoltar)

app.post('/api/zoltar', ac.createFortune)

app.get('/api/zoltar:', ac.getNewFortune)

app.put('/api/zoltar/:letter', ac.updateFortune)

app.delete('/api/zoltar/:index', ac.deleteFortune)









const PORT = 3005;
app.listen(PORT, () => {
    console.log(`eavesdropping on port ${PORT}`);
});






