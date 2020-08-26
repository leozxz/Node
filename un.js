const fs = require("fs");
fs.readFile("fyle.txt", (err, data)=>{
    if(err) throw err;
    console.log(data);
    fs.unlink("fyle.txt", (unlinkErr)=>{
        if (unlinkErr) throw unlinkErr;
        console.log("Arquivo excluido!");
    });
});
