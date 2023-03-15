var i = 10;

function meter (form) {
    var data1 = document.getElementById ('meter1').value;
    var data2 = document.getElementById ('meter2').value;
    var input1 = parseFloat (form.firstinput.value);
    var input2 = form.secondinput;
    var button = document.getElementById ('button');
    var warning = document.getElementById ('warning');
    var limit = document.getElementById ('sisa');

    if (i == 0) {
        warning.innerHTML = 'Yah limit nya habis';
        button.disabled = true;
        return;
    }

    if (i > 0) {
        warning.innerHTML = "";
    }

    while (i > 0) {
        if (data1 === 'Meter' && data2 === 'Centimeter') {
         input2.value = input1 * 100;
        i--;
        limit.innerHTML = 'Sisa: ' + i;
        break;
        } else if (data1 === 'Meter' && data2 === 'Milimeter') {
            input2.value = input1 * 1000;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Centimeter' && data2 === 'Meter') {
            input2.value = input1 / 100;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Centimeter' && data2 === 'Milimeter') {
            input2.value = input1 * 10;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Milimeter' && data2 === 'Meter') {
            input2.value = input1 / 1000;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === 'Milimeter' && data2 === 'Centimeter') {
            input2.value = input1 / 10;
            i--;
            limit.innerHTML = 'Sisa: ' + i;
            break;
        } else if (data1 === data2){
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
