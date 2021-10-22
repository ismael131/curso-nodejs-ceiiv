const express = require('express');
const app = express();

app.set('port',process.env.PORT||9000);

app.get('/',(req,res) =>{
    res.send('Welcome to my API REST');
});

app.listen(app.get('port'),() => {
    console.log('Server running on port',app.get('port'));
});




