const express = require('express');
const apiRoutes = require('./API/API');
const app = express();

app.use(express.json());
app.use('', apiRoutes);

app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});