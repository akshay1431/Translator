var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector('#txt-input');
var output = document.querySelector('#output');


var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error)
}

function clickHandler() {
    var inputText = txtInput.value; //Input

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(Response => Response.json())
        .then(json => {
            var Translatedtxt = json.contents.translated;
            output.innerHTML = Translatedtxt; //output
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener('click', clickHandler)