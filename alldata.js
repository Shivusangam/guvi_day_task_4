// Use the same rest countries and print all the countries name,regions, sub regions and populations.


let xhr=new XMLHttpRequest();

xhr.open('GET',"https://restcountries.com/v2/all")

let data=[]
xhr.onload=function(){
if(xhr.status>=200 && xhr.status<300){
    data=JSON.parse(this.response)
    let country=data.map((item,index)=>{
    console.log(`
        country:name:${item.name}
        regions:name:${item.region}
        subregion:name:${item.subregion}
        population:name:${item.population}
        `)
   
    })
}
    else{
   console.log(error);
}
}

xhr.send()