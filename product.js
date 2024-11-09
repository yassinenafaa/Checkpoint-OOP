class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product; // Instance de Product
        this.quantity = quantity;
    }

    // Méthode pour calculer le prix total de l'élément
    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}
class ShoppingCart {
    constructor() {
        this.items = []; // Tableau pour stocker les éléments du panier
    }

    // Méthode pour obtenir le total des éléments dans le panier
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    // Méthode pour ajouter un élément au panier
    addItem(product, quantity) {
        const item = this.items.find(i => i.product.id === product.id);
        if (item) {
            item.quantity += quantity; // Si l'élément existe, on augmente la quantité
        } else {
            this.items.push(new ShoppingCartItem(product, quantity)); // Sinon, on l'ajoute
        }
    }

    // Méthode pour supprimer un élément du panier
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    // Méthode pour afficher les éléments du panier
    displayItems() {
        this.items.forEach(item => {
            console.log(`${item.product.name}: ${item.quantity} x $${item.product.price} = $${item.getTotalPrice()}`);
        });
    }

    // Méthode pour obtenir le prix total du panier
    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
}
