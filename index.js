const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require('path');

console.log('Server Start');
const errorPage = (res, status) => {
    fs.readFile("error.html", (doubleError,errorData) => {
        if(doubleError) throw doubleError;
        res.writeHead(status, {"Content-Type": "text/html"});
        res.write(errorData);
        res.end();
        return;
    });
}

http.createServer((req,res) => {
    const parsing = url.parse(req.url, true);
    if("/" === parsing.pathname) {
        console.log(parsing.pathname);
        fs.readFile("김동원_안세홍.html", (err,data) => {
            if(err){
                errorPage(res,500);
                return;
            };
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
            return;
        });
    } else if ("/image" === parsing.pathname) {
        const imgName = parsing.query.name;
        const filePath = path.join(__dirname,"image",imgName);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                console.log("이미지 에러");
                console.log(filePath);
                errorPage(res,500);
                return;
            }

            res.writeHead(200, {"Content-Type": "image/png"});
            res.write(data);
            res.end();
            return;
        });

    } else {
        errorPage(res, 404);
        return;
    }
    
}).listen(8080);