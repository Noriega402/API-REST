const API = 'https://api.thecatapi.com/v1/images/search?limit=3&page=10';

const FAV_API = 'https://api.thecatapi.com/v1/favourites?limit=3&api_key=live_AjYuBIDC0yxGdQpKwTeKfOoGOOs6Aj0gOsMBXM82ZxhmMEFfR3JEvx7tBD6rqzFd';

const btn = document.getElementById('btn-random');
const parent = document.getElementById('mini');
const errorCats = document.getElementById('error');
// const star = document.querySelector('#btn-favorite');
const container_fav = document.getElementById('container-favorites');

async function data(url){
    const response =  await fetch(url);
    const data = await response.json();
    return data;
}

const peticion = async url => {
    try{
        const getImage =  await data(`${API}`);
        const fragment = document.createDocumentFragment();
        getImage.forEach(image => {
            const article = document.createElement('ARTICLE');
            const tag = document.createElement('IMG');
            const btnFav = document.createElement('BUTTON');
            btnFav.classList.add('btn-favorite');
            const i = document.createElement('I');
            i.classList.add('fa-solid','fa-heart');
            tag.setAttribute('src', image.url);
            tag.setAttribute('alt', image.id);
            // tag.setAttribute('loading','lazy');
            btnFav.appendChild(i);
            tag.classList.add('img');
            article.append(tag,btnFav);
            fragment.append(article);
        });
        parent.appendChild(fragment);
    }catch(error){
        console.log(error);
    }
}

const favorites = async url => {
    try{
        const getImage =  await data(`${FAV_API}`);
        const fragment = document.createDocumentFragment();
        getImage.forEach(image => {
            console.log(image);
            const article = document.createElement('ARTICLE');
            const tag = document.createElement('IMG');
            const btnFav = document.createElement('BUTTON');
            btnFav.classList.add('btn-favorite');
            const i = document.createElement('I');
            i.classList.add('fa-solid','fa-heart');
            tag.setAttribute('src', image.url);
            tag.setAttribute('alt', image.id);
            btnFav.appendChild(i);
            tag.classList.add('img');
            article.append(tag,btnFav);
            fragment.append(article);
        });
        container_fav.appendChild(fragment);
        console.log(getImage);
    }catch(error){
        console.log(error);
    }
}

peticion(API);
favorites(FAV_API);

btn.addEventListener('click', () => {
    peticion(API);
});

// star.addEventListener('click', e => {
//     !star.classList.contains('add-favorite') ? star.classList.add('add-favorite') : star.classList.remove('add-favorite');
//     e.preventDefault;
//     e.stopPropagation;
// });