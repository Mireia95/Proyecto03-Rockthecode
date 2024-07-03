import { printResults } from './PetitionAPI';
import { printSectionPhoto } from './PrintPhotos';

export const printAlertWindow = () => {
  const input = document.querySelector('#search');
  input.value = '';
  const main = document.querySelector('#main');
  main.innerHTML = ''; //limpio el main
  const divAlert = document.createElement('div');
  divAlert.innerHTML =
    '<h4> No se encontraron fotos. <br> Porque no buscas otra palabra? </h4> <p> Busca por ejemplo: pizza, mar, design, montaña, atardecer... </p>';
  const buttonOK = document.createElement('button');
  buttonOK.innerText = 'OK';
  divAlert.appendChild(buttonOK);
  divAlert.classList.add('alertWindow');
  main.appendChild(divAlert);

  //imprimo fotos de gato de la API
  buttonOK.addEventListener('click', () => {
    divAlert.classList.toggle('hidden');
    printSectionPhoto(); //creo otra vez la section #gallery porque habiamos limpiado el main
    printResults('gato', 1);
  });
};
