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
function transposeControler() {
}
function orginalKeyHandler() {
}

function transpose () {
    // console.log("keySelector Changed");
    
}
