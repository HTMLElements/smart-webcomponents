<template>
  <div class="vue-root">
    <smart-list-box id="phoneBook" sorted>
      <smart-list-item>
        <i class="icon"></i>Andrew Watson
      </smart-list-item>
      <smart-list-item>
        <i class="icon"></i>Anne Kean
      </smart-list-item>
      <smart-list-item>
        <i class="icon"></i>Avril Janin
      </smart-list-item>
      <smart-list-item>
        <i class="icon"></i>Janet Pattenson
      </smart-list-item>
      <smart-list-item>
        <i class="icon"></i>Johanna Svensson
      </smart-list-item>
      <smart-list-item>
        <i class="icon"></i>Johnny Abana
      </smart-list-item>
      <smart-list-item>
        <i class="icon"></i>Laura Thene
      </smart-list-item>
      <smart-list-item>
        <i class="icon"></i>Margaret Vetton
      </smart-list-item>
      <smart-list-item>
        <i class="icon"></i>Maria Sevrano
      </smart-list-item>
      <smart-list-item>
        <i class="icon"></i>Mark Yemen
      </smart-list-item>
      <smart-list-item>
        <i class="icon"></i>Maya Verdara
      </smart-list-item>
      <smart-list-item>
        <i class="icon"></i>Michael Barton
      </smart-list-item>
      <smart-list-item>
        <i class="icon"></i>Monica Oghini
      </smart-list-item>
      <smart-list-item>
        <i class="icon"></i>Nancy Queens
      </smart-list-item>
      <smart-list-item>
        <i class="icon"></i>Robert Drawny
      </smart-list-item>
      <smart-list-item>
        <i class="icon"></i>Steven Fedrichy
      </smart-list-item>
      <smart-list-item>
        <i class="icon"></i>Toni Versachi
      </smart-list-item>
    </smart-list-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.listbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
smart-list-box {
  width: 250px;
  height: 400px;
}
@media only screen and (max-width: 700px) {
  body,
  html {
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
    overflow: hidden;
  }

  smart-list-box {
    width: 100%;
    height: 100%;
  }
}
#phoneBook smart-list-item {
  height: 50px;
}
#phoneBook smart-list-item .smart-content-label {
  display: flex;
  align-items: center;
}

#phoneBook .icon {
  width: 35px;
  height: 35px;
  display: flex;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 8px;
  position: relative;
}

#phoneBook smart-list-item:nth-of-type(1) .icon {
  background-image: url(../../../images/phonebook/andrew.png);
}

#phoneBook smart-list-item:nth-of-type(2) .icon {
  background-image: url(../../../images/phonebook/anne.png);
}

#phoneBook smart-list-item:nth-of-type(3) .icon {
  background-image: url(../../../images/phonebook/avril.jpeg);
}

#phoneBook smart-list-item:nth-of-type(4) .icon {
  background-image: url(../../../images/phonebook/janet.png);
}

#phoneBook smart-list-item:nth-of-type(5) .icon {
  background-image: url(../../../images/phonebook/johanna.jpeg);
}

#phoneBook smart-list-item:nth-of-type(6) .icon {
  background-image: url(../../../images/phonebook/johnny.jpeg);
}

#phoneBook smart-list-item:nth-of-type(7) .icon {
  background-image: url(../../../images/phonebook/laura.png);
}

#phoneBook smart-list-item:nth-of-type(8) .icon {
  background-image: url(../../../images/phonebook/margaret.png);
}

#phoneBook smart-list-item:nth-of-type(9) .icon {
  background-image: url(../../../images/phonebook/Maria.jpeg);
}

#phoneBook smart-list-item:nth-of-type(10) .icon {
  background-image: url(../../../images/phonebook/mark.jpeg);
}

#phoneBook smart-list-item:nth-of-type(11) .icon {
  background-image: url(../../../images/phonebook/maya.jpeg);
}

#phoneBook smart-list-item:nth-of-type(12) .icon {
  background-image: url(../../../images/phonebook/michael.png);
}

#phoneBook smart-list-item:nth-of-type(13) .icon {
  background-image: url(../../../images/phonebook/monica.jpeg);
}

#phoneBook smart-list-item:nth-of-type(14) .icon {
  background-image: url(../../../images/phonebook/nancy.png);
}

#phoneBook smart-list-item:nth-of-type(15) .icon {
  background-image: url(../../../images/phonebook/robert.png);
}

#phoneBook smart-list-item:nth-of-type(16) .icon {
  background-image: url(../../../images/phonebook/steven.jpeg);
}

#phoneBook smart-list-item:nth-of-type(17) .icon {
  background-image: url(../../../images/phonebook/steven.png);
}

#phoneBook smart-list-item:nth-of-type(18) .icon {
  background-image: url(../../../images/phonebook/toni.jpeg);
}
</style>
