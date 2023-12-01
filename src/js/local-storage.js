export class Storage {
    constructor(storageName) {
        this.storageName = storageName;
    }
    setValue(data) {
        localStorage.setItem(this.storageName, JSON.stringify(data));
    }
    getValue() {
        return JSON.parse(localStorage.getItem(this.storageName));
    }
    removeItem() {
        localStorage.removeItem(this.storageName);
    }
}

export class ShopStorage {
    constructor(storageName) {
        this.storageName = storageName;
        this.initStorage();
    }

    initStorage() {
        if (this.getAllProducts()) {
            return;
        }
        localStorage.setItem(this.storageName, JSON.stringify([]));
    }

    setProduct(obj) {
        if (!obj) {
            return;
        }

        if (this.getAllProducts().some(item => item._id === obj._id)) {
            return;
        }

        localStorage.setItem(
            this.storageName,
            JSON.stringify([...this.getAllProducts(), obj])
        );
    }

    setAllProducts(dataArray) {
        localStorage.setItem(this.storageName, JSON.stringify(dataArray));
    }

    getAllProducts() {
        return JSON.parse(localStorage.getItem(this.storageName));
    }

    removeProduct(productId) {
        this.setAllProducts(
        this.getAllProducts().filter(item => item._id !== productId)
        );
    }

    removeAllProducts() {
        this.setAllProducts([]);
    }
}