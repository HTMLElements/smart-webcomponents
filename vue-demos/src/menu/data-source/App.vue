<template>
  <div class="vue-root">
    <smart-menu id="menu"></smart-menu>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.menu.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const menuDataSource = [
        {
          label: "File",
          items: [
            {
              label: "New",
              shortcut: "Ctrl+N"
            },
            {
              label: "Open",
              shortcut: "Ctrl+0"
            },
            {
              label: "Open Containing Folder",
              items: [
                {
                  label: "Explorer"
                },
                {
                  label: "cmd"
                }
              ]
            },
            {
              label: "Save",
              shortcut: "Ctrl+S",
              disabled: true,
              separator: true
            },
            {
              label: "Exit",
              shortcut: "Alt+F4"
            }
          ]
        },
        {
          label:
            '<img id="helpIcon" src="../../../images/help-icon.png" title="Help" />'
        },
        {
          label: '<div class="planetIcon" title="Planet"></div>'
        },
        {
          label: "About",
          value: "customValue"
        }
      ];
      document.getElementById("menu").dataSource = menuDataSource;
    });
  }
};
</script>

<style>
smart-menu {
  margin-left: 5%;
}
#helpIcon,
.planetIcon {
  width: 30px;
  height: 30px;
}

.planetIcon {
  background-image: url("../../../images/earth.png");
  background-position: center;
}
</style>
