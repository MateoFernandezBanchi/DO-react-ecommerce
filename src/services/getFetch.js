const productos = [
    {id:1, categoria:"Escritorios", nombre: "Escritorio Flotante", precio:3000, foto:"https://http2.mlstatic.com/D_NQ_NP_828965-MLA30054369593_042019-O.webp", stock:3},
    {id:2, categoria:"Escritorios", nombre: "Escritorio en L", precio:2500, foto:"https://m.media-amazon.com/images/I/71D+V1YbciL._AC_SY355_.jpg", stock:2},
    {id:3, categoria:"Escritorios", nombre: "Escritorio Rebatible", precio:3500, foto:"https://http2.mlstatic.com/D_NQ_NP_959004-MLA44181299685_112020-O.webp", stock:1},
    {id:4, categoria:"Escritorios", nombre: "Escritorio + dos cajones", precio:4000, 
    foto1:"https://ockam-cloud-cc.imgix.net/imagenes-s/productos/escritorio-con-cajones-minimalista-visual-concept-78827.jpg?auto=format", 
    foto2:'https://http2.mlstatic.com/D_NQ_NP_788130-MLA31130221337_062019-O.webp',
    foto3:'https://http2.mlstatic.com/D_NQ_NP_763315-MLA45696075236_042021-O.webp',
    stock:4,
    descripcion: 'El escritorio Paris de Centro Estant está hecho de melamina en color blanco y posee dos cómodos cajones para organizar documentos y otros objetos. Incluye correderas metálicas para un mejor deslizamiento del cajón, manijas y patines plásticos que evitan el roce del mueble, otorgando mayor durabilidad.'},
    {id:5, categoria:"Placards", nombre: "Placard Premium", precio:15000, foto:"https://http2.mlstatic.com/D_NQ_NP_789003-MLA44888789620_022021-O.webp", stock:2},
    {id:6, categoria:"Placards", nombre: "Mueble de guardado", precio:12000, foto:"https://http2.mlstatic.com/D_NQ_NP_866173-MLA31629752406_072019-O.webp", stock:2},
    {id:7, categoria:"Placards", nombre: "Placard 2x2", precio:9000, foto:"https://http2.mlstatic.com/D_NQ_NP_992356-MLA31025498829_062019-O.webp", stock:1},
    {id:8, categoria:"Cama", nombre: "Cama 1 1/2 plaza", precio:20000, foto:"https://http2.mlstatic.com/D_NQ_NP_645737-MLA42953772543_072020-O.webp", stock:2},
    {id:9, categoria:"Cama", nombre: "Cama 2 plazas", precio:25000, foto:"https://http2.mlstatic.com/D_NQ_NP_848846-MLA43967079620_112020-O.webp", stock:2, 
    descripcion: 'Este mueble cuenta con una gran variedad de posibilidades'},
    {id:10, categoria:"Cama", nombre: "Cama 1 plaza", precio:15000, 
    foto:"https://http2.mlstatic.com/D_NQ_NP_960811-MLA46655194193_072021-O.webp", stock:3,
    descripcion: 'Este mueble cuenta con una gran variedad de posibilidades'
}
    

];

export const getFetch = new Promise ((resolve, reject) => {

    const condition = true
    if (condition) {
        setTimeout(()=> {
            resolve (productos)
        }, 2000)
    } else {
        setTimeout(()=>{
            reject('404 not found')
        }, 2000)
    }
})