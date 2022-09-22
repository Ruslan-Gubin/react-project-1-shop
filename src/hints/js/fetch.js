const url = "https://jsonplaceholder.typicode.com/users";

async function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }

   return await fetch(url, {
    method: method,
    body: JSON.stringify(body),
    headers: headers
   }).then((response) => {
    if (response.ok) {
        return response.json()
    }
    return response.json().then(error => {
        const e = new Error('Error')
        e.data = error
        throw e
    })
   })
}
// sendRequest("GET", url)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const body = {
  name: "Ruslan",
  age: 30,
};

sendRequest("POST", url, body)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));