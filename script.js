navigator.vibrate(500);
const lyt = document.querySelector('.card');
const toolbar = document.querySelector('.toolbar');
var opened = false;
function itms(element){
if(opened == false){
opened = true;
toolbar.style.height = '160px'
lyt.style.filter = 'blur(5px)'
element.style.transform = 'rotate(180deg)'
}else{
opened = false;
toolbar.style.height = '42px'
lyt.style.filter = 'blur(0px)'
element.style.transform = 'rotate(0deg)'
 }
}
function mail(){
window.open('report.html');
}
function grp(){
window.open('https://t.me/Xinxen_net');
}