const  menuIcon = document.querySelector('#menu-icon');
const  navigation = document.querySelector('.navigation');


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navigation.classList.toggle('active');
});