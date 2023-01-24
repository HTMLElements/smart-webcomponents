const { execSync } = require('child_process');
const fs = require('fs-extra');
const path = require('path');

// const packageJsonPath = path.join(path.resolve(__dirname), 'package.json');
const mainJsPath = path.join(path.resolve(__dirname), './src/', 'main.js');

const demos = [
    'accordion/*',
    'badge/*',
    'button/*',
    'calendar/*',
    'card/*',
    'cardview/*',
    'carousel/*',
    'chart/*',
    'checkbox/*',
    'chip/*',
    'color-input/*',
    'colorpanel/*',
    'colorpicker/*',
    'combobox/*',
    'datetimepicker/*',
    'docking-layout/*',
    'dropdownbutton/*',
    'dropdownlist/*',
    'fileupload/*',
    'gantt/*',
    'gauge/*',
    'grid/*',
    'input/*',
    'input-group/*',
    'kanban/*',
    'led/*',
	'form/*',
    'listbox/*',
    'listmenu/*',
    'maskedtextbox/*',
    'menu/*',
    'multisplitbutton/*',
    'multilinetextbox/*',
    'numerictextbox/*',
    'pager/*',
    'passwordtextbox/*',
    'progressbar/*',
    'querybuilder/*',
    'radiobutton/*',
    'repeatbutton/*',
    'scrollbar/*',
    'slider/*',
    'sortable/*',
    'splitter/*',
    'switchbutton/*',
    'table/*',
    'tabs/*',
    'tank/*',
    'textbox/*',
    'timepicker/*',
    'toast/*',
    'togglebutton/*',
    'tooltip/*',
    'tree/*',
    'validator/*',
    'window/*',
    'map/*',
    'editor/*'
];

console.log('\x1b[33m%s\x1b[0m', 'Building Vue Demos');

const deleteFolderRecursive = function (dir) {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach((file, index) => {
            const curPath = path.join(dir, file);
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(dir);
    }
};

(function runProcess() {
  const tempDemos = [
    'grid/overview'
  ];
	
   var demosNames = [];

    const dir = path.join(path.resolve(__dirname), './dist/');

    deleteFolderRecursive(dir);

    // for ALL use "demos" array
    for (let demo of tempDemos) {
        let allDemos, folder;

        if (demo.slice(-2).trim() === '/*') {
            folder = demo.replace('/*', '');
            allDemos = fs.readdirSync('./src/' + folder);
            console.log(allDemos.join(', '));
        }
        else {
            allDemos = [demo];
        }

        for (let i = 0; i < allDemos.length; i++) {
            if (folder) {
                demo = folder + '/' + allDemos[i];
            }

            console.log("\x1b[0m");
            console.log(demo);

			updateMainJs(demo);
			runVueBuild(demo);
			updateIndexHtml(demo);
        }
    }

    console.log("DONE!");
})();


function updateMainJs(demo) {
  console.log("\x1b[1m", demo);
  
  const data = `

import { createApp } from 'vue'
import App from './${demo}/App.vue'

const app = createApp(App)

app.config.isCustomElement = tag => tag.startsWith('smart-');
app.mount('#app')

`  
  
  fs.writeFileSync(mainJsPath, data, 'utf8');
}

function updateIndexHtml(demo) {
    if (demo.length > 2) {
        let demoTemp = demo.split("/");

        demoTemp = demoTemp[0] + '/' + demoTemp[1];
        demo = demoTemp;
    }

    const indexDistHtm = path.join(path.resolve(__dirname), './dist/' + demo, 'index.htm');
    const indexDemoFolder = path.join(path.resolve(__dirname), './demos/' + demo);
    const indexHtm = path.join(indexDemoFolder, 'index.htm');

    if (!fs.mkdirsSync(indexDemoFolder)) {
        fs.mkdirsSync(indexDemoFolder);
    }

    let data = fs.readFileSync(indexDistHtm, 'utf8');

    do {
        let searchedValue = '="/';
        const newValue = '="./';
        data = data.replace(searchedValue, newValue);
    } while (data.indexOf('="/') !== -1);

    const upperCaseFirstLetter = (name) => {
        return name.substring(0, 1).toUpperCase() + name.substring(1);
    }

    const componentName = upperCaseFirstLetter(demo.split('/')[0]);
    const demoName = upperCaseFirstLetter(demo.split('/')[1]);
    let extraScripts = '';

	switch(componentName.toLowerCase()) {
		case 'grid':
		case 'cardview':
		case 'table':
		case 'kanban':
		case 'chart':
		case 'pivottable':
		case 'scheduler':
		case 'gantt':
		extraScripts = '<script type="text/javascript" src="../../../src/common/data.js"></script>'
		break;
	}
	
    if (demo.indexOf('export') > -1 || demo.indexOf('import') > -1) {
        extraScripts += '<script type="text/javascript" src="../../../src/common/jszip.min.js"></script><script type="text/javascript" src="../../../src/common/pdfmake.min.js"></script><script type="text/javascript" src="../../../src/common/vfs_fonts.js"></script><script type="text/javascript" src="../../../src/common/html2canvas.min.js"></script>';
    }

    if (demo === 'grid/custom-style' || demo === 'grid/dashboard-grid' || demo === 'grid/grouping-custom-style' || demo === 'grid/tree-grid-icons') {
        extraScripts += '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">';
    }

    if (demo.indexOf('formula') > -1) {
        extraScripts += '<script type="text/javascript" src="../../../src/common/formula-parser.min.js"></script>';
    }
	
	 if (demo.indexOf('server-side') > -1) {
        extraScripts += '<script src="https://cdnjs.cloudflare.com/ajax/libs/alasql/0.5.5/alasql.min.js"></script>';
    }

	let distData = data.replace('</title>', `</title>${extraScripts}`);

	fs.writeFileSync(indexDistHtm, distData);
  
    data = data.replace('<title>hello-world</title>', `<base href="./../../../dist/${demo}/"><title>Vue ${componentName} ${demoName} | ${componentName} | Smart UI for Vue</title>${extraScripts}`);
    data = data.replace('<title>Vue App</title>', `<base href="./../../../dist/${demo}/"><title>Vue ${componentName} ${demoName} | ${componentName} | Smart UI for Vue</title>${extraScripts}`);


    fs.writeFileSync(indexHtm, data, 'utf8');
	
	
	if (demo.indexOf('datagrid-bind-to-csv') >= 0) {
		const commonFolder = './dist/' + demo + '/common';
		
		if (!fs.mkdirsSync(commonFolder)) {
				fs.mkdirsSync(commonFolder);
		}
			
		fs.copyFileSync('./sampledata/grid/employees.csv', commonFolder + '/employees.csv');
	}
	if (demo.indexOf('datagrid-bind-to-json') >= 0) {
		const commonFolder = './dist/' + demo + '/common';
		
		if (!fs.mkdirsSync(commonFolder)) {
				fs.mkdirsSync(commonFolder);
		}
			
		fs.copyFileSync('./sampledata/grid/beverages.json', commonFolder + '/beverages.json');
	}
	if (demo.indexOf('datagrid-bind-to-tsv') >= 0) {
		const commonFolder = './dist/' + demo + '/common';
		
		if (!fs.mkdirsSync(commonFolder)) {
				fs.mkdirsSync(commonFolder);
		}
			
		fs.copyFileSync('./sampledata/grid/homeprices.tsv', commonFolder + '/homeprices.tsv');
	}
	if (demo.indexOf('datagrid-bind-to-xml') >= 0) {
		const commonFolder = './dist/' + demo + '/common';
		
		if (!fs.mkdirsSync(commonFolder)) {
				fs.mkdirsSync(commonFolder);
		}
			
		fs.copyFileSync('./sampledata/grid/customers.xml', commonFolder + '/customers.xml');
	}

}

function runVueBuild(demo) {
  // execSync(`npm run serve`);
  // execSync(`npm run build`);

  // execSync(`npx vue-cli-service build --dest dist/${demo}/overview`);
  execSync(`npx vue-cli-service build --dest dist/${demo}`);

  console.log('\x1b[36m%s\x1b[0m', `Successfully Build: "${demo}"`);
}
