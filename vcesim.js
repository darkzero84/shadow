var body = $response.body;
var obj = JSON.parse(body);

obj = {
  "result": 2,
  "data": "test"
}
  
body = JSON.stringify(obj);
$done({body});
