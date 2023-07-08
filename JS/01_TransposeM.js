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


//Transposing algorithum
function transpose() {
    var originalKey = document.getElementById("orginalKeySelector").value;
    var transposedKey = document.querySelector('[name="Transpose"]').value;
  
    var originalIndex = chords.indexOf(originalKey);
    var transposedIndex = chords.indexOf(transposedKey);
  
    var transposedChords = [];
    var chordsLine = document.querySelector('.PraisePoint_Chords_Line').textContent;
    var chordsArray = chordsLine.trim().split(' ');
  
    for (var i = 0; i < chordsArray.length; i++) {
      var chord = chordsArray[i];
      var chordIndex = chords.indexOf(chord);
  
      if (chordIndex !== -1) {
        var transposedChordIndex = (chordIndex - originalIndex + transposedIndex + chords.length) % chords.length;
        var transposedChord = chords[transposedChordIndex];
        transposedChords.push(transposedChord);
      } else {
        transposedChords.push(chord);
      }
    }
  
    var transposedChordsLine = transposedChords.join(' ');
  
    document.querySelector('.PraisePoint_Chords_Line').textContent = transposedChordsLine;
  }
  
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var chords = ["A","A#","Bb","B","C","C#","Db","D","D#","Eb","E","F","F#","Gb","G","G#","Ab"];

var numberCharts = [
    ["Ab", [
        ["Ab", 1],
        ["Bb", 2],
        ["Cb", "♭3"],
        ["C", 3],
        ["Db", 4],
        ["D", "#4"],
        ["Eb", 5],
        ["E", "♭6"],
        ["F", 6],
        ["Gb", "♭7"],
        ["G", 7],
    ]],
    ["A",
        [
            ["A", "1"],
            ["B", "2"],
            ["C", "♭3"],
            ["C#", "3"],
            ["D", "4"],
            ["D#", "#4"],
            ["E", "5"],
            ["F", "♭6"],
            ["F#", "6"],
            ["G", "♭7"],
            ["G#", "7"],
        ]
    ],
    ["A#",
        [
            ["A#", "1"],
            ["C", "2"],
            ["Db", "♭3"],
            ["D", "3"],
            ["D#", "4"],
            ["E", "#4"],
            ["F", "5"],
            ["Gb", "♭6"],
            ["G", "6"],
            ["Ab", "♭7"],
            ["A", "7"],
        ]
    ],
    ["Bb",
        [
            ["Bb", "1"],
            ["C", "2"],
            ["Db", "♭3"],
            ["D", "3"],
            ["Eb", "4"],
            ["E", "#4"],
            ["F", "5"],
            ["Gb", "♭6"],
            ["G", "6"],
            ["Ab", "♭7"],
            ["A", "7"],
        ]
    ],
    ["B",
        [
            ["B", "1"],
            ["C#", "2"],
            ["D", "♭3"],
            ["D#", "3"],
            ["E", "4"],
            ["F", "#4"],
            ["F#", "5"],
            ["G", "♭6"],
            ["G#", "6"],
            ["A", "♭7"],
            ["A#", "7"],
        ]
    ],
    ["Cb",
        [
            ["Cb", "1"],
            ["Db", "2"],
            ["D", "♭3"],
            ["Eb", "3"],
            ["E", "4"],
            ["F", "#4"],
            ["Gb", "5"],
            ["G", "♭6"],
            ["Ab", "6"],
            ["A", "♭7"],
            ["Bb", "7"],
        ]
    ],
    ["C",
        [
            ["C", "1"],
            ["D", "2"],
            ["Eb", "♭3"],
            ["E", "3"],
            ["F", "4"],
            ["F#", "#4"],
            ["G", "5"],
            ["Ab", "♭6"],
            ["A", "6"],
            ["Bb", "♭7"],
            ["B", "7"],
        ]
    ],
    ["C#",
        [
            ["C#", "1"],
            ["D#", "2"],
            ["E", "♭3"],
            ["F", "3"],
            ["F#", "4"],
            ["G", "#4"],
            ["G#", "5"],
            ["A", "♭6"],
            ["A#", "6"],
            ["Cb", "♭7"],
            ["C", "7"],
        ]
    ],
    ["Db",
        [
            ["Db", "1"],
            ["Eb", "2"],
            ["E", "♭3"],
            ["F", "3"],
            ["Gb", "4"],
            ["G", "#4"],
            ["Ab", "5"],
            ["A", "♭6"],
            ["Bb", "6"],
            ["Cb", "♭7"],
            ["C", "7"],
        ]
    ],
    ["D",
        [
            ["D", "1"],
            ["E", "2"],
            ["F", "♭3"],
            ["F#", "3"],
            ["G", "4"],
            ["G#", "#4"],
            ["A", "5"],
            ["Bb", "♭6"],
            ["B", "6"],
            ["C", "♭7"],
            ["C#", "7"],
        ]
    ],
    ["D#",
        [
            ["D#", "1"],
            ["F", "2"],
            ["Gb", "♭3"],
            ["G", "3"],
            ["G#", "4"],
            ["A", "#4"],
            ["A#", "5"],
            ["B", "♭6"],
            ["C", "6"],
            ["Db", "♭7"],
            ["D", "7"],
        ]
    ],
    ["Eb",
        [
            ["Eb", "1"],
            ["F", "2"],
            ["Gb", "♭3"],
            ["G", "3"],
            ["Ab", "4"],
            ["A", "#4"],
            ["Bb", "5"],
            ["Cb", "♭6"],
            ["C", "6"],
            ["Db", "♭7"],
            ["D", "7"],
        ]
    ],
    ["E",
        [
            ["E", "1"],
            ["F#", "2"],
            ["G", "♭3"],
            ["G#", "3"],
            ["A", "4"],
            ["A#", "#4"],
            ["B", "5"],
            ["C", "♭6"],
            ["C#", "6"],
            ["D", "♭7"],
            ["D#", "7"],
        ]
    ],
    ["F",
        [
            ["F", "1"],
            ["G", "2"],
            ["Ab", "♭3"],
            ["A", "3"],
            ["Bb", "4"],
            ["B", "#4"],
            ["C", "5"],
            ["Db", "♭6"],
            ["D", "6"],
            ["Eb", "♭7"],
            ["E", "7"],
        ]
    ],
    ["F#",
        [
            ["F#", "1"],
            ["G#", "2"],
            ["A", "♭3"],
            ["A#", "3"],
            ["B", "4"],
            ["C", "#4"],
            ["C#", "5"],
            ["D", "♭6"],
            ["D#", "6"],
            ["E", "♭7"],
            ["F", "7"],
        ]
    ],
    ["Gb",
        [
            ["Gb", "1"],
            ["Ab", "2"],
            ["A", "♭3"],
            ["Bb", "3"],
            ["Cb", "4"],
            ["C", "#4"],
            ["Db", "5"],
            ["D", "♭6"],
            ["Eb", "6"],
            ["E", "♭7"],
            ["F", "7"],
        ]
    ],
    ["G",
        [
            ["G", 1],
            ["A", 2],
            ["Bb", "♭3"],
            ["B", 3],
            ["C", 4],
            ["C#", "#4"],
            ["D", 5],
            ["Eb", "♭6"],
            ["E", 6],
            ["F", "♭7"],
            ["F#", 7],
        ]
    ],
    ["G#",
        [
            ["G#", "1"],
            ["A#", "2"],
            ["Cb", "♭3"],
            ["C", "3"],
            ["C#", "4"],
            ["D", "#4"],
            ["D#", "5"],
            ["E", "♭6"],
            ["F", "6"],
            ["Gb", "♭7"],
            ["G", "7"],
        ]
    ]
];
