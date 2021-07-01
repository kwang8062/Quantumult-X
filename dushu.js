var body = $response.body; 
var obj = JSON.parse(body);

obj.remainCount=1;
obj.payingRemainTime=1;
obj.day=999;
obj.remainTime=2192796030;
obj.permanent=1;
obj.isPaying=1;
obj.totalFreeReadDay=9999;
obj.expiredTime=2287490430;
obj.startTime=1624802861



body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); 