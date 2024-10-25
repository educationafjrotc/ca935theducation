//updates information on scholarship page based on button input
//current through 10/23

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
                    <li> <strong>must have the goodwall app(it is free)<strong> </li>
                    <li> <strong>$2,500>/strong> </li>
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
            <li class="scholarships>
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
            <li class="scholarships">
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
                <a href="https://stosselintheclassroom.org/essay-contest/>https://stosselintheclassroom.org/essay-contest/</a>
                <ul>
                    <li> <strong>March 21st</strong> </li>
                    <li> <strong>all high school students</strong> </li>
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
        <h2>March Scholarships</h2>
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
            </li>
        </ul>`
);
} 