const buttonsDay = document.querySelectorAll('.day__description-box');
const buttonsProducts = document.querySelectorAll('.debit-credit__description-box');

function openDebitCredit() {
    this.children['0'].children['0'].classList.toggle('rotate');
    const day = this.nextElementSibling;
    day.classList.toggle('hidden');
//сворачиваем открытые товары
    day.querySelectorAll('.debit-credit__description-box').forEach(item => {
        if (!item.nextElementSibling.classList.contains('hidden')) {
            item.click(openProductsSections);
        }
    })
}

function openProductsSections() {
    this.children['1'].children['0'].classList.toggle('rotate');
    this.nextElementSibling.classList.toggle('hidden');
}

buttonsDay.forEach(button => {
    button.addEventListener('click', openDebitCredit);
});
buttonsProducts.forEach(button => {
    button.addEventListener('click', openProductsSections);
});