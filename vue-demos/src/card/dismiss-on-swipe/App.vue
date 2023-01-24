<template>
  <div class="vue-root">
    <smart-cards>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
      <smart-card item-template="cardTemplate"></smart-card>
    </smart-cards>   
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.card.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const cards = document.getElementsByTagName("smart-card"),
        cardContainer = cards[0].parentElement;

      const template = document.createElement("template");
      template.id = "cardTemplate";
      template.innerHTML = '<div class="card-content">{{content}}</div>';
      document.body.appendChild(template);

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        card.itemTemplate = "cardTemplate";
        card.dataSource = {
          content: "Swipe left/right"
        };
        card.addEventListener("swipeleft", function() {
          card.classList.add("swipe-left");
        });
        card.addEventListener("swiperight", function() {
          card.classList.add("swipe-right");
        });
        card.addEventListener("animationend", function() {
          cardContainer.removeChild(card);
        });
      }
    });
  }
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}

smart-cards {
  min-height: 100vh;
  align-content: flex-start;
  overflow-x: hidden;
}

smart-card .card-content {
  box-sizing: border-box;
  padding: 20px;
  color: white;
  background-color: #009688;
  font-size: 30px;
  text-align: center;
  user-select: none;
}

.swipe-left,
.swipe-right {
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
}

.swipe-left {
  animation-name: swipe-left;
}

.swipe-right {
  animation-name: swipe-right;
}

@keyframes swipe-left {
  0% {
    transform: translateX(0%);
  }

  50% {
    transform: translateX(-150%);
  }

  60% {
    height: 73px;
  }

  100% {
    height: 0px;
    transform: translateX(-150%);
  }
}

@keyframes swipe-right {
  0% {
    transform: translateX(0%);
  }

  50% {
    transform: translateX(150%);
  }

  60% {
    max-height: 50px;
  }

  100% {
    max-height: 0px;
    transform: translateX(150%);
  }
}
</style>
