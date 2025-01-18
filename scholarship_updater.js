//updates information on scholarship page based on button input
//current through 1/8
//calender current through 11/3

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
    main.insertAdjacentHTML("afterbegin",`<input id="searchbar" onkeyup="search_scholarship()" type="text" name="search" placeholder="Search scholarships..">
        <h2>August Scholarships</h2>
        <h6>Brigade Scholarships:</h6> 
        <ul>
            <li id="brigade"><a href="https://docs.google.com/document/d/1jcgc27kRqbGZETYEkwKMVnytzp3LO_vCHjaeL-UaKdo/edit">Brigade Scholarships Issue #2</a></li>
            <li id="brigade"><a href=" https://docs.google.com/document/d/1QYwHyMgjxoNEh8RCz_XOOrrC33xXJVr6MrdS6XLZtPw/edit">Brigade Scholarships Issue #3</a><li>
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
        <h6>Brigade Scholarships:</h6>
        <ul>
            <li id="brigade"><a href="https://docs.google.com/document/d/191-JB1OnZPWOtUuSl8cC5SYySoJgIJ3_gESf5Mg3L0E/edit?usp=sharing">Brigade Scholarships Issue #4</a></li>
            <li id="brigade"><a href="https://docs.google.com/document/d/1c-rc9fMz1k72X8wbMr-2wsYEn8ORB4xkO3hq59n4d-U/edit">Brigade Scholarships Issue #5</a></li>
        </ul>
        <h6>Unit Scholarships:</h6>
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
    main.insertAdjacentHTML("afterbegin",`<input id="searchbar" onkeyup="search_scholarship()" type="text" name="search" placeholder="Search scholarships..">
        <h2>October Scholarships</h2>
        <h6>Brigade Scholarships:</h6>
        <ul>
            <li id="brigade"><a href="https://drive.google.com/file/d/1QOPvS_lX4uqPcRCcyvqOofzXldHLTZu-/view">Cadet Compass Issue #1</a></li>
        </ul>
        <h6>Unit Scholarships:</h6>
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
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://www.couponbirds.com/scholarship">https://www.couponbirds.com/scholarship</a>
                <ul>
                    <li> <strong>October 10</strong> </li>
                    <li> <strong>At least 15 years old</strong> </li>
                    <li> <strong>Up to $1,000</strong> </li>
                    <li>You must provide legitimate acceptance letter from your high school and submit a <strong>2-3 minute video</strong> on the topic provided by the sponsor</li>
                </ul>
            </li>
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://www.jumpstart-scholarship.net/application-us/">https://www.jumpstart-scholarship.net/application-us/</a>
                <ul>
                    <li <strong>October 17th</strong> </li>
                    <li> <strong>Sophomores - Seniors</strong> </li>
                    <li> <strong>Up to $1,000</strong> </li>
                    <li> Submit a <strong>personal statement (250 words max)</strong> answering <strong>one of three questions</strong> about your goals or a time when hard work paid off.</li>
                </ul>
            </li>
        </ul>
        <ul id ="financial_aid">
            <li class="scholarship">
                <a href="https://www.moneymetals.com/scholarship">https://www.moneymetals.com/scholarship</a>
                <ul>
                    <li> <strong>October 31st</strong> </li>
                    <li> <strong>Seniors</strong> </li>
                    <li> <strong>Up to $2500</strong> </li>
                    <li> <strong>Answer one of 4 questions</strong> about the <strong>US’s monetary system and currency in 1000 words</strong> or less </li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class="scholarship">
                <a href="https://www.vfw.org/VOD/">https://www.vfw.org/VOD/</a>
                <a href="bit.ly/4fNilvt">bit.ly/4fNilvt</a>
                <ul>
                    <li> <strong>October 31st</strong> </li>
                    <li> <strong>all high schoolers</strong> </li>
                    <li> <strong>up to $35,000</strong> </li>
                    <li> <strong>Record a 3-5 minute audio essay</strong> responding to the prompt "Is America Today Our Forefathers' Vision?"</li>
                </ul>
            </li>
        </ul>
        <ul id="financial_aid">
            <li class="financial_aid">
                <a href="https://www.goodwall.io/tags/ScholarshipNow">https://www.goodwall.io/tags/ScholarshipNow</a>
                <ul>
                    <li> <strong>October 31</strong> </li>
                    <li> <strong>at least 18 years old, or 16 year old with parent permission at time of entry</strong>
                    <li> <strong>must have the goodwall app(it is free)</strong> </li>
                    <li> <strong>$2,500</strong> </li>
                    <li> <strong>film a 2 minute video</strong> speaking about how winning the scholarship will <strong>help you achieve your education goals</strong> </li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class="scholarships">
                <a href="https://chea-elks.org/scholarship-information/">https://chea-elks.org/scholarship-information/</a>
                <ul>
                    <li> <strong>At least 30 days before your course begins</strong> </li>
                    <li> <strong>Seniors</strong> </li>
                    <li> <strong>Only for a vocational/technical program</strong> </li>
                    <li> <strong>$500 - $2000</strong> depending on the price of your course </li>
                    <li> Write a <strong>statement of no more than 350 words</strong> about why you are qualified for the grant, your <strong>transcript</strong>, and <strong>verification</strong> that the <strong>vocational course exists</strong> at the school you are planning to attend </li>
                </ul>
            </li>
        </ul>
        `
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
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",`<input id="searchbar" onkeyup="search_scholarship()" type="text" name="search" placeholder="Search scholarships..">
        <h2>November Scholarships</h2>
        <h6>Brigade Scholarships:</h6>
        <ul>
            <li id="brigade"><a href="https://drive.google.com/file/d/13AUprxRBySsUhhFuGDrnElKcfefqGcdj/view">Cadet Compass Issue #2</a></li>
        </ul>
        <h6>Unit Scholarships:</h6>
        <ul id="financial_aid">
            <li class="schoalarship">
                <a href="https://sousafoundation.net/sub_menu_items/12">https://sousafoundation.net/sub_menu_items/12</a>
                <ul>
                    <li> <strong>November 6</strong> </li>
                    <li> <strong>$1,000</strong> </li>
                    <li> <strong>Seniors</strong> </li>
                    <li> <strong>Type a statement of 350 words or less</strong> and including your <strong>goals, philosophy, and who/what influenced you</strong> </li>
                </ul>
            </li>
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://www.societyforscience.org/regeneron-sts/application-requirements/">https://www.societyforscience.org/regeneron-sts/application-requirements/</a>
                <ul>
                    <li> <strong>November 7th</strong> </li>
                    <li> <strong>Seniors</strong> </li>
                    <li> <strong>Up to $250,000</strong> </li>
                    <li> <strong>Conduct an individual research project</strong>(no longer than 20 pages), get <strong>2-4 letters of recommendation</strong>, and answer some <strong>essay questions</strong>.</li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class = "scholarship">
                <a href = "https://www.jkcf.org/our-scholarships/college-scholarship-program/how-to-apply/">https://www.jkcf.org/our-scholarships/college-scholarship-program/how-to-apply/</a>
                <ul>
                    <li> <strong>November 14th</strong> </li>
                    <li> <strong>Seniors</strong> </li>
                    <li> <strong>Minimum 3.75 unweighted GPA</strong> </li>
                    <li> <strong>Must demonstrate financial need</strong> </li>
                    <li> Submit <strong>two academic letters of recommendation, one letter of recommendation from your counselor, school report, and transcript</strong> </li>
                </ul>
            </li>
        </ul>
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
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://www.servicescape.com/scholarship">https://www.servicescape.com/scholarship</a> 
                <ul>
                    <li> <strong>November 29th</strong> </li>
                    <li> <strong>Seniors</strong> </li>
                    <li> <strong>$1,000</strong> </li>
                    <li> submit a <strong>300 word essay</strong> (how does writing impact today’s world?) </li>
                </ul>
            </li>
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://divorcefirm.net/2024-selfless-parent-scholarship/">https://divorcefirm.net/2024-selfless-parent-scholarship/</a>
                <ul>
                    <li> <strong>November 30th</strong> </li>
                    <li> <strong>Seniors</strong> </li>
                    <li> <strong>$1000</strong> </li>
                    <li> <strong>minimum 3.0 GPA</strong> </li>
                    <li> Submit a <strong>resume, transcript, and write a 750 word essay</strong> about how your parents' sacrifices have helped you in life. </li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class="scholarship">
                <a href="https://www.ushli.org/dennys-scholarship-application/">https://www.ushli.org/dennys-scholarship-application/</a>
                <ul>
                    <li> <strong>November 30th</strong> </li>
                    <li> <strong>all grades</strong> </li>
                    <li> <strong>Minimum 2.5 GPA</strong> </li>
                    <li> <strong>$1000</strong> </li>
                    <li> <strong>300 word essay</strong> on how Denny’s can unite communities</li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class="scholarship">
                <a href="https://www.ushli.org/rumba/">https://www.ushli.org/rumba/</a>
                <ul>
                    <li> <strong>November 30th</strong> </li>
                    <li> <strong>Seniors</strong> </li>
                    <li> <strong>minimum 2.5 GPA</strong> </li>
                    <li> <strong>Must be hispanic</strong> </li>
                    <li> <strong>Must have financial need</strong> </li>
                    <li> <strong>$25,000</strong> </li>
                    <li> Write <strong>two 500-1000 word essays</strong> about your family background and hispanic heritage.</li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class = "scholarship">
                <a href="https://www.dmvedu.org/scholarship/">https://www.dmvedu.org/scholarship/</a>
                <ul>
                    <li> <strong>November 30th</strong> </li>
                    <li> <strong>all high students</strong> </li>
                    <li> <strong>$500</strong> </li>
                    <li> submit an <strong>essay of 750 words</strong> answering the questions about the importance of diver education and road safety(available on the website) </li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class = "scholarship"
                <a href="https://www.goodwall.io/tags/AnimalRescueUSA">https://www.goodwall.io/tags/AnimalRescueUSA</a>
                <ul>
                    <li> <strong>November 30</strong> </li>
                    <li> <strong>16 or younger</strong> </li>
                    <li> <strong>$50</strong> </li>
                    <li> <strong>make a video or write about your pet rescue journey</strong> </li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class = "scholarship">
                <a href="https://dosomething.org/action/talking-trash">https://dosomething.org/action/talking-trash</a>
                <ul>
                    <li> <strong>November 30th</strong> </li>
                    <li> <strong>all high schoolers</strong> </li>
                    <li> <strong>$500</strong> </li>
                    <li> Test your knowledge of basic recycling facts by <strong>take a quiz and discover ways to reduce waste</strong> in your community.</li>
                </ul>
            </li>
        </ul>
        `
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
    main.insertAdjacentHTML("afterbegin",`<input id="searchbar" onkeyup="search_scholarship()" type="text" name="search" placeholder="Search scholarships..">
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
        </ul>
        <ul id = "financial_aid">
            <li class = "scholarship">
                <a href = "https://www.dellscholars.org/students/">https://www.dellscholars.org/students/</a>
                <ul>
                    <li> <strong>December 1st</strong> </li>
                    <li> <strong>High school juniors and seniors</strong> </li>
                    <li> <strong>minimum 2.4 GPA</strong> </li>
                    <li> <strong>eligible for the federal pell grant</strong> </li>
                    <li> <strong>participating in a Dell Foundation approved college readiness program (e.g. avid)</strong> </li>
                    <li> <strong>letter of recommendation and self-report a transcript</strong> </li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class = "scholarship">
                <a href = "https://pointfoundation.org/scholarships/flagship">https://pointfoundation.org/scholarships/flagship</a>
                <ul>
                    <li> <strong>December 5th</strong> </li>
                    <li> <strong>Seniors</strong> </li>
                    <li> <strong>Must be LGBTQ+</strong> </li>
                    <li> <strong>Award is based on financial need</strong> </li>
                    <li> Upload a <strong>transcript, an estimate of financial need, three activities you are involved in, and a 300 word essay</strong> about what makes you who you are.</li>
                </ul>
            </li>
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://coolidgescholars.org/about/">https://coolidgescholars.org/about/</a>
                <ul>
                    <li> <strong>December 11th</strong> </li>
                    <li> <strong>Juniors</strong> </li>
                    <li> <strong>Full-tuition</strong> </li>
                    <li> Submit a letter of <strong>recommendation, transcript, and resume. Answer 3 essays and 2 short response questions</strong> about yourself and American history. </li>
                </ul>
            </li>
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://www.ngsgenealogy.org/competitions/rubincam-youth-award/">ttps://www.ngsgenealogy.org/competitions/rubincam-youth-award/</a>
                <ul>
                    <li> <strong>December 15th</strong> </li>
                    <li> <strong>all grades</strong> </li>
                    <li> <strong>$500</strong> </li>
                    <li> Submit a <strong>genealogy</strong> in a <strong>biographical narrative</strong> format for <strong>one family line</strong> </li>
                </ul>
            </li>
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://accessscholarships.com/around-the-corner-from-college-scholarship/">https://accessscholarships.com/around-the-corner-from-college-scholarship/</a>
                <ul>
                    <li> <strong>December 31</strong> </li>
                    <li> <strong>all high school students</strong> </li>
                    <li> <strong>$1,000</strong> </li>
                    <li>Create a <strong>personalized checklist</strong> that you can use (max 10 items) <strong>to help you best prepare for college</strong> </li>
                </ul>
            </li>
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://cck-law.com/undergraduate-scholarship/">https://cck-law.com/undergraduate-scholarship/</a>
                <ul>
                    <li> <strong>December 31st<strong> </li>
                    <li> <strong>Seniors</strong> </li>
                    <li> <strong>3.00 GPA</strong> </li>
                    <li> <strong>Child of a Veteran</strong> who served in any military branch</strong>
                    <li> <strong>$1500</strong> </li>
                    <li> <strong>500 word essay</strong> about growing up in a military family or what can be done to help military families.</li>
                </ul>    
            </li>
        </ul>
    `
    );
} 

function january(){
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
        <h2>January Scholarships</h2>
        <ul id = "financial_aid">
            <li class = "scholarship">
                <a href = "https://www.tacobellfoundation.org/live-mas-scholarship/">https://www.tacobellfoundation.org/live-mas-scholarship/</a>
                <ul>
                    <li> <strong>January 8th</strong> </li>
                    <li> <strong>16 and older</strong> </li>
                    <li> <strong>$25,000</strong> </li>
                    <li> submit a <strong>two minute video</strong> describing what you're passionate about and and your educational plans</li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class = "scholarship">
                <a href= "https://www.reaganfoundation.org/education/scholarship-programs/ge-reagan-foundation-scholarship-program/">https://www.reaganfoundation.org/education/scholarship-programs/ge-reagan-foundation-scholarship-program/</a>
                <ul>
                    <li> <strong>January 3rd</strong> </li>
                    <li> <strong>Seniors</strong> </li>
                    <li> <strong>minimum 3.0 GPA</strong> </li>
                    <li> <strong>up to $40,000</strong> </li> 
                    <li> Provide <strong>information about your community service, extracurriculars, and work experience</strong>. Write an <strong>essay about your leadership experience, and write a statement about your goals</strong>.</li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid>
            <li class = "scholarship">
                <a href = "https://architectsfoundation.org/our-programs/architecture-scholarships/the-diversity-advancement-scholarship/">https://architectsfoundation.org/our-programs/architecture-scholarships/the-diversity-advancement-scholarship/</a>
                <ul>
                    <li> <strong>January 10th</strong> </li>
                    <li> <strong>All high schoolers</strong> </li>
                    <li> <strong>Be interested in majoring in architecture</strong> </li>
                    <li> <strong>up to $20,000</strong> </li>
                    <li> <strong>1200 word essay</strong> about the potential of architecture to improve communities, a resume, Two letters of recommendation, a portfolio of 3-5 artistic works</li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class = "scholarship">
                <a href = "https://www.gwcf.org/scholarship">https://www.gwcf.org/scholarship</a>
                <ul>
                    <li> <strong>January 15th</strong> </li>
                    <li> <strong>Senior</strong> </li>
                    <li> <strong>300 word essay about why you want a job in government service,transcript, SAT/ACT scores, resume</strong> </li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class = "scholarship">
                <a href = "https://bmifoundation.org/by-application/dollypartonsongwritersaward">https://bmifoundation.org/by-application/dollypartonsongwritersaward</a>
                <ul>
                    <li> <strong>January 15th</strong> </li>
                    <li> <strong>At least 17 years old</strong> </li>
                    <li> <strong>$20,000</strong> </li>
                    <li> <strong>Submit a song</strong> </li>
                </ul>
            </li>
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://jfkessaycontest.smapply.io/prog/john_f_kennedy_profile_in_courage_essay_contest/">https://jfkessaycontest.smapply.io/prog/john_f_kennedy_profile_in_courage_essay_contest/</a>
                <ul>
                    <li> <strong>January 17th</strong> </li>
                    <li> <strong>all high school students</strong> </li>
                    <li> <strong>Up to $10,000</strong> </li>
                    <li> Submit a <strong>700-1,000 word essay</strong> that <strong>describes and analyzes an act of political courage by a U.S. elected official who served during or after 1917</strong> </li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class = "scholarship">
                <a href="http://www.digitalresponsibility.org/technology-addiction-awareness-scholarship">http://www.digitalresponsibility.org/technology-addiction-awareness-scholarship</a>
                <ul>
                    <li> <strong>January 30th</strong> </li> 
                    <li> <strong>All grades</strong> </li>
                    <li> <strong>$1000</strong> </li>
                    <li> <strong>Write a 140 character statement</strong> about what you would do instead of spending time with technology. </li>
                </ul>
            </li>
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://www.exploravision.org/">https://www.exploravision.org/</a>
                <ul>
                    <li> <strong>January 31</strong> </li>
                    <li> <strong>All high school students</strong> </li>
                    <li> <strong>$10,000</strong> </li>
                    <li>You must work in a group of </strong>two to four students</strong>. Each team must <strong>select a technology or an aspect of a technology</strong>, which is present in the home, school, or community. The students must then <strong>project into the future</strong> what that technology could be like 10 or more years in the future and <strong>determine what scientific breakthroughs need to occur to make it a reality</strong> </li>
                </ul>    
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class = "scholarship">
                <a href= "https://abdelkaderproject.org/student-contests/abdelkader-student-prize/">https://abdelkaderproject.org/student-contests/abdelkader-student-prize/</a>
                <ul>
                    <li> <strong>January 31st</strong> </li>
                    <li> <strong>Juniors and Seniors</strong> </li>
                    <li> <strong>Up to $1,500</strong> </li>
                    <li> <strong>Write a 1,000-1,200 word essay or no more than a 5 minute multimedia video</strong> on the prompt - 
                    How does the Emir’s approach to leadership remain relevant and meaningful today?</li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class = "scholarship">
                <a href = "https://www.goodwall.io/tags/ScholarshipNow">https://www.goodwall.io/tags/ScholarshipNow</a>
                <ul>
                    <li> <strong>January 31st</strong> </li>
                    <li> <strong>Any highschooler</strong> </li>
                    <li> <strong>$2,500</strong> </li>
                    <li> <strong>1-3 min video about how the money would help you</strong> </li>
                </ul>
            </li>
        </ul>
     <ul id = "financial_aid">
        <li class = "scholarship">
            <a href = "https://home.supermoney.com/scholarship">https://home.supermoney.com/scholarship</a>
            <ul>
                <li> <strong>year round submission</strong> (winners will be announced when they find a candidate that provide thoughtful deliverables)</li>
                <li> <strong>high school seniors</strong> </li>
                <li> <strong>3.0 GPA</strong> </li>
                <li> <strong>$500</strong> </li>
                <li> <strong>design a financial calculator</strong> that helps people make smart financial decisions</li>
            </ul>
        </li>
    </ul>
    `
    );
}

function february(){
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
        <h2>February Scholarships</h2>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://www.sar.org/george-s-stella-m-knight-essay-contest/">https://www.sar.org/george-s-stella-m-knight-essay-contest/</a>
                <ul>
                    <li> <strong>February 15th</strong> </li>
                    <li> <strong>All grades</strong> </li>
                    <li> <strong>up to $6000</strong> </li>
                    <li> <strong>800-1200 word essay</strong> on an event, person, philosophy or ideal associated with the American Revolution, Declaration of Independence, or the framing of the United States Constitution</li>
                </ul>    
            </li>
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://www.nationalhsf.org/application">https://www.nationalhsf.org/application</a>
                <ul>
                    <li> <strong>February 18th</strong> </li>
                    <li> <strong>at least 15</strong> </li>
                    <li> <strong>up to $2500</strong> </li>
                    <li> Submit your <strong>high school transcript</strong> and answer <strong>7 essay questions</strong> (600-2000 <strong>characters</strong>)</li>
                </ul>    
            </li>
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://actionfornature.org/eco-hero-awards/"> https://actionfornature.org/eco-hero-awards/ </a>
                <ul>
                    <li> <strong>February 28th</strong> </li>
                    <li> <strong>anyone under 16</strong> </li>
                    <li> <strong>$1,000</strong> </li>
                    <li> <strong>Complete a self-initiated, action-based project</strong> that focuses on environmental health, advocacy, research, or the protection of the natural world</li>
                </ul>
            </li>
        </ul>
    `
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
    main.insertAdjacentHTML("afterbegin",`<input id="searchbar" onkeyup="search_scholarship()" type="text" name="search" placeholder="Search scholarships..">
        <h2>March Scholarships</h2>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://directingchangeca.org/">https://directingchangeca.org/</a>
                <ul>
                    <li> <strong>March 1st</strong> </li>
                    <li> <strong>ages 12-15</strong> </li>
                    <li> <strong>Up to $500</strong> </li>
                    <li> Submit a <strong>film</strong> of no more than 60 seconds related to <strong>mental health or suicide prevention</strong> </li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class = "scholarship">
                <a href = "https://www.legion-aux.org/Scholarships/Children-of-Warriors">https://www.legion-aux.org/Scholarships/Children-of-Warriors</a>
                <ul>
                    <li> <strong>March 1st</strong></li>
                    <li> <strong>Senior</strong> </li>
                    <li> <strong>Have a parent(s) who is a veteran</strong> </li>
                    <li> <strong>Have at least 50 volunteer hours</strong> </li>
                    <li> <strong>$5000</strong> </li>
                    <li> <strong>Write a 5000 word essay</strong> about how being a family member of a veteran inspired you to lead the way 
                    in honoring our military and veterans?, attach 2 letters of recommendation, your SAT/ACT score, and a transcript</li>
                </ul>
            </li>
        </ul>
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
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://courageouspersuaders.com/distracted-driving/">https://courageouspersuaders.com/distracted-driving/</a>
                <ul>
                    <li> <strong>March 10, 2024</strong> </li>
                    <li> <strong>All high schoolers</strong> </li>
                    <li> <strong>$2000</strong> </li>
                    <li> <strong>Create a 30 second commercial</strong> targeted to middle schoolers to warm them about the dangers of distracted driving </li>
                </ul>
            </li>
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://stosselintheclassroom.org/essay-contest/>https://stosselintheclassroom.org/essay-contest/</a>
                <ul>
                    <li> <strong>March 21st</strong> </li>
                    <li> <strong>All high school students</strong> </li>
                    <li> <strong>up to $2,500</strong> </li>
                    <li> Submit a <strong>500-1,000 word essay</strong> about one of the four essay topics listed on the application </li>
                </ul>
            </li>
        </ul>`
    );
} 

function april(){
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
        <h2>April Scholarships</h2>
        <ul id = "financial_aid">
            <li class = "scholarship">
                <a href = "https://mchekc.org/teachers-students/white-rose-students-research-contest-2024-2025">https://mchekc.org/teachers-students/white-rose-students-research-contest-2024-2025</a>
                <ul>
                    <li> <strong>April 4th</strong> </li>
                    <li> <strong>All grades</strong> </li>
                    <li> <strong>$300</strong> </li>
                    <li> Write an <strong>essay of up to 1600 words</strong> about how and why one category of non-jewish victims experienced persecution</li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class = "scholarship">
                <a href = "https://suretybondauthority.com/scholarship-surety-bond-authority-2025/">https://suretybondauthority.com/scholarship-surety-bond-authority-2025/</a>
                <ul>
                    <li> <strong>April 6th</strong> </li>
                    <li> <strong>All grades</strong> </li>
                    <li> <strong>Must be intrested in a career in Accounting,Banking, or othe finance-related fields</strong> </li>
                    <li> <strong>$1,500</strong> </li>
                    <li> Write an <strong>write 500-1,000 word essay</strong> about why you want a career in Accounting, Banking or Finance</li>
                </ul>
            </li>
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://www.digitalresponsibility.org/ewaste-scholarship">https://www.digitalresponsibility.org/ewaste-scholarship</a>
                <ul>
                    <li> <strong>April 30, 2025</strong> </li>
                    <li> <strong>All high school students</strong> </li>
                    <li> <strong>$1,000</strong> </li>
                    <li> submit a <strong>short statement</strong> that completes the sentence <strong>”The most important reason to care about e-waste is…”</strong> </li>
                </ul>
            </li>
        </ul>
   `);
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
    main.innerHTML="";
    main.insertAdjacentHTML("afterbegin",`<input id="searchbar" onkeyup="search_scholarship()" type="text" name="search" placeholder="Search scholarships..">
        <h3>May Scholarships</h3>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://www.projectparadigm.org/#mid=&offset=&page=&s=">https://www.projectparadigm.org/#mid=&offset=&page=&s=</a>
                <ul>
                    <li> <strong>May 01</strong> </li>
                    <li> <strong>All high school</strong> </li>
                    <li> <strong>$100,000</strong> </li>
                    <li> <strong>Create a way to help solve real-life problems</strong> in homes, schools, communities, and/or around the world and <strong>submit a brief statement about your idea</strong> (140 -characters or less) . (Entries may come in the form of posters, videos, inventions, messages, community events, websites, pr mobile apps)</li>
                </ul>
            </li>
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://www.oneearthfilmfest.org/contest-details/">https://www.oneearthfilmfest.org/contest-details/</a>
                <ul>
                    <li> <strong>May 25</strong> </li>
                    <li> <strong>all high school students</strong> </li>
                    <li> <strong>up to $1,000</strong> </li>
                    <li> <strong>3-8 minute environmental film</strong> that motivate views towards behavior change</li>
                </ul>
            </li>
        </ul>
        <ul id="financial_aid">
            <li class="scholarship">
                <a href="https://constitutingamerica.org/contest-categories/">https://constitutingamerica.org/contest-categories/</a> 
                <ul>
                    <li> <strong>May 31</strong> </li>
                    <li> at least <strong>14</strong> </li>
                    <li> <strong>$1,000</strong> </li>
                    <li> submit an <strong>essay, song, STEM project, short film, social media video, or PSA about the Constitution</strong> </li>
                </ul>
            </li>
        </ul>
        <ul id = "financial_aid">
            <li class= "scholarship">
                <a href="https://www2.heart.org/site/SPageServer/?pagename=khc_resources_scholarships">https://www2.heart.org/site/SPageServer/?pagename=khc_resources_scholarships</a>
                <ul>
                    <li> <strong>May 31st</strong> </li>
                    <li> <strong>Junior or Senior</strong> </li>
                    <li> <strong>$1000</strong> </li>
                    <li> <strong>Have a passion for your community’s health and submit a letter of recommendation</strong> </li>
                </ul>
            </li>
        </ul>
        `
);
} 