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
		"days": 180,
		"expired_date": null,
		"number_openfile": 3,
		"number_opened": 3,
		"num_of_file": 3,
		"num_of_file_type": "day",
		"number_device": 3,
		"number_device_login": 0,
		"token": null
	}
	"status": 200,
	"success": 1,
	"message": ""
}
  
body = JSON.stringify(obj);
$done({body});
