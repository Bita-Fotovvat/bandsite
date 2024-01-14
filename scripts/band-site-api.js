
const api_key= "e6882fd0-adc7-4899-9868-cd311df69876";

export default class BandsiteAPI {
    constructor(baseURL){
        this.baseURL = baseURL;
        // this.api_key = "e6882fd0-adc7-4899-9868-cd311df69876";
    }


    //get comments
    async getComments(){
        try{
            const response = await axios.get(this.baseURL);
            const comments = response.data;
            console.log(comments); //remove later


            const commentsEl = document.querySelector(".comments__container");
            comments.forEach((cmnt)=>{
                const nameElem = document.createElement("p");
                nameElem.textContent = cmnt.name;
                nameElem.classList.add("name");
                commentsEl.appendChild(nameElem);

                const dateElem = document.createElement("p");
                dateElem.textContent = cmnt.timestamp;
                dateElem.classList.add("date");
                commentsEl.appendChild(dateElem);            

                const cmntElem = document.createElement("p");
                cmntElem.textContent = cmnt.comment;
                cmntElem.classList.add("comment");
                commentsEl.appendChild(cmntElem);  
                
                return comments;

            });

        }catch(error){
            console.error("error");
        }
    }

    //post comments
    async postComments(word){
        try{
            await axios.post(this.baseURL, word)

        }catch(error){
            console.error("error");
        }

    }

}

