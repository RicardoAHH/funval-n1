// const axios = require('axios');

// axios.get(`https://jsonplaceholder.typicode.com/users`)
//     .then((response) => {
//         console.log(response.data)
//     }).catch((error) => {
//         console.log(error)
//     });

// async function getData() {
//     let datos = await axios.get(`https://jsonplaceholder.typicode.com/users`)
//     console.log(datos.data)
//     let informacion = datos.data;
//     console.log(informacion)
// }
// getData()

let tabla = document.querySelector("#tabla")
async function getData() {
    let { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    data.forEach((element) => {
        let tr = document.createElement("tr")
        tr.classList.add("bg-white", "border-b", "dark:bg-gray-800", "dark:border-gray-700", "border-gray-200")
        // tr.classList.remove("hidden")
        // tr.classList.toggle("hidden")
        let th = document.createElement("th")
        th.classList.add("px-6", "py-4", "font-medium", "text-gray-900", "whitespace-nowrap", "dark:text-white")
        th.scope = "row";
        th.textContent = element.name;

        let td1 = document.createElement("td");
        td1.classList.add("px-6", "py-4");
        td1.textContent = `${element.phone}`;
        let td2 = document.createElement("td");
        td2.classList.add("px-6", "py-4");
        td2.textContent = `${element.website}`;
        let td3 = document.createElement("td");
        td3.classList.add("px-6", "py-4");
        td3.textContent = `${element.company.name}`;
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tabla.appendChild(tr);
    });

}
getData()
