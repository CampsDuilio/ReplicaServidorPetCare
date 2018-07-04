const http = require('http');
const { exec } = require('child_process');

var urlGet = "http://mighty-gorge-49739.herokuapp.com/information/123456";
var urlClean = "http://mighty-gorge-49739.herokuapp.com/cleanInformation/123456";

var commandToExecForFeed = "echo hola";
var interTime = 10 * 1000;

function main(){
    console.log("disparo un get");
    http.get(urlGet, function(resp) {
        try{
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                var parsedData = JSON.parse(data);
                console.log(data);
                if(parsedData && parsedData.receiver && parsedData.receiver.description == "darComida") {
                    console.log("entre");
                    exec(commandToExecForFeed, (err, stdout, stderr) => { /*do stuffs when finish feed*/});
                    console.log("segui");
                    cleanFeedFlag();
                }
                setTimeout(main,interTime);
            });
        }catch (err){
            setTimeout(main,1000);
        }
    });
}

cleanFeedFlag = function(){
    http.get(urlClean, function(resp) {
        try{
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
               console.log("borro");
            });
        }catch (err){
            setTimeout(main,1000);
        }
    });
}

main();