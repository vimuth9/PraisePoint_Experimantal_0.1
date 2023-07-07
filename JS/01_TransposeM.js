// ```````````````````` Chords Lyrics Nav Javascript ````````````````````````
function PraisePoint_Chords() {
    Transpose_Controller.style.display = "flex";
    for (const Chord_Line of Chord_Lines) {
        Chord_Line.style.display = "flex";
    }
    console.log("Show Chords Transpose Controlls")
}

function PraisePoint_Lyrics() {
    Transpose_Controller.style.display = "none";
    for (const Chord_Line of Chord_Lines) {
        Chord_Line.style.display = "none";
    }
    console.log("Hide Chords Transpose Controlls")


}

// ```````````````````` Transposer Javascript ````````````````````````
//
function preTranspose() {
    var _currentKey = _orginalKey;
    currentKeyToNum();
    console.log( "currentkey is " + _currentKeyNum )

}

// currentkey to currentKeyNumber - chart and 
function currentKeyToNum() {
    console.log("current key is" + _curentKey)
    console.log("current key is" + _currentKeyNum )

}
function chordNumberToChords() {
    
}

//Transposing algorithum
function transpose() {
    console.log("keySelector Changed Transpose");

}
