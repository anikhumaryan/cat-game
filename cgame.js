const express = require('express');
const url = require('url');
const app = express();
 var cat = {
    down: 0,
    right: 0,
 };
 app.get('/', function(req, res){
    var html, x=1, y=1;
    var a = url.parse(req.url, true).query;
    html+='<html><head><style> {border: 1px solid black; border-collapse: collapse; width:100px; heigh:100px;}</style></head>';
    html+='<body><table width="600px"; heigh="600px";>';
    for(x; x<5; x++){
        html+='<tr>';
        for(y; y<5; y++){
            html+='<td>';
            if (x==cat.down && y==cat.right){
                html+='<img src="https://i.pinimg.com/236x/90/ff/8f/90ff8f978b9e07bc01cfa2554fdd625b.jpg" alt="katvi nkar" width:"99px" heigh:"99px">';
            };
            html+='</td>';
        };
        html+='</tr>';
    };
    html+='</table></body></html>';
    res.end();
 });
 app.listen(2000, function(req, res){
    console.log('ok ok ok')
 });
