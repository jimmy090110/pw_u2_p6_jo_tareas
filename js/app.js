console.log(Vue);

const app=Vue.createApp({
   
    template: `
    <h1>Hola mundo desde Vue.js </h1>
    <p>{{1+1}}</p>
    <p>{{false?'Verdadero':'Falso'}}</p>
    `
    
}); 

app.mount('#myApp'); 