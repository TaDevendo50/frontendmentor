const dropdownButton = document.querySelector("#dropdownButton");
const CloseButton = document.querySelector(".dropdownButton-close");
const featureDropdown = document.querySelector(".featureDropdown");
const dropdownFeature = document.querySelector(".dropdownFeature");
const companyDropdown = document.querySelector(".companyDropdown");
const dropdownCompany = document.querySelector(".dropdownCompany");

featureDropdown.addEventListener('click', () => {
  dropdownFeature.classList.toggle('active')
})

companyDropdown.addEventListener("click", () => {
  dropdownCompany.classList.toggle("active");
});

dropdownButton.addEventListener("click", () => {
  CloseButton.classList.toggle("hide")
  dropdownButton.classList.toggle("hide")
})
CloseButton.addEventListener("click", () => {
  CloseButton.classList.toggle("hide")
  dropdownButton.classList.toggle("hide")
})

