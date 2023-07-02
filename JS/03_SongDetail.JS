function detailA () {
if (_orginalSongName == "" || _orginalSongName == null) {
    console.log( "_orginalSongName Missing" )
} else {
    document.getElementById("orginalSongName").innerHTML = _orginalSongName ;
}
if (_orginalSongWriterName == "" || _orginalSongWriterName == null) {
    console.log( "_orginalSongWriterName Missing" )
} else {
    document.getElementById("orginalSongWriterName").innerHTML = _orginalSongWriterName ;
}

if ( _orginalKey == "" || _orginalKey == null) {
    console.log( "_orginalKey Missing" )
} else {
    document.getElementById("orginalKey").innerHTML = _orginalKey ;
}




if ( _BPM == "" || _BPM == null) {
    console.log( "_BPM Missing" )
} else {
    document.getElementById("BPM").innerHTML = _BPM ;
}


if ( _BPM < 110 ) {
    document.getElementById("tSlow").style.display = "flex";  
}
if ( _BPM > 150 ) {
    document.getElementById("tFast").style.display = "flex";  
}
if ( _BPM >= 110 && _BPM <= 150 ) {
    document.getElementById("tMedium").style.display = "flex";  
}

}