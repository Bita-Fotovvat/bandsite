
const api_key= "e6882fd0-adc7-4899-9868-cd311df69876";

export default class BandsiteAPI {
    constructor(baseURL){
        this.baseURL = baseURL;
    }

    async getComments(){
        try{
            const response = await axios.get(this.baseURL);
            console.log(response);
        }catch(error){
            console.log("error");
        }
    }
}

const commentsURL = `https://project-1-api.herokuapp.com/comments?api_key=${api_key}`;
const comments = new BandsiteAPI(commentsURL);
comments.getComments();







// export default class BandSiteApi {
//     constructor(apiKey) {
//       this.apiKey = apiKey;
//       this.baseUrl = 'https://project-1-api.herokuapp.com';
//     }
  
//     async getApiKey() {
//       try {
//         const response = await axios.get(`${this.baseUrl}/register`);
//         this.apiKey = response.data.api_key;
//         return this.apiKey;
//       } catch (error) {
//         console.error('Error getting API key:', error);
//       }
//     }
  
//     async postComment(comment) {
//       try {
//         const response = await axios.post(`${this.baseUrl}/comments?api_key=${this.apiKey}`, comment);
//         return response.data;
//       } catch (error) {
//         console.error('Error posting comment:', error);
//       }
//     }
  
//     async getComments() {
//       try {
//         const response = await axios.get(`${this.baseUrl}/comments?api_key=${this.apiKey}`);
//         // Sort comments by timestamp in descending order (newest to oldest)
//         const sortedComments = response.data.sort((a, b) => b.timestamp - a.timestamp);
//         return sortedComments;
//       } catch (error) {
//         console.error('Error getting comments:', error);
//       }
//     }
  
//     async getShows() {
//       try {
//         const response = await axios.get(`${this.baseUrl}/showdates?api_key=${this.apiKey}`);
//         return response.data;
//       } catch (error) {
//         console.error('Error getting show dates:', error);
//       }
//     }
//   }
  
//   // Example usage:
//   const apiKey = "e6882fd0-adc7-4899-9868-cd311df69876"; // You should obtain the API key first
//   const bandSiteApi = new BandSiteApi(apiKey);



// const url = "https://project-1-api.herokuapp.com/register";
// const myvar = new BandsiteAPI(url);
// myvar.getComments();
// console.log(myvar);













  
  // To get the API key:
  // bandSiteApi.getApiKey().then(apiKey => {
  //   console.log('API Key:', apiKey);
  // });
  
  // To post a comment:
  // const comment = {
  //   name: 'John Doe',
  //   comment: 'This is a test comment',
  // };
  // bandSiteApi.postComment(comment).then(response => {
  //   console.log('Posted comment:', response);
  // });
  
  // To get comments:
  // bandSiteApi.getComments().then(comments => {
  //   console.log('Comments:', comments);
  // });
  
  // To get shows:
  // bandSiteApi.getShows().then(shows => {
  //   console.log('Shows:', shows);
  // });
  





















//با این به یه آبجکت که داخلش کلید ای پی آی هست دسترسی پیدا کردم
// export default class BandsiteAPI{
//     constructor(baseURL){
//         this.baseURL = baseURL;
//     }


//     async getKey(){
//         try{
//             const key = await axios.get("https://project-1-api.herokuapp.com/register");
//             console.log(key);
//             const apiKey = key.api_key;
//             console.log(apiKey);
//         }catch(error){
//             console.error(error);

//         }

//     }

    
//     async getComments(){
//         try{
//             const response = await axios.get(this.baseURL);
//             console.log(response);
//             const whatIWant = response.data;
//             console.log(whatIWant);
//         }catch(error){
//             console.error(error);

//         }

//     }

// }

// const url = "https://project-1-api.herokuapp.com/register";
// const myvar = new BandsiteAPI(url);
// myvar.getComments();
// console.log(myvar);




