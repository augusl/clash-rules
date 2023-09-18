var body = JSON.parse($response.body);

body.data.vipInfo = {
      "error": false,
      "data": {
        "vip_expired": "9999999999",
        "is_vip_now": true,
        "is_vip": "1"
      },
      "status":200
    };

$done({ body: JSON.stringify(body) });
