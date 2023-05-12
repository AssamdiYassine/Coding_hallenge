import React, { useEffect as UseEffect, useState as UseState } from "react";

import Candidates from "./sections/candidates";
import Information from "./sections/information/information";
import GoogleLogin from "react-google-login";

import { gapi } from "gapi-script";
import axios from "axios";

function index(props) {
  const clientId =
  "206462226195-if4sunbepgp6ksidmm4ee3b1gg5ln7e1.apps.googleusercontent.com";
UseEffect(() => {
  gapi.load("client: auth2", () => {
   gapi.auth2.init({ clientId: clientId });
    gapi.client.init({
      apiKey: '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',
      clientId: "206462226195-if4sunbepgp6ksidmm4ee3b1gg5ln7e1.apps.googleusercontent.com",
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
      cookiePolicy: 'http://localhost:3000/',
      
    })
  });
}, []);
const table = []
  const { setImage } = props;
  const [showModal, setShowModal] = UseState(true);
  const [emails, setEmails] = UseState([]);
  const [emailsID, setEmailsID] = UseState([]);
  const [token, setToken] = UseState(null);
  const [profil, setProfil] = UseState("");
  const [to, setTo] = UseState("");
  const [subject, setSubject] = UseState("");
  const [bodyText, setBodyText] = UseState("");

console.log(table);
  UseEffect(() => {
 
  }, [profil]);
 
  const responseGoogle = (response) => {
    console.log(response);
    if (response) {
      setShowModal(false);
    }
    setToken(response.accessToken);
    setProfil(response.profileObj);

    gapi.client.gmail.users.messages.list({
      'userId': 'me',
      'q': 'in:inbox'
    }).then(function(response) {
      // Log the messages to the console
      setEmailsID(response.result.messages);
    }, function(error) {
      console.error(error);
    });




  
    
  };
  setImage(profil.imageUrl);
// send email 
  const handelSend = async () => {
    // Construct the message
    var   message = await
      `From: ${profil.email}\r\n` +
      `To: ${to}\r\n` +
      `Subject: ${subject}\r\n\r\n` +
      `${bodyText}`;

    // Encode the message in base64url
    var encodedMessage = btoa(message)
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    // Send the message
    gapi.client.gmail.users.messages.send({
        userId: "me",
        resource: {
          raw: encodedMessage,
        },
      })
      .then(
        function (response) {
          console.log("Message sent:", response);
        },
        function (error) {
          console.error("Error sending message:", error);
        }
      );
  };
 
  let _subject = "";
  let _body = "";

    async function displayEmails() {
      try {
        const response = await gapi.client.gmail.users.messages.list({
          userId: "me",
          maxResults: 20,
          q: "is:unread",
        });
        const emails = response.result.messages;
        const container = document.createElement("ul");

        for (let i = 0; i < emails.length; i++) {
          const email = emails[i];
          const response = await gapi.client.gmail.users.messages.get({
            userId: "me",
            id: email.id,
            format: "full",
          });
          const payload = response.result.payload;
        
          const headers = payload.headers;
       

          for (let j = 0; j < headers.length; j++) {
            if (headers[j].name === "Subject") {
              _subject = headers[j].value;
           table.push(headers[j].value)
           
            }
          }
         
          if (payload.body.data) {
            _body = atob(
              payload.body.data.replace(/-/g, "+").replace(/_/g, "/")
            );
          } else {
            const parts = payload.parts;
            for (let j = 0; j < parts.length; j++) {
              if (parts[j].body.data) {
                _body = atob(
                  parts[j].body.data.replace(/-/g, "+").replace(/_/g, "/")
                );
              }
            }
          }

          const list = document.createElement("ol");
          const listItem = document.createElement("li");
          const subjectNode = document.createElement("h3");
          const bodyNode = document.createElement("p");

          subjectNode.textContent = _subject;
          bodyNode.innerHTML = _body;
          list.appendChild(listItem);
          listItem.appendChild(subjectNode);
         listItem.appendChild(bodyNode);
          container.appendChild(listItem);
        }

        const content = document.getElementById("content");
        content.innerHTML = "";
        content.appendChild(container);
      } catch (error) {
        console.error(error);
      }
    }
     displayEmails()
 

  console.log("table",table);
  return (
    <div>
      <Information
        profil={profil}
        setTo={setTo}
        setSubject={setSubject}
        setBodyText={setBodyText}
        handelSend={handelSend}
      />

      <div id="content" className="flex justify-center m-5"></div>
    


    <div>{_subject}</div>
      {/* <Candidates /> */}
 

      {showModal ? (
        <>
          <div className=" glass justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Authentication</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    to use this platform you need to identify with google
                    account
                  </p>

                  <div className="flex justify-center">
                    <GoogleLogin
                      clientId={clientId}
                      buttonText="Login"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single host origin"}
                      className={"login"}
                      style={{ width: "100px" }}
                    />
                  </div>
                </div>

            
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default index;
