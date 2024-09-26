// const products = [
//     {
//         id: 1,
//         name: "Товар 1",
//         price: 100,
//         oldPrice: 150,
//         description: "Описание товара 1",
//         image: "../src/images/products/1.png",
//         new: "Новинка"
//     },
//     {
//         id: 2,
//         name: "Товар 2",
//         price: 200,
//         oldPrice: 150,
//         description: "Описание товара 1",
//         image: "../src/images/products/2.png",
//         new: "Новинка"
//     },
//     {
//         id: 3,
//         name: "Товар 3",
//         price: 300,
//         oldPrice: 150,
//         description: "Описание товара 1",
//         image: ["../src/images/products/3.png", "../src/images/products/sl1.png", "../src/images/products/sl2.png","../src/images/products/sl3.png"],
//         new: "-25%",
//     },
//     {
//         id: 4,
//         name: "Товар 1",
//         price: 100,
//         oldPrice: 150,
//         description: "Описание товара 1",
//         image: "../src/images/products/4.png",
//         new: "Новинка"
//     },
//     {
//         id: 5,
//         name: "Товар 2",
//         price: 200,
//         oldPrice: 150,
//         description: "Описание товара 1",
//         image: "../src/images/products/5.png",
//         new: "-25%",
//     },
//     {
//         id: 6,
//         name: "Товар 3",
//         price: 300,
//         oldPrice: 150,
//         description: "Описание товара 1",
//         image: "../src/images/products/6.png",
//         new: "Новинка"
//     },
//     {
//         id: 7,
//         name: "Товар 2",
//         price: 200,
//         oldPrice: 150,
//         description: "Описание товара 1",
//         image: "../src/images/products/7.png",
//         new: "Новинка"
//     },
//     {
//         id: 8,
//         name: "Товар 3",
//         price: 300,
//         oldPrice: 150,
//         description: "Описание товара 1",
//         image: "../src/images/products/8.png",
//         new: "-25%",
//     }
// ];
//
// function renderProducts(products) {
//     const productList = document.getElementById('product-list');
//
//     if (!productList) {
//         console.error('Element with id "product-list" not found');
//         return;
//     }
//
//     productList.innerHTML = '';
//
//     products.forEach(product => {
//         const col = document.createElement('div');
//         col.className = 'col-md-3';
//
//         const card = document.createElement('div');
//         card.className = 'card';
//
//         if (product.new === "Новинка") {
//             const badge = document.createElement('span');
//             badge.className = 'badge badge-new';
//             badge.textContent = 'Новинка';
//             card.appendChild(badge);
//         } else {
//             const badge = document.createElement('span');
//             badge.className = 'badge badge-not-new';
//             badge.textContent = `Еще ${product.new}`;
//             card.appendChild(badge);
//         }
//
//         let cardImageContainer;
//         if (Array.isArray(product.image)) {
//             cardImageContainer = document.createElement('div');
//             cardImageContainer.className = 'swiper-container-card';
//
//             const swiperWrapper = document.createElement('div');
//             swiperWrapper.className = 'swiper-wrapper';
//
//             product.image.forEach(imgSrc => {
//                 const swiperSlide = document.createElement('div');
//                 swiperSlide.className = 'swiper-slide';
//
//                 const img = document.createElement('img');
//                 img.src = imgSrc;
//                 img.className = 'card-img-top';
//                 img.alt = product.name;
//
//                 swiperSlide.appendChild(img);
//                 swiperWrapper.appendChild(swiperSlide);
//             });
//
//             const swiperPagination = document.createElement('div');
//             swiperPagination.className = 'swiper-pagination';
//
//             cardImageContainer.appendChild(swiperPagination);
//             cardImageContainer.appendChild(swiperWrapper);
//
//             new Swiper(cardImageContainer, {
//                 slidesPerView: 1,
//                 spaceBetween: 0,
//                 loop: true,
//                 pagination: {
//                     el: '.swiper-pagination',
//                     clickable: true,
//                 },
//                 navigation: false,
//             });
//         } else {
//             cardImageContainer = document.createElement('img');
//             cardImageContainer.src = product.image;
//             cardImageContainer.className = 'card-img-top';
//             cardImageContainer.alt = product.name;
//         }
//
//         const cardBody = document.createElement('div');
//         cardBody.className = 'card-body bg-light';
//
//         if (product.oldPrice) {
//             const oldPrice = document.createElement('p');
//             oldPrice.className = 'card-text text-muted';
//             oldPrice.style.textDecoration = 'line-through';
//             oldPrice.textContent = `$${product.oldPrice}`;
//             cardBody.appendChild(oldPrice);
//         }
//
//         const cardPrice = document.createElement('p');
//         cardPrice.className = 'card-text';
//         cardPrice.textContent = `$${product.price}`;
//         cardBody.appendChild(cardPrice);
//
//         const cardDescription = document.createElement('p');
//         cardDescription.className = 'card-text';
//         cardDescription.textContent = product.description;
//         cardBody.appendChild(cardDescription);
//
//         const cardButton = document.createElement('a');
//         cardButton.className = 'card-link';
//         cardButton.textContent = 'Подробнее';
//         // cardButton.setAttribute('href', '#');
//         cardButton.setAttribute('data-bs-toggle', 'modal');
//         cardButton.setAttribute('data-bs-target', '#productModal');
//         cardButton.setAttribute('data-toggle', 'modal');
//         cardButton.setAttribute('data-target', '#productModal');
//         cardButton.addEventListener('click', () => openModal(product));
//         cardBody.appendChild(cardButton);
//
//         card.appendChild(cardImageContainer);
//         card.appendChild(cardBody);
//
//         col.appendChild(card);
//         productList.appendChild(col);
//     });
// }
//
// function openModal(product) {
//     const modalSwiperContainer = document.getElementById('modal-swiper-container');
//     const modalThumbnailSwiperContainer = document.getElementById('modal-thumbnail-swiper-container');
//     const modalProductName = document.getElementById('modal-product-name');
//     const modalProductPrice = document.getElementById('modal-product-price');
//     const modalProductDescription = document.getElementById('modal-product-description');
//     const modalProductSpecs = document.getElementById('modal-product-specs').getElementsByTagName('tbody')[0];
//
//     modalSwiperContainer.innerHTML = '';
//     modalThumbnailSwiperContainer.innerHTML = '';
//     modalProductSpecs.innerHTML = '';
//
//     modalProductName.textContent = product.name;
//     modalProductPrice.textContent = `$${product.price}`;
//     modalProductDescription.textContent = product.description;
//
//     const swiperWrapper = document.createElement('div');
//     swiperWrapper.className = 'swiper-wrapper-modal';
//
//     product.image.forEach(imgSrc => {
//         const swiperSlide = document.createElement('div');
//         swiperSlide.className = 'swiper-slide';
//
//         const img = document.createElement('img');
//         img.src = imgSrc;
//         img.className = 'card-img-top';
//         img.alt = product.name;
//
//         swiperSlide.appendChild(img);
//         swiperWrapper.appendChild(swiperSlide);
//     });
//
//     // Заполняем слайдер миниатюр
//     const thumbnailSwiperWrapper = document.createElement('div');
//     thumbnailSwiperWrapper.className = 'swiper-wrapper-modal';
//
//     product.image.forEach(imgSrc => {
//         const thumbnailSwiperSlide = document.createElement('div');
//         thumbnailSwiperSlide.className = 'swiper-slide';
//
//         const thumbnailImg = document.createElement('img');
//         thumbnailImg.src = imgSrc;
//         thumbnailImg.className = 'card-img-top';
//         thumbnailImg.alt = product.name;
//
//         thumbnailSwiperSlide.appendChild(thumbnailImg);
//         thumbnailSwiperWrapper.appendChild(thumbnailSwiperSlide);
//     });
//
//     const swiperPagination = document.createElement('div');
//     swiperPagination.className = 'swiper-pagination';
//
//     modalSwiperContainer.appendChild(swiperPagination);
//     modalSwiperContainer.appendChild(swiperWrapper);
//
//     modalThumbnailSwiperContainer.appendChild(thumbnailSwiperWrapper);
//
//     const thumbnailSwiper = new Swiper(modalThumbnailSwiperContainer, {
//         slidesPerView: 4,
//         spaceBetween: 10,
//         centeredSlides: true,
//         slideToClickedSlide: true,
//         watchSlidesProgress: true,
//     });
//
//     const modalSwiper = new Swiper(modalSwiperContainer, {
//         slidesPerView: 1,
//         spaceBetween: 10,
//         loop: true,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         thumbs: {
//             swiper: thumbnailSwiper,
//         },
//     });
//
//     product.specs.forEach(spec => {
//         const row = document.createElement('tr');
//         const keyCell = document.createElement('td');
//         const valueCell = document.createElement('td');
//
//         keyCell.textContent = spec.key;
//         valueCell.textContent = spec.value;
//
//         row.appendChild(keyCell);
//         row.appendChild(valueCell);
//         modalProductSpecs.appendChild(row);
//     });
// }
//
// document.addEventListener('DOMContentLoaded', function() {
//     const orderForm = document.getElementById('orderForm');
//     const orderButton = document.getElementById('orderButton');
//     const orderSuccess = document.getElementById('orderSuccess');
//     const nameInput = document.getElementById('name');
//     const phoneInput = document.getElementById('phone');
//     const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
//     const sections = document.querySelectorAll('section');
//
//     const swiperMain = new Swiper('.swiper-container', {
//         loop: true,
//         pagination: {
//             el: '.swiper-pagination',
//             clickable: true,
//         },
//         lazy: {
//             loadPrevNext: true,
//         },
//     });
//
//
//     function changeActiveNavItem() {
//         let current = '';
//
//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             const sectionHeight = section.clientHeight;
//
//             if (scrollY >= sectionTop - 100) {
//                 current = section.getAttribute('id');
//             }
//         });
//
//         navLinks.forEach(link => {
//             link.classList.remove('active');
//             if (link.getAttribute('href').substring(1) === current) {
//                 link.classList.add('active');
//             }
//         });
//     }
//
//     window.addEventListener('scroll', changeActiveNavItem);
//
//
//    function validateForm() {
//         const nameValue = nameInput.value.trim();
//         const phoneValue = phoneInput.value.trim();
//
//         if (nameValue !== '' && phoneValue !== '') {
//             orderButton.disabled = false;
//         } else {
//             orderButton.disabled = true;
//         }
//     }
//
//     nameInput.addEventListener('input', validateForm);
//     phoneInput.addEventListener('input', validateForm);
//
//     orderForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         orderForm.classList.add('d-none');
//         orderSuccess.classList.remove('d-none');
//     });
//
//     AOS.init();
// });
//
// renderProducts(products);


const products = [
    {
        id: 1,
        name: "Товар 1",
        price: 100,
        oldPrice: 150,
        description: "Описание товара 1",
        image: "../src/images/products/1.png",
        new: "Новинка"
    },
    {
        id: 2,
        name: "Товар 2",
        price: 200,
        oldPrice: 150,
        description: "Описание товара 1",
        image: "../src/images/products/2.png",
        new: "Новинка"
    },
    {
        id: 3,
        name: "Товар 3",
        price: 300,
        oldPrice: 150,
        description: "Описание товара 1",
        image: ["../src/images/products/3.png", "../src/images/products/sl1.png", "../src/images/products/sl2.png","../src/images/products/sl3.png"],
        new: "-25%",
    },
    {
        id: 4,
        name: "Товар 1",
        price: 100,
        oldPrice: 150,
        description: "Описание товара 1",
        image: "../src/images/products/4.png",
        new: "Новинка"
    },
    {
        id: 5,
        name: "Товар 2",
        price: 200,
        oldPrice: 150,
        description: "Описание товара 1",
        image: "../src/images/products/5.png",
        new: "-25%",
    },
    {
        id: 6,
        name: "Товар 3",
        price: 300,
        oldPrice: 150,
        description: "Описание товара 1",
        image: "../src/images/products/6.png",
        new: "Новинка"
    },
    {
        id: 7,
        name: "Товар 2",
        price: 200,
        oldPrice: 150,
        description: "Описание товара 1",
        image: "../src/images/products/7.png",
        new: "Новинка"
    },
    {
        id: 8,
        name: "Товар 3",
        price: 300,
        oldPrice: 150,
        description: "Описание товара 1",
        image: "../src/images/products/8.png",
        new: "-25%",
    }
];

function renderProducts(products) {
    const productList = document.getElementById('product-list');

    if (!productList) {
        console.error('Element with id "product-list" not found');
        return;
    }

    productList.innerHTML = '';

    products.forEach(product => {
        const col = document.createElement('div');
        col.className = 'col-md-3';

        const card = document.createElement('div');
        card.className = 'card';

        if (product.new === "Новинка") {
            const badge = document.createElement('span');
            badge.className = 'badge badge-new';
            badge.textContent = 'Новинка';
            card.appendChild(badge);
        } else {
            const badge = document.createElement('span');
            badge.className = 'badge badge-not-new';
            badge.textContent = `Еще ${product.new}`;
            card.appendChild(badge);
        }

        let cardImageContainer;
        if (Array.isArray(product.image)) {
            cardImageContainer = document.createElement('div');
            cardImageContainer.className = 'swiper-container-card';

            const swiperWrapper = document.createElement('div');
            swiperWrapper.className = 'swiper-wrapper';

            product.image.forEach(imgSrc => {
                const swiperSlide = document.createElement('div');
                swiperSlide.className = 'swiper-slide';

                const img = document.createElement('img');
                img.src = imgSrc;
                img.className = 'card-img-top';
                img.alt = product.name;

                swiperSlide.appendChild(img);
                swiperWrapper.appendChild(swiperSlide);
            });

            const swiperPagination = document.createElement('div');
            swiperPagination.className = 'swiper-pagination';

            cardImageContainer.appendChild(swiperPagination);
            cardImageContainer.appendChild(swiperWrapper);

            new Swiper(cardImageContainer, {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: false,
            });
        } else {
            cardImageContainer = document.createElement('img');
            cardImageContainer.src = product.image;
            cardImageContainer.className = 'card-img-top';
            cardImageContainer.alt = product.name;
        }

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body bg-light';

        if (product.oldPrice) {
            const oldPrice = document.createElement('p');
            oldPrice.className = 'card-text text-muted';
            oldPrice.style.textDecoration = 'line-through';
            oldPrice.textContent = `$${product.oldPrice}`;
            cardBody.appendChild(oldPrice);
        }

        const cardPrice = document.createElement('p');
        cardPrice.className = 'card-text';
        cardPrice.textContent = `$${product.price}`;
        cardBody.appendChild(cardPrice);

        const cardDescription = document.createElement('p');
        cardDescription.className = 'card-text';
        cardDescription.textContent = product.description;
        cardBody.appendChild(cardDescription);

        const cardButton = document.createElement('a');
        cardButton.className = 'card-link';
        cardButton.textContent = 'Подробнее';
        cardButton.setAttribute('data-bs-toggle', 'modal');
        cardButton.setAttribute('data-bs-target', '#productModal');
        cardButton.addEventListener('click', () => openModal(product));
        cardBody.appendChild(cardButton);

        card.appendChild(cardImageContainer);
        card.appendChild(cardBody);

        col.appendChild(card);
        productList.appendChild(col);
    });
}

function openModal(product) {
    const modalSwiperContainer = document.getElementById('modal-swiper-container');
    const modalThumbnailSwiperContainer = document.getElementById('modal-thumbnail-swiper-container');
    const modalProductName = document.getElementById('modal-product-name');
    const modalProductPrice = document.getElementById('modal-product-price');
    const modalProductDescription = document.getElementById('modal-product-description');
    const modalProductSpecs = document.getElementById('modal-product-specs').getElementsByTagName('tbody')[0];

    modalSwiperContainer.innerHTML = '';
    modalThumbnailSwiperContainer.innerHTML = '';
    modalProductSpecs.innerHTML = '';

    modalProductName.textContent = product.name;
    modalProductPrice.textContent = `$${product.price}`;
    modalProductDescription.textContent = product.description;

    const swiperWrapper = document.createElement('div');
    swiperWrapper.className = 'swiper-wrapper-modal';

    product.image.forEach(imgSrc => {
        const swiperSlide = document.createElement('div');
        swiperSlide.className = 'swiper-slide';

        const img = document.createElement('img');
        img.src = imgSrc;
        img.className = 'card-img-top';
        img.alt = product.name;

        swiperSlide.appendChild(img);
        swiperWrapper.appendChild(swiperSlide);
    });

    // Заполняем слайдер миниатюр
    const thumbnailSwiperWrapper = document.createElement('div');
    thumbnailSwiperWrapper.className = 'swiper-wrapper-modal';

    product.image.forEach(imgSrc => {
        const thumbnailSwiperSlide = document.createElement('div');
        thumbnailSwiperSlide.className = 'swiper-slide';

        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = imgSrc;
        thumbnailImg.className = 'card-img-top';
        thumbnailImg.alt = product.name;

        thumbnailSwiperSlide.appendChild(thumbnailImg);
        thumbnailSwiperWrapper.appendChild(thumbnailSwiperSlide);
    });

    const swiperPagination = document.createElement('div');
    swiperPagination.className = 'swiper-pagination';

    modalSwiperContainer.appendChild(swiperPagination);
    modalSwiperContainer.appendChild(swiperWrapper);

    modalThumbnailSwiperContainer.appendChild(thumbnailSwiperWrapper);

    const thumbnailSwiper = new Swiper(modalThumbnailSwiperContainer, {
        slidesPerView: 4,
        spaceBetween: 10,
        centeredSlides: true,
        slideToClickedSlide: true,
        watchSlidesProgress: true,
    });

    const modalSwiper = new Swiper(modalSwiperContainer, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: thumbnailSwiper,
        },
    });

    product.specs.forEach(spec => {
        const row = document.createElement('tr');
        const keyCell = document.createElement('td');
        const valueCell = document.createElement('td');

        keyCell.textContent = spec.key;
        valueCell.textContent = spec.value;

        row.appendChild(keyCell);
        row.appendChild(valueCell);
        modalProductSpecs.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.getElementById('orderForm');
    const orderButton = document.getElementById('orderButton');
    const orderSuccess = document.getElementById('orderSuccess');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section');

    const swiperMain = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        lazy: {
            loadPrevNext: true,
        },
    });

    function changeActiveNavItem() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', changeActiveNavItem);

    function validateForm() {
        const nameValue = nameInput.value.trim();
        const phoneValue = phoneInput.value.trim();

        if (nameValue !== '' && phoneValue !== '') {
            orderButton.disabled = false;
        } else {
            orderButton.disabled = true;
        }
    }

    nameInput.addEventListener('input', validateForm);
    phoneInput.addEventListener('input', validateForm);

    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();
        orderForm.classList.add('d-none');
        orderSuccess.classList.remove('d-none');
    });

    AOS.init();
});

renderProducts(products);
