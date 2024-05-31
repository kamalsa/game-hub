import axios from "axios";

export default axios.create({
    baseURL :"https://api.rawg.io/api",
    params:{
        key:"6eed6329e1df48338d9e69d353c6d75a"
    }
})