// Use the rest contries API URL->https://restcountries.com/v3.1/all and display all the country flags in console.

let xhr=new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all")
xhr.onload=function(){
    if(xhr.status>=200 && xhr.status<300){
        let data=JSON.parse(this.response);
        console.log(data[1].flag);
    }
   
}

xhr.send();