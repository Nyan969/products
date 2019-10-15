const buttonsDay = document.querySelectorAll('.day__description-box_date');
const buttonsProducts = document.querySelectorAll('.debit-credit__description-box_products');

function openDebitCredit() {
    this.children['0'].classList.toggle('rotate');
    this.parentElement.nextElementSibling.classList.toggle('hidden');
}
function openProductsSections() {
    this.children['0'].classList.toggle('rotate');
    this.parentElement.nextElementSibling.classList.toggle('hidden');
}

buttonsDay.forEach(button => {
    button.addEventListener('click', openDebitCredit);
});
buttonsProducts.forEach(button => {
    button.addEventListener('click', openProductsSections);
});