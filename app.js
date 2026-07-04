<!-- Navigation Bar Boilerplate -->
<header class="main-header">
    <div class="header-container">
        <a href="index.html" class="logo">VELLORIN</a>
        
        <nav class="nav-links">
            <a href="index.html" class="nav-item">Home</a>
            <a href="shop.html" class="nav-item active">Shop</a>
            <a href="#about" class="nav-item">Heritage</a>
        </nav>
        
        <div class="header-actions">
            <a href="login.html" class="action-btn" aria-label="Account">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </a>
            <a href="cart.html" class="action-btn cart-icon" aria-label="Cart">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <span class="cart-count" id="cartCount">0</span>
            </a>
        </div>
    </div>
</header>

<style>
:root {
    --bg-dark: #111111;
    --accent-gold: #c5a880;
    --text-main: #222222;
    --text-muted: #777777;
    --border-color: #eeeeee;
}

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: var(--text-main);
    background: #fafafa;
}

.main-header {
    background: #ffffff;
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    font-family: serif;
    font-size: 24px;
    letter-spacing: 3px;
    font-weight: 700;
    color: var(--bg-dark);
    text-decoration: none;
}

.nav-links {
    display: flex;
    gap: 32px;
}

.nav-item {
    text-decoration: none;
    color: var(--text-muted);
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 500;
    transition: color 0.2s ease;
}

.nav-item:hover, .nav-item.active {
    color: var(--bg-dark);
}

.header-actions {
    display: flex;
    gap: 20px;
    align-items: center;
}

.action-btn {
    color: var(--bg-dark);
    text-decoration: none;
    position: relative;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
}

.action-btn:hover {
    transform: translateY(-1px);
}

.cart-count {
    position: absolute;
    top: -8px;
    right: -10px;
    background: var(--bg-dark);
    color: #fff;
    font-size: 10px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}
</style>
// Local Browser Cart State Management
let cart = JSON.parse(localStorage.getItem('vellorin_cart')) || [];

// Initialize Header Count display indicator
function updateCartUI() {
    const countElement = document.getElementById('cartCount');
    if (countElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        countElement.textContent = totalItems;
    }
}

// Add item function tied to Shop Page button arrays
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: name, price: price, quantity: 1 });
    }
    
    localStorage.setItem('vellorin_cart', JSON.stringify(cart));
    updateCartUI();
    
    // Quick user validation alert
    alert(`${name} has been added to your curated selection.`);
}

// Execute logic loop on document mount
document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();
    
    // Bind click listener for Google Login Simulator element
    const loginBtn = document.getElementById('googleLoginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            alert('Redirecting to secure Google authorization popup environment...');
            // Note: Integrate with Firebase Auth or NextAuth.js endpoints here for live database routing.
        });
    }
});
