var ws = new WebSocket("ws://localhost:8081");  
ws.onopen = function(evt) {  
    console.log("连接状态", ws);  
    $("#show").html("连接状态;" + ws.readyState + "</br>");  
    console.log("open");  
};  
console.log(ws);
ws.onmessage = function(evt) {   
    $("#show").append(evt.data + "</br>");  
};  
ws.onclose = function(evt) {  
    console.log("WebSocketClosed!");  
    console.log(evt);  
};  
ws.onerror = function(evt) {  
    console.log("WebSocketError!");  
};  
  
function send() {  
    var msg = $("#message").val();  
    var key = $("#token").val();  
    var name = $("#name").val();  
    var str = "{name:'" + name + "',msg:'" + msg + "',key:'" + key + "'}";  
    console.log("发送", str);  
    ws.send(str);  
};  
  
function exit() {  
    var r = ws.close();  
    console.log("退出", r);  
}  
  