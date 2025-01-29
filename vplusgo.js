var body = $response.body;
var obj = JSON.parse(body);

obj = {
	"data": {
		"id": 1009,
		"username": "snowangelvn2020@gmail.com",
		"active": 1,
		"product_id": "vplus_app_product_business",
		"product_name": "Business",
		"license": "6 months",
		"days": 1800,
		"expired_date": "9999-31-12",
		"number_openfile": 9999,
		"number_opened": 0,
		"num_of_file": 9999,
		"num_of_file_type": "day",
		"number_device": 9999,
		"number_device_login": 0,
		"token": ""
	},
	"status": 200,
	"success": 1,
	"statuslogin": 0,
	"message": ""
}
  
body = JSON.stringify(obj);
$done({body});
