<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <div id="materialListBoxContainer">
        <section>
          <div>
            <h2>Lists present multiple line items vertically as a single continuous element.</h2>
            <div class="module">
              <p>
                Lists are made up of a continuous column of rows. Each row contains a
                tile. Primary actions fill the tile, and supplemental actions are represented
                by icons and text.
              </p>
              <p>Lists are best suited for similar data types.:</p>
              <p>
                <strong>Determinate indicators</strong> display how long an operation will
                take.
              </p>
              <p>
                <strong>Indeterminate indicators</strong> visualize an unspecified wait
                time.
              </p>
            </div>
            <div class="module">
              <h3>Actions</h3>
              <p>
                Vertical and Horizontal scrolling
                <br />Filtering and Sorting
              </p>
              <h3>Gestures</h3>
              <p>
                Swipe
                <br />Drag and drop
              </p>
            </div>
          </div>
        </section>
        <section id="usage">
          <h2>Usage</h2>
          <div class="module">
            <p>
              A
              <strong>list</strong> consists of a single continuous column of tessellated
              sub-divisions of equal width called
              <strong>rows</strong> that function as
              containers for
              <strong>tiles</strong>.
            </p>
            <p>
              <strong>Tiles</strong> hold content, and can vary in height within a list.
            </p>
          </div>
          <div class="module">
            <p>
              Lists are best suited to presenting a homogeneous data type or sets of
              data types, such as images and text. They are optimized for reading comprehension
              while differentiating either between similar data types, or qualities within
              a single data type.
            </p>
            <h3>Density</h3>
            <p>
              When the mouse and keyboard are the primary input methods, measurements
              may be condensed to accommodate denser layouts.
            </p>
          </div>
        </section>
        <section id="behavior">
          <h2>Behavior</h2>
          <div class="module">
            <h2>Scrolling</h2>
            <p>Lists scroll vertically and horizontally.</p>
          </div>
          <div class="module">
            <smart-list-box class="horizontal-scrolling">
              <smart-list-item>Washington, Connecticut</smart-list-item>
              <smart-list-item>Washington, Iowa</smart-list-item>
              <smart-list-item>Washington Park, North Carolina</smart-list-item>
              <smart-list-item>Springfield, Massachusetts</smart-list-item>
              <smart-list-item>Mount Washington, Massachusetts</smart-list-item>
              <smart-list-item>Springfield, West Virginia</smart-list-item>
              <smart-list-item>Los Angeles, California</smart-list-item>
              <smart-list-item>Dallas, Texas</smart-list-item>
              <smart-list-item>Charleston, South Carolina</smart-list-item>
              <smart-list-item>Las Vegas, Nevada</smart-list-item>
              <smart-list-item>Seattle, Washington</smart-list-item>
              <smart-list-item>San Francisco, California</smart-list-item>
              <smart-list-item>Washington, D.C.</smart-list-item>
              <smart-list-item>New Orleans, Louisiana</smart-list-item>
              <smart-list-item>Palm Springs, California</smart-list-item>
              <smart-list-item>Saint Augustine, Florida</smart-list-item>
              <smart-list-item>St. Louis, Missouri</smart-list-item>
            </smart-list-box>
          </div>
          <div class="module"></div>
          <div class="module">
            <h2>Gestures</h2>
            <p>The swipe action of each tile should be consistent within lists.</p>
          </div>
          <div class="module gestures">
            <smart-list-box id="gestureListBox">
              <smart-list-item>Attarctions</smart-list-item>
              <smart-list-item>Dining</smart-list-item>
              <smart-list-item>Education</smart-list-item>
              <smart-list-item>Family</smart-list-item>
              <smart-list-item>Health</smart-list-item>
              <smart-list-item>Office</smart-list-item>
              <smart-list-item>Promotions</smart-list-item>
              <smart-list-item>Radio</smart-list-item>
              <smart-list-item>TV</smart-list-item>
              <smart-list-item>Entertainment</smart-list-item>
              <smart-list-item>Recipies</smart-list-item>
              <smart-list-item>Sports</smart-list-item>
              <smart-list-item>Travel</smart-list-item>
              <smart-list-item>Sports</smart-list-item>
              <smart-list-item>Hiking</smart-list-item>
              <smart-list-item>Skiing</smart-list-item>
              <smart-list-item>Politics</smart-list-item>
            </smart-list-box>
            <p></p>
            <p>
              smartListBox provides Swipe left and Swipe right events to allow even
              more customizability.
            </p>
          </div>
          <div class="module">
            <h2>Drag & Drop</h2>
            <p>
              Tiles may be moved between a list and drop target (similar to moving a
              file into a folder) and picked up and manually reordered within a list.
            </p>
            <p>Reorder property allows the items inside the list box to be moved.</p>
            <p>Items can even be moved accross list boxes.</p>
          </div>
          <div class="module dragDrop">
            <smart-list-box allow-drag allow-drop id="dragDrop" reorder>
              <smart-list-item>Butter</smart-list-item>
              <smart-list-item>Tacos</smart-list-item>
              <smart-list-item>Bread</smart-list-item>
              <smart-list-item>Chocolate</smart-list-item>
              <smart-list-item>Ice cream</smart-list-item>
              <smart-list-item>Meat</smart-list-item>
              <smart-list-item>Fries</smart-list-item>
              <smart-list-item>Potatoes</smart-list-item>
              <smart-list-item>Salad</smart-list-item>
              <smart-list-item>Rice</smart-list-item>
              <smart-list-item>Recipies</smart-list-item>
              <smart-list-item>Pie</smart-list-item>
              <smart-list-item>Milk</smart-list-item>
              <smart-list-item>Eggs</smart-list-item>
              <smart-list-item>Seafood</smart-list-item>
              <smart-list-item>Cereal</smart-list-item>
              <smart-list-item>Spaghetti</smart-list-item>
            </smart-list-box>
            <p></p>
            <p>List box A</p>
            <smart-list-box allow-drag allow-drop>
              <smart-list-item>Tofu</smart-list-item>
              <smart-list-item>Buttered toast with Marmite</smart-list-item>
              <smart-list-item>Marzipan</smart-list-item>
              <smart-list-item>Ketchup</smart-list-item>
              <smart-list-item>French toast</smart-list-item>
              <smart-list-item>Chicken parm</smart-list-item>
              <smart-list-item>Hummus</smart-list-item>
              <smart-list-item>Chili crab</smart-list-item>
              <smart-list-item>Maple syrup</smart-list-item>
              <smart-list-item>Ankimo</smart-list-item>
              <smart-list-item>Parma ham</smart-list-item>
              <smart-list-item>Goi cuon (summer roll),</smart-list-item>
              <smart-list-item>Ohmi-gyu beef steak</smart-list-item>
              <smart-list-item>Pho</smart-list-item>
              <smart-list-item>Lechón</smart-list-item>
              <smart-list-item>Fajitas</smart-list-item>
              <smart-list-item>Butter garlic crab</smart-list-item>
              <smart-list-item>Champ</smart-list-item>
              <smart-list-item>Lasagna</smart-list-item>
              <smart-list-item>Poke</smart-list-item>
              <smart-list-item>Croissant</smart-list-item>
              <smart-list-item>Arepas</smart-list-item>
            </smart-list-box>
            <p></p>
            <p>List box B</p>
          </div>
          <div class="module">
            <h2>Filtering and sorting</h2>
            <p>
              List tiles can be sorted or filtered by date, file size, alphabetical
              order, or other parameters.
            </p>
            <h2>Icon with text</h2>
            <p>
              List tiles can contain text with icons. Thanks to the itemTemplate property
              any HTML code can be placed inside the tiles.
            </p>
            <h2>Avatar with text</h2>
            <p>List tiles can also contain avatars.</p>
          </div>
          <div class="module">
            <smart-list-box id="phoneBook" sorted>
              <smart-list-item>Andrew Watson</smart-list-item>
              <smart-list-item>Anne Kean</smart-list-item>
              <smart-list-item>Avril Janin</smart-list-item>
              <smart-list-item>Janet Pattenson</smart-list-item>
              <smart-list-item>Johanna Svensson</smart-list-item>
              <smart-list-item>Johnny Abana</smart-list-item>
              <smart-list-item>Laura Thene</smart-list-item>
              <smart-list-item>Margaret Vetton</smart-list-item>
              <smart-list-item>Maria Sevrano</smart-list-item>
              <smart-list-item>Mark Yemen</smart-list-item>
              <smart-list-item>Maya Verdara</smart-list-item>
              <smart-list-item>Michael Barton</smart-list-item>
              <smart-list-item>Monica Oghini</smart-list-item>
              <smart-list-item>Nancy Queens</smart-list-item>
              <smart-list-item>Robert Drawny</smart-list-item>
              <smart-list-item>Steven Fedrichy</smart-list-item>
              <smart-list-item>Toni Versachi</smart-list-item>
            </smart-list-box>
            <p></p>
            <p>Alphabetical sorting makes information easier to find.</p>
          </div>
          <div class="module">
            <smart-list-box
              id="settingsMenu"
              selection-mode="none"
              filterable
              filter-input-placeholder="Searching ..."
            >
              <smart-list-items-group label="Wireless & Networks">
                <smart-list-item>Wi-Fi</smart-list-item>
                <smart-list-item>Bluetooth</smart-list-item>
                <smart-list-item>Data usage</smart-list-item>
                <smart-list-item>Connect a device</smart-list-item>
                <smart-list-item>More...</smart-list-item>
              </smart-list-items-group>
              <smart-list-items-group label="Device">
                <smart-list-item>Personalisation</smart-list-item>
                <smart-list-item>Call Settings</smart-list-item>
                <smart-list-item>Sound</smart-list-item>
                <smart-list-item>Display</smart-list-item>
                <smart-list-item>Storage</smart-list-item>
                <smart-list-item>Power management</smart-list-item>
                <smart-list-item>Apps</smart-list-item>
                <smart-list-item>Users</smart-list-item>
              </smart-list-items-group>
              <smart-list-items-group label="Personal">
                <smart-list-item>Location</smart-list-item>
                <smart-list-item>Security</smart-list-item>
                <smart-list-item>Profiles</smart-list-item>
                <smart-list-item>Google</smart-list-item>
                <smart-list-item>Language & Keyboard</smart-list-item>
                <smart-list-item>Backup & Restore</smart-list-item>
              </smart-list-items-group>
              <smart-list-items-group label="System">
                <smart-list-item>Date & Time</smart-list-item>
                <smart-list-item>Accessibility</smart-list-item>
                <smart-list-item>Printing</smart-list-item>
                <smart-list-item>About phone</smart-list-item>
                <smart-list-item>Support</smart-list-item>
              </smart-list-items-group>
            </smart-list-box>
            <p></p>
            <p>Filtering allows the user to quickly find the needed items.</p>
          </div>
        </section>
        <section id="multiLineLists">
          <div class="module">
            <p>Lists can have multiple lines of text.</p>
          </div>
          <div class="module">
            <h2>Demo usage</h2>
          </div>
          <div class="module">
            <smart-list-box id="twoLineList" sorted>
              <smart-list-item>Andrew Watson</smart-list-item>
              <smart-list-item>Anne Kean</smart-list-item>
              <smart-list-item>Avril Janin</smart-list-item>
              <smart-list-item>Janet Pattenson</smart-list-item>
              <smart-list-item>Johanna Svensson</smart-list-item>
              <smart-list-item>Johnny Abana</smart-list-item>
              <smart-list-item>Laura Thene</smart-list-item>
              <smart-list-item>Margaret Vetton</smart-list-item>
              <smart-list-item>Maria Sevrano</smart-list-item>
              <smart-list-item>Mark Yemen</smart-list-item>
              <smart-list-item>Maya Verdara</smart-list-item>
              <smart-list-item>Michael Barton</smart-list-item>
              <smart-list-item>Monica Oghini</smart-list-item>
              <smart-list-item>Nancy Queens</smart-list-item>
              <smart-list-item>Robert Drawny</smart-list-item>
              <smart-list-item>Steven Fedrichy</smart-list-item>
              <smart-list-item>Toni Versachi</smart-list-item>
            </smart-list-box>
            <p></p>
            <p>Example of a two-line list.</p>
          </div>
          <div class="module checkList">
            <smart-list-box id="twoLineCheckList" sorted selection-mode="checkBox">
              <smart-list-item>Alarms</smart-list-item>
              <smart-list-item>Android</smart-list-item>
              <smart-list-item>DCIM</smart-list-item>
              <smart-list-item>DeviceConfifg</smart-list-item>
              <smart-list-item>Documents</smart-list-item>
              <smart-list-item>Download</smart-list-item>
              <smart-list-item>Edited</smart-list-item>
              <smart-list-item>LazyList</smart-list-item>
              <smart-list-item>Movies</smart-list-item>
              <smart-list-item>Music</smart-list-item>
              <smart-list-item>Notifications</smart-list-item>
              <smart-list-item>System</smart-list-item>
              <smart-list-item>System Volume Information</smart-list-item>
              <smart-list-item>Podcast</smart-list-item>
              <smart-list-item>Ringtones</smart-list-item>
              <smart-list-item>New folder</smart-list-item>
              <smart-list-item>Temp</smart-list-item>
            </smart-list-box>
            <smart-button id="deleteButton" class="secondary floating smart-visibility-hidden">
              <i class="material-icons">&#xE16C;</i>
            </smart-button>
            <p></p>
            <p>Example of a two-line list with icon.</p>
          </div>
        </section>
        <section id="appearance">
          <h2>Appearance</h2>
          <div class="module">
            <smart-list-box selection-mode="none" id="listBoxLight">
              <smart-list-items-group label="Sound">
                <smart-list-item>Audio settings</smart-list-item>
                <smart-list-item>Accessory settings</smart-list-item>
                <smart-list-item readonly>Media volume</smart-list-item>
                <smart-list-item readonly>Alarm volume</smart-list-item>
                <smart-list-item readonly>Ring volume</smart-list-item>
                <smart-list-item>Also vibrate for calls</smart-list-item>
                <smart-list-item>Do not disturb</smart-list-item>
                <smart-list-item>Phone ringtone</smart-list-item>
                <smart-list-item>Increasing ringtone</smart-list-item>
                <smart-list-item>Notification sound</smart-list-item>
                <smart-list-item>Other sounds</smart-list-item>
              </smart-list-items-group>
              <smart-list-items-group label="Notification">
                <smart-list-item>Notification light</smart-list-item>
                <smart-list-item>When device is locked</smart-list-item>
                <smart-list-item>App notifications</smart-list-item>
                <smart-list-item>Keep notifications on lock screen</smart-list-item>
              </smart-list-items-group>
              <smart-list-items-group label="Advanced">
                <smart-list-item>Notification access</smart-list-item>
                <smart-list-item>Do not disturb access</smart-list-item>
              </smart-list-items-group>
            </smart-list-box>
            <p></p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.listbox.js";
import "smart-webcomponents/source/modules/smart.slider.js";
import "smart-webcomponents/source/modules/smart.button.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      function configureListBoxes() {
        function configureGestureListBox() {
          let gestureListbox = document.getElementById("gestureListBox");
          gestureListbox.itemTemplate = "multiLineTemplate";

          gestureListbox.whenRendered(() => {
            let actionButtons = gestureListbox.getElementsByClassName(
                "secondLine"
              ),
              button;
            for (let i = 0; i < actionButtons.length; i++) {
              button = document.createElement("smart-button");
              button.id = "actionButton";
              button.classList.add("material", "flat");
              button.innerHTML = '<i class="material-icons">&#xE8B8;</i>';
              actionButtons[i].appendChild(button);
            }
          });

          function handleSwipe(event) {
            let target = event.originalEvent.target.closest("smart-list-item"),
              //actionButton = document.getElementById("actionButton"),
              isSameItem,
              reset,
              oldSwipeType,
              type = event.type === "swipeleft" ? "left" : "right";
            if (!target) {
              return;
            }
            target.classList.remove("swipe-right-left");
            let swipedLeftItems = target.getElementsByClassName("swipe-left"),
              swipedRightItems = target.getElementsByClassName("swipe-right");
            if (swipedLeftItems.length === 1) {
              oldSwipeType = "left";
              isSameItem = swipedLeftItems[0] === target ? true : false;
              reset = isSameItem && type === "left" ? true : false;
              swipedLeftItems[0].classList.remove("swipe-left");
            } else if (swipedRightItems.length === 1) {
              oldSwipeType = "right";
              isSameItem = swipedRightItems[0] === target ? true : false;
              reset = isSameItem && type === "right" ? true : false;
              swipedRightItems[0].classList.remove("swipe-right");
            }
            if (isSameItem && oldSwipeType !== "left") {
              target.classList.add("swipe-right-left");
            }
            if (reset) {
              return;
            }
            const button = target.querySelector("smart-button");
            if (type === "right") {
              button.innerHTML = '<i class="material-icons">&#xE307;</i>';
            } else {
              button.innerHTML = '<i class="material-icons">&#xE2C4;</i>';
            }
            target.classList.add("swipe-" + type);
          }
          gestureListbox.addEventListener("swipeleft", handleSwipe);
          gestureListbox.addEventListener("swiperight", handleSwipe);
        }

        function configureDemoListBoxes() {
          let switchWifi = document.createElement("smart-switch-button"),
            switchBluetooth = document.createElement("smart-switch-button"),
            settingsMenu = document.getElementById("settingsMenu"),
            phoneBook = document.getElementById("phoneBook"),
            twoLineList = document.getElementById("twoLineList"),
            twoLineCheckList = document.getElementById("twoLineCheckList"),
            deleteButton = document.getElementById("deleteButton"),
            button,
            iconLabels = [
              "network_wifi",
              "bluetooth",
              "data_usage",
              "usb",
              "",
              "settings",
              "settings_phone",
              "notifications",
              "stay_primary_portrait",
              "storage",
              "battery_std",
              "apps",
              "people",
              "gps_fixed",
              "security",
              "account_box",
              "home",
              "keyboard",
              "settings_backup_restore",
              "access_time",
              "accessibility",
              "print",
              "phone_android",
              "help"
            ];
          switchWifi.classList.add("material");
          switchBluetooth.classList.add("material");
          switchWifi.checked = true;
          settingsMenu.itemTemplate = "itemTemplate";

          settingsMenu.whenRendered(() => {
            const icons = settingsMenu.getElementsByClassName("primaryAction");

            settingsMenu
              .getElementsByClassName("secondaryAction")[0]
              .appendChild(switchWifi);
            settingsMenu
              .getElementsByClassName("secondaryAction")[1]
              .appendChild(switchBluetooth);
            for (let i = 0; i < icons.length; i++) {
              icons[i].children[0].textContent = iconLabels[i];
            }
          });

          phoneBook.itemTemplate = "itemTemplate";
          phoneBook.whenRendered(() => {
            const people = phoneBook.items;

            for (let i = 0; i < people.length; i++) {
              button = document.createElement("smart-button");
              button.classList.add("material", "flat");
              button.innerHTML = '<i class="material-icons">&#xE0C9;</i>';
              people[i]
                .getElementsByClassName("secondaryAction")[0]
                .appendChild(button);
            }
          });

          twoLineList.itemTemplate = "multiLineTemplate";
          twoLineList.whenRendered(() => {
            let twoLineListItems = twoLineList.items;
            let secondLineContent = [
              "General Manager",
              "Developer",
              "Musician",
              "Architect",
              "Janitor",
              "Waitress",
              "Developer",
              "CEO",
              "Team leader",
              "Technical advisor",
              "Human resources(HR)",
              "Financial advisor",
              "Consultant",
              "Human resources(HR)",
              "Tester",
              "Quality Assurance(QA)",
              "Software Developer"
            ];

            for (let i = 0; i < twoLineListItems.length; i++) {
              twoLineListItems[i].getElementsByClassName(
                "secondLine"
              )[0].textContent = secondLineContent[i];
            }
          });

          twoLineCheckList.itemTemplate = "multiLineTemplate";
          twoLineCheckList.whenRendered(() => {
            let twoLineCheckListItems = twoLineCheckList.items;
            let secondLineContent = [
              "650KB",
              "105MB",
              "497MB",
              "1.2MB",
              "345KB",
              "1.2GB",
              "12MB",
              "2.4MB",
              "7.5GB",
              "1.72GB",
              "450MB",
              "480KB",
              "120KB",
              "12.7MB",
              "784MB",
              "920KB",
              "1.7MB"
            ];
            for (let i = 0; i < twoLineCheckListItems.length; i++) {
              twoLineCheckListItems[i].getElementsByClassName(
                "secondLine"
              )[0].textContent = secondLineContent[i];
            }
          });

          twoLineCheckList.addEventListener("change", function() {
            if (twoLineCheckList.selectedIndexes.length > 0) {
              deleteButton.$.removeClass("smart-visibility-hidden");
            } else {
              deleteButton.$.addClass("smart-visibility-hidden");
            }
          });
          deleteButton.addEventListener("click", function() {
            for (
              let index = twoLineCheckList.selectedIndexes.length - 1;
              index > -1;
              index--
            ) {
              twoLineCheckList.removeAt(
                twoLineCheckList.selectedIndexes[index]
              );
            }
          });
        }

        function configureThemedListBoxes() {
          let switchVibration = document.createElement("smart-switch-button"),
            switchRingtone = document.createElement("smart-switch-button"),
            switchNotificationLight = document.createElement(
              "smart-switch-button"
            ),
            switchNotificationLightDark = document.createElement(
              "smart-switch-button"
            ),
            switchNotificationsLockScreen = document.createElement(
              "smart-switch-button"
            ),
            ringSlider = document.createElement("smart-slider"),
            mediaSlider = document.createElement("smart-slider"),
            alarmSlider = document.createElement("smart-slider"),
            listBoxLight = document.getElementById("listBoxLight");

          [
            switchVibration,
            switchRingtone,
            switchNotificationLight,
            switchNotificationLightDark,
            switchNotificationsLockScreen,
            ringSlider,
            mediaSlider,
            alarmSlider
          ].map(function(element) {
            element.classList.add("material");
          });
          [ringSlider, mediaSlider, alarmSlider].map(function(element) {
            element.scalePosition = "none";
          });
          mediaSlider.value = mediaSlider.max / 2;
          ringSlider.value = ringSlider.max / 1.5;
          alarmSlider.value = alarmSlider.max;
          switchVibration.checked = switchNotificationLight.checked = switchNotificationLightDark.checked = true;
          listBoxLight.itemTemplate = "multiLineTemplate";
          listBoxLight.whenRendered(() => {
            let listBoxLightSecondaryAction = listBoxLight.getElementsByClassName(
              "secondLine"
            );

            // Light themed list box
            listBoxLightSecondaryAction[2].innerHTML =
              '<i class="material-icons">&#xE050;</i>';
            listBoxLightSecondaryAction[2].appendChild(mediaSlider);
            listBoxLightSecondaryAction[3].innerHTML =
              '<i class="material-icons">&#xE855;</i>';
            listBoxLightSecondaryAction[3].appendChild(alarmSlider);
            listBoxLightSecondaryAction[4].innerHTML =
              '<i class="material-icons">&#xE7F4;</i>';
            listBoxLightSecondaryAction[4].appendChild(ringSlider);
            listBoxLightSecondaryAction[5].parentElement.classList.add(
              "single-line"
            );
            listBoxLightSecondaryAction[5].appendChild(switchVibration);
            listBoxLightSecondaryAction[8].parentElement.classList.add(
              "single-line"
            );
            listBoxLightSecondaryAction[8].appendChild(switchRingtone);
            listBoxLightSecondaryAction[11].parentElement.classList.add(
              "single-line"
            );
            listBoxLightSecondaryAction[11].appendChild(
              switchNotificationLight
            );
            listBoxLightSecondaryAction[14].parentElement.classList.add(
              "single-line"
            );
            listBoxLightSecondaryAction[14].appendChild(
              switchNotificationsLockScreen
            );
            //Additional text
            listBoxLightSecondaryAction[7].textContent = "Breeze";
            listBoxLightSecondaryAction[9].textContent = "Notification";
            listBoxLightSecondaryAction[15].textContent =
              "No apps can read notifications";
          });
          const sliderControl = function(event) {
            const slider = event.target;
            switch (slider) {
              case mediaSlider:
                slider.previousElementSibling.textContent =
                  slider.value === slider.min ? "volume_off" : "volume_up";
                break;
              case alarmSlider:
                slider.previousElementSibling.textContent =
                  slider.value === slider.min ? "alarm_off" : "alarm";
                break;
              case ringSlider:
                slider.previousElementSibling.textContent =
                  slider.value === slider.min
                    ? "notifications_off"
                    : "notifications";
                break;
            }
          };
          mediaSlider.addEventListener("change", sliderControl);
          alarmSlider.addEventListener("change", sliderControl);
          ringSlider.addEventListener("change", sliderControl);
        }
        configureDemoListBoxes();
        configureThemedListBoxes();
        configureGestureListBox();
      }

      const itemTemplate = document.createElement("template");
      itemTemplate.id = "itemTemplate";
      itemTemplate.innerHTML = `<div class="templateContainer">
          <div class="primaryAction">
            <i class="material-icons"></i>
            {{label}}
          </div>
          <div class="secondaryAction"></div>
        </div>`;
      document.body.appendChild(itemTemplate);

      const multiLineTemplate = document.createElement("template");
      multiLineTemplate.id = "multiLineTemplate";
      multiLineTemplate.innerHTML = `<div class="templateContainer">
          <div class="firstLine">{{label}}</div>
          <div class="secondLine"></div>
        </div>`;
      document.body.appendChild(multiLineTemplate);

      configureListBoxes();
    });
  }
};
</script>

<style>
/* ------------ Google fonts ------------ */ /* APACHE LICENSE 2.0 ! */

/* fallback */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
    format("woff2");
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

/* ------------ */

#materialListBoxContainer {
  line-height: 24px;
  font-size: 13px;
  margin-left: 0;
  margin: 0px;
  padding-top: 0px;
}

#materialListBoxContainer section h2 {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #3949ab;
  padding-top: 80px;
}
@media (max-width: 1026px) {
  #materialListBoxContainer section h2 {
    padding-top: 0px;
  }
}
#materialListBoxContainer section:first-of-type h2 {
  font-size: 34px;
  border-top: initial;
}

#materialListBoxContainer #usage h2 {
  border-top: initial;
}

#materialListBoxContainer section:first-of-type div h2 {
  font-size: 20px;
}

#materialListBoxContainer section {
  margin-top: 80px;
}

#materialListBoxContainer section:first-of-type {
  margin-top: 0;
}

#materialListBoxContainer section div h2 {
  color: #212121;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 30px;
  max-width: 940px;
}
.smart-demo-container {
  margin: 0;
}
#materialListBoxContainer nav {
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

#materialListBoxContainer nav ul {
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

#materialListBoxContainer nav li {
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

#materialListBoxContainer nav li a {
  text-decoration: none;
}

#materialListBoxContainer nav h2 {
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
  min-width: 355px;
  vertical-align: top;
}

.module.gestures {
  width: calc(100% / 2);
}

.module h3 {
  font-size: 13px;
}

.module p {
  margin-bottom: 20px;
}

.module img {
  width: 100%;
}

.module h2 {
  font-weight: 400;
}

#materialListBoxContainer #usage .module:nth-child(5),
#materialListBoxContainer #usage .module:nth-child(6),
#materialListBoxContainer #behavior .module:nth-child(5),
#materialListBoxContainer #behavior .module:nth-child(6),
#materialListBoxContainer #behavior .module:nth-child(7),
#materialListBoxContainer #behavior .module:nth-child(8),
#materialListBoxContainer #behavior .module:nth-child(9),
#materialListBoxContainer #behavior .module:nth-child(10),
#materialListBoxContainer #behavior .module:nth-child(11),
#materialListBoxContainer #behavior .module:nth-child(12),
#materialListBoxContainer #multiLineLists .module:nth-child(4),
#materialListBoxContainer #multiLineLists .module:nth-child(5),
#materialListBoxContainer #multiLineLists .module:nth-child(6) {
  margin-top: 50px;
}

#materialListBoxContainer #indicatorTypes .module:first-of-type {
  width: 100%;
}

#materialListBoxContainer #behavior smart-list-box {
  height: 500px;
  width: 300px;
  --smart-material-items-group-border-color: #2693e5;
}

#materialListBoxContainer #behavior .horizontal-scrolling,
#materialListBoxContainer #behavior #gestureListBox {
  width: 300px;
  height: 300px;
}

#materialListBoxContainer #gestureListBox .smart-list-item-container {
  width: 100%;
}

#materialListBoxContainer #gestureListBox .templateContainer {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 270px;
}
smart-list-item {
  overflow: visible;
}
smart-list-item .smart-container,
smart-list-item .smart-content {
  overflow: visible;
}
#materialListBoxContainer #gestureListBox .secondLine {
  display: flex;
  justify-content: center;
  align-items: center;
}

#materialListBoxContainer #gestureListBox .secondLine {
  width: 50px;
}

#materialListBoxContainer #gestureListBox .material-icons {
  font-size: 20px;
}

#materialListBoxContainer #gestureListBox .swipe-right .templateContainer {
  flex-direction: row-reverse;
  width: 250px;
}

#materialListBoxContainer #gestureListBox .swipe-right-left .firstLine {
  animation: animate-label 0.2s ease-out;
}

#materialListBoxContainer #gestureListBox .swipe-left .secondLine {
  transform: translateX(0);
  transition: transform 0.2s ease-out;
}

#materialListBoxContainer #gestureListBox .swipe-right .firstLine,
#materialListBoxContainer #gestureListBox .swipe-right .secondLine {
  transform: translateX(0);
  animation: show-button 0.2s ease-out;
}

@keyframes show-button {
  0% {
    transform: translateX(-100px);
  }

  100% {
    transform: translateX(0px);
  }
}

@keyframes animate-label {
  0% {
    transform: translateX(100px);
  }

  100% {
    transform: translateX(0px);
  }
}

#materialListBoxContainer #behavior .gestures {
  position: relative;
}

#phoneBook smart-list-item,
#settingsMenu smart-list-item,
#appearance smart-list-item {
  height: 50px;
}

#listBoxLight smart-list-item {
  height: 60px;
}

#twoLineList smart-list-item,
#twoLineCheckList smart-list-item {
  height: 70px;
}

#twoLineList smart-list-item .templateContainer,
#twoLineCheckList smart-list-item .templateContainer,
#listBoxLight smart-list-item .templateContainer {
  align-items: flex-start;
  flex-direction: column;
}
#listBoxLight smart-list-item .templateContainer.single-line {
  flex-direction: row;
}

#listBoxLight smart-list-item .templateContainer.single-line .secondLine {
  justify-content: flex-end;
}

#listBoxLight smart-list-item .templateContainer .secondLine {
  width: 100%;
}

.templateContainer {
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#materialListBoxContainer #behavior .primaryAction,
#materialListBoxContainer #behavior .secondaryAction {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
}

#materialListBoxContainer #behavior .primaryAction .material-icons {
  margin-right: 5px;
}

smart-switch-button .smart-thumb:before {
  opacity: 0;
}

#materialListBoxContainer #behavior smart-switch-button {
  width: 35px;
  height: 25px;
}

#materialListBoxContainer #appearance smart-switch-button {
  width: 35px;
  height: 25px;
}

#materialListBoxContainer #phoneBook .material-icons {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#gestureListBox smart-button,
#phoneBook smart-button {
  color: inherit;
}

#materialListBoxContainer #phoneBook .primaryAction .material-icons {
  width: 35px;
  height: 35px;
}

#materialListBoxContainer #phoneBook smart-button {
  width: 30px;
  height: 30px;
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(1)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/andrew.png);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(2)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/anne.png);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(3)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/avril.jpeg);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(4)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/janet.png);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(5)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/johanna.jpeg);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(6)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/johnny.jpeg);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(7)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/laura.png);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(8)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/margaret.png);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(9)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/Maria.jpeg);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(10)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/mark.jpeg);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(11)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/maya.jpeg);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(12)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/michael.png);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(13)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/monica.jpeg);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(14)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/nancy.png);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(15)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/robert.png);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(16)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/steven.jpeg);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(17)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/steven.png);
}

#materialListBoxContainer
  #phoneBook
  smart-list-item:nth-of-type(18)
  .primaryAction
  .material-icons {
  background-image: url(../../../images/phonebook/toni.jpeg);
}

#materialListBoxContainer #multiLineLists .secondLine {
  opacity: 0.5;
  font-size: 12px;
}
.swipe-right .secondLine smart-button {
  left: -17px;
  position: relative;
}
#materialListBoxContainer .checkList {
  position: relative;
}

#materialListBoxContainer .checkList #deleteButton {
  position: absolute;
  top: 77%;
  left: 65%;
  animation: delete-button-appear 0.2s ease-out;
  -webkit-transform-origin: center;
  transform-origin: center;
}

#materialListBoxContainer .checkList #deleteButton .material-icons {
  font-size: 25px;
  margin-left: -3px;
}

#materialListBoxContainer .checkList #deleteButton.smart-visibility-hidden {
  animation: delete-button-hide 0.2s ease-in;
  transition: animation, visibility 0.2s ease-in;
}

#materialListBoxContainer #multiLineLists smart-list-box,
#materialListBoxContainer #appearance smart-list-box {
  height: 500px;
  width: 300px;
}

#materialListBoxContainer #appearance smart-list-box .secondLine {
  display: flex;
  align-items: center;
  padding: 1px;
  font-size: 12px;
  color: #808080;
}

#materialListBoxContainer
  #appearance
  smart-list-box
  .secondLine
  .material-icons {
  font-size: 18px;
}

#materialListBoxContainer #appearance smart-slider {
  width: 100%;
  padding-left: 5%;
  padding-right: 2.5%;
}

#materialListBoxContainer #appearance smart-slider .smart-thumb::before {
  content: none;
}

@keyframes delete-button-appear {
  0% {
    opacity: 0;
    transform: scale(0, 0) rotate(-180deg);
  }

  50% {
    opacity: 0.5;
    transform: scale(0.5, 0.5) rotate(-90deg);
  }

  100% {
    opacity: 1;
    transform: scale(1, 1) rotate(0deg);
  }
}
.smart-demo-container section h2 {
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #764ebe;
}
@keyframes delete-button-hide {
  0% {
    opacity: 1;
    transform: scale(1, 1) rotate(0deg);
  }

  50% {
    opacity: 0.5;
    transform: scale(0.5, 0.5) rotate(-90deg);
  }

  100% {
    opacity: 0;
    transform: scale(0, 0) rotate(-180deg);
  }
}
</style>
