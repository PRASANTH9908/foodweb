function jayaTime(){
    var datetime= new Date();
    var hrs = datetime.getHours();
    var min = datetime.getMinutes();
    var sec = datetime.getSeconds();

    var pa= document.getElementById('pa');



if(hrs>=12){
    pa.innerHTML="pm";
}

if(hrs>12){
    hrs=hrs-12
}

document.getElementById("hr").innerHTML=hrs
document.getElementById("min").innerHTML=min
document.getElementById("sec").innerHTML=sec



}

setInterval(jayaTime,1000)