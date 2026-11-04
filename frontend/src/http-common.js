import axios from "axios";

export default axios.create({
  baseURL: "http://65.2.83.216:5001/api/v1/restaurants",
  headers: {
    "Content-type": "application/json"
  }
});
