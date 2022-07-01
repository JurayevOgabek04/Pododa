const elDiv = document.querySelector(".weter")
const elForm = document.querySelector(".form")
const elInput = document.querySelector(".form__input")


const renderPogoda = function (data) {
    const html = `
    <h2 class="weter__name">${data.name}</h2>
    <div class="weter__country">Country: ${data.sys.country}</div>
    <div class="weter__temper"> Temp: ${data.main.temp}</div>
    <div class="weter__temper"> Namlik: ${data.main.humidity}</div>
    <div class="weter__speed">Speed: ${data.wind.speed}</div>
    `

    elDiv.innerHTML = null
    elDiv.insertAdjacentHTML("beforeend", html)
    
}

const CountryPogoda = async function (location) {
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)

    const data = await request.json()

    renderPogoda(data)
}

elForm.addEventListener("submit", evt => {
    evt.preventDefault()

    const elInputValue = elInput.value
    
    elInput.value = null
    CountryPogoda(elInputValue)
})

CountryPogoda("buxoro")

