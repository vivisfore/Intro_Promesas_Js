var tabla=document.getElementById('tabla')
tabla.innerHTML=''

fetch('https://api.escuelajs.co/api/v1/products',{
    method:'GET'
}).then(response=>response.json())
.then(datos=>
{console.log(datos)
    for(i=0;i<datos.length;i++){
        tabla.innerHTML+=`<tr>
                        <td>${datos[i].id}</td>
                        <td>${datos[i].title}</td>
                        <td>${datos[i].price}</td>
                        <td>${datos[i].description}</td>
                        </tr>`
    }
}
    )
.catch((err)=>console.log(err.message))



/* fetch('datos.json',{
    method:'GET'
}).then(response=>response.json())
.then(datos=>
    {console.log(datos)
    for(i=0;i<datos.length;i++){
        tabla.innerHTML+=`<tr>
                        <td>${datos[i].codigo}</td>
                        <td>${datos[i].nombre}</td>
                        <td>${datos[i].precio}</td>
                        <td>${datos[i].cantidad}</td>
                        </tr>`
    }
    })
.catch((err)=>console.log(err.message)) */