let iconCart = document.querySelector('.iconCart');
let cart = document.querySelector('.content');
let body = document.querySelector('body');
let container = document.querySelector('.containerr');
let close = document.querySelector('.close');
// let outerdiv=document.querySelector('.outer-container');
// let cartList=document.querySelector('.listCart');
// let buttons=document.querySelector('.buttons');

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
    container.style.opacity = '0.7';
    container.style.pointerEvents = 'none';
})

close.addEventListener('click', () => {
    body.classList.toggle('showCart');
    container.style.opacity = '1';
    container.style.pointerEvents = '';
})

let products = null;
fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
    })

let listCart = [];
function checkCart() {
    var cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1])
    }
}
checkCart();
function addCart($idProduct) {
    // outerdiv.style.visibility='hidden';
    // cartList.style.visibility='visible';
    // buttons.style.visibility='visible';
    body.classList.toggle('showCart');
    container.style.opacity = '0.7';
    container.style.pointerEvents = 'none';

    let productCopy = JSON.parse(JSON.stringify(products));
    if (!listCart[$idProduct]) {
        let dataProduct = productCopy.filter(
            product => product.id == $idProduct
        )[0];
        listCart[$idProduct] = dataProduct;
        listCart[$idProduct].quantity = 1;
    }
    else {
        listCart[$idProduct].quantity++;
    }
    let timeSave = "expires=Thu, 31 Dec 2025 23:59:59 UTC";
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; " + timeSave + "; path=/;"
    addCartToHTML();
}
function addCartToHTML() {
    let listCartHtml = document.querySelector(".listCart")
    listCartHtml.innerHTML = '';

    let totalHTML = document.querySelector('.totalQuantity');
    let totalQuantity = 0

    if (listCart) {
        listCart.forEach(product => {
            if (product) {
                let newCart = document.createElement('div');
                newCart.classList.add('item');
                newCart.innerHTML = `<img src="${product.image}" alt="" />
                <div class="content">
                  <div class="name">${product.name}</div>
                  <div class="price">${product.price} /1 product</div>
                </div>
                <div class="quantity">
                  <button onclick="changeQuantity(${product.id}, '-')">-</button>
                  <span class="value">${product.quantity}</span>
                  <button onclick="changeQuantity(${product.id}, '+')">+</button>
                </div>`;
                listCartHtml.appendChild(newCart);
                totalQuantity = totalQuantity + product.quantity;
            }
        })
    }
    totalHTML.innerText = totalQuantity;
}

function changeQuantity($idProduct, $type) {
    switch ($type) {
        case '+':
            listCart[$idProduct].quantity++;
            break;
        case '-':
            listCart[$idProduct].quantity--;
            if (listCart[$idProduct].quantity <= 0) {
                delete listCart[$idProduct]
            }
            break;
    }
    let timeSave = "expires=Thu, 31Dec 2025 23:59:59 UTC";
    document.cookie = "listCart=" + JSON.stringify(listCart) + "; " + timeSave + "; path=/;"
    addCartToHTML();
}

function setCookie(cookieName, cookieValue, expiryDays) {
    var d = new Date();
    d.setTime(d.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

// Function to reset the cart cookie
function resetCartCookie() {
    setCookie('cart', '', -1); // Setting expiry in the past to delete the cookie
}

document.addEventListener("DOMContentLoaded", function () {
    checkCart(); // Fetch quantities from cookies
    addCartToHTML();
    resetCartCookie();
})


document.addEventListener("DOMContentLoaded", function () {
    // Toggle dropdown menus on heading click
    const headings = document.querySelectorAll(".footer-section h3");

    headings.forEach(function (heading) {
        const arrowIcon = heading.querySelector(".footeraerow");

        heading.addEventListener("click", function () {
            this.classList.toggle("clicked");
            arrowIcon.style.transform = this.classList.contains("clicked") ? 'rotate(180deg)' : 'none';
        });
    });
});


let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchbox');
let newCloseBtn = document.querySelector('.newClose')
function search() {
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
}

closeBtn.onclick = function () {
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}
newCloseBtn.onclick = function () {
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}



let availabelKeywords = [
    'Wooden Stools',
    'Metalic Stools',
    'Benches',
    'Side Tables',
    'Shop All',
    'Masala Boxes',
    'Roti Boxes',
    'Baskets',
    'Cutlery',
    'Cake stands And ervers',
    'Serving Trays',
    'Coffee Mugs',
    'Drinkware And Glasses',
    'Bar Tool sets',
    'Wine Racks',
    'Cushion Covers',
    'Artificial Flowers'
];

const resultBox = document.querySelector('.result-box');
const inputBox = document.querySelector('#input-box');

inputBox.onkeyup = function () {
    let result = [];
    let input = inputBox.value;
    if (input.length) {
        resultBox.style.top = '75%'
        result = availabelKeywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    else {
        resultBox.style.top = '-100%'
    }
    if (!result.length) {
        resultBox.style.top = '-100%'
    }
    display(result);
}

function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInout(this)>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}
function selectInout(list) {
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}