
import BandsiteAPI from "./band-site-api.js";

const api_key= "f735125b-025d-4208-8ff7-1e6deeae76c9";
const baseURL = "https://project-1-api.herokuapp.com/"
const commentsURL = `${baseURL}comments?api_key=${api_key}`;
const comments = new BandsiteAPI(commentsURL);
comments.getComments();



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

const albumFormEl = document.getElementById("cmntForm");

const parentDiv = document.createElement('div');
parentDiv.classList.add("comments__card--parent");
commentsContainer.appendChild(parentDiv);

albumFormEl.addEventListener("submit", async (event) => {
event.preventDefault();

const userName = event.target.elements.username.value;
const userComment = event.target.elements.comment.value;


const album = {
    name: userName,
    comment: userComment,
};


await comments.postComments(album);

albumFormEl.reset();


const parentDiv = document.querySelector(".comments__card--parent");
parentDiv.innerHTML = '';

});

const newComment = {
    name: userName,
    comment: userComment,
    timestamp: new Date().getTime(), 
  };
  
 
  const commentCardEl = document.createElement("div"); 
  commentCardEl.classList.add("comments__card");
  parentDiv.appendChild(commentCardEl);
  
  displayComment(newComment, commentCardEl);