var body = JSON.parse($response.body);

body.data = {
       "vip_expired": "9999999999",
        "is_vip_now": true,
        "is_vip": "1"
    };

$done({ body: JSON.stringify(body) });
