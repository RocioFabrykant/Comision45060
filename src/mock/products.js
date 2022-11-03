export const products = [
        {
            id:1,
            title:"Entero Killer",
            price:20000,
            stock:10,
            category:"vestidosyenteros",
            description:"Entero nude confeccionado en lycra premium",
            img:'https://res.cloudinary.com/dkxfhoxqh/image/upload/v1667493774/entero2_ibkcbx.jpg'
        },
        {
            id:2,
            title:"Entero Annie",
            price:15500,
            stock:3,
            category:"vestidosyenteros",
            description:"Entero edición limitada",
            img:'https://res.cloudinary.com/dkxfhoxqh/image/upload/v1667493155/entero_bjg9pt.jpg'
        },
        {
            id:3,
            title:"Vestido Penn",
            price:32000,
            stock:5,
            category:"vestidosyenteros",
            description:"Vestido negro cut y transparencias",
            img:'https://res.cloudinary.com/dkxfhoxqh/image/upload/v1667493907/nensi-dojaka-vestido-corto-con-abertura_yv4gud.jpg'
        },
        {
            id:4,
            title:"Remera Vsc",
            price:10000,
            stock:2,
            category:"remeras",
            description:"Remera blanca con estampa",
            img:'https://res.cloudinary.com/dkxfhoxqh/image/upload/v1667489674/remerablnca_ms333k.jpg'
            
        },
        {
            id:5,
            title:"Musculosa glam",
            price:40000,
            stock:20,
            category:"remeras",
            description:"Musculosa de lentejuelas",
            img:'https://res.cloudinary.com/dkxfhoxqh/image/upload/v1667489672/muscuexpensivesoul_nnaqyx.jpg'
        },
        {
          id:6,
          title:"Remera street",
          price:9990,
          stock:10,
          category:"remeras",
          description:"Remera negra oversize con estampa",
          img:'https://res.cloudinary.com/dkxfhoxqh/image/upload/v1667489671/remera_xumoru.jpg'
        },
        {
          id:7,
          title:"Top Kendall",
          price:12000,
          stock:10,
          category:"tops",
          description:"Top negro lentejuelas multicolor",
          img:'https://res.cloudinary.com/dkxfhoxqh/image/upload/v1667489672/topksk_ygchkc.jpg'
        },
        {
          id:8,
          title:"Top Kill VSC",
          price:27000,
          stock:5,
          category:"tops",
          description:"Top negro cuero con detalle medallas",
          img:'https://res.cloudinary.com/dkxfhoxqh/image/upload/v1667489670/topcuerovsc_u0wd6n.jpg'
        },
        {
          id:9,
          title:"Top horse",
          price:17000,
          stock:3,
          category:"tops",
          description:"Top beige con estampa premium",
          img:'https://res.cloudinary.com/dkxfhoxqh/image/upload/v1667492072/topbeige.jpg_tcdmdm.jpg'
        }
        
        ];
    export const getProducts = (categoryName) => {
        return new Promise((res,rej) => {
          const prodFiltrados = products.filter((prod)=> prod.category === categoryName)
          const ref = categoryName ? prodFiltrados : products;
          setTimeout(() => {
            res(ref);
          },2000)
        });
      };

    export const getProduct = (idProd) => {
        return new Promise((res,rej) => {
          const product = products.find((prod)=>prod.id === +idProd)
          setTimeout(()=>{
            res(product);
          },2000);
        });
      };

  


