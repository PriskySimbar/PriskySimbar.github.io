function login(form) {
    var email = form.email.value;
    var pass = form.pass.value;
    var date = form.tanggal.value;
    var gender = form.gender.value;

    var emotes = [];
    var emoteselements = form.elements["emote"];
    for (var i = 0; i < emoteselements.length; i++) {
        if (emoteselements[i].checked) {
            emotes.push(emoteselements[i].value);
        } 
    }   

    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "Email: " + email + "<br> Password:" + pass + "<br> Mood: " + emotes.join(", ") + "<br> Date: " + date + "<br> Gender: " + gender + "<br>Terima Kasih " + email;
    return false;
}
