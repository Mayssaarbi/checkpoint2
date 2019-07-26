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

$(".imgbutton").mouseenter(function () {
$(this).find(".btn").css("display","inline");
$(this).find(".animated").css("opacity","0.5");
});


$(".imgbutton").mouseleave(function () {    
$(this).find(".btn").css("display","none");
$(this).find(".animated").css("opacity","1");

});

$(".btn").click(function() {
// $(".modal").css("display","inline");
$(".modal").show();
});
$("i").click(function() {
   //  $(".modal").css("display","none");
   $(".modal").hide();
});

$(".imgbtn").mouseenter(function () {
    $(this).find(".btn2").css("display","inline");
    $(this).find(".small").css("opacity","0.6");
    });
        $(".imgbtn").mouseleave(function () {
   $(this).find(".btn2").css("display","none");
   $(this).find(".small").css("opacity","1");
   });

   $(".btn2").click(function() {
    // $(".modal").css("display","inline");
    $(".modal").show();
    });
    $("i").click(function() {
       //  $(".modal").css("display","none");
       $(".modal").hide();
    });

    