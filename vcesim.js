var body = $response.body;
var obj = JSON.parse(body);

obj = {
	"result": 1,
	"errormsg": "No active products available"
}
  
body = JSON.stringify(obj);
$done({body});
