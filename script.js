function navLinksOnClick(event) {
  let selected = document.querySelectorAll(".nav-link[selected='active-link']");
  let selectedItem = event.target.parentElement;
  selected.forEach((item) => {
    item.removeAttribute("selected");
  });
  selectedItem.setAttribute("selected", "active-link");
  return;
}

function contactForm() {
  window.scrollTo(0, 100000);

  return;
}

function validateFields(event) {
  const inputFields = document.querySelectorAll(".validate");
  let validate = document.querySelector("form")
  
}
