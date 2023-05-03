const http = require("http");
const url = require("url");
const fs = require("fs");

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
}

async function gateWayPage(req, res) {
    var fname = "." + decodeURIComponent(url.parse(req.url).pathname);
    fs.readFile(fname, async function (err, data) {
            if(err) {
                    errorPage(res, 404, `${fname}이 존재하지 않습니다.`);
                    return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            if(url.parse(req.url, true).query.address) {
                const htmlString = data.toString().replace('{{contractAddr}}', url.parse(req.url, true).query.address);
                res.write(htmlString);
                return res.end();
            }
            res.write(data);
            return res.end();
    });
}

http.createServer(gateWayPage).listen(8545);