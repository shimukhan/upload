var myname = "this is my favorite javascript"


function wordCount(){
    var count = 0;

for(var i = 0;i<myname.length;i++){
    if(myname[i]==" "){
        count++
    }
}

return count

}

console.log(wordCount());
