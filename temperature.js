var i = 10;

function temp (form) {
    var data1 = document.getElementById('temp1').value;
    var data2 = document.getElementById('temp2').value;
    var input1 = parseFloat(form.firstinput.value);
    var input2 = form.secondinput;
    var button = document.getElementById('button');
    var warning = document.getElementById('warning');
    var limit = document.getElementById('sisa');

    if (i == 0) {
        warning.innerHTML = 'Yah limit nya habis nambah limit yuk!';
        button.disabled = true;
        return;
    }

    if (i > 0) {
        warning.innerHTML = "";
    }

    while (i > 0) {
        if (data1 === 'Celsius' && data2 === 'Kelvin') {
            input2.value = input1 + 273.15;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Celsius' && data2 === 'Fahrenheit') {
            input2.value = (input1 * 9/5) + 32;
            i--;
            limit.innerHTML = 'Sisa ' + i;
            break;
        } else if (data1 === 'Kelvin' && data2 === 'Celsius') {
            input2.value = input1 - 273.15;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Kelvin' && data2 === 'Fahrenheit') {
            input2.value = (input1 - 273.15) * 9/5 + 32;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Fahrenheit' && data2 === 'Celsius') {
            input2.value = (input1 - 32) * 5/9;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Fahrenheit' && data2 === 'Kelvin') {
            input2.value = (input1 - 32) * 5/9 + 273.15;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === data2) {
            warning.innerHTML = 'Satuan yang anda pilih sama (tidak bisa melakukan konversi)';
            input2.value = input1;
            break;
        } else {
            input2.value = input1;
            break;
        }
    }
}

function add (form) {
    var limit = document.getElementById('sisa');
    i = i + 1;
    limit.innerHTML = 'Sisa: ' + i;
    return;
}
