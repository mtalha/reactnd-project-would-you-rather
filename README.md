# Would You Rather - React Nano-Degree Second Project  
  
I forked the github starter repository that had the _DATA.js file that contained the mocked DB and worked on the project on my local machine.  
I have checked in all the code in the `master` branch of my forked repo.   
  
## Instructions - how to compile & run the project  
After cloning the git repository or downloading the zip file, please open the terminal and go into the project root repository i.e. you should be in `reactnd-project-would-you-rather` directory  
  
Step 1.   
  
* install all project dependencies with `npm install`  
  
Step 2. When the Step 1. is complete (it should complete without any errors), run the following command to open the project landing page in your default browser window  
  
* run the project with `npm start`  
  
When Step 2. is completed, you will see the `http://localhost:3000/` url in your browser tab.  
  
# Would-You-Rather Project - Description 
Would-You-Rather is the second project in Udacity React Nano-Degree program.  
The project aims to give the users a hands-on practice on React & Redux.  
  
This projects displays a poll to the user in the form of `Would you rather...`  
* choose to do this   
* choose to do that  
  
  
The project starts with a login page where the user names are loaded from a mocked db and displayed inside a dropdown; user chooses a name from the list and clicks on the `Sign In` button.  
  
There is a `navigation` component at top of each page the user views. The navigation component has three links:  
* Home  
* New Question  
* Leader Board  
  
The logged in user information is also displayed on the top of each page with the user name and the avatar. There is a logout button at the top right with the help of which user can logout at anytime.  
  
After successful login, the user lands on the `home` page that divides the poll questions into two tabs  
* Unanswered Questions  
* Answered Questions  
by the user. User can click on the `View Poll` button on any question in each tab that takes the user to that particular question's detail page. If it was unanswered by the user, user can submit an answer and if it was answered, user sees the result of the poll, with an indication of what answer did she gave. 
As the user records an answer against an unanswered question, it is moved to the `answered questions` tab. 

The `new question` tab let's the user create a question, which also starts appearing in the `unanswered questions` tab. 

There is a `Leader Board` as well that shows the stats about users. A user score is calculated as the `sum of the questions answered and questions created`, a user with a higher score appears on the top. The `leader board` is dynamically updated, as the user keeps answering/creating questions.

## Login Required
A user cannot access any page without signing in. So if a user accesses a link directly from the browser's address bar, user is redirected to the `sign-in` page first. 
  
  
## Invalid Links Handling  
The project also handles the invalid links entered directly in the browser tab's address bar.  
For example if a user enters something like `http://localhost:3000/blablaba` they will see a 404 not found page, rather than a blank page.