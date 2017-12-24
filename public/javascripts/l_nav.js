let Arr=$('.l_list li a')
let obj2 = Arr[0];
for(i=1;i<Arr.length;i++){
    if(window.location.href.indexOf(Arr[i].href)>=0)
        obj2=Arr[i];
}
$(obj2).parent()[0].id='list_current'