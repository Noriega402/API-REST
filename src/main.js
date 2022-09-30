const API = 'https://api.thecatapi.com/v1/images/search?limit=10&page=10';
const btn = document.getElementById('btn-random');
const parent = document.getElementById('mini');

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
            console.log(image);
            const tag = document.createElement('IMG');
            tag.setAttribute('src', image.url);
            tag.setAttribute('alt', image.id);
            tag.classList.add('img');
            fragment.append(tag);
        });
        parent.appendChild(fragment);
    }catch(error){
        console.log(error);
    }
}
peticion(API);

btn.addEventListener('click', () => {
    peticion(API);
})