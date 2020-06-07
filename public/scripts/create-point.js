function populateUFs() {
    const ufSelect = document.querySelector('select[name=uf]');

    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

    requestHttp(ufSelect, url);
}

populateUFs();

function requestHttp(value, url) {
    value.innerHTML = '';

    fetch(url).then(res => res.json())
        .then(locales => {
            for (const locale of locales) {
                value.innerHTML += `<option value="${locale.id}">${locale.nome}</option>`
            }
        });
    value.disabled = false;
}

function getCities(event) {
    const citySelect = document.querySelector('[name=city]');
    const stateInput = document.querySelector('[name=state]');

    const ufValue = event.target.value;

    const indexOfSelectedState = event.target.selectedIndex;
    stateInput.textContent = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`;

    requestHttp(citySelect, url);
}


document
    .querySelector('select[name=uf]')
    .addEventListener('change', getCities);

const itemsToCollect = document.querySelectorAll('.items-grid li');

for (const item of itemsToCollect) {
    item.addEventListener('click', handleSelectedItem);
}

const collectedItens = document.querySelector('input[name=items');

let selectedItems = [];

function handleSelectedItem(event) {
    const itemLi = event.target;

    itemLi.classList.toggle('selected')

    const itemId = itemLi.dataset.id;

    const alreadySelected = selectedItems.findIndex(item => item === itemId);

    if (alreadySelected !== -1) {
        const filteredItems = selectedItems.filter(item => item !== itemId);
        selectedItems = filteredItems
    } else {
        selectedItems.push(itemId);
    }
    console.log(selectedItems);
    collectedItens.value = selectedItems;
}