const url = 'https://google.com'
const object = {name: 'Emanuel', age: 30}

// const request = fetch(url)
//     .then((request) => {
//         console.log(request);
//         return request.json()
//     })
//     .then((json) => {
//         console.log(json);
//     })
//     .catch((error) => console.log(error))

// console.log(request);

async function objectFunc(url) {
    const request = await fetch(url)
    const json = await request.json()
    return json

}

console.log(objectFunc(url));