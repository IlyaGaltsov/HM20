'use strict'

const btn = document.querySelector('.save');
const form = document.querySelector('.form')

btn.addEventListener('click', ()=>{
    const form = document.forms.form_regestration;
    const name = form.elements.name.value;
    const birthday = form.elements.birthday.value;
    const gender = form.elements.gender.value;
    const city = form.elements.city.value;
    const adress = form.elements.adress.value;

    const selectLenguages =[];

    for(let i = 0; i < form.elements.languages.length; i++){
        if(form.elements.languages[i].checked){
            selectLenguages.push(form.elements.languages[i].value)
        }
    }

    const resultList = document.getElementById('resultList');
    const resultItem = document.createElement('div');
    resultItem.innerHTML = `
        <p>Имя: ${name}</p>
        <p>Дата рождения: ${birthday}</p>
        <p>Пол: ${gender}</p>
        <p>Город: ${city}</p>
        <p>Адрес: ${adress}</p>
        <p>Знание языков: ${selectLenguages.join(', ')}</p>
    `;
    resultList.appendChild(resultItem);
    form.style.display = "none";
});