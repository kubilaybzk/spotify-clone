import axios from "axios";

function request(url, header) {
  return new Promise(async (resolve, reject) => {
    const response = await axios.get(url, header);
    const result = await response.data;
    if (response.status === 200 || response.status === 201) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}

export const post = (url, data) => request(url, data, "POST");
export const get = async (url, header) => await request(url, header);
