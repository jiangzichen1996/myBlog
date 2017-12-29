const WebSocket = require('ws');
const wss = new WebSocket.Server({port:8081});
 wss.on('connection', function connection(ws, req) {
   console.log('链接开始...');
   ws.send('你是第' + wss.clients + '位'); 
   ws.on('message', function(jsonStr,flags) {  
    var obj = eval('(' + jsonStr + ')');  
    this.user = obj;  
    if (typeof this.user.msg != "undefined") {  
        wss.broadcast(1,obj);  
    }  
});
});
 wss.broadcast = function broadcast(s,ws) {  
  console.log(ws); 
  // debugger;  
  wss.clients.forEach(function each(client) {  
      // if (typeof client.user != "undefined") {  
          if(s == 1){  
              client.send(ws.name + ":" + ws.msg);  
          }  
          if(s == 0){  
              client.send(ws + "退出聊天室");    
          }  
      // }  
  });  
};  