let screenDisplay = document.getElementById("screen")


function btnClic(val) {
    screenDisplay.value += val;
    console.log(val);
}

function clearVaal() {
    screenDisplay.value = "";
    console.log("In clear")
}


function answer() {
    console.log(eval.screenDisplay);
    let ans= eval.screenDisplay;
    screenDisplay.value = ans;
} 