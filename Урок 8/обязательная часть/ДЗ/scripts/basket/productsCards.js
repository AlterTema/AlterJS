'use strict'

const pathToImages = 'images';
const pathToProductsImages = `${pathToImages}/img`;
const featuredItemsEl = document.querySelector('.item-flex3');

/**
 * Эта функция принимает один из объектов из массива products в файле products.js.
 * @param {ProductDTO} product объект с информацией о продукте
 * @returns {string} html-разметка карточки товара
 */

function getProductMarkup(product) {
    return `
    <div class="item">
        < a class=item - link href = "single%20page.html" >
        <img class=item-img src="${pathToProductsImages}/${product.image}" alt="${product.name}">
        <div class="item-txt-box">
            <p class=item-desc>${product.name}</p>
            <p class=item-price>${product.price}</p>
        </div>
    </a>
    <div class="add-box">
        <a class=add href="#">
            <img src="img/Shop2.png" alt="Shop">
            <p class=add-text data-productID="${product.id}">Add to Card</p>
        </a>
    </div>
</div>`
}

/**
 * Функция вставляет карточки товаров в страницу.
 * @param {ProductDTO[]} products массив товаров из файла products.js
 * @param {HTMLDivElement} featuredItemsEl элемент с классом .item-flex3
 */

function insertProductsIntoPage(products, featuredItemsEl) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getProductMarkup(product);
    }
    featuredItemsEl.insertAdjacentHTML('afterbegin', productsMarkup);
}

/**
 * Функция назначает обработку клика на все кнопки "Add to cart".
 */
function addEventListenersForAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('p[data-productId]');
    addToCartBtns.forEach(function (p) {
        p.addEventListener('click', addedProductHandler);
    })
}

/**
 * Функция-обработчик события клика по кнопке "Add to cart".
 * @param {MouseEvent} event
 */
function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
}

insertProductsIntoPage(products, featuredItemsEl);
addEventListenersForAddToCartButtons();


