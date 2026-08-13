const express = require('express');
const app = express();

app.get('/',(req, res)=>{
     return `Additon :${5+4}`;
});

app.listen(3000,()=>{
  console.log("server started on port 3000");
});


function add(a, b) {
    return a + b;
}

module.exports = { add };
