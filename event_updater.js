//updates information on scholarship page based on button input

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
        </ul>`
    );
} 
