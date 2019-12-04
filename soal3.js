var uang=0
var array=[25,25,50,50,100]
var harga=25

function ticket(){
    for(i=0;i<array.length;i++){
        if(array[i]-harga<harga && array[i]-harga==harga){
            uang+=array[i]-harga
          return console.log('YES')
        }else if(array[i]-harga>harga){
           return console.log('NO')
        }
    }
}
ticket()