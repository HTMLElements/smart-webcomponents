const { execSync } = require('child_process');
// const fs = require('fs');
const fs = require('fs-extra');
const path = require('path');
const packageJsonPath = path.join(path.resolve(__dirname), 'package.json');
const indexTsx = path.join(path.resolve(__dirname), './src/', 'index.tsx');

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

const tempDemos = [
 	'grid/overview'
]

console.log('\x1b[33m%s\x1b[0m', 'Building React Demos');

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
    var demosNames = [];

    const dir = path.join(path.resolve(__dirname), './dist/');

    deleteFolderRecursive(dir);

    // for ALL use "demos" array
    for (let demo of tempDemos) {
        let allDemos, folder;

        if (demo.slice(-2).trim() === '/*') {
            folder = demo.replace('/*', '');
            allDemos = fs.readdirSync('./source/' + folder);
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

            if (fs.existsSync('./source/' + demo + '/App.tsx')) {
                fs.copyFileSync('./source/' + demo + '/App.tsx', './src/App.tsx');
            }

            if (fs.existsSync('./source/' + demo + '/App.jsx')) {
                fs.copyFileSync('./source/' + demo + '/App.jsx', './src/App.jsx');
            }

            fs.copyFileSync('./source/' + demo + '/App.css', './src/App.css');

            updatePackageJson(demo, demosNames);
            runReactBuild(demo);
            updateIndexHtml(demo);
			
			if (demo.indexOf('datagrid-bind-to-csv') >= 0) {
				const commonFolder = './dist/' + demo + '/common';
				
			    if (!fs.mkdirsSync(commonFolder)) {
						fs.mkdirsSync(commonFolder);
				}
					
				fs.copyFileSync('./src/common/employees.csv', commonFolder + '/employees.csv');
			}
			if (demo.indexOf('datagrid-bind-to-json') >= 0) {
				const commonFolder = './dist/' + demo + '/common';
				
			    if (!fs.mkdirsSync(commonFolder)) {
						fs.mkdirsSync(commonFolder);
				}
					
				fs.copyFileSync('./src/common/beverages.json', commonFolder + '/beverages.json');
			}
			if (demo.indexOf('datagrid-bind-to-tsv') >= 0) {
				const commonFolder = './dist/' + demo + '/common';
				
			    if (!fs.mkdirsSync(commonFolder)) {
						fs.mkdirsSync(commonFolder);
				}
					
				fs.copyFileSync('./src/common/homeprices.tsv', commonFolder + '/homeprices.tsv');
			}
			if (demo.indexOf('datagrid-bind-to-xml') >= 0) {
				const commonFolder = './dist/' + demo + '/common';
				
			    if (!fs.mkdirsSync(commonFolder)) {
						fs.mkdirsSync(commonFolder);
				}
					
				fs.copyFileSync('./src/common/customers.xml', commonFolder + '/customers.xml');
			}
        }
    }

    console.log("DONE!");
})();

function updateIndexHtml(demo) {
    if (demo.length > 2) {
        let demoTemp = demo.split("/");

        demoTemp = demoTemp[0] + '/' + demoTemp[1];
        demo = demoTemp;
    }

    const indexHtml = path.join(path.resolve(__dirname), './dist/' + demo, 'index.html');
    const indexDemoFolder = path.join(path.resolve(__dirname), './demos/' + demo);
    const indexHtm = path.join(indexDemoFolder, 'index.htm');

    if (!fs.mkdirsSync(indexDemoFolder)) {
        fs.mkdirsSync(indexDemoFolder);
    }

    let data = fs.readFileSync(indexHtml, 'utf8');

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

    data = data.replace('<head>', `<head><base href="./../../../dist/${demo}/"><title>React ${componentName} ${demoName} | ${componentName} | Smart UI for ReactJS</title>${extraScripts}`);

    fs.writeFileSync(indexHtm, data, 'utf8');

}

function handleDemoPath(demo) {
    // It should return double escaping or 4 slashes - as a result in the "package.json" it will be with 2 slashes - and in the running will be with just 1 slash
    const demoPath = demo.split("/");
    const componentName = demoPath[0];
    const demoName = demoPath[1];

    return demoPath;
}

function checkForComponent(name, demosNames) {
    if (demosNames.indexOf(name) === -1) {
        return true
    }

    return false;
}

function updatePackageJson(demo, demosNames) {
    const data = fs.readFileSync(packageJsonPath, 'utf8');
    const demoPathResult = handleDemoPath(demo)
    const componentName = "\\\\" + demoPathResult[0];
    const currentDemo = demoPathResult[1];
    let newDemoData = "";
    const hasCreatedComponent = checkForComponent(componentName, demosNames);
    if (hasCreatedComponent) {
        console.info("\x1b[31m", "Create", "\x1b[47m", "New", "\x1b[0m", "\x1b[31m", "Directory", "\x1b[0m");
        demosNames.push(componentName);
        newDemoData = "mkdir dist" + componentName +
            " && " +
            "move build dist" + componentName + "\\\\" + currentDemo;
    } else {
        console.info("\x1b[31m", "The Parent's Directory", "\x1b[47m", "Exists", "\x1b[0m");
        newDemoData = "move build dist" + componentName + "\\\\" + currentDemo;
    }

    console.log();
    console.log("\x1b[47m \x1b[34m", `BUILD && Create a directory | ${componentName} - ${currentDemo} | && Move there`, "\x1b[0m");

    const startValue = "react-scripts build &&";
    const endValue = "";
    const tempSymbol = ",";
    const newData = changeData(data, startValue, endValue, tempSymbol, newDemoData);

    fs.writeFileSync(packageJsonPath, newData, 'utf8');

    // console.log("updatePackageJson [Done]");
}

function changeData(data, stringStart, stringEnd, tempSymbol, newDemoPath) {
    const searcedValueLength = stringStart.length + 1;
    const startIndex = data.indexOf(stringStart);
    const tempData = data.substring(startIndex + searcedValueLength);
    const endIndex = tempData.indexOf(tempSymbol);
    const dataToRplace = tempData.substring(0, endIndex - 1);
    const newData = data.replace(dataToRplace, newDemoPath + stringEnd);

    // console.log("changeData [Done]");
    return newData;
}

function updateIndexTsx(demo) {
    return;

    const data = fs.readFileSync(indexTsx, 'utf8');
    const newDemoPath = `./${demo}`;
    const startValue = "App from ";
    const endValue = "/App";
    const tempSymbol = ";";
    const newData = changeData(data, startValue, endValue, tempSymbol, newDemoPath);

    fs.writeFileSync(indexTsx, newData, 'utf8');

    // console.log("updateIndexTsx [Done]");
}

function runReactBuild(demo) {
    // console.log("runReactBuild [start]");
    execSync(`npm run build`);

    console.log('\x1b[36m%s\x1b[0m', `Successfully Build: "${demo}"`);
    console.log("\x1b[0m");

    // console.log("runReactBuild [Done]");
}