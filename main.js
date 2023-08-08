const menuEmail = document.querySelector('.navbar-email');
const burguerMenu = document.querySelector('.menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close')
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggledesktopMenu)
burguerMenu.addEventListener('click', togglemobileMenu)
menuCarIcon.addEventListener('click', toggleCarritoAside)
productDetailCloseIcon.addEventListener('click', CloseProductDetailAside)

function toggledesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }

    CloseProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if (!isProductDetailClosed) {
        productDetailContainer.classList.add('inactive');
    }


    shoppingCartContainer.classList.toggle('inactive')
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive')
    productDetailContainer.classList.remove('inactive')
}

function CloseProductDetailAside () {
    productDetailContainer.classList.add('inactive')
}

const productList = [];
productList.push({
    name: 'Nike Air Force 1 07 LV8',
    price: '2,499',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6a31bae8-ac11-4653-8639-30b4ca4ca131/calzado-air-force-1-07-lv8-gcKbrT.png',
});
productList.push({
    name: 'Nike Air Force 1 07 LV8',
    price: '2,699',
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/5e69767d-949c-49ff-bc6d-558b8f0c14cd/calzado-air-force-1-07-lv8-next-nature-4GxJ3W.png',
});
productList.push({
    name: 'Nike Air Force 1 07 LV8',
    price: '2,499',
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c62e6722-7d1f-44b5-81fe-55de86f463fb/calzado-air-force-1-07-60-lQZdPT.png',
});
productList.push({
    name: 'Nike Air Force 1 07 LV8',
    price: '2,499',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/31f3ecd2-6d1a-45b9-8e41-2bc36de0551d/calzado-air-force-1-07-60-next-nature-DzxWgp.png',
});
productList.push({
    name: 'Nike Air Force 1 07 LV8',
    price: '2,499',
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f2ff7f7a-0e13-4148-8eb4-60b83e86f99b/calzado-air-force-1-07-lv8-7j2wDJ.png',
});
productList.push({
    name: 'Nike Air Force 1 07 LV8',
    price: '2,499',
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d5b46ed8-13d7-4c4f-babf-551657ee8953/calzado-air-force-1-07-lv8-pRxsmF.png',
});
productList.push({
    name: 'Nike Air Force 1 07 LV8',
    price: '2,499',
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cff2bcb8-e664-4f0f-a6bd-19941db446f5/calzado-air-force-1-07-lv8-P1wNNK.png',
});
productList.push({
    name: 'Nike Air Force 1 High 07',
    price: '2,699',
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/60b4218d-108b-4a1c-a59d-3e6eecfdfdaa/calzado-air-force-1-high-07-VqQK8m.png',
});
productList.push({
    name: 'Nike Air Force 1 07 LV8',
    price: '2,499',
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/16c95516-5023-4eaf-810c-1cd4c56f36d0/calzado-air-force-1-07-lv8-n58P32.png',
});
productList.push({
    name: 'Nike Air Force 1 React',
    price: '3,299',
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f33b8d7c-e5d8-4bc0-bc15-800c0054db03/calzado-air-force-1-react-xrGrw2.png',
});
productList.push({
    name: 'Nike Air Force 1 07 Premium',
    price: '3,399',
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a72a7905-7e73-430d-8fd7-7abdc0d8ede8/calzado-air-force-1-07-premium-78sDh1.png',
});
productList.push({
    name: 'Nike Air Force 1 07 WB',
    price: '3,199',
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9586f004-25c7-4e72-bef9-6492f6491a4b/calzado-air-force-1-07-wb-QLs4Hz.png',
});
productList.push({
    name: 'Nike Air Force 1 Mid React',
    price: '3,599',
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a3b054fe-88b5-473a-9279-73c11257281b/calzado-air-force-1-mid-react-qlqmKb.png',
});
productList.push({
    name: 'Nike Air Force 1 Mid 07',
    price: '2,499',
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/04421d64-7214-4718-ba73-93e6d1447bac/calzado-air-force-1-mid-07-pj5Mqp.png',
});
productList.push({
    name: 'Nike Air Force 1 Low Retro',
    price: '3,499',
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7d99f968-8ffa-40f8-aa7a-aec27417dfaf/calzado-air-force-1-low-retro.png',
});
productList.push({
    name: 'Nike Air Force 1 Mid React',
    price: '3,599',
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c81c5848-a7ac-4876-a77b-a5fd34b967af/calzado-air-force-1-mid-react-qlqmKb.png',
});
productList.push({
    name: 'Nike Air Force 1 07',
    price: '2,399',
    image: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/d7cbef9b-eb7b-40c6-aa19-c12b52538070/calzado-air-force-1-07-D3dVCw.png',
});

function renderProducts(arr) {
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside)
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACQ0lEQVRoge2YvU4bQRDHf44jC5CSBuqQHheEjoIo4gkS8RSkQkqBqCNbBikvAGX6vAEpEqUJUgwKTSpiJEhFE4jBNsgU9zU5fN6P28sRaX/SyuvbnZn/3O765gwej8dzX2gCl8AwbOfAF2ClTFG6VAgEDzNaozxp+jT4ewXSbbE8aXY8Bj6QJLBdrhw7FslekbLaFfA2ElhRJDAF/AaqljegKC6ARwAPFBO7wI/C5ZjTiTqqBAD2RX+VYNXKaK9HadJJoC36zzTmF4WMHWsyXYF5Z3LMkbH3M2eNYJrkF6ALPLQI/o7gGbNlYUsYsyt0TJs6OBbGcxYCeqFtz8KWMGYU/1gO6GwhyH8OaqlPUxZE/5scsEmgjHOQuf91E5BGOiuQrmwl0bVL9ItE6wMcMSsCnynmqipb2c41458Jm1lD7bEoEyeqytZkBdI3T1X+ZPJROHppaCuFm/JK2O6mB3XPAJR3kGWsdnrQJAHTgyy5Sn2aIBM4sLCPqZMsZUcxN02D4MDavJp2RNy6hX1MFfgjnM3kcaaJsowx2UI3wKH4/iKXND2WRf87cJ3XYZPkjnwFJvI6HMMEsCfiOfln5ClJYTYEPgFLwKQL5yGTwHPgs4jTA564CvCG8Q+oItqaK/ERG8DgHwgfAOuuxUfUgR3gJ9B3KLoPHIW+bd49PP8lNWATOAVOgBZ6b1+2ds5pcXcvtwq0c87pCCG/CrSLMSklxjGqzr8p0C7GVQLvNa+5snNOjWDvnmB+iG3sPB6P555wC+frLuFX5uRFAAAAAElFTkSuQmCC');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);