// const promise = new Promise((res,re)=> {}); //Forma basica de crear promesa


//Crear promesa
const promise = new Promise((res)=> {
    // res('hola');
    setTimeout(()=> res('acabo time out'), 5000);
    
});


//Consumir la promesa
promise.then((res)=>console.log(res));
console.log('hola');