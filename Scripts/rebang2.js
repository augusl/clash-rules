var body = JSON.parse($response.body);

body.data.user_account = {
      "status" : 1,
      "is_vip" : 1,
      "vip_end_at" : 9999999999,
      "id" : 2942,
      "created_at" : 1694667608,
      "vip_start_at" : 9999,
      "role_id" : 1,
      "email" : "phpvalue@outlook.com",
      "update_flag" : "16950251191685805262"
    };

$done({ body: JSON.stringify(body) });
