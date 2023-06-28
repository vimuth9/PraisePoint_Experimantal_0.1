$(document).ready(function (x) {});

var _currentKey = "";
var isChordTransposeEnabled = false;

function initTranspose(_originalKey) {


    if (_originalKey == "" || _originalKey == null) {
        // alert("Original Key not specified");
        return;
    }

    isChordTransposeEnabled = true;
    showTransposeControls();


    $("#keySelector").val(_originalKey);

    $(".chordProContainer div.chord-pro-note").each(function () {

        var text = $(this).text();
        //normalize a few known issues...
        text = text.replace("/ /", "//");

        // console.log(text);
        //  $(this).text(text); 
    });

    convertToNumbers(_originalKey);
}

function showTransposeControls() {
    if (isChordTransposeEnabled) {
        $(".transposeControls").show();
    }
}

function convertToNumbers(key) {

    //Get the number chart for this key 
    var numberChart = getNumberChartForKey(key);
    if (numberChart == null) {
        // console.log("Cannot find a number chart for this key", key);
        return;
    }

    transpose(numberChart);
}

function transposeByKey(tElement) {
    var key = $(tElement).val();
    //console.clear();
    //console.log("transpose by key", key);

    var showNumbers = (key == "Numbers"); //Boolean to indicate if we should just show the numbers instead of chord
    var showDoReMi = (key == "Do Re Mi"); //Boolean to indicate if we should show do re mi notation

    //console.log(key);
    if (showNumbers) {
        displayNumbers();
        return;
    } else if (showDoReMi) {
        displayDoReMi();
        return;
    }

    //Get the number chart for this key 
    var numberChart = getNumberChartForKey(key);
    if (numberChart == null) {
        //console.error("Cannot find a number chart for this key", key);
        return;
    }

    $(".chordProContainer div.chord-pro-note .matchedChord").each(function () {

        var chordnumber = $(this).attr("chordnumber");
        var result = convertNumberToChord(chordnumber, numberChart);
        // console.log("convertNumberToChord", chordnumber, result);
        $(this).text(result);

    });
}

function displayNumbers() {

    $(".chordProContainer div.chord-pro-note .matchedChord").each(function () {

        var chordnumber = $(this).attr("chordnumber");
        if (chordnumber != "???") {
            $(this).text(chordnumber);
        } else {
            $(this).text("");
        }
    });
}

function displayDoReMi() {

    var DoReMi = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Ti"];

    $(".chordProContainer div.chord-pro-note .matchedChord").each(function () {

        var chordnumber = DoReMi[$(this).attr("chordnumber") - 1];
        $(this).text(chordnumber);

    });
}

function getNumberChartForKey(key) {

    var matchingChart = numberCharts.filter(function (x) {
        return x[0] == key
    });
    if (matchingChart.length == 1) {
        //yes, there is a a direct hit. 
        var chart = matchingChart[0][1];
        return chart;
    }
    return null;
}

function transpose(numberChart) {

    $(".chordProContainer div.chord-pro-note").each(function () {

        var text = $(this).text();

        if (text != undefined && text != "") {

            //text = text.split("|").join(""); // Remove any pipes

            text = text.replace(/\/\/\/\//g, "----~"); //replaces a 4X slash
            text = text.replace(/\/\/\//g, "---~"); //replaces a triple slash      
            text = text.replace(/\/\//g, "__~"); //replaces a double slash
            text = text.replace(/ /g, "X"); //replace any space with X


            var notePartsWithSpaces = text.split("X");
            //    console.group("text", text);
            //   console.log("notePartsWithSpaces", notePartsWithSpaces);

            for (var b = 0; b < notePartsWithSpaces.length; b++) {

                var noteParts = notePartsWithSpaces[b].split("~");

                //      console.group("noteParts", noteParts);

                for (var noteIndex = 0; noteIndex < noteParts.length; noteIndex++) {

                    var notePart = noteParts[noteIndex];
                    //         console.log("index: " + noteIndex, "Chord at position:" + notePart);

                    if (isStringASpecialCharacter(notePart)) {
                        //do nothing, don't change the notePart variable 
                    } else {
                        notePart = transposeChordGroup(noteParts[noteIndex], numberChart);
                    }

                    noteParts[noteIndex] = notePart;
                }

                //      console.groupEnd();

                notePartsWithSpaces[b] = noteParts.join("~");
            }
            //    console.log(notePartsWithSpaces);
            //     console.groupEnd();

            text = notePartsWithSpaces.join(" ");
            text = text.replace(/----~/g, "////");
            text = text.replace(/---~/g, "///");
            text = text.replace(/__~/g, "//");

        }

        $(this).html(text);
    });


    //console.log("DONE");
}

function isStringASpecialCharacter(string) {
    var result = specialCharacters.filter(function (x) {
        return x == string
    }).length > 0;
    // console.log("Checking for special character", string, result);
    return result;
}

var specialCharacters = [];
specialCharacters.push("|");
specialCharacters.push("_");
specialCharacters.push("__");
specialCharacters.push("-");
specialCharacters.push("---");
specialCharacters.push("----");
specialCharacters.push("/");
specialCharacters.push("//");
specialCharacters.push("///");
specialCharacters.push("\\");
specialCharacters.push("\\\\");
specialCharacters.push("\\\\\\");

function transposeChordGroup(text, numberChart) {

    if (text == undefined || text == "") return text;

    var chordParts = text.split("/");

    //console.group("transposeChordGroup", chordParts);

    for (var s = 0; s < chordParts.length; s++) {
        chordParts[s] = getNextElement(chordParts[s], numberChart);
    }

    //console.groupEnd();

    return chordParts.join("/");

}

function getNextElement(chordText, numberChart) {


    var originalChord = chordText;
    var matchedChord = "";

    //See if we have a direct match
    var matchingChords = chords.filter(function (x) {
        return chordText == x
    });
    if (matchingChords.length == 1) {
        //yes, there is a a direct hit.
        matchedChord = matchingChords[0];
        // console.log("direct hit", matchedChord);
    } else {
        //We probably have a suffix here, get a fuzzy match
        var matchingChords = chords.filter(function (x) {
            return chordText.startsWith(x)
        });

        if (matchingChords.length == 1) {
            matchedChord = matchingChords[0];
            //  console.log("fuzzy hit", matchedChord);
        } else if (matchingChords.length == 2) {
            matchedChord = matchingChords.filter(function (x) {
                return chordText.substr(0, 2) == x.substr(0, 2)
            })[0];
            //  console.log("fuzzy multiple hits", matchedChord);
        } else if (matchingChords.length == 0) {
            //     console.log("NO MATCHING CHORDS FOUND FOR: " + originalChord);
        }

    }

    var ignoredSuffix = "";
    if (chordText != matchedChord) {
        //There must be a suffix on this chord (sus, maj7, etc...)
        ignoredSuffix = chordText.substr(matchedChord.length);
        // console.log("ignoredSuffix", ignoredSuffix, matchedChord.length, chordText, matchedChord);
    }

    var chord = matchedChord;
    //convert the result into the corresponding number
    var chordNumber = convertChordToNumber(numberChart, chord);

    //console.log("originalChord: " + originalChord, "matched chord:", matchedChord, "chordNumber: " + chordNumber);

    /*
    var targetIndex = array.indexOf(matchedChord) + direction;         
 
    if (targetIndex < 0) {
        //return the last element in the list...
        targetIndex = array.length - 1;
    } else if (targetIndex >= array.length) {
        //return the first element in the array..
        targetIndex = 0;
    }                                                                                                                                                   
 
    var result = array[targetIndex];
    if (result == undefined) {
        //console.log("cannot find the next chord for original chord:" + matchedChord);
        return "?";
    };
 
    //console.log("New Chord:", result);
 
    result = cleanupChord(ignoreC, result);
    //console.log("Chord after being adjusted for C:", result);
                             
    //console.groupEnd();
 
    //Cleanup: The suffix should not have a flat or sharp...   
    if (ignoredSuffix != "") {
        ignoredSuffix = removeFlatsAndSharps(ignoredSuffix);
    }
*/
    return "<span class='matchedChordContainer'><span class='matchedChord' chordNumber='" + chordNumber + "'>" + chord + "</span><span class='suffix'>" + ignoredSuffix + "</span></span>";
}

function convertChordToNumber(numberChart, chord) {

    var chordNumber = "???";

    // console.log("convertChordToNumber: " + chord, numberChart);
    var matchingChord = numberChart.filter(function (x) {
        return x[0] == chord
    });
    if (matchingChord.length == 1) {
        chordNumber = matchingChord[0][1];
    } else {
        //   console.error("could not find a matching chord in the number chart", numberChart, chord);
    }

    return chordNumber;

}


function convertNumberToChord(numberSymbol, numberChart) {

    var chordNumber = "VVV";

    if (numberSymbol == "???") return "";

    // console.log("convertNumberToChord", numberSymbol, numberChart);
    var matchingChord = numberChart.filter(function (x) {
        return x[1] == numberSymbol
    });
    if (matchingChord.length == 1) {
        chordNumber = matchingChord[0][0];
    } else {
        //  console.error("could not find a matching chord in the number chart", numberChart, numberSymbol);
    }

    //  console.log("convertNumberToChord finished", numberSymbol, chordNumber);
    return chordNumber;
}

var chords = ["A",
    "A#",
    "Bb",
    "B",
    "C",
    "C#",
    "Db",
    "D",
    "D#",
    "Eb",
    "E",
    "F",
    "F#",
    "Gb",
    "G",
    "G#",
    "Ab"
];



var numberCharts = [
    ["Ab",
        [
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
        ]
    ],
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