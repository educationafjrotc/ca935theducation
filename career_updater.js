

function biomaterialsEngineer(){
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
        <h2 style="color:#00C7CE">Biomaterials Engineer!</h2>

        <div class = "info">
            <h4 style="color:#FA7E61">Job Description</h4>
            <p>
                Biomaterials Engineers <strong>design, test, and create</strong> materials intended for <strong>medical and biological applications</strong>. These materials are used in <strong>implants, 
                prosthetics, tissue engineering, and drug delivery systems</strong>. By choosing this job, <u>YOU</u> will have a direct and positive impact on other people! <br>
                If you’re interested in <strong>research</strong>, this could be the job for you! Biomaterials engineers regularly <strong>conduct experiments</strong> and <strong>collaborate with other 
                biomaterials engineers, and physicians</strong> to ensure every material adheres to safety regulations and standards. <br>
                If any of this sounds interesting, keep reading to learn more about Biomaterials Engineers!
            </p>
        </div>

        <div class = "info">
            <h4 style="color:#FFB800">Average Salary</h4>
            <p>
                The salary of biomaterials engineers depends a lot on their experience level. In the U.S, <strong>entry level(0-2 years)</strong> biomaterial developers are paid 
                <strong>$60K-$75K mid-level(3-5 years)</strong> get paid <strong>75k-$95k</strong> per year, and <strong>senior-level(5+ years)</strong> biomaterial developes get earn between <strong>$95,000 and 
                $130,000</strong> annually. These are just some of the average statistics in the US. Some companies give more or less than the average.
            </p>
        </div>

        <div class = "info">
            <h4 style="color:#00C7CE">Required Majors/Education</h4>
            <p>
                In order to become a biomaterials engineer , you need to have a <strong>bachelor's degree</strong> in <u>Biomedical Engineering, Materials Science or Chemical 
                Engineering</u>. A <strong>master's degree</strong> in <u>Biomaterials or Bioengineering</u> is necessary. Some of the best universities for biomaterial development in the US 
                are <strong><u>Johns Hopkins Medicine, Stanford University, University of California Berkeley and Georgia Institute of Technology</u></strong>. At the international level,
                a few top universities for biomaterial development include: <strong><u>The University of Cambridge, ETH Zurich, The University of Toronto and Imperial College
                London National University of Singapore</u></strong>.
            </p>
        </div>

        <div class = "info">
            <h4 style="color:#FA7E61">Projected Job Growth</h4>
            <p>
                Biomaterials engineering is expected to <strong>grow by 7%</strong> over the next decade. That is <strong>3% faster than the national average</strong>! 
            </p>
        </div>

        <div class = "info">
            <h4 style="color:#FFB800">Example Jobs</h4>
            <p>
                Although you aren’t applying to jobs right now, looking at existing biomaterials developer jobs can give you an idea of what to expect and what 
                the job actually looks like. Here are three example jobs:
                <ul>
                    <li>
                        <a href="https://www.ziprecruiter.com/c/Terasaki-Institute-for-Biomedical-Innovation/Job/Postdoctoral-Researcher:-Biomaterials-and-Tissue-Engineering-(On-Site)/-in-Los-Angeles,CA?jid=640d45e199f481b9">Biomaterials and Tissue Engineer at Terasaki Institute for Biomedical Innovation</a>
                        <ul>
                            <li>
                                Biomaterials Engineers at the Terasaki Institute <strong>develop an “organ-on-a-chip”</strong>. This is a revolutionary technology which <strong>aims to completely 
                                eliminate animal testing</strong> by manufacturing human tissues on a chip to test medications. Their responsibilities include <strong>conducting experiments 
                                related to tissue engineering, innovating novel solutions to problems, and sharing your findings</strong> through seminars, conferences, and publications. In order 
                                to qualify for this job you will need a <strong>PhD</strong>, a strong record of previous <strong>publications in peer-reviewed journals, and experience with cells
                                </strong> and cell culture. This job is located in <strong>Los Angeles</strong> and pays <strong>$60,000</strong>. 
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://www.jobs.abbott/us/en/job/31097098/Materials-Engineer-II">Materials Engineer at Abbott</a>
                        <ul>
                            <li>
                                At Abbott, Biomaterials Engineers work to <strong>combat atrial fibrillation</strong>, a disease characterized by an irregular heart beat. They accomplish this 
                                by performing <strong>surface analysis, failure analysis, analytical chemistry, and corrosion testing</strong> with different materials to find and develop the 
                                best one. Applicants to the job need a <strong>Bachelors, Masters, or PhD in material science</strong> or related degree and <strong>3-5 years of experience</strong>.
                                This job is located in <strong>Saint Paul, Minnesota</strong> and pays <strong>$57,300.00 – $114,700.00</strong> (depending on location).
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://careers.planet-pharma.com/Biomedical-Engineer-II-Biochemistry-and-Biomaterials-Scientist-Jobs-in-Fridley-MN/11900050">Biomedical Engineer at Planet Pharma</a>
                        <ul>
                            <li>
                                Planet Pharma <strong>develops tissues to use in prosthetic heart valves!</strong> Biomaterial Engineers at Planet Pharma <strong>conduct experiments</strong> 
                                to <strong>characterize tissues</strong> in heart valves and <strong>determine what triggers calcification in hearts and communicate results</strong> via 
                                detailed technical plans, reports, documents, and presentations. To work there you’ll need a <strong>bachelor's degree (higher degree preferred)</strong> in 
                                <u>Chemical engineering, Biochemical engineering, Biomedical engineering</u> or related field and <strong>minimum 3 years experience</strong>. Planet Pharma is 
                                located in <strong>Fridley, Minnesota</strong>. 
                            </li>
                        </ul>
                    </li>
                </ul>         
            </p>
       </div> 
        `
    );
} 

function environmentalBiologist(){
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
        <h2 style="color:#00C7CE">Environmental Biologist!</h2>

        <div class = "info">
            <h4 style="color:#FA7E61">Job Description</h4>
            <p>
                Environmental biologists <strong>collect data about human impact on the environment and analyze how humans can reduce their negative impact.</strong> Environmental Biologists often work in teams and do consulting to <strong>help companies reduce their negative impact on the environment</strong> and comply with state and local laws. They also work in government jobs to <strong>make environmental regulations</strong> and make sure that companies are complying with them. This job involves a lot of <strong>outside and lab work.</strong> If you have a passion for the environment and care about sustainability this job could be perfect for <u>you</u>! 

            </p>
        </div>

        <div class = "info">
            <h4 style="color:#FFB800">Average Salary</h4>
            <p>
               Overall, environmental biologists make between <strong>$121,390-$40,463 nationwide.</strong> However, the average salary for an Environmental Biologist is <strong>$78,980 per year nationwide and $87,773 in California.</strong> The average salary for the US is $63,795 and the average salary for California is $73,220, an Environmental Biologist <strong>makes more than both averages!</strong>
 
            </p>
        </div>

        <div class = "info">
            <h4 style="color:#00C7CE">Required Majors/Education</h4>
            <p>
                To be an environmental biologist you need a <strong>bachelor’s degree</strong> in <u>biology, natural sciences, or life science</u>. You also need a good <u>foundation in statistics, mathematics, and computer science</u>. Some <u>example degrees are Environmental Science, Sustainability, Ecology, and Agriculture</u>. A master’s degree is often preferred but not required. The top 5 universities for these majors in the US are: <strong>Stanford, Yale, Columbia, MIT, and Brown</strong>. Internationally, the best universities are <strong>Tsinghua University (China), Peking University (China), Stanford (US), ETH Zurich (Switzerland), and Wageningen University (Netherlands).</strong>  
            </p>
        </div>

        <div class = "info">
            <h4 style="color:#FA7E61">Projected Job Growth</h4>
            <p>
                Demand for environmental biologists is projected to grow remarkably in the coming years. Demand is <u>driven by increasing environmental challenges, climate concerns and an urgent need for sustainable solutions.</u> According to the U.S. Bureau of Labor Statistics, jobs in environmental science and conservation are expected to <strong>increase 5-7% by 2032</strong>, which is <strong>faster than the average for all occupations</strong>. This growth is fueled by requirements for environmental impact assessments, conservation efforts, pollution control and the development of sustainable technologies. As corporations, organizations and governments become more committed to environmental protection and sustainable practices, environmental biologists will play a critical role in addressing complex ecological issues, monitoring biodiversity and developing strategies to reduce environmental risks. 
            </p>
        </div>

        <div class = "info">
            <h4 style="color:#FFB800">Impact of Environmental Biologists</h4>
            <p>
                Here's a look at what Environmental Biologists have accomplished!
                <ul>
                    <li>
                        <a href="https://www.epa.gov/careers/science-careers-epa">Environmental Protection Agency (EPA)</a>
                        <ul>
                            <li>
                                Environmental Biologists at the EPA <strong>conduct research on ecosystem health and conservation, perform environmental impact 
                                assessments and develop recommendations</strong>. People at this job have made an impact through developing an app to <u> warn 
                                people about wildfire smoke, conducting important research on the environmental and health impacts of energy use, and making 
                                ground-breaking innovations in water infrastructure and decontamination. </u> 
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://www.nature.org/en-us/about-us/who-we-are/how-we-work/community-led-conservation/american-buffalo/">The Nature Conservancy</a>
                        <ul>
                            <li>
                               Through this job Environmental Biologists <strong>led ecosystem preservation efforts for buffalo</strong> through <u>biodiversity 
                               surveys, species monitoring and sustainable development practices</u>. They worked with Native Tribes to find the best ways to 
                               protect and raise the bison population. <strong>Hundreds of bison are being protected due to their efforts.</strong> The Bison are 
                               a keystone species for grasslands and also a keystone for Native American culture. So, their restoration helped not only the health 
                               of the prairie but also the tribe’s identity.  
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="https://research.noaa.gov/noaa-and-carbon-to-sea-team-up-to-develop-data-management-guidelines-for-marine-carbon-dioxide-removal-projects/ ">NOAA (National Oceanic and Atmospheric Administration)</a>
                        <ul>
                            <li>
                                Environmental Biologists at NOAA <strong>investigate marine and atmospheric environments with a focus on climate change impact and 
                                ecosystem health.</strong> Recently, researchers at the NOAA partnered with Carbon to Sea to increase the amount of carbon dioxide 
                                absorbed by the ocean. This is a <u>crucial step for keeping global temperatures 1.5°-2° celsius above pre-industrial levels</u>. 
                            </li>
                        </ul>
                    </li>
                </ul>         
            </p>
       </div> 
        `
    );
} 

function financialPlanner(){
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
    main.insertAdjacentHTML("afterbegin",`+
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQJX6Pnq4Gn1PnuihtcLUe1AiS07MZnPd31ref-a_anPzlzkyIooQ8swFEKXUHKalH0vcdDUs040QrE/embed?start=false&loop=false&delayms=5000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" style = "float:left; left:0vw; height:70vh;"></iframe>
        `
    );
}