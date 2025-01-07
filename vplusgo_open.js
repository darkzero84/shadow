var body = $response.body;
var obj = JSON.parse(body);

obj = {
	"data": {},
	"status": 200,
	"success": 2,
	"message": ""
}
  
body = JSON.stringify(obj);
$done({body});
