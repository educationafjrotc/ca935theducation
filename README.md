# ca935theducation
 CA-935th's education website

Table of Contents:

    -General pointers
    -How to update
    -Ideas for future additions
    -Additional resources

GENERAL POINTERS

    1. DO NOT CHANGE THE CLASSES, CSS, NON-TEXT CODE UNLESS YOU KNOW WHAT YOU ARE DOING AND ARE CONFIDENT IN YOUR ABLITIES TO FIX ANY DAMAGE YOU MAY HAVE CAUSED. However, don't be afraid to add new features, just don't commit until you know it works. 

    2. Usually external CSS, images, and fonts are stored in the static folder. However if you do this, these will components will not load in Firefox. Until you find a solution to this issue, keep everything where it currently is. 

    3. Every time you commit and push, include a message with a detailed description of what has been changed.

    4. Github has a web editor. You can find it by clicking on one of the html files and then clicking on the arrow next to the pencil which is located at the top of the code. However, downloading the files and making edits locally before pushing is prefered since it is easier to maintain. 

    5. For lack of a better description, the general theme of the website is "cute". The color palette is in the static folder under images. 

    6. Use the font cocogoose for headers, louis_george_cafe for body text, and kollera ONLY for the title of the website in the navbar and footer.

    7. Keep the format of the code consistent. For example use either single or double quotes, stay consistent in your indents (I like to keep one indent for each tag it's inside of), and class naming style. Remember the website is only yours for a few academic years! Afterwards other people have to be able to maintain it. 


HOW TO UPDATE THE WEBSITE
    SCHOLARSHIPS, CURRENT_EVENTS, & CAREERS
    
        1. To add to the website, first navigate to the updater.js file of the page you want to update. DO NOT MAKE CHANGES DIRECTLY TO THE HTML PAGE.

        2. Then, copy paste the information into the function relavent to that information (ex. a scholarship due Sept. 30th should be pasted in to function september(){}. Information about a biomaterials engineer goes into the biomaterialsEngineer function). 
        
        3. Format the text by adding <li> and <ul> tags around anything with bulletpoints, <a> around any links, and <strong> around anything bold.

        4. If in doubt, follow the format of previously added scholarships. Make sure to add the correct classes/ids!

        5. Before commiting, add the days the scholarships you added to the website were posted on the discord. So for example if you posted a scholarship on 2/15/24 and later added it to the website, say that you added a scholarship from 2/15/24 in the message before commiting the code. Also add this date to the top of the updater file. 

        6. Commit and Push! The website will take about a minute to show the changes you just made. 

        7. To change the month or career displayed when the page is first loaded change the function in onload in the body tag. 

        8. Remember to shift the divs with the month and career names as the month and latest career article changes!

   KNOWLEDGE.HTML
   
        1. Find the <h1> tag that says "Next Monday's Knowledge: "

        2. Change the text inside the <a> tag inside it to display the correct knowledge.

        3. Update the knowledge quizlet labeled "this week's knowledge"

        4. Before commiting, comment that you updated the knowledge and what it was updated to.

        5. Commit and Push! The website will take about a minute to show the changes you just made. 


IDEAS FOR FUTURE ADDITIONS

    1. Change the image on index.html to something else

    2. The fonts are in the same directory as the html files because firefox won't load them if they are in a different folder. If you find a way to get the page load properly and have the font files in the static folder please implement it. 
    3. If you want to make a new webpage check /static/templates for help!



ADDITIONAL RESOURCES

    https://www.w3schools.com/html/default.asp
    https://stackoverflow.com
    https://geeksforgeeks.org
    Search up any error messages or bugs you encounter. You will find the solution.




    





