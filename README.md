![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Casper Hille

Full-Stack Development course (5p) | Portfolio project 2
***

# Purpose of the Project

The purpose of this project is to make Rock paper Scissors Lizard Spock in javascript.
this webpage is for you to be able to play a small game on your free time or on your coffee break during work. something that is small and bite sizes and doesn't take an to complete.

# User Stories

as a user I want to play a game of chances.

as a user I want to see how to play the game.

# Features

   * rezisable logo

      the logo scales with the game window size.

   * game area

      the game area will show the game area and will also contain the how to play/ win and lose message.

   * how to play button

      the page will have a button that converts the game area into how to play area.

   * Round message

      It shows the result of each round with coloured message.

   * Javascript running feedback

      the page starts of with a message which tells the use javascript is not running.

# Future Features
   
   * Animations

      When the user presses one of the options i'd like to have an animation where the users button and the computers choice would crash into eachother and the winning choice would remain on the page to increase the visual feedback of what happens during the round.

# Typography and Color Scheme

   For the colour scheme I am going with a grayscaled background, light-gray play area and the buttons in the different colour so the buttons will contrast well to the rest of the page so the user will have it easier to spot the buttons even if user has some vision impairment.

   I want to use Oswald for the logo, And lato for the rest of the text due to it simplicity and clearness.

# Wireframes

   ## Desktop sized wireframes
   [Desktop Wireframe](./docs/wireframes/dekstop-wireframe.jpg)
   ## Handheld sized wireframes
   [Phone Wireframe](./docs/wireframes/phone-wireframe.jpg)
# Technology
## html
   Html was used to put structure to the web-page.
## css
   CSS is used to put color and form to the html files
## Javascript 
   JavaScript was used to automate and update the page according to the users input.
## Gitpod
   Gitpod is the IDE that i've used to write the underlying code for the webpage.
   Why I chose this for ease of use and its connectability with github and due to it being used during the Code Institute's walkthrough project.
## AwesomeFont
   Awesome font is a script that allows developer to use special characters on the web-page. there is a wide range of variety and it as simple copy and pasting the link provided on their webpage.

## GoogleFonts
   GooleFonts is a cloud font service where the fonts are stored on Googles cloud service which grants the developer a wider range of fonts to use on the web-page and not having to rely on the user to have the font installed.

# testing

   ## code validation
   
   Code was validated using W3 for html, JigSaw for css and Jshint for javaScript and has been formated to not show any warning or errors.
   
   ## test cases (user story based with screenshots)

   * as a user I want to play a game of chances.

      [Screenshot from  main page with steps](./docs/screenshots/Screenshot-1.png) 

      when I open the game I am presented with 5 options, I can then press one of the options and then a round message appeared saying what my choice was and what the computer picked and telling me what the outcome was.

      after I win three rounds a message is displayed and saying I won or lost.


   * as a user I want to see how to play the game.
  
      [Screenshot from how to play page with steps](./docs/screenshots/Screenshot-2.png)

      when I open the page I can see the button "How to play", when I press on it, it shows me the rules and player options then I can press "I understand now!" and then I am returned to the game and ready to play.
   
   ## supported screens and browsers
   The page is designed to have a maximum of 1920x1080 screen support.

   desktop 1920x1080 to 1920x290. works as intended.

   The following devices have been tested on chrome developer tool emulator and worked as intended.
   * Galaxy Note II
   * Kindle Fire HDX
   * Pixel 2
   * iPhone 5/SE
   * iPhone 6/7/8 Plus
   * iPhone X
   * iPad pro
   * Surface Duo
   * Galaxy Fold

   Small issues that affects the webpapage
   * iphone 4 (the height of the screen resolution hides half of the how to play button.)

   The following devices have been tested on Firefox developer tool emulator and worked as intended.
   * galaxy S9
   * iPad
   * iPhone 6/7/8 Plus iOS 11
   * iPhone 6/7/8 iOS 11
   * iPhone X/XS iOS 12
   * Kindle Fire HDX Linux

   Microsoft Edge works as intended.

## fixed bugs and issues found during development

   * During develompent I found and fixed a bug where javascript would stack eventlisteners of the user game moves when pressing How to play button, this was due to that I had the return button calling the game functions. I fixed this by moving all event listeners to the game function that only is called once the DOM was loaded.

   * The "how to play" button didn't work as I wanted and made several revisions of it before settling on just have it at the bottom of the content instead being fixed to the bottom of the screen.

   * I wanted to use the defer command on the script but as it is a fairly new feature, I thought it might be better to wait with using this feature to make sure it would work across all plattforms.

# Deployment
   ## via gitpod
 
   * To use gitpod you have to start a repository on Github. 
   from there if you have the gitpod plugin on your browser a green button stating "Gitpod" is available. that button redirects you to the GitPod IDE
   
   * When it's done loading you will see down in the bottom a few tabs, when you press on terminal you will be able to input a command 
   
   * to deploy your application through a http server you can write "Python3 -m http.server". this will open the http service and GitPod will give you a notification "A service is available on port 8000" with three buttons ( make public, open preview, open browser) so when you open your browser it will open the  index.html files, if that doesn't exist it will open the readme.md file instead.
 
   * This is a good place to test your applications before pushing and deploying on github.

 
   ## via github pages
 
   To deploy a web page in github pages you need to go to your repository on github. there you will see a settings tab. Once you click that you will have a list on the left. scroll down to "pages and click it.
 
   there you will see a drop down menu and there you have to choose your branch of the project you want to deploy then you have to press save.
 
   Once saved you'll receive a notification on the same page with the link to your newly deployed site, although note that github pages can take a few minutes before it's fully deployed.
 
   When you have waited a few minutes you can click on the link provided and now you can test if everything works as intended. if not you have to update your files and push it again. Github pages will update the page for you and again, this might take a few minutes.

# My personal achievements and what I feel I need to work on.

   My biggest achievment was learning how to refactor reusable code and reduces the code.

   
