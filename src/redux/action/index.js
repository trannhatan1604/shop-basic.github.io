//Tạo một hành động để thêm sản phẩm vào giỏ hàng. Hành động có kiểu (type) là "ADD_ITEM" và chứa sản phẩm cần thêm trong thuộc tính payload.
// Add Item to Cart
export const addCart = (product) => {
    return {
        type : "ADD_ITEM",
        payload:product
    }
}

// Delete Item to Cart
export const deleteCart = (product) => {
    return {
        type : "DELETE_ITEM",
        payload:product
    }
}
// Delete Item to Cart
export const deleteProduct = (product) => {
    return {
        type : "DELETE_PRODUCT",
        payload:product
    }
}