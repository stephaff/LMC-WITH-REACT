export function getAllCategories(categories){
    return {
        type : 'GET-ALL-CATEGORIES',
        payload : categories
    }
}