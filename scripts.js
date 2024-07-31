const products = [
    { id: 1, name: 'Backstage Face and Body Foundation', price: 299, image: 'https://imgs.search.brave.com/hV7HBDv7JNipNpn_uS3SPsZkgdJXAtUZhQXjN8KF6J0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS1vcHRpbWl6ZXIt/cmVnLnByb2R1Y3Rp/b24uc2VwaG9yYS1h/c2lhLm5ldC9leUps/WkdsMGN5STZleUp5/WlhOcGVtVWlPbnQ5/ZlgwPS9pbWFnZXMv/cHJvZHVjdF9pbWFn/ZXMvem9vbV8yX1By/b2R1Y3RfMzM0ODkw/MTY1MjQ1Mi1ESU9S/LUJhY2tzdGFnZS1G/YWNlLWFuZC1Cb2R5/LUZvdW5kYXRpb24t/MC1XYXJtLWZkZTNj/Y19kZDBjMzhjY2E1/ODJkOWQxZjJhZDM5/YzdhYjE0ZTJkYzk3/ZjAwMTlhXzE2ODY3/MTg2NzIucG5n', category: 'Makeup' },
    { id: 2, name: 'IMAGE Skincare CLEAR CELL Clarifying Acne Lotion', price: 199, image: 'https://imgs.search.brave.com/J6lFSjIItZWA_SPNjJ578PjKo0Lh6C5OZoQBX2ghEhA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzU3/MGYyY2JlNDAyNjFk/NDQzZmY3MjY2OS8x/NjUwMjQ1MDA3MjQ2/LVBYWUI0RDFEVVFB/TkFUMUpEN1ZRL0NM/RUFSK0NFTEwrQ2xh/cmlmeWluZytBY25l/K0xvdGlvbi5wbmc', category: 'Skincare' },
    { id: 3, name: 'Nature Spell Rosemary Oil For Hair & Skin', price: 149, image: 'https://imgs.search.brave.com/dsfdlTLC4_OksLgsOWC3kAJ74pZUdQSJTgc1ZOHVqX0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uYXR1/cmVzcGVsbC5jby51/ay9jZG4vc2hvcC9m/aWxlcy9OU19Sb3Nl/bWFyeU9pbGZvckhh/aXJfU2tpbl9QcmVk/aWx1dGVkT2lsX1Bh/Y2tzaG90LmpwZz9j/cm9wPWNlbnRlciZo/ZWlnaHQ9MjAwMCZ2/PTE3MjAxMDcxNTQm/d2lkdGg9MjAwMA', category: 'Haircare' },
    { id: 4, name: 'Rare Beauty Soft Pinch Liquid Blush ', price: 599, image: 'https://imgs.search.brave.com/fLSPj2aRkt7GuSCjFUAhVCiiRxRjF7HDcvTjcsrOX7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFBSnJJdnJDV0wu/anBn', category: 'Makeup' },
    { id: 5, name: 'Vegan Collagen Complex Serum - Skin Care - Pacifica Beauty', price: 499, image: 'https://imgs.search.brave.com/gg9suf1xWDg2ZHclklCEoAqGLf8fNit1MI7IrxwOZgo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cGFjaWZpY2FiZWF1/dHkuY29tL2Nkbi9z/aG9wL3Byb2R1Y3Rz/L1BBQ19WRUdBTl9D/T0xMQUdFTl9TRVJV/TV8xMjAweC5qcGc_/dj0xNjE3MjE3MDQx', category: 'Skincare' },
    { id: 6, name: 'PATTERN Argan Oil Hair Serum', price: 179, image: 'https://imgs.search.brave.com/3kZJlyrb9Odlp2j-0pVkoHdCTKwSGuHozln6jjWMRNo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL3ZhZGVyLXBy/b2QuczMuYW1hem9u/YXdzLmNvbS8xNTk2/NjM4MzEwLTI1NTI3/NTItMTU5NjYzODI5/MC5qcGc_Y3JvcD0x/eHc6MXhoO2NlbnRl/cix0b3AmcmVzaXpl/PTk4MDoq', category: 'Haircare' },
];

let cart = [];

// Function to show home page
function showHome() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = `
            <div class="main-content">
                <h1>Welcome to Nykaa</h1>
                <div class="product-list" id="product-list">
                    <!-- Products will be dynamically inserted here -->
                </div>
            </div>
        `;
        renderProducts(products);
    }
}

// Function to show categories
function showCategory() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = `
            <div class="main-content">
                <h1>Categories</h1>
                <div class="product-list" id="product-list">
                    <!-- Categories will be dynamically inserted here -->
                </div>
            </div>
        `;
        renderCategories();
    }
}

// Function to show cart
function showCart() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.innerHTML = `
            <div class="main-content">
                <h1>Your Cart</h1>
                <div class="cart-list" id="cart-list">
                    <!-- Cart items will be dynamically inserted here -->
                </div>
                <div class="cart-summary" id="cart-summary">
                    <!-- Cart summary will be dynamically inserted here -->
                </div>
            </div>
        `;
        renderCart();
    }
}

// Function to render cart items
function renderCart() {
    const cartList = document.getElementById('cart-list');
    const cartSummary = document.getElementById('cart-summary');
    if (cartList) {
        cartList.innerHTML = '';

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;

            cartList.appendChild(cartItem);
        });

        // Update cart summary
        updateCartSummary();
    }
}

// Function to update the cart summary with total, taxes, and shipping
function updateCartSummary() {
    const cartSummary = document.getElementById('cart-summary');
    if (cartSummary) {
        const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
        const tax = subtotal * 0.08; // Example 8% tax
        const shipping = cart.length > 0 ? 5.99 : 0; // Example flat shipping fee

        const total = subtotal + tax + shipping;

        cartSummary.innerHTML = `
            <h3>Cart Summary</h3>
            <p>Subtotal: $${subtotal.toFixed(2)}</p>
            <p>Tax: $${tax.toFixed(2)}</p>
            <p>Shipping: $${shipping.toFixed(2)}</p>
            <h2>Total: $${total.toFixed(2)}</h2>
        `;
    }
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        if (document.getElementById('main-content').innerHTML.includes('Your Cart')) {
            renderCart(); // Update cart if we're currently viewing it
        }
    } else {
        console.error('Product not found');
    }
}

// Function to remove a product from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCart();
}

// Function to update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length.toString();
    }
}

// Function to render products
function renderProducts(products) {
    const productList = document.getElementById('product-list');
    if (productList) {
        productList.innerHTML = '';

        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.className = 'product-item';

            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;

            productList.appendChild(productItem);
        });
    }
}

// Function to render categories
function renderCategories() {
    const categories = [...new Set(products.map(p => p.category))];
    const productList = document.getElementById('product-list');
    if (productList) {
        productList.innerHTML = '';

        categories.forEach(category => {
            const categoryItem = document.createElement('div');
            categoryItem.className = 'product-item';

            categoryItem.innerHTML = `
                <h3>${category}</h3>
                <button onclick="filterByCategory('${category}')">View Products</button>
            `;

            productList.appendChild(categoryItem);
        });
    }
}

// Function to filter products by category
function filterByCategory(category) {
    const filteredProducts = products.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

// Show home content on page load
document.addEventListener('DOMContentLoaded', () => {
    showHome();
});
