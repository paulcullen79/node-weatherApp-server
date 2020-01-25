const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#messageOne')
const messageTwo = document.querySelector('#messageTwo')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    messageOne.textContent = 'Loading weather data'
    messageTwo.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            messageTwo.textContent = ''
            return messageOne.textContent = data.error
        }
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
    })
})
})