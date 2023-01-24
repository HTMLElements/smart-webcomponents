<template>
  <div class="vue-root">
    <div class="demo-description">
      <p>
        <b>Smart.Input</b> is a simple input that can have a predefined options
        list.
      </p>
      <p>
        <b>Readonly</b> will turn the input in to a drop down list.
      </p>
      <p>
        <b>RenderMode</b> radio buttons allow to change the appearance of the input.
      </p>
    </div>
    <smart-input placeholder="Please Select" drop-down-button-position="right"></smart-input>
    <div class="options">
      <div class="description">Readonly Input acts as a simple DropDownList.</div>
      <div class="option">
        <smart-check-box class="readonly">Read only</smart-check-box>
      </div>
      <div class="option">
        <div class="description">Render Mode</div>
        <smart-radio-button checked class="render-mode">Default</smart-radio-button>
        <smart-radio-button class="render-mode">Outlined</smart-radio-button>
        <smart-radio-button class="render-mode">Underlined</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.checkbox.js";
import "smart-webcomponents/source/modules/smart.input.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      let input = document.querySelector("smart-input");
      input.dataSource = [
        {
          label: "Andrew Watson"
        },
        {
          label: "Anne Kean"
        },
        {
          label: "Avril Janin"
        },
        {
          label: "Janet Pattenson"
        },
        {
          label: "Johanna Svensson"
        },
        {
          label: "Johnny Abana"
        },
        {
          label: "Laura Thene"
        },
        {
          label: "Margaret Vetton"
        },
        {
          label: "Maria Sevrano"
        },
        {
          label: "Mark Yemen"
        },
        {
          label: "Maya Verdara"
        },
        {
          label: "Michael Barton"
        },
        {
          label: "Monica Oghini"
        },
        {
          label: "Nancy Queens"
        },
        {
          label: "Robert Drawny"
        },
        {
          label: "Steven Fedrichy"
        },
        {
          label: "Toni Versachi"
        }
      ];
      document
        .querySelector(".options")
        .addEventListener("change", function(event) {
          const target = event.target;
          const targetClassList = target.classList;
          if (targetClassList.contains("readonly")) {
            input.readonly = event.detail.value;
            return;
          }
          if (targetClassList.contains("render-mode")) {
            input.classList.remove("underlined", "outlined");
            const textContent = target.textContent.toLowerCase();
            if (textContent.indexOf("underlined") > -1) {
              input.classList.add("underlined");
            } else if (textContent.indexOf("outlined") > -1) {
              input.classList.add("outlined");
            }
          }
        });
    });
  }
};
</script>

<style>
.smart-input-drop-down-menu li {
  height: 35px;
}

.smart-input-drop-down-menu li[value] a::before {
  content: "";
  width: 20px;
  height: 20px;
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle;
  line-height: 0rem;
  background-size: cover;
  border-radius: 50%;
}

li[value="Andrew Watson"] a::before {
  background: url("../../../images/phonebook/andrew.png");
}

li[value="Anne Kean"] a::before {
  background: url("../../../images/phonebook/anne.png");
}

li[value="Avril Janin"] a::before {
  background: url("../../../images/phonebook/avril.png");
}

li[value="Janet Pattenson"] a::before {
  background: url("../../../images/phonebook/janet.png");
}

li[value="Johanna Svensson"] a::before {
  background: url("../../../images/phonebook/johanna.png");
}

li[value="Johnny Abana"] a::before {
  background: url("../../../images/phonebook/johnny.png");
}

li[value="Laura Thene"] a::before {
  background: url("../../../images/phonebook/laura.png");
}

li[value="Margaret Vetton"] a::before {
  background: url("../../../images/phonebook/margaret.png");
}

li[value="Maria Sevrano"] a::before {
  background: url("../../../images/phonebook/maria.png");
}

li[value="Mark Yemen"] a::before {
  background: url("../../../images/phonebook/mark.png");
}

li[value="Maya Verdara"] a::before {
  background: url("../../../images/phonebook/maya.png");
}

li[value="Michael Barton"] a::before {
  background: url("../../../images/phonebook/michael.png");
}

li[value="Monica Oghini"] a::before {
  background: url("../../../images/phonebook/monica.png");
}

li[value="Nancy Queens"] a::before {
  background: url("../../../images/phonebook/nancy.png");
}

li[value="Robert Drawny"] a::before {
  background: url("../../../images/phonebook/robert.png");
}

li[value="Steven Fedrichy"] a::before {
  background: url("../../../images/phonebook/steven.png");
}

li[value="Toni Versachi"] a::before {
  background: url("../../../images/phonebook/toni.png");
}
</style>
