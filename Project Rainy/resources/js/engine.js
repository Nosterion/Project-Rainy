//*******Gallery*******//

$(".gallery-pictures").on("click", function () {
    var modifiedPath = $(this).attr("src");
    var modifiedAlt = $(this).attr("alt");
    if (modifiedPath.slice(-5) == "B.JPG") {
        modifiedPath = modifiedPath.slice(0, -5) + "P.JPG";
        modifiedAlt = modifiedAlt.slice(0, -5) + "Pencil";
    } else if (modifiedPath.slice(-5) == "P.JPG") {
        modifiedPath = modifiedPath.slice(0, -5) + "O.JPG";
        modifiedAlt = modifiedAlt.slice(0, -6) + "Oil";
    } else {
        modifiedPath = modifiedPath.slice(0, -5) + "B.JPG";
        modifiedAlt = modifiedAlt.slice(0, -3) + "Basic";
    }

    $(this).attr("src", modifiedPath);
    $(this).attr("alt", modifiedAlt);
});

/*****One click transform********/

$("#transform-button").on("click", function () {
    var sourceExists = true;
    var i = 0;
    while (sourceExists) {
        
        if ($(".gallery-pictures:eq("+i+")").attr("src").length) {
            var modifiedPath = $(".gallery-pictures:eq("+i+")").attr("src");
            var modifiedAlt = $(".gallery-pictures:eq("+i+")").attr("alt");
            if (modifiedPath.slice(-5) == "B.JPG") {
                modifiedPath = modifiedPath.slice(0, -5) + "P.JPG";
                modifiedAlt = modifiedAlt.slice(0, -5) + "Pencil";
            } else if (modifiedPath.slice(-5) == "P.JPG") {
                modifiedPath = modifiedPath.slice(0, -5) + "O.JPG";
                modifiedAlt = modifiedAlt.slice(0, -6) + "Oil";
            } else {
                modifiedPath = modifiedPath.slice(0, -5) + "B.JPG";
                modifiedAlt = modifiedAlt.slice(0, -3) + "Basic";
            }
            $(".gallery-pictures:eq("+i+")").attr("src", modifiedPath);
            $(".gallery-pictures:eq("+i+")").attr("alt", modifiedAlt);
            i++;
        } else sourceExists = false;
        
    }
});



