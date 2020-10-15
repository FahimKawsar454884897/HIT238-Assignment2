if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/HIT238-Assignment2/sw.js')
       .then((reg) => console.log('service worker registered', reg))
       .catch((err) => console.log('sercice worker not registered', err));
}
