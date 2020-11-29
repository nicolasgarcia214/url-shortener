const BASE_URL = "http://localhost:4000/";

async function doRequest(endpoint, data, type = "GET", url = BASE_URL) {
  let response = await fetch(url + endpoint, {
    method: type,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  let result = await response.json();
  console.log(result);
  return result;
}

export { doRequest };
