import React,{useEffect as UseEffect , useState as UseState} from "react";
import GoogleLogin from 'react-google-login';
import { GoogleApiProvider} from 'react-gapi'
 import { gapi } from 'gapi-script';
 import axios from "axios";
import './App.css';
import Pages from "./pages"

function App() {
const [token, setToken ]=UseState(null)
  const clientId="206462226195-if4sunbepgp6ksidmm4ee3b1gg5ln7e1.apps.googleusercontent.com";
  // UseEffect(()=>{
  //   gapi.load("client: auth2", ()=>{
  //     gapi.auth2.init({clientId:clientId})
  //   })
  // },[])

 
 
 
//   const responseGoogle = (response) => {
//     console.log (response)

 
//     setToken(response.accessToken);
 
//     }
 
//   const  searchGmail = async (searchItem) => {
//       var config1 = {
//         method: "get",
//         url:
//           "https://www.googleapis.com/gmail/v1/users/me/messages?q=" + searchItem,
//         headers: {
//           Authorization: `Bearer ${await token} `,
//         },
//       };
//       var threadId = "";
  
//       await axios(config1)
//         .then(async function (response) {

//           console.log(response);
//           threadId = await response.data["messages"][0].id;
  
//           console.log("ThreadId = " + threadId);
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
  
//       return threadId;
//     };
//     // searchGmail("assamdiyassine1@gmail.com")


// const    readGmailContent = async (messageId) => {
//       var config = {
//         method: "get",
//         url: `https://gmail.googleapis.com/gmail/v1/users/me/messages/${messageId}`,
//         headers: {
//           Authorization: `Bearer ${await token}`,
//         },
//       };
  
//       var data = {};
  
//       await axios(config)
//         .then(async function (response) {
//           data = await response.data;
//           console.log(data);
//         })
//         .catch(function (error) {
//           console.log(error);
//         });
  
//       return data;
//     };

//     // readGmailContent("1880d056d88b0410")
    
//     const readInboxContent = async (searchText) => {
//       const threadId = await searchGmail(searchText);
//       const message = await readGmailContent(threadId);
  
//       const encodedMessage = await message.payload["parts"][0].body.data;
//   console.log("encodedMessage"+encodedMessage);
//       const decodedStr = Buffer.from(encodedMessage, "base64").toString("ascii");
//       console.log("decodedStr"+decodedStr);

//       console.log(decodedStr);
  
//       return decodedStr;
//     };

 
// Load the client library and authenticate with your credentials
// gapi.load('client:auth2', function() {
//   gapi.client.init({
//     apiKey: 'YOUR_API_KEY',
//     clientId: "206462226195-if4sunbepgp6ksidmm4ee3b1gg5ln7e1.apps.googleusercontent.com",
//     discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
//     scope: 'https://www.googleapis.com/auth/gmail.send'
//   }).then(function() {
//     // Construct the message
//     var message = "From: sender@example.com\r\n" +
//                   "To: recipient@example.com\r\n" +
//                   "Subject: Example Subject\r\n\r\n" +
//                   "This is the message body.";

//     // Encode the message in base64url
//     var encodedMessage = btoa(message).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

//     // Send the message
//     gapi.client.gmail.users.messages.send({
//       'userId': 'me',
//       'resource': {
//         'raw': encodedMessage
//       }
//     }).then(function(response) {
//       console.log('Message sent:', response);
//     }, function(error) {
//       console.error('Error sending message:', error);
//     });
//   });
// });


   return (
  <>
  <Pages/>


    </>
  );
}

export default App;
 