const span = document.querySelector('#year');


fetch('https://whatyearisit-backend-phi-six.vercel.app/year')
.then(response => response.json())
.then(data => {
    if (data.year) {
console.log(data)
console.log(document.querySelector('#year').textContent)

span.textContent = data.year
    }
})

