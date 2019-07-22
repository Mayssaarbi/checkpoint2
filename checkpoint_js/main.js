var text= document.getElementById("text");

function bold() {
    if(text.style.fontWeight=="normal") {
   text.style.fontWeight= "bold";
    }
    else {
  text.style.fontWeight= "normal";
    }
}
function italic() {
   // text.style.fontStyle= "normal";
    if(text.style.fontStyle=="normal") {
 text.style.fontStyle= "italic";
    }
    else
    {
    text.style.fontStyle= "normal" ;
    }
}
function underline() {
    //text.style.textDecoration= "normal";
    if (text.style.textDecoration=="none") {
    text.style.textDecoration= "underline";
    }
    else {
    text.style.textDecoration= "none";
    }
}
function changesize(elem) {
    text.style.fontSize= elem;
}
function changefamily(elem) {
    text.style.fontFamily= elem;
}