var getButton = document.getElementById('user_form')
getButton.addEventListener('submit', getRequest)

function getRequest(event) {
    event.preventDefault()
    fetch('/movies')
    .then(function(response) {
        return response.json()
    })
        .then(function(response) {
            console.log(JSON.stringify(response))
        })
}