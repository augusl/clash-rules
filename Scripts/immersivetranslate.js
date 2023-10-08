var body = JSON.parse($response.body);

body.data.subscription = {
      "subscriptionGoodsOrderId" : 3921,
      "userEmail" : "r9ntx98nv6@privaterelay.appleid.com",
      "openAITokenQuota" : 0,
      "isDeleted" : false,
      "operator" : "webhook",
      "updateTime" : "2023-10-08T09:23:53.5004722+00:00",
      "packageOpenAITokenUnUsed" : 0,
      "subscriptionTo" : "2099-10-09T09:23:50Z",
      "deepLCharacterQuota" : 0,
      "cancelAtPeriodEnd" : "false",
      "subscriptionFrom" : "2023-10-08T09:23:50Z",
      "openAITokenUsedCount" : 0,
      "cancellationDetails" : null,
      "trialPeriodDays" : 999999999,
      "packageDeepLUnUsed" : 0,
      "subscriptionType" : "monthly",
      "id" : 4427,
      "subscriptionId" : "sub_1NytDHGc8iUjvqOFpW8owAhp",
      "packageDeepLCharacterQuota" : 0,
      "packageOpenAITokenQuota" : 0,
      "isTrial" : false,
      "packageDeepLCharacterUsedCount" : 0,
      "subscriptionGoodsId" : 4,
      "deepLCharacterUsedCount" : 0,
      "packageOpenAITokenUsedCount" : 0,
      "subscriptionStatus" : "active",
      "createTime" : "2023-10-08T09:21:24.827477",
      "subscriptionDay" : 31,
      "checkoutSessionId" : "cs_live_b1f2AKLeGQrmXa6XIJeKev9tVUz4p7XfQ8tktqL4GGIYf21jQP2JZzazyf",
      "dataVersion" : 1,
      "userId" : 31672
    };

$done({ body: JSON.stringify(body) });
