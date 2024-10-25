//updates information on scholarship page based on button input
//current through 10/23

function august(){
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
        <h2>August Events</h2>
        <ul>
            <li>
            Scientists have recently discovered a rare hyper-velocity star that is moving so fast it could escape the milky way. 
            <a href="https://www.cnn.com/2024/08/21/science/hypervelocity-star-escape-milky-way/index.html">https://www.cnn.com/2024/08/21/science/hypervelocity-star-escape-milky-way/index.html</a>
            </li>
            <li>
            Monkey pox vaccines arrive in Africa to combat local outbreaks
            <a href="https://www.google.com/amp/s/www.bbc.com/news/articles/cd734115e5eo.amp">https://www.google.com/amp/s/www.bbc.com/news/articles/cd734115e5eo.amp</a>
            </li>
            <li>
            A drug used to treat Type 2 diabetes and obesity could also slow down the process of ageing. 
            <a href="https://www.bbc.com/news/articles/ce81j919gdjo">https://www.bbc.com/news/articles/ce81j919gdjo</a>
            </li>
        </ul>`
    );
} 

function september(){
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
        <h2>September Events</h2>
        <ul>
            <li>
                Hurricane  Francine is headed towards Louisiana.
                <a href="https://www.cnn.com/2024/09/10/weather/tropical-storm-francine-hurricane-forecast-climate-tuesday/index.html">https://www.cnn.com/2024/09/10/weather/tropical-storm-francine-hurricane-forecast-climate-tuesday/index.html</a>
            </li>
            <li>
                Hawaii's Kilauea volcano, one of the most active in the world, is erupting again. Prompting a volcano watch alert in surrounding areas.
                <a href="https://abcnews.go.com/US/kilauea-volcano-erupting-remote-area-hawaii-volcanoes-national/story?id=113806533">ttps://abcnews.go.com/US/kilauea-volcano-erupting-remote-area-hawaii-volcanoes-national/story?id=113806533</a>
            </li>
            <li>
                Marcellus William was executed for allegedly breaking into a women's home and stabbing her 43 times. However there was evidence of his 
                innocence and the victim's family did not want him to face the death penalty.   
                <a href="https://www.cbsnews.com/news/marcellus-williams-execution-supreme-court-stay-denied/">https://www.cbsnews.com/news/marcellus-williams-execution-supreme-court-stay-denied/</a>     
        </ul>`
    );
} 

function october(){
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
        <h2> October Events </h2>
        <ul>
            <li>
                Jaelan Phillips injured a knee on Monday and ruptured his Achilles last year
                <a href="https://www.foxnews.com/sports/dolphins-linebacker-pens-heartfelt-message-after-suffering-season-ending-injury-second-year-row">https://www.foxnews.com/sports/dolphins-linebacker-pens-heartfelt-message-after-suffering-season-ending-injury-second-year-row</a>
            </li>
            <li>
                Hurricane Milton, a category 5 hurricane, is breaking records and pushing limits even before landfall.
                <a href="https://www.nbcchicago.com/weather/hurricane-milton-approaches-limits-of-what-earths-atmosphere-can-produce/3567381/%3Famp=1">https://www.nbcchicago.com/weather/hurricane-milton-approaches-limits-of-what-earths-atmosphere-can-produce/3567381/%3Famp=1</a>
            </li>
            <li>
                Scientists have made progress in forecasting earthquakes in California by identifying subtle seismic patterns that could help predict major quakes more accurately.
                <a href="https://www.cnn.com/2024/10/16/climate/california-earthquake-prediction/index.html">https://www.cnn.com/2024/10/16/climate/california-earthquake-prediction/index.html</a>
            </li>
            <li>
                Moldova votes to join EU by a narrow margin
                <a href="https://www.bbc.com/news/articles/c1wnr5qdxe7o.amp">https://www.bbc.com/news/articles/c1wnr5qdxe7o.amp</a>
            </li>
        </ul>`
    );
}
