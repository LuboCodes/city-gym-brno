$(document).ready(function(){
    // Lazy load
    $('img').lazyload();

    // Gets images sourse
    ////////////////////////////////////////////////////////////////////////////////////
    // Gym
    let gym = $(".gym img").map(function() {
        return $(this).attr("src");
    }).get();

    // Cardio
    let cardio = $(".cardio img").map(function() {
        return $(this).attr("src");
    }).get();

    // Women
    let women = $(".women img").map(function() {
        return $(this).attr("src");
    }).get();

    // Gym Background
    let background = $(".gym-background img").map(function() {
        return $(this).attr("src");
    }).get();

    // Glamour
    let glamour = $(".glamour img").map(function() {
        return $(this).attr("src");
    }).get();
    ////////////////////////////////////////////////////////////////////////////////////

    // Sets up current pic, category and position var
    let currentPic = "";
    let currentCategory = "";
    let currentPosition = 0;

    // Show up the show image div after click on the image
    ////////////////////////////////////////////////////////////////////////////////////
     $(".gallery img").click(function(){
        const imageSource = $(this).attr("src");
        currentPic = imageSource;
        $("#showedPic").attr("src", imageSource);
        $(".pictureShow").css("display", "flex");

        // Checks if the pic is in the gym category
        for (let i = 0; i < gym.length; i++) {
            if (gym[i] == currentPic) {
                currentCategory = "gym";
                currentPosition = i;
            }

            else if (cardio[i] == currentPic) {
                currentCategory = "cardio";
                currentPosition = i;
            }

            else if (women[i] == currentPic) {
                currentCategory = "women";
                currentPosition = i;
            }

            else if (background[i] == currentPic) {
                currentCategory = "background";
                currentPosition = i;
            }

            else if (glamour[i] == currentPic) {
                currentCategory = "glamour";
                currentPosition = i;
            }
        }

        console.log("Category: "+currentCategory+" | Position: "+currentPosition);
    });
    ////////////////////////////////////////////////////////////////////////////////////

    // Remove popped image
    ////////////////////////////////////////////////////////////////////////////////////
    $("#removePicButton").click(function(){
        $(".pictureShow").hide();
    });
    ////////////////////////////////////////////////////////////////////////////////////

    

    // Swapping between images to left
    ////////////////////////////////////////////////////////////////////////////////////
    $("#moveLeft").click(function() {
        if (currentPosition != 0) {
            currentPosition--; 
            $("#showedPic").attr("src", getCategoryArray()[currentPosition]);
        }
    });
    ////////////////////////////////////////////////////////////////////////////////////

    // Swapping between images to right
    ////////////////////////////////////////////////////////////////////////////////////
    $("#moveRight").click(function() {
        if (currentPosition < getCategoryArray().length) {
            currentPosition++; 
            $("#showedPic").attr("src", getCategoryArray()[currentPosition]);
        }
    });
    ////////////////////////////////////////////////////////////////////////////////////


    // Categories array
    ////////////////////////////////////////////////////////////////////////////////////
    function getCategoryArray () {
        if (currentCategory == "gym") {
            return gym;
        }

        else if (currentCategory == "cardio") {
            return cardio;
        }

        else if (currentCategory == "women") {
            return women;
        }

        else if (currentCategory == "background") {
            return background
        }

        else if (currentCategory == "glamour") {
            return glamour;
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////

});