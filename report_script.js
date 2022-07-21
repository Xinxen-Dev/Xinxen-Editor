function back(){
var msg = confirm('Do you want to cancel review & leave?')
console.log('msg');
if(msg == true){
window.open('index.html');
 }
}
const txt1 = document.querySelector('.edittxt2').value;
function mail(){
var templateParams = {
    to_name: "Xinxen",
    message: document.querySelector('.edittxt2').value,
    reply_to: "xinxen.dev@gmail.com",
};

emailjs.send('service_vz3f5eb', 'template_3dag1v8', templateParams)
  .then(function(response) {
    alert('SUCCESS!', response.status, response.text);
  }, function(error) {
    alert('FAILED...', error);
  });
}