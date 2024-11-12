export const products = [
    {
        id: 1,
        name: 'Airpods',
        price: 19.000,
        description: 'Experimenta la libertad de audio inalámbrico con los Airpods, diseñados para ofrecer una calidad de sonido inigualable y una conexión instantánea.',
        stock: 5,
        img: 'https://cdnx.jumpseller.com/gtigx1/image/34125436/resize/640/640?1681424147',
        category: 'Accesorios'
    },
    {
        id: 2,
        name: 'Notebook HP 240',
        price: 479.000,
        description: 'El Notebook HP 240 combina potencia y rendimiento en un diseño compacto, ideal para trabajo y entretenimiento en cualquier lugar.',
        stock: 5,
        img: 'https://opcstore.cl/cdn/shop/products/fee59bcfa97db67afab549aab1a1bec4103a7d4e-c06927092__2.jpg?v=1666380257',
                category: 'Computadoras'
    },
    {
        id: 3,
        name: 'Memoria RAM DDR4 8GB',
        price: 51.990,
        description: 'Optimiza tu PC con la Memoria RAM HyperX Fury, diseñada para un rendimiento rápido y fluido en videojuegos y aplicaciones intensivas.',
        stock: 5,
        img: 'https://dojiw2m9tvv09.cloudfront.net/16157/product/hx426c16fb388168.jpg',
        category: 'Componentes'
    },
    {
        id: 4,
        name: 'PC Gamer RX 580',
        price: 578.990,
        description: 'Desata tu potencial gamer con el PC Gamer RX 580, equipado para ofrecer gráficos y rendimiento de alta calidad en los juegos más exigentes.',
        stock: 5,
        img: 'https://cdnx.jumpseller.com/compuelite/image/52314866/d2274a4f-21c5-4484-9098-701b34a4d86d-pc-gamer-antec-nx200m-rgb-compuelite.jpeg?1724960876',
        category: 'Computadoras'
    },
    {
        id: 5,
        name: 'Mouse Gamer 7D',
        price: 3.490,
        description: 'Controla cada movimiento con precisión con el Mouse Gamer 7D, diseñado ergonómicamente para largas sesiones de juego.',
        stock: 5,
        img: 'https://pronobel.cl/cdn/shop/files/p-523787-2-1efbc575-8562-4814-9390-0917a08d7038_2000x.jpg?v=1724260759',
        category: 'Accesorios'
    },
    {
        id: 6,
        name: 'Cargador Inalambrico Trust',
        price: 29.990,
        description: 'Carga tus dispositivos de forma rápida y segura con el Cargador Inalámbrico Trust, compatible con una amplia gama de dispositivos.',
        stock: 5,
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/17214767_1/w=1500,h=1500,fit=pad',
        category: 'Accesorios'
    },
    {
        id: 7,
        name: 'Mouse Pad Vigil',
        price: 7.990,
        description: 'Disfruta de una superficie lisa y duradera con el Mouse Pad Vigil, diseñado para mejorar la precisión de tus movimientos en cada partida.',
        stock: 5,
        img: 'https://cdnx.jumpseller.com/fantech-esports/image/16745162/thumb/1500/1500?1719867215',
        category: 'Accesorios'
    },
    {
        id: 8,
        name: 'Cable USB A/C',
        price: 6.990,
        description: 'Conecta y carga tus dispositivos con el Cable USB A/C, construido para ofrecer durabilidad y una transferencia de datos eficiente.',
        stock: 5,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSw2OG0rvReN0s1T2C6pBII-lK-OrJ02bhDw&s',
        category: 'Accesorios'
    },
    {
        id: 9,
        name: 'Teclado Gamer Mecanico',
        price: 25.990,
        description: 'Eleva tu juego con el Teclado Gamer Mecánico, diseñado para ofrecer una respuesta rápida y una durabilidad excepcional en cada tecla.',
        stock: 5,
        img: 'https://pronobel.cl/cdn/shop/files/p-470306-2-d23378ba-f293-4b59-b55f-4c8b167fe0c2_5000x.jpg?v=1724260810',
        category: 'Accesorios'
    },
    {
        id: 10,
        name: 'Parlante Portatil Bluetooth Aiwa Aw-kf4',
        price: 26.990,
        description: 'Lleva tu música a todas partes con el Parlante Portátil Bluetooth Aiwa, que ofrece un sonido nítido y una conexión inalámbrica confiable.',
        stock: 5,
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCL/7541031_1/w=1500,h=1500,fit=pad',
        category: 'Accesorios'
    },
    {
        id: 11,
        name: 'SSD 240GB Western Digital Green',
        price: 35.990,
        description: 'Si desea confiabilidad y un rendimiento rápido, los discos SSD WD Green mejoran la experiencia informática diaria en su equipo portátil o computadora de escritorio. ',
        stock: 5,
        img: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/124059145_01/w=1500,h=1500,fit=pad',
        category: 'Componentes'
    },
]

export const getProducts = () =>{
    return new Promise((res) =>{
        setTimeout(() =>{
            res(products); 
        }, 2000);
    })
}
