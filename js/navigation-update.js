const parts = ["title", "about-us", "place", "timetable", "gallery", "pricing", "news"]

$(function() {
    $(window).on("scroll", function() {
        let scrollPosition = $(window).scrollTop();

        for (let i = 0; i < parts.length; i++) {
            let elementPosition = $("#"+parts[i]).position().top;
            console.log("Scroll: "+scrollPosition);
            console.log("Element: "+elementPosition);
            if ((Math.round(scrollPosition) - Math.round(elementPosition)) < 50 && (Math.round(scrollPosition) - Math.round(elementPosition)) > 0) {

                for (let j = 0; j < parts.length; j++) {
                    if ($("#nav-"+parts[j]).attr("class") == "active") {
                        $("#nav-"+parts[j]).removeAttr("class");
                    }
                }
                

                $("#nav-"+parts[i]).attr("class", "active");
            }
        }
    });
});