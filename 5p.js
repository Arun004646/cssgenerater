document.addEventListener("DOMContentLoaded" ,()=>{
    const cont = document.querySelector(".continer")
    const cha = document.querySelector("#change")
    const chaval = document.querySelector("#cnangeval")
    const texta = document.querySelector("#text")
    const cop = document.querySelector("#btn")
    const sele = document.querySelector("#sel")
    
    var b= 10
    var c="a";
    var bar = ""

     function a(){
     b = cha.value
     chaval.innerHTML=b+"px";
     c= 
        `border-radius:${b}px;
border:15px ${bar} red;`
     texta.value=c;
     cont.style.cssText=c;
    

    }

    cha.addEventListener("mousemove",a)
    cha.addEventListener("change",a)
    cop.addEventListener('click',()=>{
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert("copy")


   


    })
    sele.addEventListener('change',function(){
       bar=this.value
       a()
    })






})


