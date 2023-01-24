<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <section id="list-menu">
        <h2>List menu</h2>
        <p>
          A list menu represents an element which can be used to choose an option
          from a nested list of items. Navigation through the nested list is done
          in a single view.
        </p>
        <div class="module">
          <div id="listMenu1Container">
            <smart-list-menu
              id="listMenu1"
              filterable
              grouped
              overflow="hidden"
              filter-mode="contains"
              enable-mouse-wheel-action
            >
              <smart-menu-items-group>
                Janet Leverling
                <smart-menu-item label="janetInfo"></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                Andrew Fuller
                <smart-menu-item label="andrewInfo"></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                Robert King
                <smart-menu-item label="robertInfo"></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                Anne Dodsworth
                <smart-menu-item label="anneInfo"></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                Margaret Peacock
                <smart-menu-item label="margaretInfo"></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                Michael Suyama
                <smart-menu-item label="michaelInfo"></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                Nancy Davolio
                <smart-menu-item label="nancyInfo"></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                Steven Buchanan
                <smart-menu-item label="stevenInfo"></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                Laura Callahan
                <smart-menu-item label="lauraInfo"></smart-menu-item>
              </smart-menu-items-group>
            </smart-list-menu>
          </div>
        </div>
        <div class="module">
          <div id="listMenu3Container">
            <smart-list-menu id="listMenu3" overflow="hidden" enable-mouse-wheel-action>
              <smart-menu-items-group>
                <i class="material-icons">&#xE53F;</i> Attractions
                <smart-menu-item>Movies</smart-menu-item>
                <smart-menu-item>Circus</smart-menu-item>
                <smart-menu-item>Concerts</smart-menu-item>
                <smart-menu-item>Monuments</smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                <i class="material-icons">&#xE56C;</i> Dining
                <smart-menu-item>Restaurants</smart-menu-item>
                <smart-menu-item>Cafés</smart-menu-item>
                <smart-menu-item>Bars</smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                <i class="material-icons">&#xE80C;</i> Education
                <smart-menu-item>Schools</smart-menu-item>
                <smart-menu-item>Colleges</smart-menu-item>
                <smart-menu-item>Universities</smart-menu-item>
                <smart-menu-item>Educational courses</smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                <i class="material-icons">&#xEB41;</i> Family
                <smart-menu-item>Babysitting</smart-menu-item>
                <smart-menu-item>Family trips</smart-menu-item>
                <smart-menu-item>Theme parks</smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                <i class="material-icons">&#xE87D;</i> Health
                <smart-menu-item>Hospitals</smart-menu-item>
                <smart-menu-item>Family physicians</smart-menu-item>
                <smart-menu-item>Optics</smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                <i class="material-icons">&#xE30A;</i> Office
                <smart-menu-item>Offices for rent</smart-menu-item>
                <smart-menu-item>Office equipment</smart-menu-item>
                <smart-menu-item>Repair works</smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                <i class="material-icons">&#xE25C;</i> Promotions
                <smart-menu-item>Sales</smart-menu-item>
                <smart-menu-item>Malls</smart-menu-item>
                <smart-menu-item>Collective buying</smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                <i class="material-icons">&#xE03E;</i> Radio
                <smart-menu-item>Available stations</smart-menu-item>
                <smart-menu-item>Search</smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                <i class="material-icons">&#xE7E9;</i> Recipes
                <smart-menu-item>With meat</smart-menu-item>
                <smart-menu-item>With fish</smart-menu-item>
                <smart-menu-item>Vegetarian recipes</smart-menu-item>
                <smart-menu-item>Vegan recipes</smart-menu-item>
                <smart-menu-item>Desserts</smart-menu-item>
                <smart-menu-item>Chef's recommendations</smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                <i class="material-icons">&#xE52F;</i> Sports
                <smart-menu-item>Football</smart-menu-item>
                <smart-menu-item>Basketball</smart-menu-item>
                <smart-menu-item>Tennis</smart-menu-item>
                <smart-menu-item>Baseball</smart-menu-item>
                <smart-menu-item>Cycling</smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group>
                <i class="material-icons">&#xE53D;</i> Travel
                <smart-menu-item>Local destinations</smart-menu-item>
                <smart-menu-item>Book tickets</smart-menu-item>
                <smart-menu-item>Organised travel</smart-menu-item>
              </smart-menu-items-group>
            </smart-list-menu>
          </div>
        </div>
        <div class="module">
          <div id="listMenu4Container">
            <smart-list-menu id="listMenu4" overflow="hidden" enable-mouse-wheel-action>
              <smart-menu-items-group label="mail1Preview" separator>
                <smart-menu-item label="mail1"></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group label="mail2Preview" separator>
                <smart-menu-item label="mail2"></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group label="mail3Preview" separator>
                <smart-menu-item label="mail3"></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group label="mail4Preview" separator>
                <smart-menu-item label="mail4"></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group label="mail5Preview" separator>
                <smart-menu-item label="mail5"></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group label="mail6Preview" separator>
                <smart-menu-item label="mail6"></smart-menu-item>
              </smart-menu-items-group>
              <smart-menu-items-group label="mail7Preview" separator>
                <smart-menu-item label="mail7"></smart-menu-item>
              </smart-menu-items-group>
            </smart-list-menu>
            <smart-button id="plusButton" class="primary floating">+</smart-button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.listmenu.js";
import "smart-webcomponents/source/modules/smart.menu.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const andrewInfo = document.createElement("template");
      andrewInfo.id = "andrewInfo";
      andrewInfo.innerHTML = `<table>
        <tr>
          <td>
            <img style="width: 50px; height: 50px;" src="../../../images/phonebook/andrew.png" alt />
          </td>
          <td>
            <b>Andrew Fuller</b>
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td>Sales Representative</td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>
            Andrew received his BTS commercial in 1974 and a Ph.D. in international
            marketing from the University of Dallas in 1981. He is fluent in French
            and Italian and reads German. He joined the company as a sales representative,
            was promoted to sales manager in January 1992 and to vice president of
            sales in March 1993. Andrew is a member of the Sales Management Roundtable,
            the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.
          </td>
        </tr>
        <tr>
          <td>Birth Date</td>
          <td>19-Feb-52</td>
        </tr>
        <tr>
          <td>Hire Date</td>
          <td>14-Aug-92</td>
        </tr>
        <tr>
          <td>Home Phone</td>
          <td>(206) 555-9482</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>908 W. Capital Way.</td>
        </tr>
        <tr>
          <td>Postal Code</td>
          <td>98401</td>
        </tr>
        <tr>
          <td>City</td>
          <td>Tacoma</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>USA</td>
        </tr>
      </table>`;
      document.body.appendChild(andrewInfo);

      const anneInfo = document.createElement("template");
      anneInfo.id = "anneInfo";
      anneInfo.innerHTML = `<table>
        <tr>
          <td>
            <img style="width: 50px; height: 50px;" src="../../../images/phonebook/anne.png" alt />
          </td>
          <td>
            <b>Anne Dodsworth</b>
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td>Inside Sales Coordinator</td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>
            Anne has a BA degree in English from St. Lawrence College. She is fluent
            in French and German.
          </td>
        </tr>
        <tr>
          <td>Birth Date</td>
          <td>27-Jan-66</td>
        </tr>
        <tr>
          <td>Hire Date</td>
          <td>15-Nov-94</td>
        </tr>
        <tr>
          <td>Home Phone</td>
          <td>(71) 555-5598</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>7 Houndstooth Rd.</td>
        </tr>
        <tr>
          <td>Postal Code</td>
          <td>WG2 7LT</td>
        </tr>
        <tr>
          <td>City</td>
          <td>London</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>UK</td>
        </tr>
      </table>`;
      document.body.appendChild(anneInfo);

      const janetInfo = document.createElement("template");
      janetInfo.id = "janetInfo";
      janetInfo.innerHTML = `<table>
        <tr>
          <td>
            <img style="width: 50px; height: 50px;" src="../../../images/phonebook/janet.png" alt />
          </td>
          <td>
            <b>Janet Leverling</b>
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td>Sales Representative</td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>
            Janet has a BS degree in chemistry from Boston College (1984). She has
            also completed a certificate program in food retailing management. Janet
            was hired as a sales associate in 1991 and promoted to sales representative
            in February 1992.
          </td>
        </tr>
        <tr>
          <td>Birth Date</td>
          <td>27-Jan-69</td>
        </tr>
        <tr>
          <td>Hire Date</td>
          <td>15-Nov-94</td>
        </tr>
        <tr>
          <td>Home Phone</td>
          <td>(71) 555-4444</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>Miner Rd.</td>
        </tr>
        <tr>
          <td>Postal Code</td>
          <td>WG2 7LT</td>
        </tr>
        <tr>
          <td>City</td>
          <td>London</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>UK</td>
        </tr>
      </table>`;
      document.body.appendChild(janetInfo);

      const lauraInfo = document.createElement("template");
      lauraInfo.id = "lauraInfo";
      lauraInfo.innerHTML = `<table>
        <tr>
          <td>
            <img style="width: 50px; height: 50px;" src="../../../images/phonebook/laura.png" alt />
          </td>
          <td>
            <b>Laura Callahan</b>
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td>Sales Representative</td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>
            Laura received a BA in psychology from the University of Washington. She
            has also completed a course in business French. She reads and writes French.
          </td>
        </tr>
        <tr>
          <td>Birth Date</td>
          <td>27-Jan-66</td>
        </tr>
        <tr>
          <td>Hire Date</td>
          <td>15-Nov-94</td>
        </tr>
        <tr>
          <td>Home Phone</td>
          <td>(71) 555-4444</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>7 Houndstooth Rd.</td>
        </tr>
        <tr>
          <td>Postal Code</td>
          <td>WG2 7LT</td>
        </tr>
        <tr>
          <td>City</td>
          <td>London</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>UK</td>
        </tr>
      </table>`;
      document.body.appendChild(lauraInfo);

      const margaretInfo = document.createElement("template");
      margaretInfo.id = "margaretInfo";
      margaretInfo.innerHTML = `<table>
        <tr>
          <td>
            <img
              style="width: 50px; height: 50px;"
              src="../../../images/phonebook/margaret.png"
              alt
            />
          </td>
          <td>
            <b>Margaret Peacock</b>
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td>Vice President, Sales</td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>
            Margaret holds a BA in English literature from Concordia College (1958)
            and an MA from the American Institute of Culinary Arts (1966). She was
            assigned to the London office temporarily from July through November 1992.
          </td>
        </tr>
        <tr>
          <td>Birth Date</td>
          <td>19-Sep-37</td>
        </tr>
        <tr>
          <td>Hire Date</td>
          <td>17-Oct-93</td>
        </tr>
        <tr>
          <td>Home Phone</td>
          <td>(206) 555-8122</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>4110 Old Redmond Rd.</td>
        </tr>
        <tr>
          <td>Postal Code</td>
          <td>98052</td>
        </tr>
        <tr>
          <td>City</td>
          <td>Redmond</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>USA</td>
        </tr>
      </table>`;
      document.body.appendChild(margaretInfo);

      const michaelInfo = document.createElement("template");
      michaelInfo.id = "michaelInfo";
      michaelInfo.innerHTML = `<table>
        <tr>
          <td>
            <img style="width: 50px; height: 50px;" src="../../../images/phonebook/michael.png" alt />
          </td>
          <td>
            <b>Michael Suyama</b>
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td>Sales Representative</td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>
            Michael is a graduate of Sussex University (MA, economics, 1983) and the
            University of California at Los Angeles (MBA, marketing, 1986). He has
            also taken the courses 'Multi-Cultural Selling' and 'Time Management for
            the Sales Professional.' He is fluent in Japanese and can read and write
            French, Portuguese, and Spanish.
          </td>
        </tr>
        <tr>
          <td>Birth Date</td>
          <td>02-Jul-63</td>
        </tr>
        <tr>
          <td>Hire Date</td>
          <td>05-June-96</td>
        </tr>
        <tr>
          <td>Home Phone</td>
          <td>(71) 555-4848</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>Coventry House</td>
        </tr>
        <tr>
          <td>Postal Code</td>
          <td>EC2 7JR</td>
        </tr>
        <tr>
          <td>City</td>
          <td>London</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>UK</td>
        </tr>
      </table>`;
      document.body.appendChild(michaelInfo);

      const nancyInfo = document.createElement("template");
      nancyInfo.id = "nancyInfo";
      nancyInfo.innerHTML = `<table>
        <tr>
          <td>
            <img style="width: 50px; height: 50px;" src="../../../images/phonebook/nancy.png" alt />
          </td>
          <td>
            <b>Nancy Davolio</b>
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td>Sales Representative</td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>
            Education includes a BA in psychology from Colorado State University in
            1970. She also completed 'The Art of the Cold Call.' Nancy is a member
            of Toastmasters International.
          </td>
        </tr>
        <tr>
          <td>Birth Date</td>
          <td>08-Dec-48</td>
        </tr>
        <tr>
          <td>Hire Date</td>
          <td>01-May-92</td>
        </tr>
        <tr>
          <td>Home Phone</td>
          <td>(206) 555-9857</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>507 - 20th Ave. E. Apt. 2A</td>
        </tr>
        <tr>
          <td>Postal Code</td>
          <td>98122</td>
        </tr>
        <tr>
          <td>City</td>
          <td>Seattle</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>USA</td>
        </tr>
      </table>`;
      document.body.appendChild(nancyInfo);

      const robertInfo = document.createElement("template");
      robertInfo.id = "robertInfo";
      robertInfo.innerHTML = `<table>
        <tr>
          <td>
            <img style="width: 50px; height: 50px;" src="../../../images/phonebook/robert.png" alt />
          </td>
          <td>
            <b>Robert King</b>
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td>Sales Representative</td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>
            Robert King served in the Peace Corps and traveled extensively before
            completing his degree in English at the University of Michigan in 1992,
            the year he joined the company. After completing a course entitled 'Selling
            in Europe,' he was transferred to the London office in March 1993.
          </td>
        </tr>
        <tr>
          <td>Birth Date</td>
          <td>29-May-60</td>
        </tr>
        <tr>
          <td>Hire Date</td>
          <td>02-Jan-94</td>
        </tr>
        <tr>
          <td>Home Phone</td>
          <td>(71) 555-5598</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>Winchester Way</td>
        </tr>
        <tr>
          <td>Postal Code</td>
          <td>RG1 9SP</td>
        </tr>
        <tr>
          <td>City</td>
          <td>London</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>UK</td>
        </tr>
      </table>`;
      document.body.appendChild(robertInfo);

      const stevenInfo = document.createElement("template");
      stevenInfo.id = "stevenInfo";
      stevenInfo.innerHTML = ` <table>
        <tr>
          <td>
            <img style="width: 50px; height: 50px;" src="../../../images/phonebook/steven.png" alt />
          </td>
          <td>
            <b>Steven Buchanan</b>
          </td>
        </tr>
        <tr>
          <td>Title</td>
          <td>Sales Manager</td>
        </tr>
        <tr>
          <td>Notes</td>
          <td>
            Steven Buchanan graduated from St. Andrews University, Scotland, with
            a BSC degree in 1976. Upon joining the company as a sales representative
            in 1992, he spent 6 months in an orientation program at the Seattle office
            and then returned to his permanent post in London. He was promoted to sales
            manager in March 1993. Mr. Buchanan has completed the courses 'Successful
            Telemarketing' and 'International Sales Management.' He is fluent in French.
          </td>
        </tr>
        <tr>
          <td>Birth Date</td>
          <td>04-Mar-55</td>
        </tr>
        <tr>
          <td>Hire Date</td>
          <td>02-May-94</td>
        </tr>
        <tr>
          <td>Home Phone</td>
          <td>(71) 555-5598</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>908 W. Capital Way</td>
        </tr>
        <tr>
          <td>Postal Code</td>
          <td>98052</td>
        </tr>
        <tr>
          <td>City</td>
          <td>Redmond</td>
        </tr>
        <tr>
          <td>Country</td>
          <td>USA</td>
        </tr>
      </table>`;
      document.body.appendChild(stevenInfo);

      const mail1Preview = document.createElement("template");
      mail1Preview.id = "mail1Preview";
      mail1Preview.innerHTML = `{{title="Ken (ken.cerez@pmail.com)"}}
        <div>
          <table>
            <tr>
              <td class="mail-name">Ken</td>
              <td class="mail-time">15 min</td>
            </tr>
            <tr>
              <td class="mail-title">Appointment</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div
                  class="mail-preview"
                >Hi, I just wanted to remind you dinner is at 8pm tonight at Carl's.</div>
              </td>
              <td>
                <i class="material-icons empty">&#xE83A;</i>
              </td>
            </tr>
          </table>
        </div>`;
      document.body.appendChild(mail1Preview);

      const mail1 = document.createElement("template");
      mail1.id = "mail1";
      mail1.innerHTML = `<h2>Appointment</h2>
        <p class="mail-time">15 min</p>
        <p>Hi,</p>
        <p>I just wanted to remind you dinner is at 8pm tonight at Carl's.</p>`;
      document.body.appendChild(mail1);

      const mail2Preview = document.createElement("template");
      mail2Preview.id = "mail2Preview";
      mail2Preview.innerHTML = ` {{title="Sue (sue78@pmail.com)"}}
        <div>
          <table>
            <tr>
              <td class="mail-name">Sue</td>
              <td class="mail-time">2 hr</td>
            </tr>
            <tr>
              <td class="mail-title">Shopping</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div class="mail-preview">Here's the shopping list for tommorow's party:</div>
              </td>
              <td>
                <i class="material-icons">&#xE838;</i>
              </td>
            </tr>
          </table>
        </div>`;
      document.body.appendChild(mail2Preview);

      const mail2 = document.createElement("template");
      mail2.id = "mail2";
      mail2.innerHTML = `<h2>Shopping</h2>
        <p class="mail-time">2 hr</p>
        <p>Here's the shopping list for tommorow's party:</p>
        <ul>
          <li>Wine</li>
          <li>Tomatoes</li>
          <li>Cheese</li>
          <li>Popcorn</li>
        </ul>`;
      document.body.appendChild(mail2);

      const mail3Preview = document.createElement("template");
      mail3Preview.id = "mail3Preview";
      mail3Preview.innerHTML = `{{title="University of Madrid (info@uni.com)"}}
        <div>
          <table>
            <tr>
              <td class="mail-name">University of Madrid</td>
              <td class="mail-time">9/1/17</td>
            </tr>
            <tr>
              <td class="mail-title">Re: Exam</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div
                  class="mail-preview"
                >Dear student, Attached you can find the result of your exam.</div>
              </td>
              <td>
                <i class="material-icons empty">&#xE83A;</i>
              </td>
            </tr>
          </table>
        </div>`;
      document.body.appendChild(mail3Preview);

      const mail3 = document.createElement("template");
      mail3.id = "mail3";
      mail3.innerHTML = `<h2>Re: Exam</h2>
        <p class="mail-time">9/1/17</p>
        <p>Dear student,</p>
        <p>Attached you can find the result of your exam.</p>
        <p>
          University of Madrid
          <br />Av. Séneca, 2, 28040 Madrid, Spain
        </p>`;
      document.body.appendChild(mail3);

      const mail4Preview = document.createElement("template");
      mail4Preview.id = "mail4Preview";
      mail4Preview.innerHTML = `{{title="Meghan (meggie@pmail.com)"}}
        <div>
          <table>
            <tr>
              <td class="mail-name">Meghan</td>
              <td class="mail-time">8/16/17</td>
            </tr>
            <tr>
              <td class="mail-title">Dinner tonight?</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div class="mail-preview">Hi, how about a dinner at my parents' tonight?</div>
              </td>
              <td>
                <i class="material-icons empty">&#xE83A;</i>
              </td>
            </tr>
          </table>
        </div>`;
      document.body.appendChild(mail4Preview);

      const mail4 = document.createElement("template");
      mail4.id = "mail4";
      mail4.innerHTML = `<h2>Dinner tonight?</h2>
        <p class="mail-time">8/16/17</p>
        <p>Hi,</p>
        <p>how about a dinner at my parents' tonight?</p>`;
      document.body.appendChild(mail4);

      const mail5Preview = document.createElement("template");
      mail5Preview.id = "mail5Preview";
      mail5Preview.innerHTML = `{{title="Titus LDT (info@titus-ldt.com)"}}
        <div>
          <table>
            <tr>
              <td class="mail-name">Titus LDT</td>
              <td class="mail-time">7/11/17</td>
            </tr>
            <tr>
              <td class="mail-title">About the interview</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div class="mail-preview">
                  Hello, We are writing to inform you that your application has been shortlisted
                  and would like to invite you to a second interview in our office.
                </div>
              </td>
              <td>
                <i class="material-icons">&#xE838;</i>
              </td>
            </tr>
          </table>
        </div>`;
      document.body.appendChild(mail5Preview);

      const mail5 = document.createElement("template");
      mail5.id = "mail5";
      mail5.innerHTML = `<h2>About the interview</h2>
        <p class="mail-time">7/11/17</p>
        <p>Hello,</p>
        <p>
          We are writing to inform you that your application has been shortlisted
          and would like to invite you to a second interview in our office.
        </p>
        <p>
          Sincerely,
          <br />The Titus Team
        </p>`;
      document.body.appendChild(mail5);

      const mail6Preview = document.createElement("template");
      mail6Preview.id = "mail6Preview";
      mail6Preview.innerHTML = `{{title="QuickShare (info@quickshare.com)"}}
        <div>
          <table>
            <tr>
              <td class="mail-name">QuickShare</td>
              <td class="mail-time">5/30/17</td>
            </tr>
            <tr>
              <td class="mail-title">Important update</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div class="mail-preview">Dear user, Our terms of service have changed.</div>
              </td>
              <td>
                <i class="material-icons empty">&#xE83A;</i>
              </td>
            </tr>
          </table>
        </div>`;
      document.body.appendChild(mail6Preview);

      const mail6 = document.createElement("template");
      mail6.id = "mail6";
      mail6.innerHTML = ` <h2>Important update</h2>
        <p class="mail-time">5/30/17</p>
        <p>Dear user,</p>
        <p>Our terms of service have changed. Please find attached the updated document.</p>`;
      document.body.appendChild(mail6);

      const mail7Preview = document.createElement("template");
      mail7Preview.id = "mail7Preview";
      mail7Preview.innerHTML = ` {{title="QuickShare (info@quickshare.com)"}}
        <div>
          <table>
            <tr>
              <td class="mail-name">QuickShare</td>
              <td class="mail-time">5/28/17</td>
            </tr>
            <tr>
              <td class="mail-title">Welcome to our forums</td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div class="mail-preview">Dear user, Welcome to the QuickShare forums.</div>
              </td>
              <td>
                <i class="material-icons empty">&#xE83A;</i>
              </td>
            </tr>
          </table>
        </div>`;
      document.body.appendChild(mail7Preview);

      const mail7 = document.createElement("template");
      mail7.id = "mail7";
      mail7.innerHTML = `<h2>Welcome to our forums</h2>
        <p class="mail-time">5/28/17</p>
        <p>Dear user,</p>
        <p>Welcome to the QuickShare forums.</p>`;
      document.body.appendChild(mail7);

      let stars = document.querySelectorAll("#listMenu4 .material-icons");
      for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener("click", function(event) {
          event.stopPropagation();
          if (this.classList.contains("empty")) {
            this.innerHTML = "&#xE838;";
            this.classList.remove("empty");
          } else {
            this.innerHTML = "&#xE83A;";
            this.classList.add("empty");
          }
        });
      }
    });
  }
};
</script>

<style>
/* ------------ Google fonts ------------ */

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
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
  margin-right: 10px;
}
.smart-menu-item-label-element .material-icons {
  position: relative;
  top: 6px;
}

#listMenu4 td {
  padding: 0;
}
/* ------------ */

#overviewHeading,
#usageHeading {
  border-top: none !important;
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
  height: auto;
  display: inline-block;
  font: inherit;
  margin-right: 40px;
  min-width: 355px;
  vertical-align: top;
  position: relative;
}

.smart-demo-container .raised-demo-start {
  background-image: url(https://htmlelements.com/demos/images/raised-button-demo.png);
}

section .light-theme {
  background-color: #eeeeee;
  padding: 120px 60px 120px 60px;
}

section .dark-theme {
  background-color: #333333;
  padding: 120px 60px 120px 60px;
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

.module > div:nth-child(odd) {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 360px;
  height: 640px;
  background-size: 100%;
  position: relative;
}

/* current demo-specific styles */
.module-wide {
  width: calc(100% / 2);
}

#menu1Container,
#menu2Container,
#menu2,
#menu4,
#listMenu1Container,
#listMenu1,
#listMenu2Container,
#listMenu2,
#listMenu3Container,
#listMenu3,
#listMenu4 {
  position: relative;
}

#menu5,
smart-button.material.menu-token {
  position: absolute;
}

#menu1Container {
  background-image: url(https://htmlelements.com/demos/images/components-menus-usage1.png);
}

smart-button.material.menu-token {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
}

smart-button.material.menu-token:not(#menu1Token):not(#menu7Token) {
  right: 15px;
}

smart-button.material.menu-token:nth-of-type(1) {
  top: 248px;
}

smart-button.material.menu-token:nth-of-type(2) {
  top: 312px;
}

smart-button.material.menu-token:nth-of-type(3) {
  top: 376px;
}

smart-button.material.menu-token:nth-of-type(4) {
  top: 440px;
}

smart-button.material.menu-token:nth-of-type(5) {
  top: 504px;
}

smart-button.material.menu-token:nth-of-type(6) {
  top: 568px;
}

smart-button.material.menu-token > button {
  padding: 3px;
}

#menu1Token,
#menu7Token {
  left: 322px;
  top: 36px;
}

#menu1Token > button:not(.hover),
#menu7Token > button:not(.hover) {
  color: white;
}

#menu1,
#menu3,
#menu7 {
  height: auto;
  transform-origin: 100% 0;
}

#menu2Container {
  background-image: url(https://htmlelements.com/demos/images/components-menus-usage3do.png);
  width: 743px;
  height: 434px;
}

#menu2 {
  top: 85px;
  left: 71px;
}

#menu3Container {
  height: 621px;
  background-image: url(https://htmlelements.com/demos/images/components-menus-usage4a.png);
}

#menu-items .vertical-menu-container,
#tree-menu .vertical-menu-container {
  width: 100%;
  background-color: #eeeeee;
}

#menu-items .vertical-menu-container {
  height: 800px;
}

#tree-menu .vertical-menu-container {
  padding: 50px;
  height: 400px;
}

#menu4,
#menu5,
#menu6 {
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14),
    0 1px 10px 0 rgba(0, 0, 0, 0.12);
}

#menu4 {
  top: 50px;
  left: 50px;
}

#menu5 {
  bottom: 50px;
  right: 50px;
}

#menu6 {
  width: 300px;
  height: 300px;
}

#listMenu1Container {
  background-image: url(https://htmlelements.com/demos/images/components-menus-usage2.png);
}

#listMenu1,
#listMenu2,
#listMenu3,
#listMenu4 {
  --smart-list-menu-filter-input-size: 40px;
  top: 80px;
  width: 360px;
  height: 512px;
}

#listMenu2Container {
  background-image: url(https://htmlelements.com/demos/images/components-menus-usage3.png);
}

#listMenu3Container {
  background-image: url(https://htmlelements.com/demos/images/components-listcontrols-expand1.png);
}

#listMenu4Container {
  background-image: url(https://htmlelements.com/demos/images/components-listcontrols-leave1.png);
}

#listMenu4 {
  height: 560px;
}

#plusButton {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

#plusButton > button {
  background-color: inherit;
}

button > i.material-icons {
  margin-left: 9px;
}

#listMenu4 .mail-name,
#listMenu4 .mail-title {
  font-weight: bold;
}

#listMenu4 .mail-name {
  font-size: medium;
}

#listMenu4 .mail-title {
  width: 180px;
}

#listMenu4 .mail-time {
  font-size: small;
}

#listMenu4 .mail-preview {
  width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#listMenu4 i.material-icons {
  margin: 0;
  display: flex;
  justify-content: center;
  width: 50px;
}

table {
  white-space: initial;
}
</style>
