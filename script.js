
const data = [
    {
        id: 1,
        name: "Fire Boltt Ninja 2",
        img: "https://m.media-amazon.com/images/I/617eiZeFtNL._SL1500_.jpg",
        amt: 1599,
        seller: "Boltt Store",
        category: "Watch",
    },
    {
        id: "Noise Pulse Go",
        name: "Noise Pulse Go",
        img: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg",
        amt: 1300,
        seller: "Noise Store",
        category: "Watch",
    },
    {
        id: 3,
        name: "boAt Xtend Pro",
        img: "https://m.media-amazon.com/images/I/61ZuL8CUigL._SL1500_.jpg",
        amt: 2799,
        seller: "Rajesh Watchs",
        category: "Watch",
    },
    {
        id: 4,
        name: "Lenovo Tab M8",
        img: "https://m.media-amazon.com/images/I/71SvqTFPXJL._SL1500_.jpg",
        amt: 9270,
        seller: "Stonehenge Retail",
        category: "Tablets",
    },
    {
        id: 5,
        name: "Honor PAD X8",
        img: "https://m.media-amazon.com/images/I/710G-VKcgtL._SL1500_.jpg",
        amt: 12999,
        seller: "Honor india",
        category: "Tablets",
    },

    {
        id: 6,
        name: "IKALL N9 ",
        img: "https://m.media-amazon.com/images/I/7185GL6hPlL._SL1500_.jpg",
        amt: 3999,
        seller: "IKALL Store",
        category: "Tablets",
    },

    {
        id: 7,
        name: "Oppo Pad Air",
        img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SL1500_.jpg",
        amt: 15999,
        seller: "Oppo Store",
        category: "Tablets",
    },
    {
        id: 8,
        name: "Acer EK220Q",
        img: "https://m.media-amazon.com/images/I/8150iUXkc5L._SL1500_.jpg",
        amt: 6249,
        seller: "Accer Store",
        category: "Monitors",
    },
    {
        id: 9,
        name: "Samsung 24",
        img: "https://m.media-amazon.com/images/I/81TjRLHaz1L._SL1500_.jpg",
        amt: 9799,
        seller: "Samsung Store",
        category: "Monitors",
    },
    {
        id: 10,
        name: "ZEBRONICS AC32FHD ",
        img: "https://m.media-amazon.com/images/I/813Y1TIZwfL._SL1500_.jpg",
        amt: 12799,
        seller: "ZEBRONICS Store",
        category: "Monitors",
    },
];

const productsContainer = document.querySelector(".products");
const categoryList = document.querySelector(".category-list");

function displayProducts(products) {
    if (products.length > 0) {
        const product_details = products.map((product) =>
            `
        <div class="product">
            <div class="img">
                <img src="${product.img}" alt="${product.name}"/>
            </div>
            <div class="product_details">
                <span class="name">${product.name}</span>
                <span class="amt">${product.amt}</span>
                <span class="seller">${product.seller}</span>
            </div>
        </div>
        `)
            .join("");

        productsContainer.innerHTML = product_details;
    } else {
        productsContainer.innerHTML = "<h3>No Products Available</h3>"
    }
}

function setCategories() {
    const allCategories = data.map((product) => product.category);
    //console.log(allCategories);
    const categories = [
        "All",
        ...allCategories.filter((product, index) => {
            return allCategories.indexOf(product) === index;
        }),
    ];
    // console.log(catagories);
    // console.log(categories);
    categoryList.innerHTML = categories.map((category) => `<li>${category}</li>`).join("");

    categoryList.addEventListener("click", (e) => {
        const selectedCategory = e.target.textContent;
        selectedCategory === "All" ? displayProducts(data) : displayProducts(data.filter((product) => product.category == selectedCategory));
    });
}
const priceRange = document.querySelector("#priceRange");
const priceValue = document.querySelector(".priceValue");

function setPrices() {
    const priceList = data.map((product) => product.amt);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceValue.textContent = "Rs." + maxPrice;

    priceRange.addEventListener("input", (e) => {
        priceValue.textContent = "Rs." + e.target.value;
        displayProducts(data.filter((product) => product.amt <= e.target.value));
    });
}

const textSearch = document.querySelector("#textSearch");
textSearch.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase().trim();
    if (value) {
        displayProducts(data.filter((product) => product.name.toLowerCase().indexOf(value) !== -1));
    } else {
        displayProducts(data);
    }
});

displayProducts(data);
setCategories();
setPrices();