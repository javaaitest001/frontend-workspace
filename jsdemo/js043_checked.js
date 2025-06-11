let opt1 = document.querySelector('#opt1');
let total = document.querySelector('#total');

opt1.onclick = function () {
    let result = parseInt(total.value);
    let backup = parseInt(opt1.value);

    if (opt1.checked) {
        result += parseInt(opt1.value);
    } else {
        result -= parseInt(opt1.value);
    }

    total.value = result.toLocaleString();
};