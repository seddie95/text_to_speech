const speech = new SpeechSynthesisUtterance();

//set speech
speech.lang = "en";
speech.rate = 1;
speech.volume = 1;
speech.pitch = 1;




$(document).ready(function () {
    console.log(speechSynthesis.getVoices());
    $("#start").click(function (e) {
        e.preventDefault();
        let text = $("#text-input").val();
        if (text) {
            speechSynthesis.speak(new SpeechSynthesisUtterance(text));
        }
    })
})