const form = document.getElementById('form');
form.addEventListener('submit', verificacao);

const inputValue = document.getElementById('value-real');
const selectedCurrency = document.getElementById('currency');
const result = document.getElementById('result');
let valueconverted = 0;

function verificacao(e){
    e.preventDefault();

    if(!inputValue.value || inputValue.value < 0){
        alert("Informe um valor correto!");
        return;
    } else if(!selectedCurrency.value){
        alert("Escolha uma moeda!");
        return;
    }
    converter()
};

function converter(){
    if(selectedCurrency.value === 'eur'){
        valueconverted = inputValue.value * 5.18;
        result.innerHTML = formatarmoeda('pt-BR', 'eur');
        animateResult();
    }else if(selectedCurrency.value === 'dol'){
        valueconverted = inputValue.value * 5.33;
        result.innerHTML = formatarmoeda('en-US', 'usd');;
        animateResult();
    }else if(selectedCurrency.value === 'lib'){
        valueconverted = inputValue.value * 5.95;
        result.innerHTML = formatarmoeda('en-UK', 'gbp');;
        animateResult();
    }

    inputValue.value = '';
    selectedCurrency.value = '';
};


function formatarmoeda(locale, currency){
    const value = valueconverted.toLocaleString(`${locale}`, { style: 'currency', currency: `${currency}` });
    return `<span>💲💲💲</span> ${value}`;
};

function animateResult() {
    return result.animate([
      { transform: 'translateY(-150px)'},
      { transform: 'translateY(0px)'}
    ], { duration: 500 });
  };

