
const fixedShows = [
    {
        date: "Mon Sept 06 2021",
        venue:"Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue:"Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue:"View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue:"Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue:"Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue:"Press Club",
        location: "San Francisco, CA"
    }
];


const showsContainer = document.querySelector(".shows");

const showsHeader = document.createElement('h2');
showsHeader.classList.add('shows__header');
showsContainer.appendChild(showsHeader);
showsHeader.innerText = ('Shows');


//اینا برای تبلت و دستکتاپن!!!
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




function displayShows(album,index){
    
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
    showsDate.innerText = (album.date);
    showsDate.setAttribute("id", index);
    showsCard.appendChild(showsDate);

    const titleVenue = document.createElement("p");
    titleVenue.classList.add("shows__title");
    titleVenue.innerText = ("VENUE");
    showsCard.appendChild(titleVenue);

    const showsVenue = document.createElement("p");
    showsVenue.classList.add("shows__venue");
    showsVenue.innerText = (album.venue);
    showsVenue.setAttribute("id", index);
    showsCard.appendChild(showsVenue);

    const titleLocation = document.createElement("p");
    titleLocation.classList.add("shows__title");
    titleLocation.innerText = ("LOCATION");
    showsCard.appendChild(titleLocation);

    const showsLocation = document.createElement("p");
    showsLocation.classList.add("shows__location");
    showsLocation.innerText = (album.location);
    showsLocation.setAttribute("id", index);
    showsCard.appendChild(showsLocation);

    const showsButton = document.createElement('button');
    showsButton.type = ("submit");
    showsButton.id = ("submit");
    showsButton.classList.add("shows__button");
    showsButton.innerText = ("BUY TICKETS");
    showsCard.appendChild(showsButton);
}

function renderAllShows(allShows){

    allShows.forEach((album,index) => {
    // let i = 0;
    // i++;
    // showsCard.setAttribute(`shows__card${i}`);
    displayShows(album,index);
  });
}

renderAllShows(fixedShows);