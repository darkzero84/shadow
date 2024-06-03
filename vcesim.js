var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "result": "test"
}
  
body = JSON.stringify(obj);
$done({body});
