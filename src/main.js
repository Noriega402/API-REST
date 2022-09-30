const API = 'https://api.thecatapi.com/v1/images/search';
const btn = document.getElementById('btn-random');

async function data(url){
    const response =  await fetch(url);
    const data = await response.json();
    return data;
}

const peticion = async url => {
    try{
        const getImage =  await data(`${API}`);
        const img = document.getElementById('img');
        img.setAttribute('src', `${getImage[0].url}`);
        console.log(getImage);
    }catch(error){
        console.log(error);
    }
}
peticion(API);

btn.addEventListener('click', () => {
    peticion(API);
})