$("document").ready (function() {
    console.log("It´s working")

    let color = "purple";
    let number = 100;
    let word = "cool";

    if (color === "purple") {
    $(".NorthSide").css("background",color);
    };
   
    if (number >= 100) {
        $(".EastSide").text("whoah, that's a big number.")
        $(".EastSide").css("height","70px")
    }
    else {
        $(".EastSide").text("just a regular number, please.")
        $(".EastSide").css("height","55px")
    };

    if (word ==="cool") {
        $(".SouthhSide").text("Power of DOM")
    }
    else {
        $(".WestSide").text("Power of DOM")
    };


    
});