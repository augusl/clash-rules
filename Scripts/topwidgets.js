
var body = JSON.parse($response.body);

body.data.userVipInfo = {
      "isValid" : true,
      "originalTransactionId" : 90001055118529,
      "level" : 1,
      "productId" : "年费会员"
    };

$done({ body: JSON.stringify(body) });
