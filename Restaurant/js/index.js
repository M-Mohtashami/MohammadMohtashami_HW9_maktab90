"use strict";

const productSection = document.getElementById("product-section");
const totalOrders = document.getElementById("total-orders");
const serviceFee = document.getElementById("service-fee");
const tipPercent = document.getElementById("tip-percent");
const tipCode = document.getElementById("tip-code");
const tipBtn = document.getElementById("tip-btn");
const finalPrice = document.getElementById("final-price");
const finalizeOrder = document.getElementById("finalize-order");
const modalMessage = document.getElementById("modal-message");

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
const tips = {
  طلایی: 30,
  "نقره ای": 15,
  برنزی: 5,
};
let orders = new Map();
let services = 0;
let finalTip = 0;
let finalOrdersPrice = 0;

function renderProducts(products) {
  productSection.innerHTML = "";

  products.map((product) => {
    const productCard = `<div class="col-lg-10 col-xl-6" dir="rtl">
    <div data-id=${product.id}
    class="row border border-light rounded-4 shadow m-0 my-2 p-2"
  >
    <div class="col-4">
      <img
        class="w-100"
        src=${product.picUrl}
        alt=""
      />
    </div>
    <div class="row col-8 p-0 m-0">
      <div class="col-12"><span class="h6 fw-bold">${product.name}</span></div>
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
  </div>
    </div>`;
    productSection.insertAdjacentHTML("beforeend", productCard);
  });
}
renderProducts(products);

productSection.addEventListener("click", (e) => {
  if (e.target.tagName !== "IMG") return;
  const parent = e.target.closest("[data-id]");
  updateTotalPrice(parent, e.target);
  // console.log(orders);
});

tipBtn.addEventListener("click", (e) => {
  console.log(tips[tipCode.value.trim()]);
  if (tips[tipCode.value.trim()]) {
    tipPercent.innerHTML = `${tips[tipCode.value.trim()]} درصد`;
    finalTip = tips[tipCode.value.trim()];
  } else {
    showModal("کد تخفیف معتبر نیست");
  }
  updateOrderStatus();
});

finalizeOrder.addEventListener("click", (e) => {
  console.log(finalOrdersPrice);
  if (finalOrdersPrice > 0) {
    showModal("سفارش شما با موفقیت ثبت شد");
  } else {
    showModal("سفارشی وجود ندارد. لطفا حداقل یک محصول انتخاب کنید.");
  }
});

function updateTotalPrice(product, btn) {
  let amount = product.querySelector("[data-value = 'amount']");
  let totalPrice = product.querySelector("[data-value = 'total-price']");
  let target = products.find((item) => item.id === +product.dataset.id);
  if (btn.dataset.value === "plus") amount.innerHTML = +amount.innerHTML + 1;
  if (btn.dataset.value === "minus") amount.innerHTML = amount.innerHTML - 1;

  totalPrice.innerHTML = `${+amount.innerHTML * target.price} تومان`;

  orders.set(target.name, +amount.innerHTML * target.price);
  updateOrderStatus();
}

function updateOrderStatus() {
  let priceTotal = 0;
  if (orders.size !== 0) {
    priceTotal = [...orders.values()].reduce((sum, val) => sum + val);
  }
  services = priceTotal * 0.05;
  totalOrders.innerHTML = `${priceTotal} تومان`;
  serviceFee.innerHTML = `${services} تومان`;

  finalOrdersPrice =
    priceTotal + services - (priceTotal + services) * (finalTip / 100);
  finalPrice.innerHTML = `${finalOrdersPrice} تومان`;

  console.log(priceTotal, finalPrice);
}

function showModal(message = "") {
  modalMessage.innerHTML = message;
}
