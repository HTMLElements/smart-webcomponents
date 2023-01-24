<template>
  <div class="vue-root">
    <div class="demo-description">
      <p>
        <b>Smart.CheckInput</b> is an input that allows select from a predefined
        checkbox style options drop down list.
      </p>
      <p>
        <b>Readonly</b> will turn the input in to a drop down list.
      </p>
      <p>
        <b>RenderMode</b> radio buttons allow to change the appearance of the input.
      </p>
    </div>
    <smart-check-input placeholder="Please Select" drop-down-button-position="right"></smart-check-input>
    <div class="options">
      <div class="description">Readonly MultiInput acts as a simple DropDownList.</div>
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
import "smart-webcomponents/source/modules/smart.checkinput.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      let input = document.querySelector("smart-check-input");
      input.dataSource = [
        {
          value: "Austria",
          label: "Austria"
        },
        {
          value: "Belarus",
          label: "Belarus"
        },
        {
          value: "Belgium",
          label: "Belgium"
        },
        {
          value: "Bosnia and Herzegovina",
          label: "Bosnia and Herzegovina"
        },
        {
          value: "Bulgaria",
          label: "Bulgaria"
        },
        {
          value: "Croatia",
          label: "Croatia"
        },
        {
          value: "Cyprus",
          label: "Cyprus"
        },
        {
          value: "Czech Republic",
          label: "Czech Republic"
        },
        {
          value: "Denmark",
          label: "Denmark"
        },
        {
          value: "Estonia",
          label: "Estonia"
        },
        {
          value: "Finland",
          label: "Finland"
        },
        {
          value: "France",
          label: "France"
        },
        {
          value: "Georgia",
          label: "Georgia"
        },
        {
          value: "Germany",
          label: "Germany"
        },
        {
          value: "Greece",
          label: "Greece"
        },
        {
          value: "Hungary",
          label: "Hungary"
        },
        {
          value: "Iceland",
          label: "Iceland"
        },
        {
          value: "Ireland",
          label: "Ireland"
        },
        {
          value: "Italy",
          label: "Italy"
        },
        {
          value: "Latvia",
          label: "Latvia"
        },
        {
          value: "Liechtenstein",
          label: "Liechtenstein"
        },
        {
          value: "Lithuania",
          label: "Lithuania"
        },
        {
          value: "Luxembourg",
          label: "Luxembourg"
        },
        {
          value: "Macedonia, The Former Yugoslav Republic of",
          label: "Macedonia"
        },
        {
          value: "Malta",
          label: "Malta"
        },
        {
          value: "Moldova, Republic of",
          label: "Moldova, Republic of"
        },
        {
          value: "Netherlands",
          label: "Netherlands"
        },
        {
          value: "Norway",
          label: "Norway"
        },
        {
          value: "Poland",
          label: "Poland"
        },
        {
          value: "Portugal",
          label: "Portugal"
        },
        {
          value: "Romania",
          label: "Romania"
        },
        {
          value: "Russian Federation",
          label: "Russian Federation"
        },
        {
          value: "Serbia",
          label: "Serbia"
        },
        {
          value: "Montenegro",
          label: "Montenegro"
        },
        {
          value: "Slovakia",
          label: "Slovakia"
        },
        {
          value: "Slovenia",
          label: "Slovenia"
        },
        {
          value: "Spain",
          label: "Spain"
        },
        {
          value: "Sweden",
          label: "Sweden"
        },
        {
          value: "Switzerland",
          label: "Switzerland"
        },
        {
          value: "Turkey",
          label: "Turkey"
        },
        {
          value: "Ukraine",
          label: "Ukraine"
        },
        {
          value: "United Kingdom",
          label: "United Kingdom"
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
.smart-check-input-drop-down-menu li {
  height: 37px;
}

.smart-check-input-drop-down-menu li[value] a::before {
  width: 20px;
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle;
  line-height: 0rem;
  box-shadow: 0 0 2.5px 0 black;
}

li[value="Austria"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/at.svg);
}

li[value="Belarus"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/by.svg);
}

li[value="Belgium"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/be.svg);
}

li[value="Bosnia and Herzegovina"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/ba.svg);
}

li[value="Bulgaria"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/bg.svg);
}

li[value="Croatia"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/hr.svg);
}

li[value="Cyprus"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/cy.svg);
}

li[value="Czech Republic"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/cz.svg);
}

li[value="Denmark"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/dk.svg);
}

li[value="Estonia"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/ee.svg);
}

li[value="Finland"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/fi.svg);
}

li[value="France"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/fr.svg);
}

li[value="Georgia"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/ge.svg);
}

li[value="Germany"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/de.svg);
}

li[value="Greece"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/gr.svg);
}

li[value="Hungary"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/hu.svg);
}

li[value="Iceland"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/is.svg);
}

li[value="Ireland"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/ie.svg);
}

li[value="Italy"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/it.svg);
}

li[value="Latvia"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/lv.svg);
}

li[value="Liechtenstein"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/li.svg);
}

li[value="Lithuania"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/lt.svg);
}

li[value="Luxembourg"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/lu.svg);
}

li[value="Macedonia, The Former Yugoslav Republic of"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/mk.svg);
}

li[value="Malta"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/mt.svg);
}

li[value="Moldova, Republic of"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/md.svg);
}

li[value="Netherlands"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/nl.svg);
}

li[value="Norway"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/no.svg);
}

li[value="Poland"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/pl.svg);
}

li[value="Portugal"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/pt.svg);
}

li[value="Romania"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/ro.svg);
}

li[value="Russian Federation"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/ru.svg);
}

li[value="Serbia"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/rs.svg);
}

li[value="Montenegro"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/me.svg);
}

li[value="Slovakia"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/sk.svg);
}

li[value="Slovenia"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/si.svg);
}

li[value="Spain"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/es.svg);
}

li[value="Sweden"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/se.svg);
}

li[value="Switzerland"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/ch.svg);
}

li[value="Turkey"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/tr.svg);
}

li[value="Ukraine"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/ua.svg);
}

li[value="United Kingdom"] a::before {
  content: url(https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/1x1/gb.svg);
}
</style>
