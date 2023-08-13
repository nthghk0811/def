let products = [
    {id:1 ,price:1999000,img:"https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg",name:"The Complete Python Bootcamp From Zero to Hero in Python",count: 1},
    {id:2, price:1499000,img:"https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg",name:"Automate the Boring Stuff with Python Programming",count: 1},
    {id:3, price:1799000,img:"https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",name:"Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]",count: 1},
    {id:4, price:2199000,img:"https://img-c.udemycdn.com/course/240x135/793796_0e89_2.jpg",name:"Microsoft Excel - Excel from Beginner to Advanced",count: 1},
    {id:5, price:429000,img:"https://img-c.udemycdn.com/course/240x135/2605732_e3d5_3.jpg",name:"Zero to Hero in Microsoft Excel: Complete Excel guide 2023",count: 1},
    {id:6, price:429000,img:"https://img-c.udemycdn.com/course/240x135/2070737_3af1_4.jpg",name:"Microsoft Excel Weekender Crash Course",count: 1},
    {id:7, price:1899000,img:"https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",name:"The Complete 2023 Web Development Bootcamp",count: 1},
    {id:8, price:1999000,img:"https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg",name:"The Web Developer Bootcamp 2023",count: 1},
    {id:9, price:1699000,img:"https://img-c.udemycdn.com/course/240x135/965528_737d_7.jpg",name:"Web Development Masterclass - Online Certification Course",count: 1}]
let productsEle = document.querySelector('.products');

function renderUI(arr) {
    
    if (arr.length == 0) {
        productsEle.insertAdjacentHTML(
            'afterbegin',
            '<li>Không có sản phẩm nào trong giỏ hàng</li>'
        );
        document.querySelector('.option-container').style.display = 'none';
        return;
    }

    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        productsEle.innerHTML += `
            <li class="row">
                <div class="col left">
                    <div class="thumbnail">
                        <a href="#">
                            <img src="${p.img}" alt="${p.name}">
                        </a>
                    </div>
                    <div class="detail">
                        <div class="name"><a href="#">${p.name}</a></div>
                        <div class="price">${convertMoney(p.price)}</div>
                    </div>
                </div>
                <div class="col right">
                    <div class="quantity">
                        <input type="number" class="quantity" step="1" value="${ p.count}" onchange="changeTotalProduct(${p.id}, event)" >
                    </div>
                    <div class="remove">
                        <span class="close" onclick="removeItem(${p.id})">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>
            </li>

        
        `;
    }

    let countEle = document.querySelector('.count');
    countEle.innerText = `${updateTotalItem(arr)} items in the bag`;

    updateTotalMoney(arr);
}
function convertMoney(num) {
    return num.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
}


function updateTotalItem(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        total += p.count;
    }
    return total;
}

function removeItem(id) {
    productsEle.innerHTML = ''
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i, 1);
        }
    }

    renderUI(products);
}

// Thay đổi số lượng
function changeTotalProduct(id, e) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].count = Number(e.target.value);
        }
    }
    renderUI(products);
}


let subTotalEl = document.querySelector('.subtotal span');
let vatEl = document.querySelector('.vat span');
let totalEle = document.querySelector('.total span');

// tổng tiền
function updateTotalMoney(arr) {
    // Tính tổng tiền cart
    let totalMoney = 0;

    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        totalMoney += p.count * p.price;
    }

    // Cập nhật tiền lên trên giao diện
    subTotalEl.innerText = convertMoney(totalMoney);
    vatEl.innerText = convertMoney(totalMoney * 0.05);
    totalEle.innerText = convertMoney(totalMoney * 1.05);
}


// window.onload = renderUI(products);
renderUI(products)
const resetbtn = document.getElementById('reset')
function reset(){
    productsEle.innerHTML=''
    let products = [
        {id:1 ,price:1999000,img:"https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg",name:"The Complete Python Bootcamp From Zero to Hero in Python",count: 1},
        {id:2, price:1499000,img:"https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg",name:"Automate the Boring Stuff with Python Programming",count: 1},
        {id:3, price:1799000,img:"https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",name:"Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]",count: 1},
        {id:4, price:2199000,img:"https://img-c.udemycdn.com/course/240x135/793796_0e89_2.jpg",name:"Microsoft Excel - Excel from Beginner to Advanced",count: 1},
        {id:5, price:429000,img:"https://img-c.udemycdn.com/course/240x135/2605732_e3d5_3.jpg",name:"Zero to Hero in Microsoft Excel: Complete Excel guide 2023",count: 1},
        {id:6, price:429000,img:"https://img-c.udemycdn.com/course/240x135/2070737_3af1_4.jpg",name:"Microsoft Excel Weekender Crash Course",count: 1},
        {id:7, price:1899000,img:"https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg",name:"The Complete 2023 Web Development Bootcamp",count: 1},
        {id:8, price:1999000,img:"https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg",name:"The Web Developer Bootcamp 2023",count: 1},
        {id:9, price:1699000,img:"https://img-c.udemycdn.com/course/240x135/965528_737d_7.jpg",name:"Web Development Masterclass - Online Certification Course",count: 1}]
    renderUI(products);

}
resetbtn.addEventListener('click', reset)





