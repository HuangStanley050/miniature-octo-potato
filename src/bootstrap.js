import faker from "faker";

export const mount = (htmlElement) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

  htmlElement.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("dev-cart");
  if (el) {
    mount(el);
  }
}
