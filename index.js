const http = require("http");
const url = require("url");
const fs = require("fs");
const utf8 = require("utf8");
const path = require('path');

console.log('Server Start');
const errorPage = (res, status, message) => {
    const errorHtml = `
    <!DOCTYPE html>
    <html>
        <head>
            <title> 에러 페이지 </title>
            <meta charset="utf-8">
        </head>
        <body>
            <h1>Error Page</h1>
            <div> Status Code: ${status}</div>
            <div> ${message}</div>
        </body>
    </html>
    `;
    res.writeHead(status, {"Content-Type": "text/html"});
    res.write(errorHtml);
    res.end();
    return;
    // fs.readFile("error.html", (doubleError,errorData) => {
    //     res.writeHead(status, {"Content-Type": "text/html"});
    //     res.write(errorData);
    //     res.end();
    //     return;
    // });
}

async function gateWayPage(req, res) {
    var fname = "." + decodeURIComponent(url.parse(req.url).pathname);
    console.log(fname)

    fs.readFile(fname, async function (err, data) {
            if(err) {
                    errorPage(res, 404, `${fname}이 존재하지 않습니다.`);
                    return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
    });
}

http.createServer(gateWayPage).listen(8080);

// http.createServer((req,res) => {
//     // const parsing = url.parse(req.url, true);
//     const parsing = url.parse(req.url, true);
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
//     return res.end(decodeURIComponent(parsing.pathname));
//     // if("/eles")
//     // if("/" === parsing.pathname) {
//     //     console.log(parsing.pathname);
//     //     fs.readFile("김동원_안세홍.html", (err,data) => {
//     //         if(err){
//     //             errorPage(res,500);
//     //             return;
//     //         };
//     //         res.writeHead(200, {"Content-Type": "text/html"});

//     //         const testObject = "Hello Hi";
//     //         const htmlString = data.toString().replace("{{test}}", testObject);
//     //         res.write(htmlString);
//     //         res.end();
//     //         return;
//     //     });
//     // } else if ("/image" === parsing.pathname) {
//     //     const imgName = parsing.query.name;
//     //     const filePath = path.join(__dirname,"image",imgName);
//     //     fs.readFile(filePath, (err, data) => {
//     //         if (err) {
//     //             console.log("이미지 에러");
//     //             console.log(filePath);
//     //             errorPage(res,500);
//     //             return;
//     //         }

//     //         res.writeHead(200, {"Content-Type": "image/png"});
//     //         res.write(data);
//     //         res.end();
//     //         return;
//     //     });

//     // } else {
//     //     errorPage(res, 404);
//     //     return;
//     // }
    
// }).listen(8080);