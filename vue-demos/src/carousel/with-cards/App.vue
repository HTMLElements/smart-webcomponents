<template>
  <div class="vue-root">
    <smart-carousel id="carousel" class="slide" auto-play slide-show loop></smart-carousel>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.carousel.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      //const basePath = "../../../images/";
      const carousel = document.getElementById("carousel");
      carousel.dataSource = [
        {
          HTMLcontent: `<smart-card>
<img src="../../../images/carousel-small-1.jpg" style="width:100%;"/>
<h3>Lorem ipsum dolor</h3>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent non semper magna, quis congue ipsum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent non semper magna, quis congue ipsum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>
<a href="#">Lorem Ipsum</a>
</smart-card>
<smart-card>
<img src="../../../images/carousel-small-2.jpg" style="width:100%;"/>
<h3>Aenean condimentum</h3>
<p>
Pellentesque vitae enim vel neque viverra suscipit ut placerat nunc.Curabitur pretium tellus sit.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent non semper magna, quis congue ipsum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>
<a href="#">Lorem Ipsum</a>
</smart-card>
<smart-card>
<img src="../../../images/carousel-small-3.jpg" style="width:100%;"/>
<h3>Nulla mollis velit</h3>
<p>
Proin mollis elementum urna non sodales.Phasellus tempus pretium nibh at luctus.Duis non scelerisque turpis.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent non semper magna, quis congue ipsum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>
<a href="#">Lorem Ipsum</a>
</smart-card>`
        },
        {
          HTMLcontent: `<smart-card>
<img src="../../../images/carousel-small-4.jpg" style="width:100%;"/>
<h3>Nullam ac tellus</h3>
<p>
Sed aliquet eget sem in ornare.Proin lacinia, nisi et aliquam tincidunt, risus purus gravida lorem, in dapibus
orci ipsum id est.Duis scelerisque nulla id ultrices feugiat.Quisque eget mi enim.Nullam risus dui facilisis
eget justo quis, porta aliquet est.
</p>
<a href="#">Lorem Ipsum</a>
</smart-card>
<smart-card>
<img src="../../../images/carousel-small-5.jpg" style="width:100%;"/>
<h3>Maecenas turpis velit</h3>
<p>
Aenean sit amet felis ac enim eleifend luctus et eget justo.Sed sit amet dui tellus.Mauris euismod augue ipsum,
non pretium augue vestibulum in.Maecenas turpis velit, ullamcorper vel eros sit amet, varius vestibulum odio.
Fusce tempor libero a magna consectetur pretium in id.
</p>
<a href="#">Lorem Ipsum</a>
</smart-card>
<smart-card>
<img src="../../../images/carousel-small-6.jpg" style="width:100%;"/>
<h3>Nunc arcu lectus</h3>
<p>
Etiam varius ultrices mauris a iaculis.Duis mauris mi, viverra sodales ex sit amet, consectetur malesuada
mauris.Nunc arcu lectus, bibendum nec luctus a, elementum in odio.Vestibulum a tempus ipsum.Duis condimentum
interdum diam, ac accumsan ipsum gravida et.
</p>
<a href="#">Lorem Ipsum</a>
</smart-card>`
        },
        {
          HTMLcontent: `<smart-card>
<img src="../../../images/carousel-small-7.jpg" style="width:100%;"/>
<h3>Nulla mollis velit</h3>
<p>
Nulla ut cursus leo.Nullam ac tellus porta, laoreet est in, condimentum velit.Suspendisse efficitur mi
non tortor sollicitudin tincidunt ut at quam.Nullam nisi nibh, viverra ut hendrerit euismod, pharetra
id ante.Suspendisse malesuada, libero a dignissim convallis.
</p>
<a href="#">Lorem Ipsum</a>
</smart-card>
<smart-card>
<img src="../../../images/carousel-small-8.jpg" style="width:100%;"/>
<h3>Aenean ullamcorper</h3>
<p>
Enean ullamcorper varius sagittis.Proin vehicula, sapien bibendum consectetur ornare, lacus velit posuere
lacus, at varius sem metus bibendum dolor.Cras egestas mollis dignissim.Vestibulum faucibus, sapien eu tincidunt
viverra, arcu massa elementum ligula, nec ultrices justo.
</p>
<a href="#">Lorem Ipsum</a>
</smart-card>
<smart-card>
<img src="../../../images/carousel-small-9.jpg" style="width:100%;"/>
<h3>Vestibulum faucibus</h3>
<p>
Sed condimentum felis ac faucibus cursus.Pellentesque ut vestibulum massa.Aenean a facilisis justo.Nulla
facilisi.Suspendisse pharetra augue lacus, ac tempor tortor elementum fermentum.Pellentesque aliquam.
Duis condimentum dolor id pharetra consequat.
</p>
<a href="#">Lorem Ipsum</a>
</smart-card>`
        }
      ];
    });
  }
};
</script>

<style>
smart-carousel {
  width: 1000px;
  height: 500px;
  border-color: transparent;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

smart-carousel:focus,
smart-carousel:active {
  border-color: transparent;
}

smart-carousel .smart-carousel-html-content {
  padding-left: 35px;
  padding-right: 20px;
}

smart-card {
  height: 450px;
}

smart-card h3,
smart-card p,
smart-card a {
  margin-left: 10px;
  margin-right: 10px;
}

smart-card h3 {
  font-size: 20px;
}

html,
body {
  height: 100%;
  overflow: hidden;
}
@media only screen and (max-width: 800px) {
  smart-carousel {
    overflow: auto;
    width: 100%;
    height: 100%;
  }
  smart-carousel .smart-indicator {
    width: 30px;
    height: 30px;
  }
  smart-carousel .smart-indicator img {
    width: 30px;
    height: 30px;
  }

  smart-carousel .smart-carousel-item {
    width: 100%;
  }

  smart-card {
    height: 100%;
  }
}

@media only screen and (max-width: 500px) {
  smart-carousel {
    width: 300px;
  }
}
</style>
