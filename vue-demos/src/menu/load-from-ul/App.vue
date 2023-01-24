<template>
  <div class="vue-root">
    <smart-menu id="menu">
      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          Solutions
          <ul>
            <li>
              <a href="#Education">Education</a>
            </li>
            <li>
              <a href="#Financial">Financial services</a>
            </li>
            <li>
              <a href="#Government">Government</a>
            </li>
            <li>
              <a href="#Manufacturing">Manufacturing</a>
            </li>
            <li>
              Software Solutions
              <ul>
                <li>
                  <a href="#ConsumerPhoto">Consumer photo and video</a>
                </li>
                <li>
                  <a href="#Mobile">Mobile</a>
                </li>
                <li>
                  <a href="#RIA">Rich Internet applications</a>
                </li>
                <li>
                  <a href="#TechnicalCommunication">Technical communication</a>
                </li>
                <li>
                  <a href="#Training">Training and eLearning</a>
                </li>
                <li>
                  <a href="#WebConferencing">Web conferencing</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">All industries and solutions</a>
            </li>
          </ul>
        </li>
        <li>
          Products
          <ul>
            <li>
              <a href="#PCProducts">PC products</a>
            </li>
            <li>
              <a href="#MobileProducts">Mobile products</a>
            </li>
            <li>
              <a href="#AllProducts">All products</a>
            </li>
          </ul>
        </li>
        <li>
          Support
          <ul>
            <li>
              <a href="#SupportHome">Support home</a>
            </li>
            <li>
              <a href="#CustomerService">Customer Service</a>
            </li>
            <li>
              <a href="#KB">Knowledge base</a>
            </li>
            <li>
              <a href="#Books">Books</a>
            </li>
            <li>
              <a href="#Training">Training and certification</a>
            </li>
            <li>
              <a href="#SupportPrograms">Support programs</a>
            </li>
            <li>
              <a href="#Forums">Forums</a>
            </li>
            <li>
              <a href="#Documentation">Documentation</a>
            </li>
            <li>
              <a href="#Updates">Updates</a>
            </li>
          </ul>
        </li>
        <li>
          Communities
          <ul>
            <li>
              <a href="#Designers">Designers</a>
            </li>
            <li>
              <a href="#Developers">Developers</a>
            </li>
            <li>
              <a href="#Educators">Educators and students</a>
            </li>
            <li>
              <a href="#Partners">Partners</a>
            </li>
            <li>
              By resource
              <ul>
                <li>
                  <a href="#Labs">Labs</a>
                </li>
                <li>
                  <a href="#TV">TV</a>
                </li>
                <li>
                  <a href="#Forums">Forums</a>
                </li>
                <li>
                  <a href="#Exchange">Exchange</a>
                </li>
                <li>
                  <a href="#Blogs">Blogs</a>
                </li>
                <li>
                  <a href="#Experience Design">Experience Design</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Company
          <ul>
            <li>
              <a href="#About">About Us</a>
            </li>
            <li>
              <a href="#Press">Press</a>
            </li>
            <li>
              <a href="#Investor">Investor Relations</a>
            </li>
            <li>
              <a href="#CorporateAffairs">Corporate Affairs</a>
            </li>
            <li>
              <a href="#Careers">Careers</a>
            </li>
            <li>
              <a href="#Showcase">Showcase</a>
            </li>
            <li>
              <a href="#Events">Events</a>
            </li>
            <li>
              <a href="#ContactUs">Contact Us</a>
            </li>
            <li>
              <a href="#Become an affiliate">Become an affiliate</a>
            </li>
          </ul>
        </li>
      </ul>
    </smart-menu>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.menu.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
#menu {
  width: 700px;
}
</style>
