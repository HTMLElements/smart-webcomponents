import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { InputComponent } from 'smart-webcomponents-angular/input';
import { MultiComboInputComponent } from 'smart-webcomponents-angular/multicomboinput';
import { EditorComponent, EditorContentFilteringTagFilterMode } from 'smart-webcomponents-angular/editor';

interface InputDataSource {
    dropDownButtonPosition: string,
    readonly: boolean,
    dataSource: {
        label: string,
        value: string
    }[]
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('input', { read: InputComponent, static: false }) input!: InputComponent;
    @ViewChild('input2', { read: InputComponent, static: false }) input2!: InputComponent;
    @ViewChild('input3', { read: InputComponent, static: false }) input3!: InputComponent;
    @ViewChild('multicomboinput', { read: MultiComboInputComponent, static: false }) multicomboinput!: MultiComboInputComponent;
    @ViewChild('multicomboinput2', { read: MultiComboInputComponent, static: false }) multicomboinput2!: MultiComboInputComponent;
    @ViewChild('multicomboinput3', { read: MultiComboInputComponent, static: false }) multicomboinput3!: MultiComboInputComponent;
    @ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;
    @ViewChild('options', { read: ElementRef, static: false }) options!: ElementRef;

    tags: string[] = ['a', 'div', 'img', 'li', 'p', 'ul', 'span', 'table', 'tbody', 'td', 'tr', 'h4'];

    attributes: string[] = ['class', 'href', 'style', 'src'];

    styleAttributes: string[] = ['background-color', 'float'];

    inputProps: InputDataSource = {
        dropDownButtonPosition: 'right',
        readonly: true,
        dataSource: [{
            label: 'Black List',
            value: 'blackList'
        },
        {
            label: 'White List',
            value: 'whiteList'
        }]
    };

    initialValue: string = `
    <div class="section">
    <div>
        <h2 style="text-align: center;">Camels</h2>
        <p style="background-color: floralwhite;">A camel is an even-toed ungulate in the genus Camelus that bears distinctive fatty deposits known as
            "humps"
            on its back. Camels have long been domesticated and, as livestock, they provide food (milk and meat)
            and
            textiles (fiber and felt from hair). Camels are working animals especially suited to their desert
            habitat
            and are a vital means of transport for passengers and cargo. There are three surviving species of
            camel.
            The
            one-humped dromedary makes up 94% of the world's camel population, and the two-humped Bactrian camel
            makes
            up 6%. The Wild Bactrian camel is a separate species and is now critically endangered.

            The word camel is also used informally in a wider sense, where the more correct term is "camelid",
            to
            include all seven species of the family Camelidae: the true camels (the above three species), along
            with
            the
            "New World" camelids: the llama, the alpaca, the guanaco, and the vicuña. The word itself is derived
            via
            Latin: camelus and Greek: κάμηλος (kamēlos) from Hebrew, Arabic or Phoenician: gāmāl.</p>

            <h4>Three types of camels:</h4>
            <ul>
                <li>Bactrian camel</li>
                <li>Dromedary / Arabian camel</li>
                <li>Wild Bactrian camel</li>
            </ul>

            <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Common name</th>
                    <th>Scientific name</th>
                    <th>Distribution
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src="./../../../src/images/bactrial-camel.min.jpg" width="120" height="95" />
                    </td>
                    <td>Bactrian camel</td>
                    <td><i>Camelus bactrianus</i></td>
                    <td>domesticated; Central Asia, including the
                        historical region of Bactria.
                    </td>
                </tr>
                <tr>
                    <td>
                        <img src="./../../../src/images/arabian-camel.min.jpg" width="120" height="93" />
                    </td>
                    <td>
                        Dromedary / Arabian camel
                    </td>
                    <td><i>Camelus dromedarius</i></td>
                    <td>domesticated; the Middle East, Sahara Desert and Afghanistan; introduced to Australia </td>
                </tr>
                <tr>
                    <td><img src="./../../../src/images/wild-bactrian-camel.min.jpg" width="120" height="90" /></td>
                    <td>Wild Bactrian camel</td>
                    <td><i>Camelus ferus</i></td>
                    <td>Remote areas of northwest China and Mongolia </td>
                </tr>
            </tbody>
        </table>

            <p>
                <a href="https://en.wikipedia.org/wiki/Camel">You can read more about it here</a>
            </p>
    </div>
    <img src="././../../../src/images/travel/1.jpg"></img>
</div>`;

    contentFiltering: object = {
        tags: this.tags,
        tagFilterMode: 'blackList',
        attributes: this.attributes,
        attributeFilterMode: 'whiteList',
        styleAttributes: this.styleAttributes,
        styleAttributeFilterMode: 'blackList'
    };

    inputValue: string = 'Black List';
    inputValue2: string = 'White List';
    inputValue3: string = 'Black List';

    dropDownButtonPosition: string = 'right';

    ngOnInit(): void {
        // onInit code.
    }

    ngAfterViewInit(): void {
        // afterViewInit code.
        this.init();
    }

    init(): void {
        // init code.
        const that = this,
            editor = that.editor,
            tagFilterMode = that.input,
            attributeFilterMode = that.input2,
            styleAttributeFilterMode = that.input3,
            tags = that.multicomboinput,
            attributes = that.multicomboinput2,
            styleAttributes = that.multicomboinput3;

        editor.value = that.initialValue;

        that.options.nativeElement.addEventListener('change', function () {
            editor.contentFiltering = {
                tags: tags.value.split(','),
                tagFilterMode: that.inputProps.dataSource.find(i => i.label === tagFilterMode.value).value as EditorContentFilteringTagFilterMode,
                attributes: attributes.value.split(','),
                attributeFilterMode: that.inputProps.dataSource.find(i => i.label === attributeFilterMode.value).value as EditorContentFilteringTagFilterMode,
                styleAttributes: styleAttributes.value.split(','),
                styleAttributeFilterMode: that.inputProps.dataSource.find(i => i.label === styleAttributeFilterMode.value).value as EditorContentFilteringTagFilterMode
            };

            editor.value = that.initialValue;
        });
    };
}