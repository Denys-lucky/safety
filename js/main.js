$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
    });
});


const catalog = document.querySelector('.catalog');
const subCatalog = document.querySelector('.sub-catalog');
const catalogMobile = document.querySelector('.catalog-mobile');
const subCatalogMobile = document.querySelector('.sub-catalog-mobile');


catalog.onclick = function () {
    subCatalog.classList.toggle('sub-catalog-active');
    catalog.classList.toggle('catalog-active');
};

catalogMobile.onclick = function () {
    subCatalogMobile.classList.toggle('sub-catalog-mobile-active');
    catalogMobile.classList.toggle('catalog-mobile-active');
};



  

const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.top-header-mobile');

const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');


sidebarToggleBtn.onclick = function () {
  menuIcon.classList.toggle('menu-icon-active');
  sidebar.classList.toggle('top-header-mobile-active');
}