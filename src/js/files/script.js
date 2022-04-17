// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

import "../files/venobox.min.js"


const eduBlock = document.querySelector('.education');
const secondPage = document.querySelector('.courses-body');
const swiperEdu = document.querySelector('.education__slider');

if(secondPage.classList.contains("courses-body")) {
    swiperEdu.classList.remove('education__slider')
    eduBlock.classList.add('education-second')
}

new VenoBox({
    selector: '.education-new__link',
});
