var a1=document.querySelector("#angle1");
var a2=document.querySelector("#angle2");
var a3=document.querySelector("#angle3");
var outputboxx=document.querySelector("#outputbox");
checkbutton=document.querySelector("#checkbtn");

checkbutton.addEventListener("click",function check(){let temp=0;let an1=0;let an2=0;let an3=0;
     an1=Number(a1.value); an2=Number(a2.value);an3=Number(a3.value);
    temp=an1+an2+an3;
    console.log(temp);
    if(temp===180)
    {
        
        outputboxx.innerText="WooHoo it is a triangle😀😀";
    }
    else
    {
    
        outputboxx.innerText="Sorry it's not a Triangle😐😐";
    }

});
