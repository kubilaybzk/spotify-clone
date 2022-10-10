function request(url, header) {
  console.log("request içi ", header);

  return new Promise(async (resolve, reject) => {
    const responce = await fetch(url, header);
    const result = await responce.json();
    if (responce.ok && responce.status === 200) {
      resolve(result);
    } else {
      reject(result);
    }
  });
}

export const post = (url, data) => request(url, data, "POST");
export const get = (url, header) => request(url, header);
