<template>
  <div class="vue-root">
    <div class="demo-description">Kanban with custom tasks styling.</div>
    <smart-kanban id="kanban"></smart-kanban>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.kanban.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      window.Smart(
        "#kanban",
        class {
          get properties() {
            return {
              collapsible: true,
            editable: true,
            columnFooter: true,
            columnSummary: true,
            priorityList: false,
            taskUserIcon: false,
            taskPriority: false,
            onTaskRender: (task, data) => {
                let color = '';
                switch (data.Name) {
                    case 'Michelangelo': {
                        color = '#0B88DA';
                        break;
                    }
                    case 'Vincent van Gogh': {
                        color = '#30C1E3';
                        break;
                    }
                    case 'Edgar Degas': {
                        color = '#34C8BA';
                        break;
                    }
                    case 'Shen Zhou': {
                        color = '#0D559D';
                        break;
                    }
                    case 'Ivan Milev': {
                        color = '#39AD69';
                        break;
                    }
                }
                task.style.background = color;
                task.style.color = '#fff';
            },
            dialogRendered: (dialog, editors, labels, tabs, layout) => {
                // hides the tabs in the kanban.
                tabs['all'].style.display = 'none';

                // the editors layout. By default it is in 2 columns and uses Grid layout. We set it to block in order to make it to occupy the full width.
                layout.style.display = 'block';

                // the following editors would be hidden.
                for (let key in dialog.editors) {
                    switch (key) {
                        case 'progress':
                        case 'startDate':
                        case 'color':
                        case 'priority':
                        case 'userId':
                        case 'dueDate':
                        case 'tags':
                        case 'checklist': {
                            editors[key].style.display = 'none';
                            labels[key].style.display = 'none';
                            break;
                        }
                    }
                }
            },
            localizeFormatFunction: (defaultMessage, message, messageArguments, messageKey) => {
                if (messageKey === 'tasksSummary') {
                    const summary = messageArguments['summary'];
                    return summary > 1 ? summary + ' Artists' : summary + ' Artist';
                }

                if (messageKey === 'status') {
                    return 'Continent';
                }

                if (messageKey === 'description') {
                    return 'Bio';
                }
            },
            dataSourceMap: {
                'checklist': 'checklist',
                'color': 'color',
                'comments': 'comments',
                'dueDate': 'dueDate',
                'id': 'id',
                'priority': 'priority',
                'progress': 'progress',
                'startDate': 'startDate',
                'swimlane': 'swimlane',
                'tags': 'tags',
                'userId': 'userId',
                'history': 'history',
                'createdUserId': 'createdUserId',
                'createdDate': 'createdDate',
                'updatedUserId': 'updatedUserId',
                'updatedDate': 'updatedDate',
                'status': 'Continent',
                'text': 'Name',
                'description': 'Bio',

            },
            dataSource: [
                {
                    Name: 'Michelangelo',
                    Country: 'Italy',
                    Born: 1475,
                    Died: 1564,
                    Continent: 'Europe',
                    Picture: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg',
                    Bio: 'Michelangelo di Lodovico Buonarroti Simoni or more commonly known by his first name Michelangelo was an Italian sculptor, painter, architect and poet of the High Renaissance born in the Republic of Florence, who exerted an unparalleled influence on the development of Western art.',
                    Paintings: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Creaci%C3%B3n_de_Ad%C3%A1m.jpg/800px-Creaci%C3%B3n_de_Ad%C3%A1m.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ortographia_Partis_Exterioris_Templi_Divi_Petri_in_Vaticano.jpg/800px-Ortographia_Partis_Exterioris_Templi_Divi_Petri_in_Vaticano.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Last_Judgement_by_Michelangelo.jpg/539px-Last_Judgement_by_Michelangelo.jpg'
                },
                {
                    Name: 'Vincent van Gogh',
                    Country: 'Netherlands',
                    Born: 1853,
                    Died: 1890,
                    Continent: 'Europe',
                    Picture: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg',
                    Bio: 'Vincent Willem van Gogh was a Dutch post-impressionist painter who is among the most famous and influential figures in the history of Western art. In just over a decade he created about 2,100 artworks, including around 860 oil paintings, most of them in the last two years of his life.',
                    Paintings: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg/457px-Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Whitehousenight.jpg/722px-Whitehousenight.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Van_Gogh_The_Olive_Trees..jpg/754px-Van_Gogh_The_Olive_Trees..jpg'
                },
                {
                    Name: 'Edgar Degas',
                    Country: 'France',
                    Born: 1834,
                    Died: 1917,
                    Continent: 'Europe',
                    Picture: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Edgar_Degas_self_portrait_1855.jpeg',
                    Bio: 'Edgar Degas was a French artist famous for his paintings, sculptures, prints, and drawings. He is especially identified with the subject of dance; more than half of his works depict dancers. Regarded as one of the founders of Impressionism, he rejected the term, preferring to be called a realist.',
                    Paintings: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Edgar_Degas_-_The_Ballet_Class_-_Google_Art_Project.jpg/522px-Edgar_Degas_-_The_Ballet_Class_-_Google_Art_Project.jpg,https://upload.wikimedia.org/wikipedia/commons/8/83/Edgar_Degas_-_At_the_Races.jpg'
                },
                {
                    Name: 'Shen Zhou',
                    Country: 'China',
                    Born: 1427,
                    Died: 1509,
                    Continent: 'Asia',
                    Picture: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Shen_Zhou_Self-portrait_at_age_80.Palace_Museum_Beijing.jpg',
                    Bio: 'Shen Zhou, courtesy name Qi\'nan and Shitian, was a Chinese painter in the Ming dynasty.',
                    Paintings: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Poet_on_a_Mountaintop.jpg/800px-Poet_on_a_Mountaintop.jpg,https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lofty_Mt.Lu_by_Shen_Zhou.jpg/304px-Lofty_Mt.Lu_by_Shen_Zhou.jpg'
                },
                {
                    Name: 'Ivan Milev',
                    Country: 'Bulgaria',
                    Born: 1897,
                    Died: 1927,
                    Continent: 'Europe',
                    Picture: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Ivan_milev_selfportrait.jpg',
                    Bio: 'Ivan Milev Lalev was a Bulgarian painter and scenographer regarded as the founder of the Bulgarian Secession and a representative of Bulgarian modernism, combining symbolism, Art Nouveau and expressionism in his work. Ivan Milev was born in the town of Kazanlak in the family of shepherd Milyu Lalev.',
                    Paintings: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Svetogorska_legenda_1926.jpg,https://upload.wikimedia.org/wikipedia/commons/9/93/Ahinora_1922_%28Anna_Orozova_model%29.jpg'
                }
            ],
            taskCustomFields: [
                {
                    label: 'Paintings',
                    dataField: 'Paintings',
                    image: true
                },
                {
                    label: 'Picture',
                    dataField: 'Picture',
                    cover: true,
                    image: true
                },
                {
                    label: 'Bio',
                    dataField: 'Bio'
                },
                {
                    label: 'Born',
                    dataField: 'Born'
                },
                {
                    label: 'Died',
                    dataField: 'Died'
                },
                {
                    label: 'Country',
                    dataField: 'Country'
                }
            ],
            allowColumnEdit: true,
            allowColumnReorder: true,
            taskActions: false,
            taskDue: false,
            taskComments: true,
            currentUser: 0,
            taskProgress: false,
            users: [
                { id: 0, name: 'Andrew', image: '../../images/people/andrew.png' },
                { id: 1, name: 'Anne', image: '../../images/people/anne.png' },
                { id: 2, name: 'Janet', image: '../../images/people/janet.png' },
                { id: 3, name: 'John', image: '../../images/people/john.png' },
                { id: 4, name: 'Laura', image: '../../images/people/laura.png' }
            ],
            columns: [
                { color: '#33B679', label: 'Europe', dataField: 'Europe', allowHide: false },
                { color: '#8E24AA', label: 'Asia', dataField: 'Asia', allowHide: false }
            ]
            };
          }
        }
      );
    });
  }
};
</script>

<style>
html,
body,
#kanban {
  width: 100%;
  height: 100%;
}

html,
body {
  margin: 0;
}
</style>
