var getButton = document.getElementById('user_form')
getButton.addEventListener('submit', getRequest)

function getRequest(event) {
    event.preventDefault()
    fetch('/movies')
    .then(function(response) {
        return response.json()
    })
        .then(function(data) {
            for(var i in data) {
                document.getElementById('results').innerHTML += data[i].movieTitle + '<br />'
                
            }
            console.log(JSON.stringify(data))
        })
}

var postButton = document.getElementById('user_form_post')
postButton.addEventListener('submit', newPost)

function newPost(event, post) {
    event.preventDefault()
    var movieTitle = event.target.movieTitle.value
    var movieDirector = event.target.movieDirector.value
    post = {
        movieTitle: movieTitle,
        movieDirector: movieDirector
    }
    const options = {
        method: 'POST',
        body: JSON.stringify(post),
        headers: new Headers({ 
            'Content-Type': 'application/json'
        })
    }
    return fetch('/movies', options)
    .then(res => res.json())
    .then(res => console_log(res))
    .then(error => console_log('error: ', error))
}