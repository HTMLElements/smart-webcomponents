<template>
  <div class="vue-root">
    <div id="container">
      <h2>Horizontal Splitter with a nested Vertical Splitter</h2>
      <smart-splitter orientation="horizontal" id="horizontalSplitter">
        <smart-splitter-item collapsible locked>
          <smart-list-box id="chooser">
            <smart-list-item>Water</smart-list-item>
            <smart-list-item>Soil</smart-list-item>
            <smart-list-item>Air</smart-list-item>
          </smart-list-box>
        </smart-splitter-item>
        <smart-splitter-item>
          <smart-splitter id="nestedVerticalSplitter">
            <smart-splitter-item id="contentHolder"></smart-splitter-item>
            <smart-splitter-item locked>
              <smart-circular-progress-bar
                id="progressHolder"
                show-progress-value
                class="animation"
              ></smart-circular-progress-bar>
            </smart-splitter-item>
          </smart-splitter>
        </smart-splitter-item>
      </smart-splitter>
    </div>
    <div id="container">
      <h2>Vertical Splitter</h2>
      <smart-splitter id="verticalSplitter">
        <smart-splitter-item collapsible>
          <smart-tabs id="tabs">
            <smart-tab-item label="New York">
              <p>
                Welcome to NYC. Planning a trip to the five boroughs can be part of the
                fun, but there&rsquo;s also a lot of ground to cover. Click the categories
                on the left-side navigation to find information about subjects that require
                in-depth looks, such as transportation and accessibility. Below, you&rsquo;ll
                find quick overviews on other essential things, like the City&rsquo;s layout,
                the local time zone and various visitor passes.
                <br />&nbsp;
              </p>
              <h3 class="section-header">Geography</h3>
              <p>
                New York City is composed of five boroughs. While Manhattan and Staten
                Island are islands, Brooklyn and Queens are geographically part of Long
                Island, and the Bronx is attached to the US mainland. The islands are linked
                by bridges, tunnels and ferries.
              </p>
              <p>
                Manhattan is roughly 13.4 miles long and about 2.3 miles wide at its widest.
                Except at its northern and southern tips, the borough&rsquo;s avenues run
                roughly north and south, and streets run east and west. One-way thoroughfares
                are common, with traffic moving east on even-numbered streets and west
                on odd-numbered streets. Fifth Avenue divides the island into east and
                west sides (for example, locations on 57th Street west of Fifth Avenue
                are designated &ldquo;W. 57th St.,&rdquo; and east of Fifth Avenue, they&rsquo;re
                &ldquo;E. 57th St.&rdquo;). As you move farther east or west from Fifth
                Avenue, street addresses increase, usually in increments of 100 from one
                block to the next. For north-south avenues, 20 blocks equals a mile, and
                the street numbers increase as you go uptown. Blocks can be a useful measure
                of distance, but keep in mind your direction: walking uptown from 1st Street
                to 6th Street is about a quarter of a mile, but walking the same number
                of blocks crosstown, from First Avenue to Sixth Avenue, is approximately
                a mile.
              </p>
              <h3 class="section-header">Time Zone</h3>
              <p>
                New York City is on Eastern Standard Time (Greenwich mean time minus four
                hours during daylight saving time, from about mid-March into early November,
                and minus five hours the rest of the year).
              </p>
              <h3 class="section-header">International Visitors and Arrivals from Abroad</h3>
              <p>
                <strong>Visas</strong>
                <br />Visitors to New York City from outside the United States may need a visa
                to enter the country. For details, visit the US Department of State&rsquo;s
                website.
              </p>
              <p>
                <strong>Trusted Traveler Programs</strong>
                <br />Fly through the lines at JFK, LGA and Newark. The Department of Homeland
                Security has introduced several programs that can help expedite security
                and customs screenings when traveling to and from the US, including New
                York City. The programs, customized based on travel needs and designed
                to enhance passenger experience, are available for US citizens and residents
                as well as those from certain foreign countries.
              </p>
              <p>
                <strong>US Customs and Border Protection</strong>
                <br />Recent improvements by US Customs and Border Protection have helped decrease
                wait times to enter the United States for both visitors and citizens coming
                from abroad. Among these are the Trusted Traveler Programs listed above,
                as well as self-service kiosks located in the international arrivals terminals
                at area airports and an app for smartphones and tablets.
              </p>
            </smart-tab-item>
            <smart-tab-item label="Hong Kong">
              <h3>Geography of Hong Kong</h3>
              <p>
                Records show that Hong Kong was controlled by China since the Tang Dynasty
                (618-907) and became an British's colony in 1842. On July 1st, 1997, Hong
                Kong was reunited with China. The official name of Hong Kong is the Hong
                Kong Special Administrative Region of the People's Republic of China (Hong
                Kong SAR).
              </p>
              <p>
                Today Hong Kong has many differences from the mainland China such as having
                different economic systems as well as political systems making it almost
                an independent "country" by itself. There are currently about seven million
                people living in the Hong Kong area making it one of the most densely populated
                cities in the world. (6,410 people per square kilometer)
              </p>
              <p>
                Hong Kong uses its own currency and has low taxes and has an excellent
                trading economy being the twelfth largest in the world. Part of this is
                due to its good Geographic location and easily accessible human labor.
              </p>
              <h3>Geography and Climate of Hong Kong</h3>
              <p>
                Hong Kong is located on the Southeast tip of the P.R.C some 1200km from
                Shanghai, the next largest city and nearly 2000km from the capital of Beijing.
              </p>
              <p>
                Hong Kong covers Hong Kong Island, Lantau Island, the Kowloon Peninsula
                and the New Territories, including 262 outlying islands. Between Hong Kong
                Island and the Kowloon Peninsula lies Victoria Harbour, one of the world's
                most renowned deep-water harbors.
              </p>
              <p>
                Summers in Hong Kong are hot and include frequent rainfalls while the
                winters are cold and dry. During the year, there is over 2,000mm of rainfall
                most of which occurs from the end of spring to the beginning of autumn.
              </p>
              <p>
                Average annual rainfall: 2,214.3 mm Wettest month: August Driest month:
                January Winter: January-March Summer: July-September
              </p>
            </smart-tab-item>
            <smart-tab-item label="Bali">
              <h3>Bali Indonesia</h3>
              <p>
                Also known as the Land of the Gods, Bali appeals through its sheer natural
                beauty of looming volcanoes and lush terraced rice fields that exude peace
                and serenity. Bali enchants with its dramatic dances and colourful ceremonies,
                its arts and crafts, to its luxurious beach resorts and exciting nightlife.
                And everywhere you will find intricately carved temples.
              </p>
              <p>
                There are are thousands of gift shops in Bali. From Denpasar to Ubud,
                you'll find many things you'd like to bring back home. Most of the starred
                hotels are located near the beach. Otherwise, they usually have their own
                private spots at certain beaches. You can find them easily at popular spots
                like Kuta or Sanur. If you are thinking of bringing home souvenirs, your
                best bet is the souvenir market at Sukowati, where you may be overwhelmed
                by choice. Kuta has a large variety of boutiques and shops, selling everything
                from bright T-shirts, surf- wear, flip-flops to creative trinkets. If you
                wish to buy dried food stuffs, Bali coffee is most aromatic. You may also
                want to buy aromatherapy essential oils to sprinkle your bath with. As
                Bali is located 8 degrees south of the equator, so the weather you will
                find is tropical, warm and humid climate all year around with two main
                distinctive seasons: Dry Season and Rainy Season. Quite different with
                the areas around Bali's central mountains (volcanoes) which have several
                peaks over 3,000 metres in elevation. Up here the temperatures are considerably
                cooler, and there is much more rainfall than in the coastal areas.
              </p>
              <h3>Popular Tourist Destination</h3>
              <p>
                Bali is a popular holiday destination and many people have heard of it,
                but there are people who still ask 'where is Bali?' Bali is an island of
                Indonesia and is situated 8 degrees from the equator, in the Java Sea.
                Bali's location is 4,555 km (2,830 miles) from Australia and is situated
                between Indonesia's islands of Lombok and Java. Bali is a province of Indonesia
                and is approximately 153km wide and 112km high with a total land area of
                approximately 5,780 square km (2,231 square miles). Denpasar is Bali's
                largest and capital city and is located in the south of Bali.
              </p>
              <p>
                Bali is located to the north of Australia, the south of Malaysia, the
                south east of Singapore and the south west of Indonesia. Bali has a population
                of approximately 4.22 million with the majority of people following the
                religion of Balinese Hinduism and the remainder following a mostly Islamic
                religion although there are also other religions observed on the island
                including Christianity. Bali's main ethnic groups include Balinese, Javanese,
                Madurese and Baliaga. Bali is Indonesia's largest and most popular tourist
                destination and continues to attract thousands of tourists each year with
                its highly developed art, culture and leisure scenes. The main regions
                of Bali include Ubud, Kuta, Seminyak, Legian, Nusa Dua and Sanur. Close
                to the centre of Bali, Ubud is considered the island's cultural hub while
                Kuta in the south is Bali's party destination. Seminyak is a southern coastal
                destination that is a major tourist hub, as is Legian a little further
                south. Nusa Dua is located on the south east coast and offers a high end
                atmosphere while Sanur boasts absolute peace and luxury just outside of
                Denpasar. With such a wealth of history, art, culture and spectacular natural
                attractions, the important question to ask is not 'where is Bali?' but
                rather, 'when can I go to Bali?'
              </p>
            </smart-tab-item>
          </smart-tabs>
        </smart-splitter-item>
        <smart-splitter-item id="tabsContentHolder">
          <div id="map-canvas-0"></div>
        </smart-splitter-item>
      </smart-splitter>
    </div>
    <div id="waterText">
      <h2>Water</h2>
      <p>
        The next time you open a can of soft drink, consider where the water inside
        it came from.The H20 in an Indian can of Coca- Cola includes treated rainwater,
        while the contents in the Maldives may once have been seawater.The water
        needs to come from such different sources for a reason – it’s because there
        is a global freshwater crisis. Given that 70% of the Earth’s surface is
        water, and that volume remains constant (at 1, 386, 000, 000 cubic kilometres),
        how is a water shortage even possible? Well, 97.5 % is seawater unfit for
        human consumption.And both populations and temperatures are ever- rising,
        meaning that the freshwater we do have is under severe pressure. Water
        demand globally is projected to increase by 55% between 2000 and 2050.
        Much of the demand is driven by agriculture, which accounts for 70% of
        global freshwater use, and food production will need to grow by 69% by
        2035 to feed the growing population.Water withdrawal for energy, used for
        cooling power stations, is also expected to increase by over 20%. In other
        words, the near future presents one big freshwater drain after the next.
        What’s more? Right now, according to a Nasa- led study, many of the world’s
        freshwater sources are being drained faster than they are being replenished.
      </p>
      <p>
        Of the world’s major aquifers (gravel and sand-filled underground reservoirs),
        21 out of 37 are receding, from India and China to the United States and
        France. The Ganges Basin in India is depleting, due to population and irrigation
        demands, by an estimated 6.31 centimetres every year. Jay Famiglietti,
        senior water scientist at Nasa, has warned that “the water table is dropping
        all over the world. There’s not an infinite supply of water.” Meanwhile,
        Mexico City, built on ancient lake beds, is now sinking in some areas at
        a rate of nine inches a year. As the city draws on the aquifer below, the
        effect is like drinking a milkshake through a straw. Once horizontal streets
        now undulate like BMX tracks. The city imports 40% of its water, and Ramón
        Aguirre Díaz, director of the Water System of Mexico City, has blamed “heavier,
        more intense rains, which mean more floods, but also more and longer droughts.”
        Much of the same is happening in California. From 2011 to 2016, the state
        suffered its worst drought in 1,200 years. Its major aquifers receded at
        a combined rate of 16 million acre-feet per year, and roughly 1,900 wells
        ran dry. Then, in the first three months of 2017, rain fell at 228% more
        than its normal level, thanks to climate change, scientists say. Lake Oroville
        in the northern part of the state swung from being at 41% of capacity to
        101% in just two months, causing dams to be overwhelmed and 188,000 local
        residents to be evacuated.
      </p>
    </div>
    <div id="soilText">
      <h2>Soil</h2>
      <p>
        Soil is a mixture of four main ingredients: weathered rock, organic matter,
        air, and water. The weathered rock can be in the form of sand, silt, clay,
        pebbles, or other size rocks. Organic matter can be anything from old leaves,
        dead animals and plants, or tiny living things. The last two ingredients
        in soil are from the nonliving world. These two ingredients are air and
        water. Without air and water, the tiny organisms found in soil cannot live,
        grow, and help dead matter to decay.
      </p>
      <h2>
        How is a soil formed?
        <a name="formed"></a>
      </h2>
      <p>
        Soil is formed in several ways. The break down, or weathering of rocks,
        is one way soil is formed. Water, wind, and ice also help to create soil.
        Earth materials are carried by water, wind, and ice and are eventually
        dropped in places where they settle and mix with other materials to become
        soil. But the key ingredient to the making of soil is the living and once-living
        things that are found in it. These living and dead organisms are called
        organic matter. They turn the sand, silt, and rock pieces into a mixture
        that is good for more life to live and grow.
      </p>
      <p>&nbsp;</p>
      <h2>
        What is a soil profile?
        <a name="profile"></a>
      </h2>
      <p>
        If you took a chunk of soil from the ground, say about a foot or two deep,
        you will see a change in the colors and texture as you go deeper into the
        ground. You might be able to see some of the same things shown in the soil
        profile below. Most soil has about four layers.
      </p>
      <p align="center">
        <img
          src="http://texturez.com/sites/default/files/imagecache/preview/textures/texturez_4722.jpg"
          width="291"
          height="349"
        />
      </p>
      <h2>
        <br />
      </h2>
      <h2>&nbsp;</h2>
      <h2>What are the four layers of soil like?</h2>
      <p>
        The top layer is called the organic layer. This layer is about an inch
        thick and takes from 100 to 600 years to form. Within this layer, living
        things carry on with their life activities. Also in this layer are millions
        of dead plant and animal organisms that are slowly decomposing, or rotting,
        away. As these once-living things decay, the organic layer becomes rich
        in nutrients. If you dig more than an inch or two deep, you might be past
        this layer already!
      </p>
      <p>
        Section A in the diagram above is called the upper soil layer. This is
        where you will find many plant roots, different types of fungus, and other
        very tiny living things. This soil is dark in color because there is are
        so many chemical reactions taking place as living things grow and die.
        A great deal of bacteria is found in this layer. The bacteria help make
        chemical reactions happen so that materials of the earth can be recycled.
        This layer is usually about a foot deep.
      </p>
      <p>
        Section B in the diagram above is the middle soil layer. It has less living
        and once-living things and less of the darker topsoil. The soil here has
        less air, too. Because of these characteristics, plants do not grow well
        here. You will find fewer roots and fewer signs of life. At about two to
        three feet deep, you are digging into the subsoil. Often, you might find
        signs of human activity in the upper soil layer and the subsoil. A broken
        piece of pottery, or an arrowhead may have been buried this deeply.
      </p>
      <p>
        The last layer in the diagram, section C, is lowest layer. In this layer
        you will find that the soil may have an orangish or yellowish color. It
        may be more sandy or have more gray clay. In this layer you will see that
        there are many pebbles and rocks. This layer has the least amount of living
        and once-living things. If you are digging a hole and you get more than
        two or three feet deep, your shovel may begin to hit many rocks. If this
        happens, then you are probably in the lowest soil layer. One important
        thing to know, though, is that this layer might still have a lot of water.
        It depends on how much water is in the environment from where the soil
        sample was taken.
      </p>
    </div>
    <div id="airText">
      <h2>Air</h2>
      <p>
        The Earth's atmosphere is an extremely thin sheet of air extending from
        the surface of the Earth to the edge of space. The Earth is a sphere with
        a roughly 8000 mile diameter; the thickness of the atmosphere is about
        60 miles. In this picture, taken from a spacecraft orbiting at 200 miles
        above the surface, we can see the atmosphere as the thin blue band between
        the surface and the blackness of space. If the Earth were the size of a
        basketball, the thickness of the atmosphere could be modeled by a thin
        sheet of plastic wrapped around the ball. Gravity holds the atmosphere
        to the Earth's surface. Within the atmosphere, very complex chemical, thermodynamic,
        and fluid dynamics effects occur. The atmosphere is not uniform; fluid
        properties are constantly changing with time and location. We call this
        change the weather. At any given location, the air properties also vary
        with the distance from the surface of the Earth. The sun heats the surface
        of the Earth, and some of this heat goes into warming the air near the
        surface. The heated air rises and spreads up through the atmosphere. So
        the air temperature is highest near the surface and decreases as altitude
        increases. The speed of sound depends on the temperature and also decreases
        with increasing altitude. The pressure of the air can be related to the
        weight of the air over a given location. As we increase altitude through
        the atmosphere, there is some air below us and some air above us. But there
        is always less air above us than was present at a lower altitude. Therefore,
        air pressure decreases as we increase altitude. The air density depends
        on both the temperature and the pressure through the equation of state
        and also decreases with increasing altitude. Aerodynamic forces depend
        on the air density. To help aircraft designers, it is useful to define
        a standard atmosphere model of the variation of properties through the
        atmosphere. The model was developed from atmospheric data that was taken
        by weather balloons released at the surface of the Earth and allowed to
        ascend through the atmosphere. The measurements were then averaged and
        curve fit to produce equations for the model. The model assumes that the
        pressure and temperature change only with altitude. There are actually
        several different models available--a standard or average day, a hot day,
        a cold day, and a tropical day. The models are updated every few years
        to include the latest atmospheric data. An interactive simulation for the
        atmosphere model is available at this web site. With the simulation, you
        can change altitude and see the effects on pressure and temperature. The
        same atmosphere model is also used in the FoilSim and EngineSim computer
        simulators.
      </p>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.listbox.js";
import "smart-webcomponents/source/modules/smart.progressbar.js";
import "smart-webcomponents/source/modules/smart.splitter.js";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const script = document.createElement("script"),
        contentHolder = document.getElementById("contentHolder"),
        progressHolder = document.getElementById("progressHolder");
      progressHolder.value = 71;

      const tabs = document.getElementById("tabs"),
        mapCoordinates = [
          {
            lat: 40.7590403,
            long: -74.0392705
          },
          {
            lat: 22.257983,
            long: 114.1696828
          },
          {
            lat: -8.409518,
            long: 115.188919
          }
        ];
      tabs.addEventListener("change", function(event) {
        const index = event.detail.index,
          contentHolder = document.getElementById("tabsContentHolder");
        if (index === 0) {
          contentHolder.innerHTML = '<div id="map-canvas-0"></div>'; //New York
        } else if (index === 1) {
          contentHolder.innerHTML = '<div id="map-canvas-1"></div>'; //Hong Kong
        } else {
          contentHolder.innerHTML = '<div id="map-canvas-2"></div>'; //Bali
        }
        new window.google.maps.Map(
          document.getElementById("map-canvas-" + index),
          {
            center: new window.google.maps.LatLng(
              mapCoordinates[index].lat,
              mapCoordinates[index].long
            ),
            zoom: 10,
            mapTypeId: window.google.maps.MapTypeId.ROADMAP
          }
        );
      });
      contentHolder.innerHTML = document.getElementById("waterText").innerHTML;

      // eslint-disable-next-line
      window.initializeMaps = () => {
        new window.google.maps.Map(document.getElementById("map-canvas-0"), {
          center: new window.google.maps.LatLng(40.7590403, -74.0392705),
          zoom: 8,
          mapTypeId: window.google.maps.MapTypeId.ROADMAP
        });
      };

      document
        .getElementById("chooser")
        .addEventListener("change", function(event) {
          if (event.detail.label.toLowerCase() === "water") {
            contentHolder.innerHTML = document.getElementById(
              "waterText"
            ).innerHTML;
            progressHolder.value = 71;
          } else if (event.detail.label.toLowerCase() === "soil") {
            contentHolder.innerHTML = document.getElementById(
              "soilText"
            ).innerHTML;
            progressHolder.value = 29;
          } else {
            contentHolder.innerHTML = document.getElementById(
              "airText"
            ).innerHTML;
            progressHolder.value = 100;
          }
        });
      script.type = "text/javascript";
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyDLNo8WFhrz_4zuLdl423WX9h5Kh0SedHQ&callback=window.initializeMaps";
      document.body.appendChild(script);
    });
  }
};
</script>

<style>
smart-splitter {
  width: 100%;
}

@media screen and (max-width: 700px) {
  html,
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  smart-splitter {
    width: 100%;
  }
}

#map-canvas-0,
#map-canvas-1,
#map-canvas-2 {
  width: 100%;
  height: 100%;
}

#waterText,
#soilText,
#airText {
  display: none;
}

#container {
  margin: 10px;
}

smart-splitter smart-splitter-item smart-list-box,
smart-splitter smart-splitter-item smart-tabs {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
}
</style>
