//tạo mảng chứa item trong cart
//Reducer là một hàm nhận vào trạng thái hiện tại (state) và một hành động (action), sau đó trả về trạng thái mới.
const cart = []

const handleCart = (state = cart, action) => {
    const product = action.payload
    switch (action.type) {
        case "ADD_ITEM":
            //check if product is already exist
            const exist = state.find(x => x.id === product.id)
            if (exist) {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                )
            } else {
                const product = action.payload
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;
        case "DELETE_ITEM":
            const exist1 = state.find((x) => x.id === product.id)
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== product.id)
            } else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                )
            }
            break;
        case "DELETE_PRODUCT":

            return state.filter((x) => x.id !== product.id)
            break;
        default:
            return state;
            break;
    }
}
export default handleCart