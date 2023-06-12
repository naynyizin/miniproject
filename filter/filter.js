const data = [

    {
        id: 1,
        name: "Aerox 5",
        img: "./img/Aerox5.jpg",
        price: 50,
        cat: "Mouse"
    },

    {
        id: 2,
        name: "ASUS ROG",
        img: "./img/ASUSROG.jpg",
        price: 24,
        cat: "Keyboard"
    },

    {
        id: 3,
        name: "Corsair K63",
        img: "./img/CorsairK63.jpg",
        price: 34,
        cat: "Keyboard"
    },

    {
        id: 4,
        name: "G413",
        img: "./img/G413.jpg",
        price: 35,
        cat: "Keyboard"
    },

    {
        id: 5,
        name: "G915 TKL",
        img: "./img/G915TKL.jpg",
        price: 70,
        cat: "Keyboard"
    },

    {
        id: 6,
        name: "Geelyda",
        img: "./img/Geelyda.jpg",
        price: 200,
        cat: "Smart Watch"
    },

    {
        id: 7,
        name: "HyperX Cloud II",
        img: "./img/HyperXCloudII.jpg",
        price: 30,
        cat: "Heardphone"
    },

    {
        id: 8,
        name: "Logitech G733",
        img: "./img/LogitechG733.jpg",
        price: 50,
        cat: "Heardphone"
    },

    {
        id: 9,
        name: "LOKUI",
        img: "./img/LOKUI.jpg",
        price: 100,
        cat: "Smart Watch"
    },

    {
        id: 10,
        name: "Razer Basilisk v2",
        img: "./img/RazerBasiliskv2.jpg",
        price: 35,
        cat: "Mouse"
    },

    {
        id: 11,
        name: "Sony-INZONE H3",
        img: "./img/Sony-INZONEH3.jpg",
        price: 70,
        cat: "Heardphone"
    }

];

const productsContainer = document.querySelector(".products"),
    searchInput = document.querySelector(".search"),
    categoriesContainer = document.querySelector(".cats"),
    priceRange = document.querySelector(".priceRange"),
    priceValue = document.querySelector(".priceValue");

const displayProduct = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts.map(
        (product) =>
            `<div class="product">
                <img src=${product.img} alt="">
                <span class="name">${product.name}</span>
                <span class="priceText">$${product.price}</span>
            </div>`
    ).join("");
};

displayProduct(data);

searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();

    if (value) {
        displayProduct(data.filter(item => item.name.toLowerCase().indexOf(value) !== -1));
    } else {
        displayProduct(data);
    }
});

const setCategories = () => {
    const allCats = data.map(item => item.cat);

    const categories = ["All", ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i;
    })];

    categoriesContainer.innerHTML = categories.map(cat => `<span class="cat">${cat}</span>`).join("");

    categoriesContainer.addEventListener("click", (e) => {
        const slectedCat = e.target.textContent;
        slectedCat === "All" ? displayProduct(data) : displayProduct(data.filter(item => item.cat === slectedCat))
    })
};

const setPrice = () => {
    const priceList = data.map(item => item.price);
    const maxPrice = Math.max(...priceList);
    const minPrice = Math.min(...priceList);

    priceRange.max = maxPrice;
    priceRange.min = minPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "$" + e.target.value;

        displayProduct(data.filter(item => item.price <= e.target.value));
    })

}

setCategories();
setPrice();


