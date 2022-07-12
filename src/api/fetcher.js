import axios from "axios";
import apiRoutes from "../utils/routs/apiRouts";

let apiAddress = "";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  apiAddress = apiRoutes.baseAddress;
} else {
  apiAddress = apiRoutes.baseAddress;
}

export const Request = async (address, data, method = "Get") => {
  let request = null;
  request = await new axios({
    method: method,
    url: apiAddress + address,
    data: data,
    timeout: 10000,
    maxContentLength: 50 * 1000 * 1000,
    headers: {
      "Content-Type": "application/json",
    },
    validateStatus: function (status) {
      return status >= 200 && status < 600;
    },
  });

  return request;
};
