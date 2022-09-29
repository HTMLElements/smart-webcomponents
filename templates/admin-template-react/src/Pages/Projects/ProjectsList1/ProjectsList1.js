import './ProjectsList1.scss';

import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Smart, CardView } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function ProjectsList1() {

  const projectsData = [
    {
      name: 'Tanzanite',
      images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Zo%C3%AFsite_%28Tanzanite%29.jpg/260px-Zo%C3%AFsite_%28Tanzanite%29.jpg',
      status: 'Done',
      info: 'Tanzanite is the blue and violet variety of the mineral zoisite.',
      assignees: 'johnny, monica',
      progress: 100
    }, {
      name: 'Violet Sapphire',
      images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Pink_sapphire_ring.jpg/220px-Pink_sapphire_ring.jpg',
      status: 'Done',
      info: 'Fancy sapphires are often found in yellow, orange, green, brown, purple and violet hues.',
      assignees: 'maya',
      progress: 100
    }, {
      name: 'Diamond',
      images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brillanten.jpg/220px-Brillanten.jpg',
      status: 'Done',
      info: 'Diamond is a solid form of the element carbon with its atoms arranged in a crystal structure called diamond cubic.',
      assignees: 'toni',
      progress: 100
    }, {
      name: 'Tourmaline',
      images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Fluorite-Foitite-Schorl-k-117a.jpg/220px-Fluorite-Foitite-Schorl-k-117a.jpg',
      status: 'In progress',
      info: 'Tourmaline is classified as a semi-precious stone and the gemstone can be found in a wide variety of colors.',
      assignees: 'maria',
      progress: 43
    }, {
      name: 'Blue Sapphire',
      images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Logan_Sapphire_SI.jpg/220px-Logan_Sapphire_SI.jpg',
      status: 'Cancelled',
      info: 'Tanzanite is the blue and violet variety of the mineral zoisite.',
      assignees: 'avril',
      progress: 0
    }, {
      name: 'Ruby',
      images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Rubis%2C_calcite_14.jpg/330px-Rubis%2C_calcite_14.jpg, https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ruby_gem.JPG/279px-Ruby_gem.JPG',
      status: 'Done',
      info: 'A ruby is a pink to blood-red coloured gemstone.',
      assignees: 'mark, steven',
      progress: 100
    }, {
      name: 'Aquamarine',
      images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Beryl-209736.jpg/220px-Beryl-209736.jpg',
      status: 'Done',
      info: 'Aquamarine is a blue or cyan variety of beryl.',
      assignees: 'johanna',
      progress: 100
    }, {
      name: 'Red beryl',
      images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Beryl-235618.jpg/220px-Beryl-235618.jpg, https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/RedBeryl-G-EmpireTheWorldOfGems.jpg/220px-RedBeryl-G-EmpireTheWorldOfGems.jpg',
      status: 'In progress',
      info: 'Red beryl (formerly known as "bixbite" and marketed as "red emerald" or "scarlet emerald") is a red variety of beryl.',
      assignees: 'johnny, monica, margaret',
      progress: 91
    },
  ];

  useEffect(() => { document.title = `Projects List 1 - ${defaultTitle}` }, []);

  const cardViewSettings = {
    dataSource: new Smart.DataAdapter(
      {
        dataSource: projectsData,
        dataFields:
          [
            'name: string',
            'images: string',
            'status: string',
            'info: string',
            'assignees: string',
            'progress: number'
          ]
      }),
    columns: [
      { label: 'Name', dataField: 'name' },
      {
        label: 'Status', dataField: 'status', formatFunction: function (settings) {
          const value = settings.value;

          settings.template = `<span class="smart-badge smart-badge-pill ${value.replace(' ', '-').toLowerCase()}"">${value}</span>`;
        }
      },
      { label: 'Info', dataField: 'info' },
      {
        label: 'Progress', dataField: 'progress', formatFunction: function (settings) {
          settings.template = `<smart-progress-bar show-progress-value value=${settings.value}></smart-progress-bar>`;
        }
      },
      { label: 'Images', dataField: 'images', image: true },
      {
        label: 'assignees', dataField: 'assignees', formatFunction: function (settings) {
          const photoList = settings.value.split(', ');
          let htmlResult = '';

          photoList.forEach(photoName => {
            htmlResult += `<div class="w-30px square rounded-circle mr-2" style="background-image: url('assets/images/phonebook/${photoName}.png'); background-size: cover;"></div>`;
          });

          settings.template = htmlResult;
        }, image: true
      }
    ],
    coverField: 'images',
    titleField: 'name'
  }
  
  return (
    <div className="container projects-list1">
      <div className="row">
        <div className="col-12 mb-3"><h4>Projects List 1</h4></div>
      </div>

      <div className="row">
        <div className="col-12">
          <CardView id="cardView" {...cardViewSettings}></CardView>
        </div>
      </div>
    </div>
  )
}

export default withAnimation(ProjectsList1)