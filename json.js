
//How to compare two json have same properties without an order

var obj1={name: "Person 1", age:5}
var obj2={age:5, name: "Person 1"}
var keys1=Object.keys(obj1).sort();
var keys2=Object.keys(obj2).sort();
if(JSON.stringify(keys1)===JSON.stringify(keys2)){
    console.log("it is having same properties");
}
else{
    console.log("it is having not same properties")
}