/*
    this is the format used for both the scholarships and current events updater pages. Make changes as needed.
    You can copy-paste the content from this page to make new pages that have the same format as those pages.

    NOTICE how all three month function have the same code in them except for the code following the ` charecter 
    in the main.insert.AdjacentHTML("afterbegin", `) part. This will be where you insert the HTML code that you want 
    to webpage to display when the function is run.
*/

//updates information on current events page based on button input
//current through *insert last updated date here*

function past_month(){
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width>1033){
        var main = document.getElementById("current_desktop");
        console.log("desktop");
    }
    else{
        var main = document.getElementById("current_mobile");
        console.log("mobile");
    }
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",`
        <input id="searchbar" onkeyup="search_scholarship()" type="text" name="search" placeholder="Search scholarships.."> <!--optional searchbar-->
        past main content
        `
    );
} 

function current_month(){
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width>1033){
        var main = document.getElementById("current_desktop");
        console.log("desktop");
    }
    else{
        var main = document.getElementById("current_mobile");
        console.log("mobile");
    }
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",`
        current main content
        `
    );
} 

function future_month(){
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width>1033){
        var main = document.getElementById("current_desktop");
        console.log("desktop");
    }
    else{
        var main = document.getElementById("current_mobile");
        console.log("mobile");
    }
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",`
        future main content
        `
    );
}



