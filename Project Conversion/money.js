var i = 10;

function money (form) {
    var data1 = document.getElementById ('money1').value;
    var data2 = document.getElementById ('money2').value;
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
        if (data1 === 'Rupiah' && data2 === 'US Dollar') {
            input2.value = input1 / 14500;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Rupiah' && data2 === 'Yen') {
            input2.value = input1 / 135;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'US Dollar' && data2 === 'Rupiah') {
            input2.value = input1 * 14500;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'US Dollar' && data2 === 'Yen') {
            input2.value = input1 * 110;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Yen' && data2 === 'Rupiah') {
            input2.value = input1 * 135;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Yen' && data2 === 'US Dollar') {
            input2.value = input1 / 110;
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
