const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runtheclock()
{	

var date= new Date();

let hr=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();

let hrpos=(hr*360/12)+(min*(360/60)/12);
let minpos=(min*360/60)+(sec*(360/60)/60);
let secpos=sec*360/60;

console.log("hours:"+hr+"minutes:"+min+"seconds:"+sec);
HOURHAND.style.transform="rotate(" + hrpos + "deg)";
MINUTEHAND.style.transform="rotate(" + minpos + "deg)";
SECONDHAND.style.transform="rotate(" + secpos + "deg)";

}

var interval=setInterval(runtheclock,1000);