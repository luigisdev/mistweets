// variables 
const listaTweets = document.getElementById('lista-tweets');


// event listeners 

eventListeners();

function eventListeners() {
    // cuando se envía el formulario 
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);

    // borrar tweet 
    // agregando delegation 
    listaTweets.addEventListener('click', borrarTweet);
}


// funciones  

function agregarTweet(e) {
    e.preventDefault();
    console.log('formulario enviado');

    // leer el valor del text area 
    const tweet = document.getElementById('tweet').value;
    // crear boton de eliminar 
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'X';

    // crear elemento y añadir contenido a la lista 
    const li = document.createElement('li');
    li.innerText = tweet;
    // añade el boton de borrar el tweet 
    li.appendChild(botonBorrar);
    // añade el tweet a la lista 
    listaTweets.appendChild(li);

    // añadir a local storage 
    agregarTweetLocalStorage(tweet);

    console.log(tweet);
}

function borrarTweet(e) {
    e.preventDefault();

    if (e.target.className === 'borrar-tweet') {
        // console.log('diste click en eliminar');
        console.log( e.target.parentElement.remove() );
        alert('Tweet eliminado');
    }
    // else{
    //     console.log('diste click en otra parte')
    // }

    // console.log('diste click en la lista');
}

function agregarTweetLocalStorage(tweet) {
    let tweets; 

    tweets = obtenerTweetsLocalStorage();

    // añadir el nuevo tweet 
    tweets.push(tweet);

    // agregar a local storage 
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function obtenerTweetsLocalStorage() {
    let tweets;

    // revisamos los valores de local storage 
    if (localStorage.getItem('tweets') === null) {
        tweets = [];
    }
    else{
        tweets = JSON.parse( localStorage.getItem('tweets') );
    }
    return tweets;
}