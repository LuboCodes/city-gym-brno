let showed = 0;

function ham () {

    ///////////////////
    /*|Gets elements|*/
    ///////////////////

    // Hamburger menu button
    const ham = document.getElementById('ham-button');

    //Offcanvas
    const offcanvas = document.getElementById('offcanvas');

    //////////////////////////////
    /*| If offcanvas is hidden |*/
    //////////////////////////////
    if (showed == 0) {
        
        // Adds class to ham button
        ham.classList.add("active");
        ham.classList.remove("normal");

        // Translates offcanvas
        offcanvas.classList.add("offcanvas-transformed");

        // Set showed to 1
        showed++;
    }

    //////////////////////////////
    /*| If offcanvas is showed |*/
    //////////////////////////////
    else {

        // Removes class from ham button 
        ham.classList.remove("active");
        ham.classList.add("normal");

        // Translates offcanvas
        offcanvas.classList.remove("offcanvas-transformed");

        // Set showed to 0
        showed--;
    }
}