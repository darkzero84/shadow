var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "result": { "active": 1 }
}
  
body = JSON.stringify(obj);
$done({body});
