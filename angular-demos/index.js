const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const tsConfigJsonPath = path.join(path.resolve(__dirname), 'tsconfig.app.json');
const angularJsonPath = path.join(path.resolve(__dirname), 'angular.json');

let demos = [
  'accordion/overview',
  'accordion/ngfor',
  'barcode/overview',
  'button/overview',
  'calendar/overview',
  'card/overview',
  'cardview/overview',
  'carousel/overview',
  'chart/overview',
  'checkbox/overview',
  'chip/overview',
  'colorpanel/overview',
  'colorpicker/overview',
  'combobox/overview',
  'datetimepicker/overview',
  'dockinglayout/overview',
  'dropdownbutton/overview',
  'dropdownlist/overview',
  'editor/overview',
  'fileupload/overview',
  'ganttchart/overview',
  'gauge/overview',
  'grid/overview',
  'listbox/overview',
  'listmenu/overview',
  'maskedtextbox/overview',
  'menu/overview',
  'multisplitbutton/overview',
  'multilinetextbox/overview',
  'numerictextbox/overview',
  'pager/overview',
  'passwordtextbox/overview',
  'progressbar/overview',
  'querybuilder/overview',
  'radiobutton/overview',
  'repeatbutton/overview',
  'scrollbar/overview',
  'slider/overview',
  'sortable/overview',
  'splitter/overview',
  'switchbutton/overview',
  'table/overview',
  'tabs/overview',
  'tank/overview',
  'textbox/overview',
  'timepicker/overview',
  'toast/overview',
  'togglebutton/overview',
  'tooltip/overview',
  'tree/overview',
  'window/overview'
];

const tempDemos = [
	'grid/overview'
];


const deleteFolderRecursive = function (dir) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file, index) => {
      const curPath = path.join(dir, file);
      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      }
      else { // delete file
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(dir);
  }
};

console.log('\x1b[33m%s\x1b[0m', 'Building Angular Demos');

(function runProcess() {
  // for ALL use "demos" array, for choosen one use "tempDemps"

  const dir = path.join(path.resolve(__dirname), './dist/');
  deleteFolderRecursive(dir);

  demos = tempDemos;

  for (const demo of demos) {

    if (demo.indexOf('*') >= 0) {
      const dir = path.join(path.resolve(__dirname), './src/' + demo.replace('*', ''));

      fs.readdirSync(dir).forEach((file, index) => {
        const demoPath = demo.replace('*', '') + file;

        updateTSConfigJson(demoPath);
        updateAngularJson(demoPath);
        runNgBuild(demoPath);
      });
    }
    else {
      updateTSConfigJson(demo);
      updateAngularJson(demo);
      runNgBuild(demo);
    }
  }
})();

function updateTSConfigJson(demo) {
  const data = fs.readFileSync(tsConfigJsonPath, 'utf8');

  const indexOfStart = data.indexOf('"src/');
  const tempData = data.substring(indexOfStart);
  const indexOfEnd = tempData.indexOf(',');
  const outputData = tempData.substring(0, indexOfEnd);

  const newData = data.replace(outputData, `"src/${demo}/*.ts"`);

  fs.writeFileSync(tsConfigJsonPath, newData, 'utf8');
}

function updateAngularJson(demo) {
  const data = fs.readFileSync(angularJsonPath, 'utf8');

  const indexOfStartOutputPath = data.indexOf('"outputPath"');
  const tempDataForOutputPath = data.substring(indexOfStartOutputPath);
  const indexOfEndOutputPath = tempDataForOutputPath.indexOf(',');
  const outputData = tempDataForOutputPath.substring(0, indexOfEndOutputPath);

  const indexOfStartMainTS = data.indexOf('"main"');
  const tempDataForMainTS = data.substring(indexOfStartMainTS);
  const indexOfEndMainTS = tempDataForMainTS.indexOf(',');
  const mainTS = tempDataForMainTS.substring(0, indexOfEndMainTS);

  const indexOfStartIndexHTM = data.indexOf('"index"');
  const tempDataForIndexHTM = data.substring(indexOfStartIndexHTM);
  const indexOfEndIndexHTM = tempDataForIndexHTM.indexOf(',');
  const indexHTM = tempDataForIndexHTM.substring(0, indexOfEndIndexHTM);

  let newData = data
    .replace(outputData, `"outputPath": "dist/${demo}"`)
    .replace(mainTS, `"main": "src/${demo}/main.ts"`)
    .replace(indexHTM, `"index": "demos/${demo}/index.htm"`);

  //Assets for 'dashboard-advanced' demo
  let indexOfStartIndexAssets = data.indexOf('"assets"');
  const assets = '"assets": [],';

  if (indexOfStartIndexAssets < 0) {
    const startIndex = newData.indexOf('"baseHref"');

    //Add 'assets' if not present
    newData = newData.slice(0, startIndex) + assets + newData.slice(startIndex);
    indexOfStartIndexAssets = newData.indexOf('"assets"');
  }

  const tempDataForIndexAssets = newData.substring(indexOfStartIndexAssets);
  const indexOfEndIndexAssets = tempDataForIndexAssets.indexOf('],') + 1;
  const indexAssets = tempDataForIndexAssets.substring(0, indexOfEndIndexAssets);

  if (demo.indexOf('page-templates/dashboard-advanced') >= 0) {
    newData = newData.replace(indexAssets, `"assets": [{ "glob": "**/*/*", "input": "src/${demo}", "output": "/" }]`);
  }
  else if (demo.indexOf('grid/datagrid-bind-to-tsv') >= 0) {
    newData = newData.replace(indexAssets, `"assets": [  {"glob": "**/*/*", "input": "src/${demo}", "output": "/"}]`);
  }
  else if (demo.indexOf('grid/datagrid-bind-to-csv') >= 0) {
    newData = newData.replace(indexAssets, `"assets": [  {"glob": "**/*/*", "input": "src/${demo}", "output": "/"}]`);
  }
  else if (demo.indexOf('grid/datagrid-bind-to-json') >= 0) {
    newData = newData.replace(indexAssets, `"assets": [  {"glob": "**/*/*", "input": "src/${demo}", "output": "/"}]`);
  }
  else if (demo.indexOf('grid/datagrid-bind-to-xml') >= 0) {
    newData = newData.replace(indexAssets, `"assets": [  {"glob": "**/*/*", "input": "src/${demo}", "output": "/"}]`);
  }
  else {
    newData = newData.replace(indexAssets, '"assets": []');
  }

  fs.writeFileSync(angularJsonPath, newData, 'utf8');
}

function runNgBuild(demo) {
  execSync('ng build');
  console.log('\x1b[36m%s\x1b[0m', `Successfully Build: "${demo}"`);
}
