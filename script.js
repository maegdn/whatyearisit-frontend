const span = document.querySelector('#year');


fetch('http://localhost:3000/year')
.then(response => response.json())
.then(data => {
    if (data.year) {
console.log(data)
console.log(document.querySelector('#year').textContent)

span.textContent = data.year
    }
})

