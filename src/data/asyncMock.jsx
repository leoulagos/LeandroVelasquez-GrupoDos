export const products = [
    {
        id: 1,
        name: 'Airpods',
        price: 19.000,
        description: 'Experimenta la libertad de audio inalámbrico con los Airpods, diseñados para ofrecer una calidad de sonido inigualable y una conexión instantánea.',
        stock: 5,
        img: '/airpod.png',
        category: 'Accesorios'
    },
    {
        id: 2,
        name: 'Notebook HP 240',
        price: 479.000,
        description: 'El Notebook HP 240 combina potencia y rendimiento en un diseño compacto, ideal para trabajo y entretenimiento en cualquier lugar.',
        stock: 5,
        img: '/notebookhp.png',
                category: 'Computadoras'
    },
    {
        id: 3,
        name: 'Memoria RAM DDR4 8GB',
        price: 51.990,
        description: 'Optimiza tu PC con la Memoria RAM HyperX Fury, diseñada para un rendimiento rápido y fluido en videojuegos y aplicaciones intensivas.',
        stock: 5,
        img: '/ramfury.jpg',
        category: 'Componentes'
    },
    {
        id: 4,
        name: 'PC Gamer RX 580',
        price: 578.990,
        description: 'Desata tu potencial gamer con el PC Gamer RX 580, equipado para ofrecer gráficos y rendimiento de alta calidad en los juegos más exigentes.',
        stock: 5,
        img: '/pcrx580.jpg',
        category: 'Computadoras'
    },
    {
        id: 5,
        name: 'Mouse Gamer 7D',
        price: 3.500,
        description: 'Controla cada movimiento con precisión con el Mouse Gamer 7D, diseñado ergonómicamente para largas sesiones de juego.',
        stock: 5,
        img: '/mouse.jpg',
        category: 'Accesorios'
    },
    {
        id: 6,
        name: 'Cargador Inalambrico Trust',
        price: 20.000,
        description: 'Carga tus dispositivos de forma rápida y segura con el Cargador Inalámbrico Trust, compatible con una amplia gama de dispositivos.',
        stock: 5,
        img: '/trustcargador.jpg',
        category: 'Accesorios'
    },
    {
        id: 7,
        name: 'Mouse Pad Vigil',
        price: 7.990,
        description: 'Disfruta de una superficie lisa y duradera con el Mouse Pad Vigil, diseñado para mejorar la precisión de tus movimientos en cada partida.',
        stock: 5,
        img: '/mousepadvigil.jpg',
        category: 'Accesorios'
    },
    {
        id: 8,
        name: 'Cable USB A/C',
        price: 6.990,
        description: 'Conecta y carga tus dispositivos con el Cable USB A/C, construido para ofrecer durabilidad y una transferencia de datos eficiente.',
        stock: 5,
        img: '/cablesusb.png',
        category: 'Accesorios'
    },
    {
        id: 9,
        name: 'Teclado Gamer Mecanico',
        price: 25.990,
        description: 'Eleva tu juego con el Teclado Gamer Mecánico, diseñado para ofrecer una respuesta rápida y una durabilidad excepcional en cada tecla.',
        stock: 5,
        img: '/tecladogamer.png',
        category: 'Accesorios'
    },
    {
        id: 10,
        name: 'Parlante Portatil Bluetooth Aiwa Aw-kf4',
        price: 26.990,
        description: 'Lleva tu música a todas partes con el Parlante Portátil Bluetooth Aiwa, que ofrece un sonido nítido y una conexión inalámbrica confiable.',
        stock: 5,
        img: '/aiwa.jpg',
        category: 'Accesorios'
    },
    {
        id: 11,
        name: 'SSD 240GB Western Digital Green',
        price: 35.990,
        description: 'Si desea confiabilidad y un rendimiento rápido, los discos SSD WD Green mejoran la experiencia informática diaria en su equipo portátil o computadora de escritorio. ',
        stock: 5,
        img: '/SSD240GBWesternDigitalGreen.jpg',
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
