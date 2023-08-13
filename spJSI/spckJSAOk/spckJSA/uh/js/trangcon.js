const container = document.querySelector('.container');
let products = [{id: 0,"price":"₫1,999,000","img":"https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg","name":"The Complete Python Bootcamp From Zero to Hero in Python","des":"Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games"}, 
{id: 1, "price":"₫1,499,000","img":"https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg","name":"Automate the Boring Stuff with Python Programming","des":"A practical programming course for office workers, academics, and administrators who want to improve their productivity."},
{id: 2,"price":"₫1,799,000","img":"https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg","name":"Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]","des":"Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included."}, 
{id: 3,"price":"₫2,199,000","img":"https://img-c.udemycdn.com/course/240x135/793796_0e89_2.jpg","name":"Microsoft Excel - Excel from Beginner to Advanced","des":"Excel with this A-Z Microsoft Excel Course. Microsoft Excel 2010, 2013, 2016, Excel 2019 and Microsoft/Office 365/2023"}, 
{id: 4,"price":"₫429,000","img":"https://img-c.udemycdn.com/course/240x135/2605732_e3d5_3.jpg","name":"Zero to Hero in Microsoft Excel: Complete Excel guide 2023","des":"A Beginner's Guide to Microsoft Excel - Learn Excel Charts, Spreadsheets, Formulas, Shortcuts, Macros and Tips & Tricks"}, 
{id: 5,"price":"₫429,000","img":"https://img-c.udemycdn.com/course/240x135/2070737_3af1_4.jpg","name":"Microsoft Excel Weekender Crash Course","des":"Microsoft Excel in just 5 hours - Excel Formulas and Functions, Excel Charts, Excel Analytics, Shortcuts & Excel Macros"}, 
{id: 6,"price":"₫1,899,000", "img":"https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg","name":"The Complete 2023 Web Development Bootcamp","des":"Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps"}, 
{id: 7,"price":"₫1,999,000","img":"https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg","name":"The Web Developer Bootcamp 2023","des":"10 Hours of React just added. Become a Developer With ONE course - HTML, CSS, JavaScript, React, Node, MongoDB and More!"}, 
{id: 8,"price":"₫1,699,000","img":"https://img-c.udemycdn.com/course/240x135/965528_737d_7.jpg","name":"Web Development Masterclass - Online Certification Course","des":"Cloud Computing | Web Apps | Linux | Web Servers | DBMS | LAMP Stack | HTML | CSS | JavaScript | PHP | + More"}]

function render(arr){
    let idcheck = localStorage.getItem("id")

    const p = arr[idcheck]
    container.innerHTML += `
        <h1>${p.name}</h1>
        <p>${p.des}</p>
        <img src="${p.img}" alt="">
        <h2>${p.price}</h2>
        <button type="button" id="btn">Add to cart</button>
        <button class="back" type="button">Go back</button>
    `

    
}

window.onload = render(products)