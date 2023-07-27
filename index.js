const deathtoll = document.querySelector('#deathtoll')

fetch('https://api.coronavirus.data.gov.uk/v1/data').then(response => response.json()).then(data => (deathtoll.innerHTML = data.data[0].death))

clicked = () => {
    alert("You clicked me!")
}