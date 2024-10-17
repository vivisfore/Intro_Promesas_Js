productos =[]

/* function getData(){
    //console.log(productos)
    return productos
}

console.log(getData()) */

function getData(){ //Asincrono
    
    setTimeout(()=>{
    //console.log(productos)
    return productos
    },2000)
    //return productos
}
/* console.log("Primero")
console.log(getData())
console.log("Segundo") */

//Promesas - ejecutar codigo asincrono

function getData_1(){
    return new Promise((resolve,reject)=>{
        if(productos.length==0){
            reject(new Error('No hay productos para mostrar'))
        }
        setTimeout(()=>{ //simular retardo
            resolve(productos)
            },2000)
    })
}

/* getData_1()
.then(response=>console.log(response))
.catch((err)=>console.log(err.message)) */

async function Data(){
    try {
      const lista= await getData_1() 
      console.log(lista)  
    } catch (error) {
       console.log(error) 
    }  
}

Data()



