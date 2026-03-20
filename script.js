// Imagens SVG em formato Data URI para deixar os assets bonitos sem depender de imagens externas ainda
const svgShirt = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%230f172a" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46 16 2a8.59 8.59 0 0 0-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>`;
const svgShoe = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%233b82f6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"></path><path d="M20.92 8.35c-1.36.85-2.85 1.5-4.43 1.95L15 11h-2l-1.5-3.5"></path><path d="M22 17v-1.8A4.2 4.2 0 0 0 17.8 11H15l-1.5 3.5-3.83-.8A2.8 2.8 0 0 0 6.64 15L2 19h20Z"></path></svg>`;

// Base de Dados Simulada
const products = [
    {
        id: 1,
        title: "Camiseta Básica Premium",
        price: 89.90,
        category: "roupas",
        image: svgShirt
    },
    {
        id: 2,
        title: "Jaqueta Corta-Vento Storm",
        price: 249.90,
        category: "roupas",
        image: svgShirt
    },
    {
        id: 3,
        title: "Calça Jogger Moletom Confort",
        price: 129.90,
        category: "roupas",
        image: svgShirt
    },
    {
        id: 4,
        title: "Sneaker Urban Runner Edition",
        price: 349.90,
        category: "tenis",
        image: svgShoe
    },
    {
        id: 5,
        title: "Tênis Casual Classic Leather",
        price: 289.90,
        category: "tenis",
        image: svgShoe
    },
    {
        id: 6,
        title: "Tênis Sport X Performance",
        price: 459.90,
        category: "tenis",
        image: svgShoe
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

    const generateCardHTML = (product) => `
        <div class="product-card" id="product-${product.id}">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.title}" class="product-image">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category === 'roupas' ? 'Vestuário' : 'Calçado'}</div>
                <h3 class="product-title">${product.title}</h3>
                <div class="product-price">${formatPrice(product.price)}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    Adicionar
                </button>
            </div>
        </div>
    `;

    const clothesHTML = products.filter(p => p.category === 'roupas').map(generateCardHTML).join('');
    const shoesHTML = products.filter(p => p.category === 'tenis').map(generateCardHTML).join('');

    if (clothingGrid) clothingGrid.innerHTML = clothesHTML;
    if (shoesGrid) shoesGrid.innerHTML = shoesHTML;
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
    const cardContent = document.querySelector(\`#product-\${productId} .add-to-cart\`);
    if(cardContent) {
        const originalText = cardContent.innerHTML;
        cardContent.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Adicionado\`;
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
        cartItemsContainer.innerHTML = \`
            <div style="text-align: center; color: var(--gray-dark); margin-top: 3rem; display:flex; flex-direction:column; align-items:center; gap: 1rem;">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <p>Seu carrinho está vazio.</p>
                <p style="font-size: 0.9rem;">Adicione alguns produtos incríveis!</p>
            </div>
        \`;
    } else {
        cartItemsContainer.innerHTML = cart.map((item, index) => \`
            <div class="cart-item">
                <div class="cart-item-img-container">
                    <img src="\${item.image}" alt="\${item.title}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">\${item.title}</div>
                    <div class="cart-item-price">R$ \${formatPrice(item.price)}</div>
                    <button class="remove-item" onclick="removeFromCart(\${index})">Remover item</button>
                </div>
            </div>
        \`).join('');
    }

    // Calcula e atualiza Total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    totalPriceEl.innerText = \`R$ \${formatPrice(total)}\`;
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
            alert(\`Compra no valor de R$ \${document.getElementById('total-price').innerText.replace('R$ ','')} realizada com sucesso!\`);
            cart = [];
            updateCartUI();
            cartOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
