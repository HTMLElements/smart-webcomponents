<template>
  <div class="vue-root">
    <div id="header">
      <div id="loginInfo">Logged in as Guest</div>
      <div id="loginAgain">Log in as another user</div>
      <div id="pic"></div>
    </div>
    <smart-kanban id="kanban"></smart-kanban>
    <smart-window id="prompt" modal opened label="Log in">
      <form>
        <div>User name</div>
        <smart-input id="userName"></smart-input>
        <br />
        <br />
        <div>Password</div>
        <smart-password-text-box id="password"></smart-password-text-box>
        <br />
        <smart-button id="confirm" class="primary">Log in</smart-button>
      </form>
    </smart-window>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.input.js";
import "smart-webcomponents/source/modules/smart.kanban.js";
import "smart-webcomponents/source/modules/smart.passwordtextbox.js";
import "smart-webcomponents/source/modules/smart.window.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#kanban",
        class {
          get properties() {
            return {
              addNewButton: true,
              collapsible: true,
              currentUser: 6,
              dataSource: window.getKanbanData(),
              editable: true,
              taskActions: true,
              taskComments: true,
              userList: true,
              users: [
                {
                  id: 0,
                  name: "Andrew",
                  image: "../../../demos/images/people/andrew.png"
                },
                {
                  id: 1,
                  name: "Anne",
                  image: "../../../demos/images/people/anne.png",
                  allowAdd: true,
                  allowComment: true,
                  allowDrag: true,
                  allowEdit: true,
                  allowRemove: true
                },
                {
                  id: 2,
                  name: "Janet",
                  image: "../../../demos/images/people/janet.png"
                },
                {
                  id: 3,
                  name: "John",
                  image: "../../../demos/images/people/john.png"
                },
                {
                  id: 4,
                  name: "Laura",
                  image: "../../../demos/images/people/laura.png"
                },
                {
                  id: 5,
                  name: "Robert",
                  image: "../../../demos/images/people/robert.png",
                  allowAdd: true,
                  allowComment: false,
                  allowDrag: true,
                  allowEdit: false,
                  allowRemove: false
                },
                {
                  id: 6,
                  name: "Guest",
                  allowAdd: false,
                  allowComment: false,
                  allowDrag: false,
                  allowEdit: false,
                  allowRemove: false
                }
              ],
              columns: [
                {
                  label: "To do",
                  dataField: "toDo"
                },
                {
                  label: "In progress",
                  dataField: "inProgress"
                },
                {
                  label: "Testing",
                  dataField: "testing"
                },
                {
                  label: "Done",
                  dataField: "done"
                }
              ]
            };
          }
        }
      );

      const prompt = document.getElementById("prompt"),
        promptFooter = prompt.querySelector(".smart-footer"),
        loginInfo = document.getElementById("loginInfo"),
        loginAgain = document.getElementById("loginAgain"),
        pic = document.getElementById("pic"),
        userName = document.getElementById("userName"),
        password = document.getElementById("password"),
        kanban = document.getElementById("kanban");

      prompt.whenRendered(() => {
        const footerTemplate = document.createElement("template");
        footerTemplate.id = "footerTemplate";
        footerTemplate.innerHTML =
          "You can log in as two different users - Anne (with full privileges) and\
      Robert (with only privilege for adding and dragging tasks). The password\
      for both users is 123.";
        document.body.appendChild(footerTemplate);

        prompt.footerTemplate = "footerTemplate";
      });

      document.getElementById("confirm").addEventListener("click", function() {
        if (userName.value === "Anne" && password.value === "123") {
          kanban.currentUser = 1;
          prompt.close();
          loginInfo.innerHTML = "Logged in as Anne";
          pic.style.backgroundImage = 'url("../../../demos/images/people/anne.png")';
        } else if (userName.value === "Robert" && password.value === "123") {
          kanban.currentUser = 5;
          prompt.close();
          loginInfo.innerHTML = "Logged in as Robert";
          pic.style.backgroundImage =
            'url("../../../demos/images/people/robert.png")';
        } else {
          userName.value = "";
          password.value = "";
          promptFooter.classList.add("blink");
          setTimeout(() => promptFooter.classList.remove("blink"), 2000);
        }
      });
      loginAgain.addEventListener("click", function() {
        prompt.open();
        userName.value = "";
        password.value = "";
      });
    });
  }
};
</script>

<style>
html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
}

#header {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 10px;
  width: 100%;
  height: 40px;
  padding: 5px;
  background-color: var(--smart-primary);
  color: var(--smart-primary-color);
  font-family: var(--smart-font-family);
  font-size: var(--smart-font-size);
}

#loginInfo,
#loginAgain {
  margin-right: 20px;
}

#loginAgain {
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
}

#pic {
  border: 1px solid white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: center;
  background-color: rgba(255, 255, 255, 0.1);
}

#kanban {
  width: 100%;
  height: calc(100% - 50px);
}

#kanban .smart-kanban-list .item[data-id="6"] {
  display: none;
}

#prompt {
  --smart-window-default-height: 320px;
  --smart-window-footer-height: 70px;
}

#prompt .smart-content {
  display: block;
  align-items: unset;
}

#prompt smart-input,
#prompt smart-password-text-box {
  width: 100%;
}

#prompt .smart-footer {
  border: 2px solid transparent;
}

#prompt .smart-footer.blink {
  animation: blink 0.5s step-end infinite alternate;
}

@keyframes blink {
  50% {
    border-color: red;
  }
}
</style>
