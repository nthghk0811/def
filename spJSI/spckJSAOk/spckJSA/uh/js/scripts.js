let categories = {
    data: [
        {
            name: "Design",
            img: "/spckJSAOk/spckJSA/uh/assets/img/design.jpg"
        },
        {
            name: "Development",
            img: "/spckJSAOk/spckJSA/uh/assets/img/development.jpg"
        },
        {
            name: "Marketing",
            img: "/spckJSAOk/spckJSA/uh/assets/img/marketing.jpg"
        },
        {
            name: "IT and Software",
            img: "/spckJSAOk/spckJSA/uh/assets/img/it and software.jpg"
        },
        {
            name: "Personal Development",
            img: "/spckJSAOk/spckJSA/uh/assets/img/personal development.jpg"
        },
        {
            name: "Business",
            img: "/spckJSAOk/spckJSA/uh/assets/img/business.jpg"
        },
        {
            name: "Photography",
            img: "/spckJSAOk/spckJSA/uh/assets/img/photography.jpg"
        },
        {
            name: "Music",
            img: "/spckJSAOk/spckJSA/uh/assets/img/music.jpg"
        }
    ]
}

// let products = {
//     data: []
// }

for (const items of categories.data){
    let the = document.createElement("div");
    the.classList.add("the");

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", items.img)
    imgContainer.appendChild(image)
    the.appendChild(imgContainer)

    imgContainer.appendChild(image);
    the.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("categories-name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name);

    the.appendChild(container);

    document.getElementById("categories").appendChild(the);


}





const namee = document.querySelector('.name')
const DEFAULT_VALUE = 'abc'
const imgCourse = document.querySelector('.img-course')


fetch(`https://643ba8aa44779455735dfbd1.mockapi.io/AA`)
        .then(async res => {
            const data = await res.json()
            console.log(
                'searchInput:', data[0]
            )
            for(let i=0;i < 9; i++){
                    const productContainer = document.createElement('div');
                    productContainer.classList.add('product-container');

                    const productImage = document.createElement('div');
                    productImage.classList.add('product-image');

                    const img = document.createElement('img');
                    img.src = data[i].img;
                    img.alt = 'Product Image';
                    // img.width = "30%";
                    
                    productImage.appendChild(img);

                    const productInfo = document.createElement('div');
                    productInfo.classList.add('product-info');

                    const productName = document.createElement('h2');
                    productName.classList.add('product-name');
                    productName.textContent = data[i].name;
                    productInfo.appendChild(productName);

                    const productPrice = document.createElement('span');
                    productPrice.classList.add('product-price');
                    productPrice.textContent = data[i].price;
                    productInfo.appendChild(productPrice);

                    const btn = document.createElement('button');
                    btn.classList.add('button');
                    btn.textContent = "Details";
                    btn.setAttribute('onclick',"redirect(this)")
                    productInfo.appendChild(btn);
                    btn.addEventListener('click', function() {
                        location.replace("trangcon.html");
                    })
                    
                    productContainer.appendChild(productImage);
                    productContainer.appendChild(productInfo);
                    document.getElementById("products").appendChild(productContainer)

                    const a = document.querySelector(".product-name");
                    const b = document.querySelector(".modal-dialog");
                    a.addEventListener("click", () => {
                        b.classList.remove("close");
                        b.classList.add("open");
                    })
                    
                }
                // namee.innerHTML = data[4].name || DEFAULT_VALUE
                // imgCourse.setAttribute('src',`${data[0].img}`)
            })
            .then(()=>{
                $('#products').slick({
                    dots: true,
                    arrows: true,
                    autoplaySpeed: 5000,
                    autoplay: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    prevArrow: $('.btn-prev'),
                    nextArrow: $('.btn-next'),
                  });
            })

let products =  [{"price":"₫1,999,000","img":"https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg","name":"The Complete Python Bootcamp From Zero to Hero in Python"},{"price":"₫1,499,000","img":"https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg","name":"Automate the Boring Stuff with Python Programming"},{"price":"₫1,799,000","img":"https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg","name":"Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]"},{"price":"₫2,199,000","img":"https://img-c.udemycdn.com/course/240x135/793796_0e89_2.jpg","name":"Microsoft Excel - Excel from Beginner to Advanced"},{"price":"₫429,000","img":"https://img-c.udemycdn.com/course/240x135/2605732_e3d5_3.jpg","name":"Zero to Hero in Microsoft Excel: Complete Excel guide 2023"},{"price":"₫429,000","img":"https://img-c.udemycdn.com/course/240x135/2070737_3af1_4.jpg","name":"Microsoft Excel Weekender Crash Course"},{"price":"₫1,899,000","img":"https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg","name":"The Complete 2023 Web Development Bootcamp"},{"price":"₫1,999,000","img":"https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg","name":"The Web Developer Bootcamp 2023"},{"price":"₫1,699,000","img":"https://img-c.udemycdn.com/course/240x135/965528_737d_7.jpg","name":"Web Development Masterclass - Online Certification Course"}]
function redirect(e){
    let nameCourse = e.parentNode.children[0].innerText;
    for(let i = 0; i<products.length; i++){
        if (nameCourse == products[i].name){
            localStorage.setItem("id", i)
        }
    }



}

            
            