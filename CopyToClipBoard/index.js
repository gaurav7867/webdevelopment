console.log("Copy To clipboard");

let copyText = document.getElementById("myInput");
let Btn = document.getElementById("CopyToClipBoard-btn");
let Paragraph = document.getElementById("paragraph");
let Value;

Btn.addEventListener("click", CopyTextFunc);

function CopyTextFunc() {
    // console.log("Function Called");
    Value = copyText.value;
     copyText.select();
     copyText.setSelectionRange(0,99999);
     navigator.clipboard.writeText(copyText.value);
     alert("Your text has been copied.");
}

