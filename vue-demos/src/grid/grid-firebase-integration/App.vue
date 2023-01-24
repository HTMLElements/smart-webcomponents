<template>
  <div class="vue-root">
    <div class="header">
      <div id="userDetails">Please sign-in to edit the Grid</div>
      <smart-button id="authButton" class="sign-in">Sign In</smart-button>
    </div>
    <div class="demo-description">
      <h2>Google Firebase and OAuth 2.0 integration with Smart.Grid</h2>
    </div>

    <smart-grid id="grid"></smart-grid>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.grid.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      //Grid settings
      window.window.Smart(
        "#grid",
        class {
          get properties() {
            return {
              editing: {
                enabled: false,
                action: "click",
                addDialog: {
                  enabled: true
                }
              },
              selection: {
                enabled: true,
                mode: "one"
              },
              pager: {
                visible: true
              },
              paging: {
                enabled: true
              },
              layout: {
                rowHeight: "auto"
              },
              columns: [
                {
                  label: "Title",
                  dataField: "title"
                },
                {
                  label: "Description",
                  dataField: "description"
                },
                {
                  label: "Author",
                  dataField: "author"
                },
                {
                  label: "Created",
                  dataField: "created",
                  align: "right",
                  cellsAlign: "right",
                  cellsFormat: "yyy-MM-dd HH:mm:ss"
                },
                {
                  label: "Edited",
                  dataField: "edited",
                  align: "right",
                  cellsAlign: "right",
                  cellsFormat: "yyy-MM-dd HH:mm:ss"
                }
              ]
            };
          }
        }
      );

      //Connect to Firebase DB
      function connectionToDB() {
        //FireBase loaded from CDN
        const firebase = window.firebase;

        //Help topics:
        //https://firebase.google.com/docs/web/setup#using-module-bundlers
        //https://firebase.google.com/docs/firestore/quickstart#auth-required

        // Initialize Cloud Firestore through Firebase
        firebase.initializeApp({
          apiKey: "AIzaSyDE4GqvwdPvhNs_wfyrsrFfZbjc9g00i-A",
          authDomain: "my-firebase-app-e4d45.firebaseapp.com",
          databaseURL: "https://my-firebase-app-e4d45.firebaseio.com",
          projectId: "my-firebase-app-e4d45"
        });
      }

      //Load the Data from the DB
      function loadDataFromDB() {
        const db = window.firebase.firestore();

        db.collection("suggestions")
          .get()
          .then(querySnapshot => {
            let data = [];

            querySnapshot.forEach(doc => {
              const entry = doc.data();

              for (let ent in entry) {
                if (entry[ent].seconds) {
                  entry[ent] = new Date(entry[ent].seconds * 1000);
                }
              }

              entry.id = doc.id;
              data.push(entry);
            });

            const grid = document.querySelector("smart-grid");

            grid.dataSource = new window.Smart.DataAdapter({
              dataSource: data,
              dataFields: [
                "id: string",
                "title: string",
                "description: string",
                "author: string",
                "created: date",
                "edited: date"
              ]
            });
          });
      }

      //Help Topic:
      //https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow#js-client-library_5

      function setSigninStatus(user) {
        const grid = document.querySelector("smart-grid");
        const authButton = document.getElementById("authButton"),
          userDetails = document.getElementById("userDetails");

        if (user) {
          authButton.innerHTML = "Sign Out";
          userDetails.innerHTML = "Welcome, " + user.displayName;
          authButton.classList.remove("sign-in");
          grid.editing.enabled = true;
          console.log(
            "You are currently signed in and have granted access to this app."
          );
        } else {
          authButton.innerHTML = "Sign In";
          userDetails.innerHTML = "Please sign-in to edit the Grid";
          authButton.classList.add("sign-in");
          grid.editing.enabled = false;
          console.log(
            "You have not authorized this app or you are signed out."
          );
        }
      }

      const grid = document.querySelector("smart-grid");

      connectionToDB();
      loadDataFromDB();

      const firebase = window.firebase,
        db = window.firebase.firestore();

      grid.addEventListener("endEdit", function(event) {
        const editedRowData = event.detail.row.data,
          docId = event.detail.row.data.id;

        if (!firebase.auth().currentUser) {
          alert("You are not signed in. The changed will be applied locally");
        } else {
          db.collection("suggestions")
            .doc(docId)
            .update({
              title: editedRowData.title,
              description: editedRowData.description,
              author: editedRowData.author,
              edited: new Date()
            })
            .then(function() {
              console.log("Updating the DB is Successful");
            })
            .catch(function() {
              console.error("Updating the DB failed");
            });
        }
      });

      const GoogleAuth = new firebase.auth.GoogleAuthProvider();

      //Add necessary scopes
      GoogleAuth.addScope("https://www.googleapis.com/auth/userinfo.email");
      GoogleAuth.addScope("https://www.googleapis.com/auth/firebase.database");

      //   Listen for sign-in state changes.
      //INFO: https://howtofirebase.com/firebase-authentication-for-web-d58aad62cf6d
      firebase.auth().onAuthStateChanged(setSigninStatus);

      const signInButton = document.getElementById("authButton");

      signInButton.addEventListener("click", function() {
        if (signInButton.classList.contains("sign-in")) {
          firebase
            .auth()
            .signInWithPopup(GoogleAuth)
            .then(function() {
              //result
              // This gives you a Google Access Token. You can use it to access the Google API.
              // var token = result.credential.accessToken;
              // The signed-in user info.
              // var user = result.user;
              // const credentials = result.credential;

              // result.user.reauthenticateWithCredential()
              setSigninStatus();
            })
            .catch(function() {
              // Handle Errors here.
            });
        } else {
          firebase.auth().signOut();
        }
      });
    });
  }
};
</script>

<style>
#grid {
  height: auto;
  width: auto;
}

#authButton button::before {
  font-family: FontAwesome;
  content: "\f08b";
  margin-right: 10px;
}

#authButton.sign-in button::before {
  content: "\f090";
}

.header {
  display: flex;
  position: static;
  justify-content: space-between;
  background: var(--smart-surface);
  box-shadow: 0px 1px 5px -2px black;
  padding: 5px;
  align-items: center;
}
</style>
