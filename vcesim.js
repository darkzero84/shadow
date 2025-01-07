var body = $response.body;
var obj = JSON.parse(body);

obj = {
	"result": 0,
	"errormsg": ""
}
  
body = JSON.stringify(obj);
$done({body});
