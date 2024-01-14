//new sprint-3 content//////////////

import BandsiteAPI from "./band-site-api.js";

const api_key= "e6882fd0-adc7-4899-9868-cd311df69876";
const commentsURL = `https://project-1-api.herokuapp.com/comments?api_key=${api_key}`;
const comments = new BandsiteAPI(commentsURL);
comments.getComments();

///////////////////////////
const fixedComments =[
  {
    name: "Connor Walton",
    timestamp: "02/17/2021",
    comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
  },
  {
    name: "Emilie Beach",
    timestamp: "01/09/2021",
    comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
  },
  {
    name: "Miles Acosta",
    timestamp: "12/20/2020",
    comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  }
];



const commentsContainer = document.querySelector(".comments__container");

const commentsFormWrapper = document.createElement('div');
commentsFormWrapper.classList.add('comments__formwrapper');
commentsContainer.appendChild(commentsFormWrapper);

const commentsHeader = document.createElement('h2');
commentsHeader.classList.add('comments__header');
commentsFormWrapper.appendChild(commentsHeader);
commentsHeader.innerText = ('Join the Conversation');


const commentsForm = document.createElement('form');
commentsForm.classList.add("comments__form");
commentsForm.setAttribute('id', "cmntForm");
commentsForm.setAttribute('action', "submit");
commentsFormWrapper.appendChild(commentsForm);

const formWrapper = document.createElement('div');
formWrapper.classList.add('form__wrapper');
commentsForm.appendChild(formWrapper);


const userImage = document.createElement("div");
userImage.classList.add("comments__userimage");

formWrapper.appendChild(userImage);

const formColumnsWraper = document.createElement("div");
formColumnsWraper.classList.add("comments__formcolumnswrapper");
formWrapper.appendChild(formColumnsWraper);


const formColumnOne = document.createElement('div');
formColumnOne.classList.add('form__columnone');
formColumnsWraper.appendChild(formColumnOne);

const formLabelOne = document.createElement('label');
formLabelOne.classList.add("form__label");
formLabelOne.innerText = ("NAME");
formColumnOne.appendChild(formLabelOne);

const formInputOne = document.createElement('input');
formInputOne.classList.add("form__text");
formInputOne.type = ("text");
formInputOne.name = ("username");
formInputOne.id = ("name");
formInputOne.placeholder = ("Enter your name");
formColumnOne.appendChild(formInputOne);


const formColumnTwo = document.createElement('div');
formColumnTwo.classList.add('form__columntwo');
formColumnsWraper.appendChild(formColumnTwo);

const formLabelTwo = document.createElement('label');
formLabelTwo.classList.add("form__label");
formLabelTwo.innerText = ("COMMENT");
formColumnTwo.appendChild(formLabelTwo);

const formInputTwo = document.createElement('input');
formInputTwo.classList.add("form__text2");
formInputTwo.type = ("text");
formInputTwo.name = ("name");
formInputTwo.id = ("comment");
formInputTwo.placeholder = ("Add a new comment");
formColumnTwo.appendChild(formInputTwo);


const submitButton = document.createElement('button');
submitButton.type = ("submit");
submitButton.id = ("submit");
submitButton.classList.add("comments__button");
submitButton.innerText = ("COMMENT");
formColumnsWraper.appendChild(submitButton);


const parentDiv = document.createElement('div');
parentDiv.classList.add("comments__card--parent");
commentsContainer.appendChild(parentDiv);

function displayComments(album) {  

const commentCardEl = document.createElement("div"); 
commentCardEl.classList.add("comments__card");
parentDiv.appendChild(commentCardEl);


const commentCardParent1 = document.createElement("div"); 
commentCardParent1.classList.add("comments__card--parent1");
commentCardEl.appendChild(commentCardParent1);

const commentCardParent2 = document.createElement("div"); 
commentCardParent2.classList.add("comments__card--parent2");
commentCardEl.appendChild(commentCardParent2);



const userIcon = document.createElement("div");
userIcon.classList.add("comments__icon");
commentCardParent1.appendChild(userIcon);



const commentCardCont1 = document.createElement("div"); 
commentCardCont1.classList.add("comments__card--cont1");
commentCardParent2.appendChild(commentCardCont1);

const userName = document.createElement("p");
userName.classList.add("comments__username");
userName.innerText = album.name;
commentCardCont1.appendChild(userName);

const userDate2 = document.createElement("p");
userDate2.classList.add("comments__date");
userDate2.innerText = album.timestamp;
commentCardCont1.appendChild(userDate2);


const commentCardCont2 = document.createElement("div"); 
commentCardCont2.classList.add("comments__card--cont2");
commentCardParent2.appendChild(commentCardCont2);

const userComment = document.createElement("p");
userComment.classList.add("comments__text");
userComment.innerText = album.comment;
commentCardCont2.appendChild(userComment);
}

function renderAllComments(allComments){

  parentDiv.innerHTML = "";

allComments.forEach((album) => {
  displayComments(album);
});
}

renderAllComments(fixedComments);





const albumFormEl = document.getElementById("cmntForm");

albumFormEl.addEventListener("submit", (event) => {

event.preventDefault();

const userName = event.target.elements.username.value;
const userComment = event.target.elements.comment.value;

const timestamp = new Date().toLocaleDateString('en-US', {
month: '2-digit',
day: '2-digit',
year: 'numeric'
});

const album = {
name: userName,
comment: userComment,
timestamp: timestamp,
icon: ""
};

fixedComments.unshift(album);
renderAllComments(fixedComments);

albumFormEl.reset();

//call the POST request method here
comments.getComments(album);

});


