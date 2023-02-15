"use strict";

const productSection = document.getElementById("product-section");
const totalOrders = document.getElementById("total-orders");
const serviceFee = document.getElementById("service-fee");
const tipPercent = document.getElementById("tip-percent");
const tipCode = document.getElementById("tip-code");
const tipBtn = document.getElementById("tip-btn");
const finalPrice = document.getElementById("final-price");
const finalizeOrder = document.getElementById("finalize-order");

const products = [
  {
    id: 1,
    name: "همبرگر معمولی",
    price: 8000,
    picUrl: "/Restaurant/assets/img/hamburger.png",
  },
  {
    id: 2,
    name: "همبرگر مخصوص",
    price: 10000,
    picUrl: "/Restaurant/assets/img/hamburger.png",
  },
  {
    id: 3,
    name: "همبرگر معمولی با قارچ و پنیر",
    price: 10000,
    picUrl: "/Restaurant/assets/img/hamburger.png",
  },
  {
    id: 4,
    name: "همبرگر مخصوص با قارچ و پنیر",
    price: 20000,
    picUrl: "/Restaurant/assets/img/hamburger.png",
  },
  {
    id: 5,
    name: "سیب زمینی سرخ کرده",
    price: 10000,
    picUrl: "/Restaurant/assets/img/french_fries.png",
  },
  {
    id: 6,
    name: "سیب زمینی سرخ کرده ویژه",
    price: 25000,
    picUrl: "/Restaurant/assets/img/french_fries.png",
  },
  {
    id: 7,
    name: "نوشابه",
    price: 5000,
    picUrl: "/Restaurant/assets/img/soda.png",
  },
  {
    id: 8,
    name: "نوشابه رژیمی",
    price: 6000,
    picUrl: "/Restaurant/assets/img/soda.png",
  },
  {
    id: 9,
    name: "سالاد سزار",
    price: 25000,
    picUrl: "/Restaurant/assets/img/salad.png",
  },
  {
    id: 10,
    name: "سالاد فصل",
    price: 8000,
    picUrl: "/Restaurant/assets/img/salad.png",
  },
];

function renderProducts(products) {
  productSection.innerHTML = "";

  products.map((product) => {
    const productCard = `<div data-id=${product.id}
    class="row col-lg-10 col-xl-5 border border-light rounded-4 shadow m-1 my-4 p-2 mx-lg-4"
  >
    <div class="col-4">
      <img
        class="w-100"
        src=${product.picUrl}
        alt=""
      />
    </div>
    <div class="row col-8 p-0 m-0">
      <div class="col-12"><span class="h4">${product.name}</span></div>
      <div class="col-12"><span>${product.price} تومان</span></div>
      <div
        class="row col-12 d-flex align-items-center justify-content-between mt-3 p-0"
      >
        <div class="col btn-group mr-3 px-0">
          <div class="btn-group-prepend">
            <img
              data-value = "plus"
              class="img-fluid btn btn-danger btn-sm rounded-0 rounded-start"
              src="/Restaurant/assets/img/add.png"
            />
          </div>
          <div class="d-flex align-items-center px-3">
            <span data-value="amount">0</span>
          </div>

          <div class="btn-group-append">
            <img
            data-value = "minus"
              class="img-fluid btn btn-danger btn-sm rounded-0 rounded-end"
              src="/Restaurant/assets/img/minus.png"
            />
          </div>
        </div>
        <div class="col justify-self-end p-0 text-end">
          <span data-value = "total-price">0 تومان</span>
        </div>
      </div>
    </div>
  </div>`;
    productSection.insertAdjacentHTML("beforeend", productCard);
  });
}
renderProducts(products);

productSection.addEventListener("click", (e) => {
  if (e.target.tagName !== "IMG") return;
  console.log(e.target.dataset.value);
});
