// 双斜杠后的内容在js里是属于注释内容不会生效
var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj.startTime=1624280284;
obj.expiredTime=1640955484;
obj.expired=0;
obj.isPaying=9999;
obj.permanent"=1;
obj.day=9999;
obj.remainTime=1;
obj.payingRemainTime=1;
obj.totalFreeReadDay=9999;


body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改