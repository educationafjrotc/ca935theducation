//updates information on scholarship page based on button input

function july(){
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width>1033){
        var main = document.getElementById("monthlyD");
        console.log("desktop");
    }
    else{
        var main = document.getElementById("monthlyM");
        console.log("mobile");
    }
    console.log("september called");
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",`
        <h2>July Scholarships</h2>
        <h6>Brigade Scholarships:</h6>
        <ul>
            <li id="brigade">
                <a href="https://docs.google.com/document/d/1a6YzJEw9PXeWGOD_Ah_lCkqfe77pMm2QcpOLxq5Kck4/edit">Brigade Scholarships Issue #1</a>
            </li>
        </ul>`
    );
} 

function august(){
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width>1033){
        var main = document.getElementById("monthlyD");
        console.log("desktop");
    }
    else{
        var main = document.getElementById("monthlyM");
        console.log("mobile");
    }
    console.log(main);
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",`
        <h2>August Scholarships</h2>
            <h6>Brigade Scholarships:</h6> 
            <ul>
                <li id="brigade"><a href="https://docs.google.com/document/d/1jcgc27kRqbGZETYEkwKMVnytzp3LO_vCHjaeL-UaKdo/edit">Brigade Scholarships Issue #2</a></li>
            </ul>
            <h6>Unit Scholarships:</h6>
            <ul id="financial_aid">
                <li class="scholarship">
                    <a href="https://www.bbb.org/local/1126/student-scholarships/torch-essay">https://www.bbb.org/local/1126/student-scholarships/torch-essay</a> 
                    <ul>
                        <li> <strong>August 18th</strong> </li>
                        <li> <strong>all grades</strong> </li>
                        <li> <strong> $1500</strong> </li>
                        <li> <strong>500 word essay</strong> (an ethical issue you faced and how it was handled)</li>
                    </ul>
                </li>
            </ul>` ); 
}

function september(){
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width>1033){
        var main = document.getElementById("monthlyD");
        console.log("desktop");
    }
    else{
        var main = document.getElementById("monthlyM");
        console.log("mobile");
    }
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",`<input id="searchbar" onkeyup="search_scholarship()" type="text" name="search" placeholder="Search scholarships..">
        <h2>September Scholarships</h2>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://apply.mykaleidoscope.com/scholarships/PizzaHutScholarship24">https://apply.mykaleidoscope.com/scholarships/PizzaHutScholarship24</a> 
                <ul>
                    <li> <strong>September 3rd </strong> </li>
                    <li> <strong>at least 17</strong> </li>
                    <li> <strong>2.5 GPA</strong> </li>
                    <li> upload <strong>1 reference transcript, and FAFSA</strong> </li>
                    <li> up to <strong>$2000</strong> </li>
                    <li>write an <strong>essay (max 1000 words</strong>, a time when you felt supported by your community and how it impacted you)</li>
                </ul>
            </li>

            <li class="scholarship">
                <a href="https://www.latutors123.com/scholarships/innovation-in-education/">https://www.latutors123.com/scholarships/innovation-in-education/</a>
                <ul>
                    <li> <strong>September 20th</strong>(recurs monthly on the 20th) </li>
                    <li> <strong>All grades</strong> </li>
                    <li> <strong>3.0 GPA</strong> </li>
                    <li> <strong>$500</strong> </li>
                    <li> Must have <strong>designed a project that impacts others</strong> </li>
                </ul>
            </li>


            <li class="scholarship">
                <a href="https://www.fmamfg.org/foundation/scholarships/requirements">https://www.fmamfg.org/foundation/scholarships/requirements</a> 
                <ul>
                    <li> <strong>September 30th</strong> </li>
                    <li> <strong>Senior </strong> </li>
                    <li> <strong>2.5 GPA for trade school, 3.0 for University </strong> </li>
                    <li>upload <strong>transcript, two essay questions</strong>(why are you pursuing this career, what type of work will you do after graduation?) </li>
                </ul>
            </li>

            <li class="scholarship">
                <a href="https://www.digitalresponsibility.org/dont-text-and-drive-scholarship">https://www.digitalresponsibility.org/dont-text-and-drive-scholarship</a>
                <ul>
                    <li> <strong>September 30th</strong> </li>
                    <li> <strong>all grades</strong> </li>
                    <li> <strong>$1000</strong> </li>
                    <li> write a <strong>140 character personal statement</strong> about why you won’t text and drive </li>
                </ul>
            </li>

            <li class="scholarship">
                <a href="https://aiwfsandiego.org/programs/scholarships/">https://aiwfsandiego.org/programs/scholarships/</a>
                <ul>
                    <li> <strong>September 30th</strong> </li>
                    <li> <strong>all grades</strong> </li>
                    <li> must be <strong>pursuing a degree in culinary arts or enology/viticulture</strong> </li>
                    <li> up to <strong>$3000</strong> </li>
                    <li> <strong>two letter of recommendation</strong> </li>
                    <li> max <strong>250 word essay</strong> about why you deserve the scholarship </li>
                </ul>
            </li>

            <li class="scholarship">
                <a href="https://www.highschoolpoetrycontest.com/to-enter.html">https://www.highschoolpoetrycontest.com/to-enter.html</a>
                <ul>
                    <li> <strong>September 30</strong> </li>
                    <li> <strong>all grades</strong> </li>
                    <li> <strong>$500</strong> </li>
                    <li> submit a <strong>poem of 20 lines of less</strong> (no specific topic) </li>
                </ul>
            </li>
        </ul>`
    );
    let scholarships = document.getElementsByClassName('scholarship');
            for (let i = 0; i < scholarships.length; i++) {
                scholarships[i].setAttribute('data-original', scholarships[i].innerHTML);
            }
             
} 
    
function october(){
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width>1033){
        var main = document.getElementById("monthlyD");
        console.log("desktop");
    }
    else{
        var main = document.getElementById("monthlyM");
        console.log("mobile");
    }
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",`
            <h2>October Scholarships</h2>
            <ul id="financial_aid">
                <li class="scholarship">
                    <a href="https://asti.com/aecscholarship/">https://asti.com/aecscholarship/</a> 
                    <ul>
                        <li> <strong>October 1st</strong> </li>
                        <li> <strong>Seniors</strong> </li>
                        <li> <strong>3.0 GPA</strong> </li>
                        <li> up to <strong>$1,500</strong> </li>
                        <li> write an <strong>essay</strong> about innovative and sustainable construction </li>
                    </ul>
                </li>
            </ul>`
    );
} 

function november(){
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width>1033){
        var main = document.getElementById("monthlyD");
        console.log("desktop");
    }
    else{
        var main = document.getElementById("monthlyM");
        console.log("mobile");
    }
    console.log("september called");
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",`<input id="searchbar" onkeyup="search_scholarship()" type="text" name="search" placeholder="Search scholarships..">
            <h2>November Scholarships</h2>
            <ul id="financial_aid">
                <li class="scholarship">
                    <a href="https://odenzascholarships.com/awards/8/eligibility_odenza_marketing_group_scholarship.php">https://odenzascholarships.com/awards/8/eligibility_odenza_marketing_group_scholarship.php</a> 
                    <ul>
                        <li> <strong>November 15th</strong> </li>
                        <li> at least <strong>16</strong> </li>
                        <li> <strong>2.5 GPA</strong> </li>
                        <li> <strong>$500</strong> </li>
                        <li> write <strong>two 500 word essays</strong> (one about “a city… that you believe would.. benefit your career” and why you should get the scholarship.) </li>
                    </ul>    
                </li>

                <li class="scholarship">
                    <a href="https://www.servicescape.com/scholarship">https://www.servicescape.com/scholarship</a> 
                    <ul>
                        <li> <strong>November 29th</strong> </li>
                        <li> <strong>Seniors</strong> </li>
                        <li> <strong>$1,000</strong> </li>
                        <li> submit a <strong>300 word essay</strong> (how does writing impact today’s world?) </li>
                    </ul>
                </li>
            </ul>`
    );
    let scholarships = document.getElementsByClassName('scholarship');
    for (let i = 0; i < scholarships.length; i++) {
        scholarships[i].setAttribute('data-original', scholarships[i].innerHTML);
    }
} 

function december(){
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width>1033){
        var main = document.getElementById("monthlyD");
        console.log("desktop");
    }
    else{
        var main = document.getElementById("monthlyM");
        console.log("mobile");
    }
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",`
        <h2>December Scholarships</h2>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://www.insuranceproviders.com/look-twice-save-a-life-scholarship/">https://www.insuranceproviders.com/look-twice-save-a-life-scholarship/</a>
                <ul>
                    <li> <strong>December 1</strong> </li>
                    <li> <strong>Seniors</strong> </li>
                    <li> <strong>$1,000</strong> </li>
                    <li> create a form of <strong>social awareness</strong> that inspires other students to focus <strong>on looking twice for motorcycle safety</strong>(video, essay, artwork, etc.) </li>
                </ul>
            </li>
        </ul>`
    );
} 

function march(){
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width>1033){
        var main = document.getElementById("monthlyD");
        console.log("desktop");
    }
    else{
        var main = document.getElementById("monthlyM");
        console.log("mobile");
    }
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",`
            <h2>March Scholarships</h2>
            <ul id="financial_aid">
                <li class="scholarship">
                    <a href="https://www.gallerycollection.com/greetingcardscontests.htm">https://www.gallerycollection.com/greetingcardscontests.htm</a>  
                    <ul>
                        <li> <strong>March 3</strong> </li>
                        <li> at least <strong>14</strong> </li>
                        <li> <strong>$10,000</strong> </li>
                        <li>submit an <strong>original design for a greeting card</strong> (any occasion)</li>
                    </ul>
                </li>
            </ul>`
    );
} 

function may(){
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width>1033){
        var main = document.getElementById("monthlyD");
        console.log("desktop");
    }
    else{
        var main = document.getElementById("monthlyM");
        console.log("mobile");
    }
    console.log("september called");
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",`
        <h3>May Scholarships</h3>
            <ul id="financial_aid">
                <li class="scholarship">
                    <a href="https://constitutingamerica.org/contest-categories/">https://constitutingamerica.org/contest-categories/</a> 
                    <ul>
                        <li> <strong>May 31</strong> </li>
                        <li> at least <strong>14</strong> </li>
                        <li> <strong>$1,000</strong> </li>
                        <li> submit an <strong>essay, song, STEM project, short film, social media video, or PSA about the Constitution</strong> </li>
                </li>
            </ul>`
    );
} 