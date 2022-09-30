// console.log('Daniel');

const API = 'https://api.thecatapi.com/v1/images/search';

fetch(API)
.then(response => response.json())
.then(data => {
    const img = document.getElementById('img');
    img.setAttribute('src', `${data[0].url}`);
})