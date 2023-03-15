var i = 10;

function acc(form) {
    var data1 = document.getElementById('acc1').value;
    var data2 = document.getElementById('acc2').value;
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
        warning.innerHTML = '';
    }

    while (i > 0) {
        if (data1 === 'Meter/Second' && data2 === 'Kilometer/Hour') {
            input2.value = input1 * 3.6;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Meter/Second' && data2 === 'Miles/Hour') {
            input2.value = input1 * 2.23694;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Kilometer/Hour' && data2 === 'Meter/Second') {
            input2.value = input1 / 3.6;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Kilometer/Hour' && data2 === 'Miles/Hour') {
            input2.value = input1 / 1.60934;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Miles/Hour' && data2 === 'Meter/Second') {
            input2.value = input1 / 2.23694;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Miles/Hour' && data2 === 'Kilometer/Hour') {
            input2.value = input1 * 1.60934;
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

function add(form) {
    var limit = document.getElementById('sisa');
    i = i + 1;
    limit.innerHTML = 'Sisa: ' + i;
    return;
}