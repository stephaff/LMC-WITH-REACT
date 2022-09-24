export function getAllCategories(categories){
    return {
        type : 'GET-ALL-CATEGORIES',
        payload : categories
    }
}

export function getAllProducts(products){
    return {
        type : 'GET-ALL-PRODUCTS',
        payload : products
    }
}

