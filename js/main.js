//Configurar SW
let swLocation = "sw.js";
// "/beerjs/sw.js";

if (navigator.serviceWorker) {
  if (window.location.href.includes("localhost")) swLocation = "/sw.js"; //Varia según el host
  navigator.serviceWorker.register(swLocation);
}

//Logic of web app
console.log("Hello world!!");

//Access camera and microphone
navigator.mediaDevices.getUserMedia({audio:true, video:true})
.then((stream) => {
  console.log(stream)

  let video = document.getElementById('video');

  video.srcObject = stream

  video.onloadedmetadata = (ev) => video.play()

}).catch((err) => console.log(err))


//Notifications

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification.requestPermission().then(resultado => {
        console.log('Respuesta: ', resultado);
    })
})

const verNotificacion = document.querySelector('#vernotificacion');

verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificacion', {
            icon: '/images/corona.jpg',
            body: 'Cerveceria'
        });

        notificacion.onclick = function(){
            window.open('http://google.com');
        }
    }
})






















// var button = document.getElementById("button"); 
// button.addEventListener('click', function(){
//   notify()
// }); 

// function notify(){

//   if(!("Notification" in window)){

//     alert("Tu navegador no soporta notificaciones");

//   }else if(Notification.permission === "granted"){

//     var notification = new Notification("Mi primer notificacion");
//   }else if(notification.permission !== "denied"){
//     Notification.requestPermission(function(permission){
//         if(Notification.permission === "granted"){
//           var notificacion =  new Notification("Hola mundo");
//         }
//     });
//   }
// }

// if(Notification.permission !== "granted"){
//   Notification.requestPermission();
// }

// function notificar(){
//   if(Notification.permission !== "granted"){
//       Notification.requestPermission();
//   }else{
//       var notificacion = new Notification("Titulo",
//           {
//               icon: "https://jonathanmelgoza.com/wp-content/themes/jonathanmelgoza/images/header_menu_rs_btn.png",
//               body: "Texto de la notificación"
//           }
//       );
      
//       notificacion.onclick = function(){
//           window.open("https://jonathanmelgoza.com/blog/");
//       }
//   }
// }