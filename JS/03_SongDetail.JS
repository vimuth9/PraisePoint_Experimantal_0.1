// ~~~~~~~~~~~~~~~~~~~~~~~~ JS to process song details ~~~~~~~~~~~~~~~~~~~~~~~~~
var _tempoTag; // Do Not Change This, id= tempoTag
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
        document.getElementById("orginalKeyOption").innerHTML = _orginalKey + " - Orginal Key";
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
    if (_oLanguage == "" || _oLanguage == null) {
        console.log("_oLanguage Missing")
    } else {
        document.getElementById("oLanguage").innerHTML = _oLanguage;
    }
    // Translator Avalability test
    if (_translator == "" || _translator == null) {
        console.log("_translator Missing")
        document.getElementById("translator").innerHTML = "Unknown";
    } else {
        document.getElementById("translator").innerHTML = _translator;
    }
    // Translation Language Avalability test
    if (_tLanguage == "" || _tLanguage == null) {
        console.log("_tLanguage Missing")
    } else {
        document.getElementById("tLanguage").innerHTML = _tLanguage;
    }


}

//~~~~~~~~~~~~~~~~~~~~~~~ JS to hide infor about Translation if the song has no translation avaailable~~~~~~~~~~~~~~~~~~~~~~~~~~~

function noTranslator(_noTranslation) {
    if (_noTranslation = true) {
        document.getElementById("translator_details").style.display = "none";
        console.log("this song is not a translation this is a orginal song")
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~ JS to show more infor about the song in mobile view ~~~~~~~~~~~~~~~~~~~~~~~~~~~

function detailB() {
    var moreInfo = document.getElementById("moreInfo");
    var mobileMoreInfo1 = document.getElementById("mobile_more_info1");
    var mobileMoreInfo2 = document.getElementById("mobile_more_info2");
    if (mobileMoreInfo1.style.display == "none" || mobileMoreInfo2.style.display == "none") {
        moreInfo.style.transform = "rotate(180deg)";
        mobileMoreInfo1.style.display = "grid";
        mobileMoreInfo2.style.display = "grid";
        decisionTranslatorShow();
        console.log("show / expands all the unwanted details about the song");
    } else {
        moreInfo.style.transform = "rotate(0deg)";
        mobileMoreInfo1.style.display = "none";
        mobileMoreInfo2.style.display = "none";
        decisionTranslatorHide();
        console.log("hides /collaps all the unwanted details about the song");
    }
}

function decisionTranslatorShow() {
    if (_noTranslation === false) {
        translator_details.style.display = "grid";
        console.log("expand succeed -this a translation of a another song which is composed by the writer");
    }
}

function decisionTranslatorHide() {
    if (_noTranslation === false) {
        translator_details.style.display = "none";
        console.log("collaps succeed-this a translation of a another song which is composed by the writer");

    }
}

// ```````````````````` Chords Lyrics Nav Javascript ````````````````````````
function PraisePoint_Chords() {
    Transpose_Controller.style.visibility = "visible";
    for (const Chord_Line of Chord_Lines) {
      Chord_Line.style.display = "flex";
    }
    // console.log("Show Chords Transpose Controlls");
  }
  
  function PraisePoint_Lyrics() {
    Transpose_Controller.style.visibility = "hidden";
    for (const Chord_Line of Chord_Lines) {
      Chord_Line.style.display = "none";
    }
    // console.log("Hide Chords Transpose Controlls");
  }
  