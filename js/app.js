if('serviceWorker' in navigator){
    navigator.serviceWorker.register('FahimKawsar454884897/HIT238-Assignment2/sw.js')
       .then((reg) => console.log('service worker registered', reg))
       .catch((err) => console.log('sercice worker not registered', err));
}
