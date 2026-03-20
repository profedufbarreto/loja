// Imagens SVG em formato Data URI para deixar os assets bonitos sem depender de imagens externas ainda
const svgShirt = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%230f172a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a8.59 8.59 0 0 0-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>`;
const svgShoe = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%233b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"></path><path d="M20.92 8.35c-1.36.85-2.85 1.5-4.43 1.95L15 11h-2l-1.5-3.5"></path><path d="M22 17v-1.8A4.2 4.2 0 0 0 17.8 11H15l-1.5 3.5-3.83-.8A2.8 2.8 0 0 0 6.64 15L2 19h20Z"></path></svg>`;

// Base de Dados Simulada
const products = [
    // Roupas (10 itens)
    {
        id: 1,
        title: "Camiseta Nike Sportswear Club",
        price: 149.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "Jaqueta Adidas Originals Firebird",
        price: 349.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "Moletom Nike Essential Hoodie",
        price: 279.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        title: "Camiseta Puma Graphic Tee",
        price: 99.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        title: "Calça Jogger Under Armour Sport",
        price: 199.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        title: "Jaqueta Corta-Vento New Balance",
        price: 299.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        title: "Shorts Nike Flex Stride",
        price: 139.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 8,
        title: "Camisa Polo Lacoste Classic",
        price: 489.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 9,
        title: "Jaqueta Adidas Windbreaker",
        price: 389.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 10,
        title: "Calça Cargo Nike ACG",
        price: 459.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 31,
        title: "Camiseta Oversized Minimal",
        price: 129.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 32,
        title: "Calça de Sarja Chino",
        price: 189.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1473966968600-fa804b86827b?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 33,
        title: "Jaqueta Jeans Vintage",
        price: 259.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-15162579848b2-77135e57939b?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 34,
        title: "Bermuda Surf Performance",
        price: 119.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 35,
        title: "Regata Basket Pro",
        price: 89.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1515468381879-40d0ded81044?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 36,
        title: "Casaco de Lã Premium",
        price: 399.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 37,
        title: "Camisa de Linho Verão",
        price: 179.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1598032895625-809d6c5dde55?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 38,
        title: "Calça Social Slim Fit",
        price: 229.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 39,
        title: "Jaqueta Bomber Suede",
        price: 349.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 40,
        title: "Moletom Canguru Basic",
        price: 159.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 41,
        title: "Camiseta Estampa Retrô",
        price: 95.00,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 42,
        title: "Calça Legging High Tech",
        price: 149.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 43,
        title: "Top Fitness Impact",
        price: 79.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 44,
        title: "Jaqueta Puffer Winter",
        price: 459.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 45,
        title: "Shorts de Corrida Aero",
        price: 109.90,
        category: "roupas",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=500&q=80"
    },
    // Tênis (10 itens)
    {
        id: 11,
        title: "Tênis Nike Air Force 1 '07",
        price: 799.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 12,
        title: "Tênis Adidas Ultraboost 2X",
        price: 1099.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 13,
        title: "Tênis Nike Air Max 90 Premium",
        price: 899.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 14,
        title: "Tênis Puma RS-X Reinvention",
        price: 599.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 15,
        title: "Tênis New Balance 574 Classic",
        price: 649.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 16,
        title: "Tênis Vans Old Skool Canvas",
        price: 369.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 17,
        title: "Tênis Converse All Star Lift",
        price: 329.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1460353581283-fbd1adcbe356?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 18,
        title: "Tênis Mizuno Wave Prophecy",
        price: 1599.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 19,
        title: "Tênis Fila Disruptor II",
        price: 449.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1549488344110-31518b0fa5a5?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 20,
        title: "Tênis Jordan High Retro",
        price: 1299.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 46,
        title: "Tênis Nike Dunk Low",
        price: 899.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 47,
        title: "Tênis Adidas Forum Low",
        price: 699.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 48,
        title: "Tênis New Balance 327",
        price: 599.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 49,
        title: "Tênis Puma Suede Classic",
        price: 449.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 50,
        title: "Tênis Reebok Club C 85",
        price: 499.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 51,
        title: "Tênis Asics Gel-Lyte III",
        price: 649.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 52,
        title: "Tênis Vans Sk8-Hi",
        price: 429.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 53,
        title: "Tênis Converse Chuck 70",
        price: 399.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1491553895911-39e44ff6db1c?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 54,
        title: "Tênis Oakley Flak 365",
        price: 799.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 55,
        title: "Tênis Fila Ray Tracer",
        price: 389.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1628149422851-40997f3d4929?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 56,
        title: "Tênis Adidas NMD R1",
        price: 899.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 57,
        title: "Tênis Nike Pegasus 40",
        price: 749.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 58,
        title: "Tênis Under Armour Hovr",
        price: 699.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 59,
        title: "Tênis Skechers Go Walk",
        price: 349.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 60,
        title: "Tênis Brooks Ghost 15",
        price: 849.90,
        category: "tenis",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
    },
    // Acessórios (10 itens)
    {
        id: 21,
        title: "Boné Nike Heritage 86",
        price: 129.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 22,
        title: "Touca Adidas Originals Beanie",
        price: 89.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1576871337622-98d48d766e27?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 23,
        title: "Boné New Era NY Yankees 59Fifty",
        price: 199.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 24,
        title: "Mochila Nike Hayward",
        price: 259.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 25,
        title: "Relógio Casio G-Shock Rugged",
        price: 749.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1622434641406-a15812345ad1?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 26,
        title: "Boné Puma Metal Cat",
        price: 99.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 27,
        title: "Touca Carhartt WIP Watch",
        price: 149.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 28,
        title: "Meias Nike Crew 3-Pack",
        price: 79.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1542332213-31ed4ec5b93d?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 29,
        title: "Óculos de Sol Ray-Ban Clubmaster",
        price: 899.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 30,
        title: "Pochete Adidas Trefoil",
        price: 159.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1601390978821-274112693899?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 61,
        title: "Relógio Smartwatch Pro",
        price: 1299.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 62,
        title: "Fone Bluetooth Noise Cancelling",
        price: 899.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 63,
        title: "Carteira de Couro Slim",
        price: 149.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 64,
        title: "Cinto de Couro Elegance",
        price: 119.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1617137934032-28a5f61c311c?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 65,
        title: "Óculos de Sol Wayfarer",
        price: 749.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 66,
        title: "Luvas de Treino Grip",
        price: 89.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1543459176-65fe271333be?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 67,
        title: "Garrafa Térmica Sport",
        price: 129.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 68,
        title: "Mala de Viagem Executiva",
        price: 499.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 69,
        title: "Kit de Meias Performance",
        price: 69.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1542332213-31ed4ec5b93d?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 70,
        title: "Boné Snapback Limited",
        price: 159.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 71,
        title: "Cachecol de Lã Soft",
        price: 119.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 72,
        title: "Pulseira de Prata Urban",
        price: 249.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 73,
        title: "Anel de Aço Escovado",
        price: 89.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 74,
        title: "Colar Pingente Minimal",
        price: 129.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1515562141535-d02bc2eb1ae6?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 75,
        title: "Guarda-chuva Automático",
        price: 99.90,
        category: "acessorios",
        image: "https://images.unsplash.com/photo-1531317510488-2ff7736e3b2c?auto=format&fit=crop&w=500&q=80"
    }
];

// Estado da Aplicação (Carrinho)
let cart = [];

// Função para formatar moeda
const formatPrice = (value) => {
    // Retira o "R$" padrão do toLocaleString, pois incluímos ele direto via CSS ou HTML para estilo customizado
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

// Renderizar Produtos
const renderProducts = () => {
    const clothingGrid = document.getElementById('clothing-grid');
    const shoesGrid = document.getElementById('shoes-grid');
    const accessoriesGrid = document.getElementById('accessories-grid');

    const generateCardHTML = (product) => `
        <div class="product-card" id="product-${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}" class="product-image">
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryLabel(product.category)}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    Adicionar
                </button>
            </div>
        </div>
    `;

    const getCategoryLabel = (cat) => {
        switch(cat) {
            case 'roupas': return 'Vestuário';
            case 'tenis': return 'Calçados';
            case 'acessorios': return 'Acessórios';
            default: return 'Geral';
        }
    };

    const clothesHTML = products.filter(p => p.category === 'roupas').map(generateCardHTML).join('');
    const shoesHTML = products.filter(p => p.category === 'tenis').map(generateCardHTML).join('');
    const accessoriesHTML = products.filter(p => p.category === 'acessorios').map(generateCardHTML).join('');

    if (clothingGrid) clothingGrid.innerHTML = clothesHTML;
    if (shoesGrid) shoesGrid.innerHTML = shoesHTML;
    if (accessoriesGrid) accessoriesGrid.innerHTML = accessoriesHTML;
};

// Função Global para Add Carrinho (Acessível pelos botões inline gerados no HTML)
window.addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart.push(product);
    updateCartUI();
    
    // Animação no ícone do header confirmando a adição
    const cartIconBtn = document.getElementById('cart-icon-btn');
    cartIconBtn.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartIconBtn.style.transform = 'scale(1)';
    }, 200);

    // Efeito visual no próprio Card (muda o texto temporariamente)
    const cardContent = document.querySelector(`#product-${productId} .add-to-cart`);
    if(cardContent) {
        const originalText = cardContent.innerHTML;
        cardContent.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Adicionado`;
        cardContent.style.backgroundColor = 'var(--primary-color)';
        cardContent.style.color = 'var(--white)';
        
        setTimeout(() => {
            cardContent.innerHTML = originalText;
            cardContent.style.backgroundColor = '';
            cardContent.style.color = '';
        }, 1500);
    }
};

// Remove do carrinho
window.removeFromCart = (cartIndex) => {
    cart.splice(cartIndex, 1);
    updateCartUI();
};

// Atualiza a visualização do carrinho e os totais
const updateCartUI = () => {
    const cartCount = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceEl = document.getElementById('total-price');

    // Atualiza contador da Bolha
    cartCount.innerText = cart.length;

    // Se stiver vazio, mostra aviso visual amigável
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align: center; color: var(--gray-dark); margin-top: 3rem; display:flex; flex-direction:column; align-items:center; gap: 1rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <p>Seu carrinho está vazio.</p>
                <p style="font-size: 0.9rem;">Adicione alguns produtos incríveis!</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-img-container">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">R$ ${formatPrice(item.price)}</div>
                    <button class="remove-item" onclick="removeFromCart(${index})">Remover item</button>
                </div>
            </div>
        `).join('');
    }

    // Calcula e atualiza Total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceEl.innerText = `R$ ${formatPrice(total)}`;
};

// Inicialização e Listeners de UI (Abertura/Fechamento Modal)
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartUI();

    const cartIconBtn = document.getElementById('cart-icon-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const cartOverlay = document.getElementById('cart-overlay');
    const checkoutBtn = document.querySelector('.checkout-button');

    cartIconBtn.addEventListener('click', () => {
        cartOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Impede o scroll no fundo
    });

    closeCartBtn.addEventListener('click', () => {
        cartOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Reativa scroll
    });

    cartOverlay.addEventListener('click', (e) => {
        if (e.target === cartOverlay) {
            cartOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    checkoutBtn.addEventListener('click', () => {
        if(cart.length === 0) {
            alert("Adicione alguns produtos primeiro.");
        } else {
            alert(`Compra no valor de R$ ${document.getElementById('total-price').innerText.replace('R$ ','')} realizada com sucesso!`);
            cart = [];
            updateCartUI();
            cartOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
