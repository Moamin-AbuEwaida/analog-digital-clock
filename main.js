const hr=document.querySelector('#hr');
const mn=document.querySelector('#mn');
const sc=document.querySelector('#sc');

const hours=document.getElementById('hours');
const minutes=document.getElementById('minutes');
const seconds=document.getElementById('seconds');
const ampm=document.getElementById('ampm');

const day=new Date();
const hh= day.getHours()*30;
const mm= day.getMinutes()*6;
const ss= day.getSeconds()*6;



setInterval(() => {
    const day=new Date();
    const hh= day.getHours()*30;
    const mm= day.getMinutes()*6;
    const ss= day.getSeconds()*6;

    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();

    let am = h >= 12 ? "PM" : "AM";

    if(h >12 ){
        h = h =12;
    }

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    hours.innerHTML= h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
})

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;