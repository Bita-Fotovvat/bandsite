
export default class BandsiteAPI {
    constructor(baseURL){
        this.baseURL = baseURL;
    }

    async postComments(album){
        try{
            await axios.post(this.baseURL, album)

        }catch(error){
            console.error("error", error.response.data);
        }
    }

    async getComments(){
        try{
            const response = await axios.get(this.baseURL);
            const comments = response.data;

            comments.sort((a, b) => b.timestamp - a.timestamp)

                const commentsContainer = document.querySelector(".comments__container");
                
                const parentDiv = document.createElement('div');
                parentDiv.classList.add("comments__card--parent");
                commentsContainer.appendChild(parentDiv);

                comments.forEach((cmnt)=>{
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
                userName.innerText = cmnt.name;
                commentCardCont1.appendChild(userName);

                const userDate2 = document.createElement("p");
                userDate2.classList.add("comments__date");
                const timestamp = cmnt.timestamp;
                const date = new Date(timestamp);
                const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;

                userDate2.innerText = formattedDate;

                commentCardCont1.appendChild(userDate2);

                const commentCardCont2 = document.createElement("div"); 
                commentCardCont2.classList.add("comments__card--cont2");
                commentCardParent2.appendChild(commentCardCont2);

                const userComment = document.createElement("p");
                userComment.classList.add("comments__text");
                userComment.innerText = cmnt.comment;
                commentCardCont2.appendChild(userComment);

                return comments;
            });

        }catch(error){
            console.error("Error:", error);
            return [];
        }
    }


    async getShows(){
        try{
            const showsresponse = await axios.get(this.baseURL);
            console.log(showsresponse);
            const shows = showsresponse.data;

            const showsContainer = document.querySelector(".shows");
     
            const showsHeader = document.createElement('h2');
            showsHeader.classList.add('shows__header');
            showsContainer.appendChild(showsHeader);
            showsHeader.innerText = ('Shows');

            const headWrapper = document.createElement('div');
            headWrapper.classList.add('shows__headwrapper');
            showsContainer.appendChild(headWrapper);

            headWrapper.appendChild(showsHeader);

            const showWrapper = document.createElement('div');
            showWrapper.classList.add('shows__showwrapper');
            showsContainer.appendChild(showWrapper);

            const showsCardTD = document.createElement("div");
            showsCardTD.classList.add("shows__cardtabletdesktop");
            showsContainer.appendChild(showsCardTD);

            const titleDateTD = document.createElement("p");
            titleDateTD.classList.add("shows__titletabletdesktop");
            titleDateTD.innerText = ("DATE");
            showsCardTD.appendChild(titleDateTD);

            const titleVenueTD = document.createElement("p");
            titleVenueTD.classList.add("shows__titletabletdesktop");
            titleVenueTD.innerText = ("VENUE");
            titleVenueTD.setAttribute("id", "title2");
            showsCardTD.appendChild(titleVenueTD);

            const titleLocationTD = document.createElement("p");
            titleLocationTD.classList.add("shows__titletabletdesktop");
            titleLocationTD.innerText = ("LOCATION");
            titleLocationTD.setAttribute("id", "title3");
            showsCardTD.appendChild(titleLocationTD);

            showWrapper.appendChild(showsCardTD);

            function addSelectedState(event) {
            document.querySelectorAll('.shows__card').forEach(card => {
            card.classList.remove('selected');
            card.classList.add('notselected');
            });

            const clickedShow = event.currentTarget.closest('.shows__card');

             if (clickedShow) {
             clickedShow.classList.add('selected');
             clickedShow.classList.remove('notselected');
             }

             document.body.classList.add('section-selected');
}

    function formatDate(timestamp) {
    const date = new Date(timestamp);
    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-US', options).replace(/,/g, '');
    }

    function displayShows(shows,index){
    
    const showsCard = document.createElement("div");
    showsCard.classList.add("shows__card");
    showsCard.setAttribute("id", index);
    showsContainer.appendChild(showsCard);

    const titleDate = document.createElement("p");
    titleDate.classList.add("shows__title");
    titleDate.innerText = ("DATE");
    showsCard.appendChild(titleDate);

    const showsDate = document.createElement("p");
    showsDate.classList.add("shows__date");
    const formattedDate = formatDate(shows.date);
    showsDate.innerText = formattedDate;
    
    showsDate.setAttribute("id", index);
    showsCard.appendChild(showsDate);




    const titleVenue = document.createElement("p");
    titleVenue.classList.add("shows__title");
    titleVenue.innerText = ("VENUE");
    showsCard.appendChild(titleVenue);

    const showsVenue = document.createElement("p");
    showsVenue.classList.add("shows__venue");
    showsVenue.innerText = (shows.place);
    showsVenue.setAttribute("id", index);
    showsCard.appendChild(showsVenue);

    const titleLocation = document.createElement("p");
    titleLocation.classList.add("shows__title");
    titleLocation.innerText = ("LOCATION");
    showsCard.appendChild(titleLocation);

    const showsLocation = document.createElement("p");
    showsLocation.classList.add("shows__location");
    showsLocation.innerText = (shows.location);
    showsLocation.setAttribute("id", index);
    showsCard.appendChild(showsLocation);


    const showsButton = document.createElement('button');
    showsButton.type = ("submit");
    showsButton.id = ("submit");
    showsButton.classList.add("shows__button");
    showsButton.innerText = ("BUY TICKETS");
    showsCard.appendChild(showsButton);


    showsButton.addEventListener('click', addSelectedState);

    showWrapper.appendChild(showsCard);
}


    function renderAllShows(allShows){

    allShows.forEach((shows,index) => {
    displayShows(shows,index);

  });
}

renderAllShows(shows);









































        }catch(error){
            console.error("Error:", error);
            return [];
        }
    }







///////////////////////////////////////shows


}

