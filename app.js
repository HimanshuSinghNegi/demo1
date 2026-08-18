const express = require('express');
const app = express();

app.get('/',(req, res)=>{
     return `Additon :${5+4}`;
});


function add(a, b) {
    return a + b;
}

module.exports = { add };
