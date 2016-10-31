function random() { x = Math.random(); 
    }


function randomQuestion() {
    
    var questionArray = ['Adding one bit ____ the amount of information that can be represented.', 'A(n) ____ is the set of rules governing the exchange or transmission of data between devices.', 'The ____ created the first multi-computer network known as the ARPANET.', 'What does HTTP stand for?', 'ASCII is used to ______', 'A high-quality internet connection has______.','What program is used to access websites?','A .Com domain is typically used for a _____ site.','A ____ connects to the host server.','Images in the ____ domain are not protected by copyright.',
    'How do you start an HTML document?','What are some editors you can use to make HTML, CSS, etc? (Multiple Answers)','Which one of these fonts is not installed by default?','Which tag is used before an individual item in lists?','How do you link an external JavaScript page?','What tag shows a table row?','How do you correctly call an image in HTML?','How do you add a horizontal rule?','Which heading tag is the largest?','Which ways can you call a color in HTML?',
    'Which one of these properties is used to change the text color in CSS?','Which property below increases space inside an element in CSS?','How do you correctly add multiple margins in one line of code if the top margin is 100px, the right margin is 150px, the bottom margin is 100px, and the left margin is 80px in CSS?','Which symbol is used to call an id in CSS?','What is the outermost element found in the box model?','How do you add a border to an element with only one line of code in CSS?','How do you use a font that has multiple words in CSS?','What should you add to the <a> tag if you want to change the color of a previously visited link in CSS?','How do you add a background color to an element in CSS?','How do you align text in CSS?',
    'How do you write a message to the console in JavaScript?','How do you comment a single line in JavaScript?','Which answer below maintains proper Camelcase?','What is a string used for?','What is used to alter HTML with Javascript?','How do you create an array in JavaScript?','JavaScript was originally called _____.','How do you write an alert to the user in JavaScript?','How do you make an if statement?','How do you create a function?',];
var rand = questionArray[Math.floor(x * questionArray.length)];
document.getElementById("Question").innerHTML = rand;
    
}

function randomAnswerA() {
    var answerArrayA = ['<p id="correct">Doubles</p>', 'Domain', '<p id ="correct">Government</p>', 'Hyperlink to Text Protocol', '<p id ="correct">Encode text in an easy to understand format</p>', '<p id ="correct">High Bandwidth; Low Latency', '<p id ="correct">Internet Browser</p>', '<p id ="correct">Commercial</p>', '<p id ="correct">Client</p>', '<p id ="correct">Public</p>',
    'html', 'Android Studio', 'Times New Roman', 'ol', 'myFunction()=embed', 'tablerow', 'img src="image.jpg"', '"horizontalrule"', 'h3', 'color=#FFFFFF', 
    'h1 {color:red;}', 'h1 padding:5px', 'p {margin: 100px 150px 100px 80px;}', '%', 'Padding', 'border-left: red solid 6px;', 'font-family: |Comic Sans MS|;', 'a:hover', 'background-color: white;', 'gravity: falls;',
    'console.log("Text")','(Comment)','TEXTEXAMPLE','Storing and Manipulating Numbers','innerHTML','var javascript() = [This, IsAn, Array]','Java','console.log','if i == x then','function completeMath(x - y) {x*y}',];
var rand = answerArrayA[Math.floor(x * answerArrayA.length)];
document.getElementById("a").innerHTML = rand;    
}

 function randomAnswerB() {
    var answerArrayB = ['Triples', '<p id ="correct">Protocol</p>', 'Harvard College', '<p id ="correct">Hypertext Transfer Protocol</p>', 'Encrypt Passwords', 'Low Bandwidth; Low Latency', 'Android Studio', 'Government', 'Folder', 'Private', 
    '!DOCTYPE html', 'Brackets', 'Comic Sans MS', 'ul', 'link rel="javascript" type="text/javascript" href="theme.js"', 'th', 'a href="image"', 'hr', 'h6', 'color="white"', 
    'h1 color:red', 'h1 {padding:5px}', 'p {margin: 80px 100px 150px 100px;}', '*', 'Content', 'border-left: 6px solid red;', 'font-family: *Comic Sans MS*;', 'a:visited', 'backgroundcolor: white;', 'align-text: left;', 
    'document.write("Text")', '//Coment', 'TeXtExAmPlE', 'Writing Functions', 'getElementByClassName', 'var javascript = [This, IsAn, Array]', 'ECMScript', 'messageUser("Hi how are you")', 'if i = x then', 'function completeMath(x, y) {x*y}',];
var rand = answerArrayB[Math.floor(x * answerArrayB.length)];
document.getElementById("b").innerHTML = rand;    
}

function randomAnswerC() {
  var answerArrayC = ['Halves', 'IP Address', 'Founders of Microsoft', 'Hypertext Translation Post', 'Create websites', 'High Bandwidth; High Latency', 'Adobe Illustrator', 'Educational', 'Download', 'Open',
    'head', 'Sublime', 'Arial', 'li', 'script src="myscripts.js"', 'td', 'script="image"', 'br', 'h1', 'Both of these answers are correct',
    'h1 {textcolor:red;}', 'h1 {margin:5px;}', 'p {margin: 150px 100px 80px 100px;}', '.', 'Margin', 'border-left: solid red 6px;', 'font-family: /Comic Sans MS/;', 'a:link', 'background_color: white;', 'text-align: left;',
    'myFunction(logConsole)', '/* */', 'textExample', 'Adding a CSS file', 'console.log', 'var javascript = This, IsAn, Array', 'ECMAScript', 'alertUser("Hi There");', 'if (i == x) then', 'function completeMath(x + y) {x*y}',];
var rand = answerArrayC[Math.floor(x * answerArrayC.length)];
document.getElementById("c").innerHTML = rand;
    
}

function randomAnswerD() {
    var answerArrayD = ['Does nothing', 'Bit', 'Google Company', 'Helpful Transaction Translation Pile', 'Access the console', 'Low Bandwidth; High Latency', 'Microsoft Paint', 'Organization', 'PDF', 'Closed', 
    '/html', 'xCode', 'Sans-Serif', 'hl', 'var embedHTML = innerHTML', 'tr', 'link rel="image.jpg"', '"ruler"', 'h4', 'None of these answers are correct', 
    'h1 textcolor:red;', 'h1 margin:5px;', 'p {margin: 80px 100px 100px 150px;}', '#', 'Border', 'border-left: red 6px solid;','font-family: "Comic Sans MS";', 'a:active', 'background:color= white;', 'text-gravity: left;', 
    'logInformation(Now)', '!-- --', 'TextExample', 'Storing and Manipulating Text', 'getElementById', 'var javascript() = [This(), IsAn(), Array()]', 'HTMLScript', 'alert("Hi There");', 'if i = x', 'function completeMath x, y {x*y}',];
    var rand = answerArrayD[Math.floor(x * answerArrayD.length)];
document.getElementById("d").innerHTML = rand;
    
} 







// Colors For Incorrect and Correct Answers 

function correctAnswer() {
    document.getElementById("body").style.color = "green";
}

function wrongAnswer() {
    document.getElementById("body").style.color = "red";
}
