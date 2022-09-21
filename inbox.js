let repily=document.getElementById('repily');
let comment =document.getElementById('comment');
let container=document.getElementById('container');
repily.onclick=function(){
   if(comment.style.display==="none")
   comment.style.display='block';
   else
   comment.style.display='none';
}

let send=document.getElementById('send');
let upload=document.getElementById('upload');
send.onclick=function(){
    let div=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    let div4=document.createElement("div");
    let img=document.createElement("img");
    let h6=document.createElement("h6");
    let span=document.createElement("span");
    let button=document.createElement("button");
    div.classList.add='p-4 message';
    div2.classList.add='d-flex flex-column';
    div3.classList.add='d-flex justify-content-between';
    div4.classList.add='d-flex  align-items-center';
    img.scr='imgs/image-juliusomo.webp';
    h6.innerText="@You";
    span.classList.add='ms-3 text-black-50';
    span.innerText="now";
    button.innerText="Repliy";
    button.classList.add='repily';
    let p=document.createElement("p");
    p.innerHTML=upload.value;
    upload.value='';
    div.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(div4);
    div4.appendChild(img);
    div4.appendChild(h6);
    h6.appendChild(span);
    div4.appendChild(button);
    div3.appendChild(p);
    container.appendChild(div);
}
