<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <section>
        <h2>smartToast</h2>
        <div>
          <h2>smartToast is used for system messaging.</h2>
          <div class="module">
            <p>
              smartToast represents an element which displays an unobtrusive notification
              to the user. Multiple instances of the same toast can be shown at the same
              time. In case with multiple instances, they are stacked vertically into
              special containers positioned:
            </p>
            <ul>
              <li>top-left</li>
              <li>top-right</li>
              <li>bottom-left</li>
              <li>bottom-right</li>
              <li>center(in modal mode)</li>
              <li>custom container, defined by the user</li>
            </ul>
          </div>
          <div class="module">
            <h3>Toast components</h3>
            <p>
              Header area
              <br />Content area
              <br />Icon
              <br />
            </p>
            <h3>Behavior</h3>
            <p>
              Open
              <br />Close
            </p>
          </div>
        </div>
      </section>
      <nav>
        <h2>Contents</h2>
        <ul>
          <li>
            <a href="#toast-usage">Usage</a>
          </li>
          <li>
            <a href="#toast-usage">Snackbar</a>
          </li>
          <li>
            <a href="#toast-notification">Notification</a>
          </li>
        </ul>
      </nav>
      <section id="toast-usage">
        <h2>Usage</h2>
        <p>
          <strong>As a snackbar</strong>
        </p>
        <p>
          Snackbars appear above most elements on screen, and they are equal in
          elevation to the floating action button. However, they are lower in elevation
          than dialogs, bottom sheets, and navigation drawers.
        </p>
        <p>
          Snackbars should contain a single line of text directly related to the
          operation performed. They may contain a text action. They cannot contain
          icons.
        </p>
      </section>
      <section id="toast-usage2">
        <div class="module">
          <p>
            <strong>Very short text strings</strong>
          </p>
          <p>
            Snackbars should contain a single line of text directly related to the
            operation performed. They may contain a text action. They cannot contain
            icons.
          </p>
        </div>
        <div class="module">
          <div id="toastContainer1" class="toast-container"></div>
          <smart-toast append-to="toastContainer1" auto-open class="snackbar">Message sent</smart-toast>
        </div>
      </section>
      <section id="toast-usage3">
        <div class="module">
          <p>
            <strong>0-1 actions, not dismiss or cancel</strong>
          </p>
          <p>
            If an action is present, comply with dialog spacing and affordance rules.
            For two or more actions, use a dialog, not a snackbar, even when one of
            the actions is a dismiss action. If the action described in the snackbar
            is important enough to block the use of the screen, it should be a dialog.
          </p>
        </div>
        <br />
        <div class="module">
          <div id="toastContainer3" class="toast-container"></div>
          <smart-toast
            append-to="toastContainer3"
            auto-open
            item-template="toastTemplate3"
            class="snackbar"
          >Message sent</smart-toast>
          <template id="toastTemplate3">
            <span class="message smart-toast-item-content">{{message}}</span>
            <smart-button class="primary flat">UNDO</smart-button>
          </template>
        </div>
      </section>
      <section id="toast-usage4">
        <div>
          <div class="module">
            <p>
              <strong>Mobile</strong>
            </p>
            <p>
              <strong>Don’t block the floating action button</strong>
            </p>
            <p>Move your floating action button vertically to accommodate the snackbar height.</p>
          </div>
          <div class="module">
            <div class="light-theme" id="mobileDemo1">
              <div id="toastContainer4" class="toast-container">
                <smart-button id="toastButton4" class="primary floating">
                  <i class="material-icons">&#xE145;</i>
                </smart-button>
              </div>
              <smart-toast
                id="mobileToast1"
                append-to="toastContainer4"
                item-template="toastTemplate4"
                class="snackbar"
              >Archived</smart-toast>
              <template id="toastTemplate4">
                <span class="message smart-toast-item-content">{{message}}</span>
                <smart-button class="success flat">UNDO</smart-button>
              </template>
            </div>
            <p>A mobile snackbar</p>
          </div>
          <div class="module">
            <div class="light-theme" id="mobileDemo2">
              <div id="toastContainer5" class="toast-container">
                <smart-button id="toastButton5" class="primary floating">
                  <i class="material-icons">&#xE145;</i>
                </smart-button>
              </div>
              <smart-toast
                id="mobileToast2"
                append-to="toastContainer5"
                item-template="toastTemplate5"
                class="snackbar"
              >Archived</smart-toast>
              <template id="toastTemplate5">
                <span class="message smart-toast-item-content">{{message}}</span>
                <smart-button class="success raised">UNDO</smart-button>
              </template>
            </div>
            <p>A mobile snackbar with updated content</p>
          </div>
        </div>
      </section>
      <section id="toast-desktop">
        <div class="module">
          <p>
            <strong>Desktop snackbar</strong>
          </p>
          <p>
            On open toasts are stacked vertically in order by their appearance. The
            open method adds a new element at the end of the existing toast column
          </p>
        </div>
        <div>
          <div class="light-theme" id="desktopDemo">
            <div id="toastContainer6" class="toast-container"></div>
            <smart-toast
              id="desktopToast"
              append-to="toastContainer6"
              item-template="toastTemplate5"
              class="snackbar"
            >Connection timed out. Showing limited messages.</smart-toast>
            <template id="toastTemplate6">
              <span class="message smart-toast-item-content">{{message}}</span>
              <smart-button class="raised primary">RETRY</smart-button>
            </template>
          </div>
        </div>
      </section>
      <section id="toast-notification">
        <div class="module">
          <p>
            <strong>As a notification</strong>
          </p>
          <p>Notifications are intended to inform users about events in your app. These two types of notifications are the most effective:</p>
          <ul>
            <li>Communication from other users</li>
            <li>Well-timed and informative task reminders</li>
          </ul>
        </div>
        <div class="module"></div>
      </section>

      <section id="toast-notification1">
        <div class="module">
          <p>
            <strong>Overview</strong>
          </p>
          <p>
            Notifications have been designed to make it easy to scan and use a notification’s
            most important elements:
          </p>
          <p>
            <strong>Primary content</strong>
          </p>
          <p>
            Content is the most prominent element of a notification. Secondary information,
            such as a timestamp, is smaller and consolidated above the primary content.
          </p>
          <p>
            <strong>People</strong>
          </p>
          <p>
            If the notification involves a person, an avatar appears on the right
            where it stands out from the rest of the content.
          </p>
          <p>
            <strong>Actions</strong>
          </p>
          <p>
            Expandable notifications are revealed by tapping an indicator icon. Actions
            are displayed with text labels on a separate background color and location.
          </p>
        </div>
        <div class="module module-large">
          <div id="notificationMessagingContainer" class="toast-container"></div>
          <smart-toast
            id="notificationMessaging"
            append-to="notificationMessagingContainer"
            item-template="notificationMessagingTemplate"
          ></smart-toast>
          <template id="notificationMessagingTemplate">
            <div class="message-template">
              <div class="message-header">
                <i class="material-icons icon">&#xE0B7;</i>
                <span class="message">Messages</span>
                <i class="material-icons dot">&#xE061;</i>
                <span>
                  <i class="material-icons arrow">&#xE313;</i>
                </span>
              </div>
              <div class="message-content">
                <h3>Justin Rhyss</h3>
                <span class="smart-toast-item-content">{{message}}</span>
              </div>
              <img src="../../../images/notifications-icon2.png" class="profile-picture" />
              <div class="message-footer smart-hidden">
                <smart-button>REPLY</smart-button>
                <smart-button>ARCHIVE</smart-button>
              </div>
            </div>
          </template>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.toast.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      let mobileToast1 = document.getElementById("mobileToast1"),
        mobileToast2 = document.getElementById("mobileToast2"),
        desktopToast = document.getElementById("desktopToast"),
        notificationMessagingContainer = document.getElementById(
          "notificationMessagingContainer"
        ),
        mobileToastsAreOpened = false,
        notificationsCount = 0,
        toastContentOptions = [
          "Add a new label",
          'This item alredy has the label "travel".'
        ],
        notificationsText = [
          "Hi!",
          "How are you?",
          "Do you want to see a movie tohinght?"
        ];
      const notificationMessaging = document.querySelector(
        "#notificationMessaging"
      );
      setInterval(function() {
        toggleMobileToasts();
      }, 2000);

      function toggleMobileToasts() {
        if (mobileToastsAreOpened) {
          mobileToast1.closeAll();
          mobileToast2.closeAll();
          desktopToast.closeAll();
          if (notificationsCount > 2) {
            notificationMessaging.closeAll();
            notificationsCount = 0;
          }
        } else {
          mobileToast1.open();
          mobileToast2.value =
            toastContentOptions[Math.floor(Math.random() * 2)];
          mobileToast2.open();
          desktopToast.open();
          notificationMessaging.open();
          notificationMessaging.value = notificationsText[notificationsCount];
          notificationsCount++;
        }
        mobileToastsAreOpened = !mobileToastsAreOpened;
      }
      notificationMessagingContainer.addEventListener("click", function(event) {
        const target = event.target;
        let clickedArrow = target.closest(".material-icons.arrow"),
          clickedItem = target.closest(".smart-toast-item");
        if (clickedArrow) {
          let footer = clickedItem.querySelector(".message-footer");
          footer.classList.toggle("smart-hidden");
          clickedArrow.innerHTML = footer.classList.contains("smart-hidden")
            ? "&#xE313;"
            : "&#xE316;";
        }
      });
    });
  }
};
</script>

<style>
/* ------------ */

@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
    format("woff2");
}
.smart-toast-item smart-button {
  right: 15px !important;
}
.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: inherit;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

.smart-demo-container {
  font-family: var(--smart-material-font-family);
  line-height: 24px;
  font-size: 13px;
  padding: 25px;
  margin-left: 0;
  margin: 5% 10%;
  padding-top: 50px;
}

.smart-demo-container section h2 {
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #764ebe;
}

.smart-demo-container section:first-of-type h2 {
  font-size: 34px;
  border-top: initial;
}

.smart-demo-container section:first-of-type div h2 {
  font-size: 20px;
}

.smart-demo-container section {
  margin-top: 80px;
}

.smart-demo-container section:first-of-type {
  margin-top: 0;
}

.smart-demo-container section div h2 {
  color: #212121;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 20px;
  max-width: 940px;
}

.smart-demo-container nav {
  display: block;
  border-left: 5px #3949ab solid;
  padding-left: 20px;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  margin-top: 60px;
}

.smart-demo-container nav ul {
  list-style: none;
  margin-top: 0;
  padding-left: 0;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: block;
  list-style-type: disc;
}

.smart-demo-container nav li {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-size: 20px;
  line-height: 40px;
}

.smart-demo-container nav li a {
  text-decoration: none;
}

.smart-demo-container nav h2 {
  font-size: 15px;
  line-height: 16px;
  padding-bottom: 12px;
  font-weight: 400;
  color: #757575;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}

.module {
  width: calc(100% / 4);
  display: inline-block;
  font: inherit;
  margin-right: 40px;
  min-width: 365px;
  vertical-align: top;
}

#toastContainer1dark,
#toastContainer3dark {
  background-color: #323232;
}

.module h3 {
  margin-top: 30px;
}

.module p {
  margin-bottom: 20px;
}

.module img {
  width: 100%;
}

.module-large {
  width: calc(100% / 2);
}

.toast-container {
  width: 100%;
  background-color: #eeeeee;
  padding: 40px 40px 40px 40px;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  justify-content: center;
}

.toast-container .smart-toast-container-custom {
  width: 415px;
}

/* snackbar */
#mobileDemo1,
#mobileDemo2 {
  width: 371px;
  height: 660px;
  padding: 0px;
  background-image: url(https://www.htmlelements.com/demos/images/components-toasts-mobile1.png);
  background-repeat: no-repeat;
  background-size: 100% auto;
  position: relative;
}

#mobileDemo1 .toast-container,
#mobileDemo2 .toast-container {
  position: absolute;
  bottom: 48px;
  left: 0px;
  padding: 0px;
  background-color: transparent;
}

.smart-toast-container-custom {
  overflow: hidden;
}

#mobileDemo1 button,
#mobileDemo2 button {
  color: yellow;
  font-weight: 300;
}

#toastButton4,
#toastButton5 {
  position: absolute;
  top: -70px;
  right: 15px;
  width: 60px;
  height: 60px;
  font-size: 25px;
}

#toastContainer1 .smart-info.material,
#toastContainer2 .smart-info.material,
#toastContainer3 .smart-info.material {
  width: 100%;
}

#mobileDemo1 .smart-info.material,
#mobileDemo2 .smart-info.material,
#desktopDemo .smart-info.material {
  width: 100%;
  overflow: hidden;
  height: 0px;
  transition: height 0.2s;
}

#mobileDemo1 .smart-info.material[opened],
#mobileDemo2 .smart-info.material[opened],
#desktopDemo .smart-info.material[opened] {
  height: 50px;
  transition: height 0.2s;
}

#desktopDemo {
  width: 743px;
  height: 215px;
  background-image: url(https://www.htmlelements.com/demos/images/components-toasts-tabletdesktop2.png);
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
}

#desktopDemo .toast-container {
  position: absolute;
  bottom: 45px;
  left: 0px;
  padding: 0px;
  background-color: transparent;
}

#desktopDemo .smart-info.material .message {
  width: 350px;
}

#desktopDemo .smart-info.material button {
  color: yellow;
  font-weight: 300;
}

#desktopDemo .toast-container .smart-toast-container-custom {
  width: 454px;
}

.message-template {
  position: relative;
  color: #000;
  text-shadow: none;
  border-radius: 0px;
}

.message-template .message-header {
  color: #2a56c6;
  display: flex;
  align-content: center;
  align-items: center;
  padding: 20px 20px 0px 20px;
}

.message-template .material-icons.dot {
  font-size: 6px;
  color: gray;
  margin-left: 5px;
}

.message-template .material-icons.arrow {
  padding-top: 8px;
  font-size: 14px;
  cursor: pointer;
}

.message-template .material-icons {
  margin-right: 5px;
}

.message-template h3 {
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 0px;
  font-size: 14px;
}

.message-footer {
  background-color: #eee;
  height: 50px;
}

.message-content {
  padding: 0px 20px 20px 20px;
}

.message-footer smart-button {
  height: 100%;
  position: relative;
  left: 15px !important;
}

.message-footer button {
  border-width: 0px;
  color: #2a56c6;
  font-weight: bold;
}

.message-template img.profile-picture {
  width: 50px;
  position: absolute;
  right: 20px;
  top: 50px;
}

#toast-notification1 .smart-toast-item.smart-info {
  background-color: white;
  border-color: white;
  opacity: 1;
  overflow: hidden;
  border-radius: 0px;
  box-shadow: 1px 1px 10px 1px #aaaaaa;
}

#toast-notification1 .smart-toast-container-custom {
  overflow: visible;
}

#toast-notification1 .smart-info {
  margin-bottom: 20px;
  visibility: hidden;
}

#notificationMessagingContainer {
  height: 600px;
}

#toast-notification1 .smart-info[opened] {
  visibility: visible;
}

#toast-notification1 .smart-info[opened]:last-child {
  visibility: visible;
  animation: notification-on 0.2s ease-out;
  animation-fill-mode: forwards;
}

@keyframes notification-on {
  0% {
    margin-left: 10%;
    opacity: 0.2;
    visibility: hidden;
  }

  100% {
    margin-left: 0%;
    opacity: 1;
    visibility: visible;
  }
}

#toast-notification1 .smart-toast-item .smart-toast-item-content {
  text-align: left;
  opacity: 1;
  width: auto;
  margin: 0px;
  padding: 0px;
}
</style>
