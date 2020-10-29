import axios from "axios";

const instance = axios.create({
  baseURL: "http://tinder---clone.herokuapp.com/",
});

export default instance;
