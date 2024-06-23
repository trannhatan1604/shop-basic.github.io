/// tạo store 
import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(rootReducer)

export default store

//Tạo một store từ rootReducer. 
//Store là đối tượng lưu trữ trạng thái toàn cục của ứng dụng và cung cấp các phương thức để truy cập trạng thái, gửi hành động và đăng ký các listeners.