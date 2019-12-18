console.log("Hello World")

////////////

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

/////
let c = "ab" - "a";
console.log(c)

//////
console.log(typeof (true))
console.log(typeof (typeof (true)))

//////
console.log(Number.MAX_VALUE)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)

//////OBJECTS//////
//  let obj={a:10,g:"hello"};
//  console.log(obj.a)
//  console.log(obj.g)

//delete obj.a
//console.log(obj.a) 

// 1=="1"           //true
// 1==="1"          //false
// (1+"1")==11      //true
// "11"-1 == 1      //false


/////////String("") can be typecast to 0,[] can also be typecast to ""/////
// []==""           //true
//[]==0             //true
//[]==""            //true

//{} +[]            //0  //[] typecast to "" which typecast to 0
//[]+{}             //[object Object] //""+"[object Object]"

// "1" -> "1"  and +"1" ->1

//+[] ->0
//o.toString  -> [object Object]


// "" +{}  -> [object Object]


const x = 10;

function myFun() {
    const x = 20;

    console.log(x);
    if (true) {
        const x = 30;

        console.log(x);
    }
    console.log(x)
}
myFun();
console.log(x)


console.log("let")
let x1 = 10;

function myFun1() {
    let x1 = 20;
    x1 += 1;
    console.log(x1);
    if (true) {
        let x1 = 30;
        x1 += 1;
        console.log(x1);
    }
    console.log(x1)
}
myFun1();
console.log(x1)

console.log("var")
var x2 = 10;
function myFun2() {
    var x2 = 20;
    x2+= 1;
    console.log(x2);
    if (true) {
        var x2= 30;
        x2+= 1;
        console.log(x2);
    }
    console.log(x2)
}
myFun2();
console.log(x2)