<template>
  <div class="vue-root">
    <smart-list-menu id="listMenu" filterable grouped>
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
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
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
    });
  }
};
</script>

<style>
#listMenu {
  --smart-list-menu-filter-input-size: 40px;
  height: 550px;
}

table {
  white-space: initial;
}
</style>
