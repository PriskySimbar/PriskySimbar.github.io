var i = 10;

function mass (form) {
    var data1 = document.getElementById ('mass1').value;
    var data2 = document.getElementById ('mass2').value;
    var input1 = parseFloat (form.firstinput.value);
    var input2 = form.secondinput;
    var button = document.getElementById ('button');
    var warning = document.getElementById ('warning');
    var limit = document.getElementById ('sisa');

    if (i == 0) {
        warning.innerHTML = 'Yah limit nya habis nambah limit yuk!';
        button.disabled = true;
        return;
    }

    if (i > 0) {
        warning.innerHTML = '';
    }

    while (i > 0) {
        if (data1 === 'Kilogram' && data2 === 'Gram') {
        input2.value = input1 * 1000;
        i--;
        limit.innerHTML = 'Sisa: ' + i;
        break;
        } else if (data1 === 'Kilogram' && data2 === 'Miligram') {
            input2.value = input1 * 1000000;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Gram' && data2 === 'Kilogram') {
            input2.value = input1 / 1000;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Gram' && data2 === 'Miligram') {
            input2.value = input1 * 1000;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Miligram' && data2 === 'Kilogram') {
            input2.value = input1 / 1000000;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Miligram' && data2 === 'Gram') {
            input2.value = input1 / 1000;
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
    var limit = document.getElementById ('sisa');
    i = i + 1;
    limit.innerHTML = 'Sisa: ' + i;
    return;
}
