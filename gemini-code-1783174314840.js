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