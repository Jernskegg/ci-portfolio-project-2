![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Casper Hille

Full-Stack Development course (5p) | Portfolio project 2
***

# Purpose of the Project

The purpose of this project is to make Rock Paper Scissors Lizard Spock in javascript. This webpage is for you to play a small game in your free time or during your coffee break during work. Something small and bite sizes and doesn't take a to complete.

# User Stories

as a user, I want to play a game of chances.

As a user, I want to see how to play the game.

# Features

   * resizeable logo

      The logo scales with the game window size.

   * game area

      The game area will show buttons and contain how to play/ win and lose a message.

   * how to play button

      The page will have a button that converts the game area into how to play page.

   * Round message

      It shows the result of each round with a coloured message.

   * Javascript running feedback

      The page will give the user a message which tells javascript is not running.

# Future Features
   
   * Animations

      When the user presses one option, I’d like to have an animation where the users’ button and the computer’s choice would crash into each other. The winning choice would remain on the page to increase the visual feedback of what happens during the round.

# Typography and Color Scheme

   For the colour scheme, I am going with a grayscaled background, light-grey play area. The buttons will be in different colours to contrast nicely to the rest of the page, making it easier to spot the buttons even if they have vision impairment.


   I want to use Oswald for the logo And Lato for the text due to its simplicity and clearness.

# Wireframes

   ## Desktop sized wireframes
   [Desktop Wireframe](./docs/wireframes/dekstop-wireframe.jpg)
   ## Handheld sized wireframes
   [Phone Wireframe](./docs/wireframes/phone-wireframe.jpg)
# Technology
## HTML
   Html is used to put structure to the web page.
## CSS
   CSS is used to put colour and form to the HTML files.
## JavaScript 
   You can use JavaScript to automate and update the page according to the user’s input.
## Gitpod
   Gitpod is the IDE that I’ve used to write the underlying code for the webpage. I chose this for ease of use and its connectivity with GitHub, and due to that, I used it during the Code Institute's walkthrough project.
## AwesomeFont
   The awesome font is a script that allows developers to use special characters on the web page. There is a wide range of variety, and it is simple to copy and paste the link provided on their webpage.

## GoogleFonts
   GooleFonts is a cloud font service. The fonts are stored on Google’s cloud service, which grants the developer a more comprehensive range of fonts to use on the web page without relying on the user to have the font installed.
# testing

   ## code validation
   
   Code was validated using W3 for html, JigSaw for css and Jshint for javaScript and has been formated to not show any warning or errors.
   
   ## test cases (user story based with screenshots)

   * as a user, I want to play a game of chances.

      [Screenshot from main page with steps - Desktop](./docs/screenshots/screenshot-1.png) 
      |
      [Screenshot from main page with steps - Handheld device](./docs/screenshots/screenshot-1-phone.png)  

      When I open the game, I could choose between five options. I can then press one of the options, and then around message appeared saying what my choice was and what the computer picked and telling me what the outcome was.


      After I win three rounds, a message is displayed and saying I won or lost.

   * as a user, I want to see how to play the game.
  
      [Screenshot from how to play page with steps - Desktop](./docs/screenshots/screenshot-2.png)
      |
      [Screenshot from how to play page with steps - Handheld device](./docs/screenshots/screenshot-2-phone.png)

      When I open the page, I can see the button "How to play", when I press on it, it shows me the rules and player options, then I can press "I understand now!" and then I am returned to the game and ready to play.
   
   ## supported screens and browsers
   The page is designed to have a maximum of 1920x1080 screen support.

   desktop 1920x1080 to 1920x290. works as intended.

   The following devices have been tested on the chrome developer tool emulator and worked as intended.
   * Galaxy Note II
   * Kindle Fire HDX
   * Pixel 2
   * iPhone 5/SE
   * iPhone 6/7/8 Plus
   * iPhone X
   * iPad pro
   * Surface Duo
   * Galaxy Fold

   Minor issues that affect the webpage
   * iPhone 4 (the height of the screen resolution hides half of the how to play button.)

   The following devices have been tested on the Firefox developer tool emulator and worked as intended.
   * galaxy S9
   * iPad
   * iPhone 6/7/8 Plus iOS 11
   * iPhone 6/7/8 iOS 11
   * iPhone X/XS iOS 12
   * Kindle Fire HDX Linux

   Microsoft Edge works as intended.

## fixed bugs and issues found during development

   * I found and fixed a bug during development where javascript would stack “event-listeners” in the game function when pressing the How to play button. 

      That happened because I had the “event-listener” on the how-to-play function, and I called the game function from the how-to-play function. I fixed this by having all the “event-listener” in the game function. When the button was pressed during the how to play function, it just switched what content to display.


   * The "how to play" button didn't work as I wanted visaully. So I made several revisions before settling on just having it attached to the bottom of the content instead of being fixed to the bottom of the screen.

   * I wanted to use the defer command on the script, but as it is a relatively new feature, I thought it might be better to wait to use it to make sure it would work across all platforms.

# Deployment
   ## via Gitpod
 
   * To use Gitpod, you have to start a repository on Github. from there, if you have the Gitpod plugin on your browser, a green button stating "Gitpod" is available. that button redirects you to the GitPod IDE
   
   * When it's done loading, you will see down in the bottom a few tabs. When you press on the terminal, you will input a command
   
   * To deploy your application through an HTTP server. You can write "Python3 -m http.server". This will open the HTTP service. GitPod will give you a notification "A service is available on port "8000" with three buttons ( make public, open preview, open browser) so when you open your browser. It will open the index.html files. If that doesn't exist, it will open the readme file instead.

 
   * This is an excellent place to test your applications before pushing and deploying on GitHub.

 
   ## via github pages
 
   * To deploy a web page in GitHub pages, you need to go to your repository on GitHub. There you will see a settings tab. Once you click that, you will have a list on the left. Scroll down to "pages and click it.

   * There you will see a drop-down menu, and there you have to choose your branch of the project you want to deploy, then you have to press save.

   * Once saved, you'll receive a notification on the same page with the link to your newly deployed site, although note that GitHub pages can take a few minutes before it's fully deployed.

   * When you have waited a few minutes, you can click on the link provided, and now you can test if everything works as intended. If not, you have to update your files and push them again. Github pages will update the page for you, and again, this might take a few minutes.

# My personal achievements and what I feel I need to work on.

   My most significant achievement was learning how to refactor reusable code and reduces the code.

   And I still need to work on the git commit message and the amounts, I need to find a convention to follow.

   
