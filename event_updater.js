//updates information on current events page based on button input
//current through 4/16

//check /static/templates/sample.updater for information on how these work
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
            <li>
                A new 3D map showcases filaments being released from the remnants of a supernova
                <a href="https://www.cnn.com/2024/10/30/science/dandelion-supernova-filament-map/index.html">https://www.cnn.com/2024/10/30/science/dandelion-supernova-filament-map/index.html</a>
            </li>
        </ul>`
    );
}

function november(){
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
        <h2> November Events </h2>
        <ul>
            <li>
                <a href="https://www.cnn.com/2024/11/06/politics/heres-what-trump-is-proposing-for-the-economy/index.html">https://www.cnn.com/2024/11/06/politics/heres-what-trump-is-proposing-for-the-economy/index.html</a> <br>
                Trump based his campaign on driving down inflation and improving the economy. Here's what he plans to do. 
            </li>
            <li>
                <a href="https://www.outkick.com/sports/volleyball-players-sue-mountain-west-first-amendment-outkick-exclusive">https://www.outkick.com/sports/volleyball-players-sue-mountain-west-first-amendment-outkick-exclusive</a> <br>
                A group of female volleyball players from the Mountain West Conference has filed a lawsuit alleging First Amendment and Title IX violations, claiming a new policy restricting their speech arose from controversy surrounding a transgender player on a San Jose State team.
            </li>
            <li>
                <a href="https://apnews.com/article/congo-rebel-group-m23-ethnic-cleansing-2b3bfa6357fca88804e865db7912377b">https://apnews.com/article/congo-rebel-group-m23-ethnic-cleansing-2b3bfa6357fca88804e865db7912377b</a> <br>
                Congo accuses rebel group of ‘ethnic cleansing’ in country’s east.
            </li>
        </ul>`
    );
}  

function december(){
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
        <h2> December Events </h2>
        <ul>
            <li>
                <a href="https://www.cnn.com/2024/12/04/science/ancient-needles-discovery-wyoming/index.html">https://www.cnn.com/2024/12/04/science/ancient-needles-discovery-wyoming/index.html</a> <br>
                Archaeologists excavated part of the La Prele archaeological site in 2016. They found needles made from bones of the red fox and wild cat
            </li>
            <li>
                <a href="https://www.aljazeera.com/opinions/2024/12/11/georgia-has-set-a-precedent-that-could-undermine-eu-enlargement">https://www.aljazeera.com/opinions/2024/12/11/georgia-has-set-a-precedent-that-could-undermine-eu-enlargement</a> <br>
                It has been two weeks since the start of anti-government protests in the country Georgia. The protests stem from the new President's decision to pull out of the EU. Georgia's unclear EU status may set a precedent of enjoying EU privileges without making any reforms.        
            </li>
        </ul>`
    );
}  

function january(){
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
        <h2> January Events </h2>
        <ul>
            <li>
                <a href = "https://www.cnn.com/2024/12/18/science/astronauts-space-delay-return/index.html">https://www.cnn.com/2024/12/18/science/astronauts-space-delay-return/index.html</a> <br>
                NASA astronauts Suni Williams and Butch Wilmore, who have been aboard the International Space Station since June 2024, will have their return to Earth delayed until at least late March 2025 due to the need for additional time to prepare a new SpaceX Dragon spacecraft.
            </li>
            <li>
                <a href = "https://www.bbc.com/news/articles/c878ryr04p8o">https://www.bbc.com/news/articles/c878ryr04p8o</a> <br>
                Leader of Canada's Liberal Party, Justin Trudeau, resigns due to growing disapproval of him and his party and pressure from the United States.
            </li>
            <li>
                <a href = "https://www.foxnews.com/us/californians-angry-devastating-wildfires-asking-where-high-tax-dollars-went-local-researcher">https://www.foxnews.com/us/californians-angry-devastating-wildfires-asking-where-high-tax-dollars-went-local-researcher</a> <br>
                Amid the ongoing devastation of wildfires in Los Angeles, many Californians are questioning how their high tax dollars are being allocated, as officials struggle to control the fires that have destroyed over 12,300 homes and caused at least 11 deaths
            </li>
            <li>
                <a href = "https://www.cnn.com/2025/01/21/business/mr-beast-buy-tiktok-ceo/index.html">https://www.cnn.com/2025/01/21/business/mr-beast-buy-tiktok-ceo/index.html</a>
                On the 19th TikTok got shut down before returning only 14 hours later. The shutdown was due to a bill stating that TikTok must be sold to a United States company in order to stay in the US. Mr. Beast wants to buy TikTok to keep it in the US.
            </li>
            <li>
                <a href = "https://www.foxweather.com/extreme-weather/north-carolina-wildfire-hurricane-helene">https://www.foxweather.com/extreme-weather/north-carolina-wildfire-hurricane-helene</a>
                Old Fort was devastated by Hurricane Helene in September. The town is still working to rebuild after flooding destroyed much of western North Carolina.
            </li>
        </ul>`
    );
}

function february(){
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
        <h2> February Events </h2>
        <ul>
            <li>
                <a href = "https://www.cnn.com/2025/02/05/science/lunar-grand-canyons-far-side-moon/index.html">https://www.cnn.com/2025/02/05/science/lunar-grand-canyons-far-side-moon/index.html</a> <br>
                Two long, deep lunar canyons can be seen radiating from the Schrödinger impact basin near the lunar south pole on the moon's far side. The image was captured by the Lunar Reconnaissance Orbiter.
            </li>
            <li>
                <a href = "https://www.cnn.com/2025/02/12/science/energetic-neutrino-particle-detection/index.html">https://www.cnn.com/2025/02/12/science/energetic-neutrino-particle-detection/index.html</a> <br>
                A Cubic Kilometre Neutrino Telescope, or KM3NeT, detection unit is shown before being lowered to the ocean floor in the Mediterranean Sea. 
            </li>
            <li>
                <a href = "https://www.cnn.com/2025/02/19/food/kfc-kentucky-headquarters-texas/index.html">https://www.cnn.com/2025/02/19/food/kfc-kentucky-headquarters-texas/index.html</a> <br>
                KFC, the fast food chain formerly known as Kentucky Fried Chicken, is leaving the state where it all began
            </li>
            <li>
                <a href = "https://www.cnn.com/2025/02/26/world/video/body-on-plane-qatar-airways-digvid">https://www.cnn.com/2025/02/26/world/video/body-on-plane-qatar-airways-digvid</a> <br>
                An Australian couple says they were on a flight from Melbourne to Doha when the cabin crew put the body of a passenger who had died next to them
            </li>
        </ul>

    `);
}

function march(){
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
        <h2> March Events </h2>
        <ul>
            <li>
                <a href="https://www.cnn.com/2025/03/05/weather/storm-tornado-blizzard-fire-outage-hnk/index.html">https://www.cnn.com/2025/03/05/weather/storm-tornado-blizzard-fire-outage-hnk/index.html</a> <br>
                Workers walk outside a damaged warehouse after storms moved through Lewisville, Texas, on March 4
            </li>
            <li>
                <a href="https://www.aljazeera.com/news/2025/3/11/why-trumps-tariff-chaos-sparked-stock-market-meltdown-and-recession-fears">https://www.aljazeera.com/news/2025/3/11/why-trumps-tariff-chaos-sparked-stock-market-meltdown-and-recession-fears</a> <br>
                High tariffs have led investors to rapidly sell stocks that were once considered safe investments. These tariffs have been detrimental for stock markets both in the US and abroad but Trump and his team project that tariffs will lead to more jobs and economic growth in the future. 
            </li>
            <li>
                <a href="https://www.nbcnews.com/politics/trump-administration/trump-set-sign-executive-order-shuttering-department-education-rcna197191">https://www.nbcnews.com/politics/trump-administration/trump-set-sign-executive-order-shuttering-department-education-rcna197191</a> <br>
                Donald Trump is set to shut down the Department of Education on Thursday due to its funding for DEI programs. The Department of Education currently funds programs like FAFSA and sets guidelines on what schools should be teaching.
            </li>
            <li>
                <a href="https://www.bbc.com/news/articles/c234j4yj3klo">https://www.bbc.com/news/articles/c234j4yj3klo</a> <br>
                China has traditionally had a policy of not commenting on other country’s actions but has broken this precedent to condemn Rwanda for funding M23 rebels in mineral-rich DR Congo.
            </li>
            <li>
                <a href="https://www.cnn.com/2025/04/09/politics/trump-tariffs-retreat-bond-market/index.html">https://www.cnn.com/2025/04/09/politics/trump-tariffs-retreat-bond-market/index.html</a> <br>
                Trump defends his tariff plans despite market drops and criticism from business leaders.
            </li>
        </ul>
    `);
}

function april(){
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
        <h2> April Events </h2>
        <ul>
            <li>
                <a href="https://www.npr.org/sections/shots-health-news/2025/04/16/nx-s1-5366676/autism-cdc-rates-rfk-research">https://www.npr.org/sections/shots-health-news/2025/04/16/nx-s1-5366676/autism-cdc-rates-rfk-research</a> <br>
                RFK pushes for research into environmental causes of autism stating that the number of autism diagnoses has gone up significantly in recent decades. Critics argue that doctors have simply gotten better at recognizing it.
            </li>
            
        </ul>
    
    `);
}



