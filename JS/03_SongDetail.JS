// ~~~~~~~~~~~~~~~~~~~~~~~~ JS to process song details ~~~~~~~~~~~~~~~~~~~~~~~~~

function detailA() {
    // Orginal Song Name Availability test
    if (_orginalSongName == "" || _orginalSongName == null) {
        console.log("_orginalSongName Missing")
    } else {
        document.getElementById("orginalSongName").innerHTML = _orginalSongName;
    }
    // Orginal song writer Avalability test
    if (_orginalSongWriterName == "" || _orginalSongWriterName == null) {
        console.log("_orginalSongWriterName Missing")
        document.getElementById("orginalSongWriterName").innerHTML = "Unknown";
    } else {
        document.getElementById("orginalSongWriterName").innerHTML = _orginalSongWriterName;
    }
    // Orginal key Avalability test
    if (_orginalKey == "" || _orginalKey == null) {
        console.log("_orginalKey Missing")
    } else {
        document.getElementById("orginalKey").innerHTML = _orginalKey;
    }
    //BPM Number checker
    if (_BPM == "" || _BPM == null) {
        console.log("_BPM Missing")
    } else {
        document.getElementById("BPM").innerHTML = _BPM;
    }
    //Tempo tag acording to the Tempo
    if (_BPM < 110) {
        document.getElementById("tSlow").style.display = "flex";
    }
    if (_BPM > 150) {
        document.getElementById("tFast").style.display = "flex";
    }
    if (_BPM >= 110 && _BPM <= 150) {
        document.getElementById("tMedium").style.display = "flex";
    }
    // Orginal song Language Avalability test
    if ( _oLanguage == "" || _oLanguage == null) {
        console.log("_oLanguage Missing")
    } else {
        document.getElementById("oLanguage").innerHTML = _oLanguage;
    }
    // Translator Avalability test
    if ( _translator == "" || _translator == null) {
        console.log("_translator Missing")
        document.getElementById("translator").innerHTML = "Unknown";
    } else {
        document.getElementById("translator").innerHTML = _translator;
    }
    // Translation Language Avalability test
    if ( _tLanguage == "" || _tLanguage == null) {
        console.log("_tLanguage Missing")
    } else {
        document.getElementById("tLanguage").innerHTML = _tLanguage;
    }

}
//~~~~~~~~~~~~~~~~~~~~~~~ JS to hide infor about Translation if the song has no translation avaailable~~~~~~~~~~~~~~~~~~~~~~~~~~~
function noTranslator() {
    document.getElementById("")
}
//~~~~~~~~~~~~~~~~~~~~~~~` JS to show more infor about the song ~~~~~~~~~~~~~~~~~~~~~~~~~~~

function detailB() {
    document.getElementById("moreInfo").style.transform = "rotate(180deg)";
}
