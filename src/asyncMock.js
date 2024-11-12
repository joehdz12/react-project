const products = [
    {
        id: "MLA3",
        title: "Reloj de Cuero Marrón",
        price: 2075,
        category_id: "MLA1744",
        available_quantity: 12,
        thumbnail: "https://media.istockphoto.com/id/118803311/photo/mens-wristwatch.jpg?s=612x612&w=0&k=20&c=4rOgVBWgBUSdmWsiLkSQ9sVeGx6hhdOZURbEy_IBGjA=",
        pictures: [
            {
                url: "https://media.istockphoto.com/id/118803311/photo/mens-wristwatch.jpg?s=612x612&w=0&k=20&c=4rOgVBWgBUSdmWsiLkSQ9sVeGx6hhdOZURbEy_IBGjA="
            }
        ],
        description: "Elegante reloj con correa de cuero genuino marrón, perfecto para ocasiones formales. Disponible en tres tonos de cuero: marrón claro, marrón oscuro y cognac. Resistente al agua hasta 30m."
    },
    {
        id: "MLA1",
        title: "Reloj Inteligente",
        price: 3250,
        category_id: "MLA1744",
        available_quantity: 25,
        thumbnail: "https://media.istockphoto.com/id/499358203/vector/smart-watch.jpg?s=612x612&w=0&k=20&c=JysGGNRrhQMKhdETUAZv8sT0Eql9HIXGJ_oRSCzfSVI=",
        pictures: [
            {
                url: "https://media.istockphoto.com/id/499358203/vector/smart-watch.jpg?s=612x612&w=0&k=20&c=JysGGNRrhQMKhdETUAZv8sT0Eql9HIXGJ_oRSCzfSVI="
            }
        ],
        description: "Smartwatch con monitor de ritmo cardíaco, contador de pasos y notificaciones inteligentes. Compatible con iOS y Android. Disponible en colores: negro, plata y oro rosa. Batería de larga duración."
    },
    {
        id: "MLA2",
        title: "Reloj deportivo",
        price: 2830,
        category_id: "MLA1744",
        available_quantity: 15,
        thumbnail: "https://media.istockphoto.com/id/452154141/photo/watch.jpg?s=612x612&w=0&k=20&c=7RRx9tg9b-bTddw2zd9Y0BtC9j00OUDvmj9qOjxd3xk=",
        pictures: [
            {
                url: "https://media.istockphoto.com/id/452154141/photo/watch.jpg?s=612x612&w=0&k=20&c=7RRx9tg9b-bTddw2zd9Y0BtC9j00OUDvmj9qOjxd3xk="
            }
        ],
        description: "Reloj resistente para actividades deportivas, sumergible hasta 100m. Cronómetro, temporizador y alarma incluidos. Disponible en colores deportivos: negro/rojo, azul/negro y verde/negro."
    },
    {
        id: "MLA6",
        title: "Gafas de Sol Casuales",
        price: 2000,
        category_id: "MLA1000",
        available_quantity: 20,
        thumbnail: "https://media.istockphoto.com/id/177813849/photo/close-up-of-sunglasses-with-black-lenses-against-white.jpg?s=612x612&w=0&k=20&c=DnbFMAYBgUmrVRdt-C5pUJ2TlOex5_B75IC4HpEkNgs=",
        pictures: [
            {
                url: "https://media.istockphoto.com/id/177813849/photo/close-up-of-sunglasses-with-black-lenses-against-white.jpg?s=612x612&w=0&k=20&c=DnbFMAYBgUmrVRdt-C5pUJ2TlOex5_B75IC4HpEkNgs="
            }
        ],
        description: "Gafas de sol versátiles para uso diario. Marco ligero y resistente con protección UV 400. Incluye estuche protector. Disponible en tallas: S, M y L."
    },
    {
        id: "MLA5",
        title: "Gafas de Sol Negras",
        price: 3000,
        category_id: "MLA1000",
        available_quantity: 18,
        thumbnail: "https://media.istockphoto.com/id/1081398784/photo/sunglass-on-white-background.jpg?s=612x612&w=0&k=20&c=3gwUtbgJcRcjB3U60IpRhGNYFSNVYK6QfgrlhVVgK9w=",
        pictures: [
            {
                url: "https://media.istockphoto.com/id/1081398784/photo/sunglass-on-white-background.jpg?s=612x612&w=0&k=20&c=3gwUtbgJcRcjB3U60IpRhGNYFSNVYK6QfgrlhVVgK9w="
            }
        ],
        description: "Gafas de sol con diseño clásico en negro mate. Marco de acetato premium y lentes polarizadas. Protección UV completa. Disponible en tallas: S, M y L."
    },
    {
        id: "MLA4",
        title: "Gafas de Sol Azules",
        price: 3000,
        category_id: "MLA1000",
        available_quantity: 22,
        thumbnail: "https://media.istockphoto.com/id/1168750859/photo/blue-sunglasses.jpg?s=612x612&w=0&k=20&c=5rzq-2gEnl2CTDpmZegplKW_G6URUL0vMBbZ4eB8FsY=",
        pictures: [
            {
                url: "https://media.istockphoto.com/id/1168750859/photo/blue-sunglasses.jpg?s=612x612&w=0&k=20&c=5rzq-2gEnl2CTDpmZegplKW_G6URUL0vMBbZ4eB8FsY="
            }
        ],
        description: "Gafas de sol modernas con marco azul transparente. Lentes espejadas y protección UV 400. Ideal para playa y actividades al aire libre. Disponible en tallas: S, M y L."
    },
    {
        id: "MLA9",
        title: "Gorra Deportiva Roja",
        price: 1000,
        category_id: "MLA1574",
        available_quantity: 30,
        thumbnail: "https://media.istockphoto.com/id/474219511/photo/red-baseball-cap.jpg?s=612x612&w=0&k=20&c=QOMxnZTkgTpGcyA6TM1Ty5BwUbRKnTz8DVPDkrEQfqs=",
        pictures: [
            {
                url: "https://media.istockphoto.com/id/474219511/photo/red-baseball-cap.jpg?s=612x612&w=0&k=20&c=QOMxnZTkgTpGcyA6TM1Ty5BwUbRKnTz8DVPDkrEQfqs="
            }
        ],
        description: "Gorra deportiva en rojo vibrante con tejido transpirable. Cierre ajustable y banda antisudor. Perfecta para running y actividades al aire libre. Tallas disponibles: XS, S, M, L, XL."
    },
    {
        id: "MLA8",
        title: "Gorra Deportiva Azul",
        price: 1000,
        category_id: "MLA1574",
        available_quantity: 28,
        thumbnail: "https://media.istockphoto.com/id/474430021/photo/isolated-baseball-cap.jpg?s=612x612&w=0&k=20&c=4_qASs579tRD79WovSoEcyMA2kG2F4TESLxcTlROtyk=",
        pictures: [
            {
                url: "https://media.istockphoto.com/id/474430021/photo/isolated-baseball-cap.jpg?s=612x612&w=0&k=20&c=4_qASs579tRD79WovSoEcyMA2kG2F4TESLxcTlROtyk="
            }
        ],
        description: "Gorra deportiva azul navy con logo bordado. Material de secado rápido y protección UV. Ideal para deportes y uso casual. Tallas disponibles: XS, S, M, L, XL."
    },
    {
        id: "MLA7",
        title: "Gorra Deportiva Amarilla",
        price: 1000,
        category_id: "MLA1574",
        available_quantity: 35,
        thumbnail: "https://media.istockphoto.com/id/474317335/photo/yellow-baseball-cap.jpg?s=612x612&w=0&k=20&c=f6_BRdk7_MgF9p3M2YpmcWViUj1kB1EsQ_EM9aS2y2Q=",
        pictures: [
            {
                url: "https://media.istockphoto.com/id/474317335/photo/yellow-baseball-cap.jpg?s=612x612&w=0&k=20&c=f6_BRdk7_MgF9p3M2YpmcWViUj1kB1EsQ_EM9aS2y2Q="
            }
        ],
        description: "Gorra deportiva en amarillo brillante con alta visibilidad. Material ligero y resistente al agua. Perfecta para actividades al aire libre. Tallas disponibles: XS, S, M, L, XL."
    }
];

export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let filteredProducts;
            if (categoryId) {
                filteredProducts = products.filter(prod => prod.category_id === categoryId);
                // If no products in category, return all products
    
            } else {
                filteredProducts = products;
            }
            resolve(filteredProducts);
        }, 500);
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id));
        }, 500);
    });
};

export const getCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(categories);
        }, 500);
    });
};

export default products;