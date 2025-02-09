const URL = "http://localhost:5000";

async function JSONlookup(method, endpoint, parameters, data) {
  console.log(data);
  const response = await fetch(`${URL}/api/v1${endpoint}${parameters}`, {
    method,
    body: method !== "GET" ? data : undefined,
    credentials: "include",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return await response.json();
}

export default JSONlookup;
