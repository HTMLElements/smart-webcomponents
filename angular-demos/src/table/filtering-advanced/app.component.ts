import { Component, ViewChild, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { MenuComponent, MenuItem } from 'smart-webcomponents-angular/menu';
import { TableComponent, TableColumn } from 'smart-webcomponents-angular/table';
import { InputComponent, InputEditor } from 'smart-webcomponents-angular/input';
import { Button } from 'smart-webcomponents-angular/button';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
    @ViewChild('menu', { read: MenuComponent, static: false }) menu!: MenuComponent;
    @ViewChild('menu2', { read: MenuComponent, static: false }) menu2!: MenuComponent;
    @ViewChild('table', { read: TableComponent, static: false }) table!: TableComponent;
    @ViewChild('filterowscontainer', { read: ElementRef, static: false }) filterowscontainer!: ElementRef;
    @ViewChild('numberofappliedfilters', { read: ElementRef, static: false }) numberofappliedfilters!: ElementRef;

    emails: Object[] = [{
        name: 'Walter Stewart',
        email: 'walter.stewart@example.com',
        permission: 'Owner'
    },
    {
        name: 'Manuel Smith',
        email: 'manuel.smith@example.com',
        permission: 'Owner'
    },
    {
        name: 'Annette Gray',
        email: 'annette.gray@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Candice Murphy',
        email: 'candice.murphy@example.com',
        permission: 'Owner'
    },
    {
        name: 'Theresa Reynolds',
        email: 'theresa.reynolds@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Wyatt Silva',
        email: 'wyatt.silva@example.com',
        permission: 'Restricted'
    },
    {
        name: 'April Hayes',
        email: 'april.hayes@example.com',
        permission: 'Owner'
    },
    {
        name: 'Brayden Henry',
        email: 'brayden.henry@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Clayton Rice',
        email: 'clayton.rice@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Alberto Day',
        email: 'alberto.day@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Jeremy Marshall',
        email: 'jeremy.marshall@example.com',
        permission: 'Owner'
    },
    {
        name: 'Ivan Kennedy',
        email: 'ivan.kennedy@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Sofia Grant',
        email: 'sofia.grant@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Felicia Moore',
        email: 'felicia.moore@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Carolyn White',
        email: 'carolyn.white@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Leo Austin',
        email: 'leo.austin@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Derrick Larson',
        email: 'derrick.larson@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Carla James',
        email: 'carla.james@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Vickie Cruz',
        email: 'vickie.cruz@example.com',
        permission: 'Owner'
    },
    {
        name: 'Brianna Torres',
        email: 'brianna.torres@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Kristen Cruz',
        email: 'kristen.cruz@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Terrance Holt',
        email: 'terrance.holt@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Marlene Reed',
        email: 'marlene.reed@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Beatrice Nichols',
        email: 'beatrice.nichols@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Scarlett Walker',
        email: 'scarlett.walker@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Scott Oliver',
        email: 'scott.oliver@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Joe Castillo',
        email: 'joe.castillo@example.com',
        permission: 'Restricted'
    },
    {
        name: 'Florence Sanders',
        email: 'florence.sanders@example.com',
        permission: 'Owner'
    },
    ];

    dataSource = new window.Smart.DataAdapter({
        dataSource: this.emails,
        dataFields: [
            'name: string',
            'email: string',
            'permission: string'
        ]
    });

    paging: Boolean = true;

    sortMode: String = 'one';

    columns: TableColumn[] = [{
        label: 'Name',
        dataField: 'name',
        dataType: 'string',
        width: 275,
        formatFunction(settings: any) {
            if (settings.value === 'Candice Murphy') {
                settings.template = `<strong>${settings.value} (you)</strong>`;
            }
        }
    },
    {
        label: 'Email',
        dataField: 'email',
        dataType: 'string',
        width: 275
    },
    {
        label: 'Permission',
        dataField: 'permission',
        dataType: 'string',
        width: 200
    },
    {
        label: '',
        dataField: 'action',
        dataType: 'string',
        allowSort: false,
        formatFunction(settings: any) {
            settings.template = `<smart-button row-id="${settings.row}" class="remove-button"><span class="material-icons">more_vert</span></smart-button>`;
        }
    }];

    conditions: Object[] = [{
        value: 'CONTAINS',
        label: 'Contains'
    },
    {
        value: 'DOES_NOT_CONTAIN',
        label: 'Does not contain'
    },
    {
        value: 'STARTS_WITH',
        label: 'Starts with'
    },
    {
        value: 'ENDS_WITH',
        label: 'Ends with'
    },
    {
        value: 'EQUAL',
        label: 'Equals'
    }
    ];

    filterRows: Object = {};

    appliedFilters: Object = {};

    rowToRemove: any;

    createCustomFilterRow: Function = (columnLabel: string) => {
        const row = document.createElement('div'),
            conditionInput = document.createElement('smart-input'),
            valueInput = document.createElement('smart-input'),
            confirmButton = document.createElement('smart-button');

        conditionInput.dataSource = this.conditions;
        conditionInput.dropDownButtonPosition = 'right';
        conditionInput.placeholder = 'Condition';
        conditionInput.classList.add('underlined');

        valueInput.placeholder = 'Filter by ' + columnLabel;
        valueInput.classList.add('underlined');

        confirmButton.innerHTML = 'Done';
        confirmButton.classList.add('primary');
        confirmButton.classList.add('confirm');
        confirmButton.dataField = columnLabel;

        row.className = 'filter-row filter-row-' + columnLabel;

        row.appendChild(conditionInput);
        row.appendChild(valueInput);
        row.appendChild(confirmButton);

        this.filterowscontainer.nativeElement.appendChild(row);
        this.filterRows[columnLabel] = row;
    }

    handleClearFilters(event: Event) {
        const that = this,
            table = that.table,
            numberOfAppliedFilters = that.numberofappliedfilters.nativeElement,
            filterMenu = that.menu;

        if ((event.target as HTMLElement).closest('smart-button')) {
            table.clearFilters();

            for (let index in filterMenu.items) {
                const menuItem = filterMenu.items[index];
                menuItem.checked = false;
                menuItem.classList.remove('filtered');
            }

            Array.from(document.querySelectorAll('.filter-row')).forEach(row => row.remove());

            numberOfAppliedFilters.classList.add('smart-visibility-hidden');
            numberOfAppliedFilters.innerHTML = '0';
            this.appliedFilters = {};
            filterMenu.close();
        }
    }

    handleTableClick(event: Event) {
        const removeButton = (event.target as HTMLElement).closest('.remove-button'),
            table = this.table,
            removeMenu = this.menu2;

        if (removeButton) {
            const rect = removeButton.getBoundingClientRect();

            this.rowToRemove = table.nativeElement.rowById[removeButton.getAttribute('row-id')];

            if (this.rowToRemove.data.permission === 'Restricted') {
                removeMenu.items[0].label = 'Allow access';
                removeMenu.items[0].value = 'Owner';
            }
            else {
                removeMenu.items[0].label = 'Remove access';
                removeMenu.items[0].value = 'Restricted';
            }

            removeMenu.open(rect.right - removeMenu.nativeElement.offsetWidth, rect.bottom);
        }
    }

    handleItemCheckChange(event: CustomEvent) {
        const filterRow = this.filterRows[event.detail.value],
            filterRowsContainer = this.filterowscontainer.nativeElement;

        if (event.detail.checked) {
            if (filterRow) {
                filterRowsContainer.appendChild(filterRow);
            }
            else {
                this.createCustomFilterRow(event.detail.value);
            }
        }
        else {
            filterRow.remove();
        }
    }

    handleFilterRowsContainerClick(event: Event) {
        const confirmButton = (event.target as HTMLElement).closest('.confirm') as Button,
            table = this.table,
            filterMenu = this.menu,
            numberOfAppliedFilters = this.numberofappliedfilters.nativeElement;

        if (confirmButton) {
            const filterRow = confirmButton.parentElement,
                conditionInput = filterRow.firstElementChild as InputEditor,
                valueInput = filterRow.children[1] as InputEditor,
                dataField = confirmButton.dataField,
                condition = conditionInput.$.input.dataValue,
                value = valueInput.value,
                menuItem = filterMenu.nativeElement.querySelector(`smart-menu-item[value="${dataField}"]`) as MenuItem;

            if (!condition || !value) {
                delete this.appliedFilters[dataField];
                table.removeFilter(dataField);
                menuItem.classList.remove('filtered');
            }
            else {
                const filterGroup = new window.Smart.Utilities.FilterGroup(),
                    filterObject = filterGroup.createFilter('string', value, condition);

                filterGroup.addFilter('or', filterObject);
                table.addFilter(dataField, filterGroup);
                this.appliedFilters[dataField] = filterGroup;
                menuItem.classList.add('filtered');
            }

            const numberOfFilters = Object.keys(this.appliedFilters).length;

            numberOfAppliedFilters.classList.toggle('smart-visibility-hidden', numberOfFilters === 0);
            numberOfAppliedFilters.innerHTML = numberOfFilters.toString();
            menuItem.checked = false;
            filterRow.remove();
        }
    }

    handleFilterIconClick(event: Event) {
        const rect = this.button.nativeElement.getBoundingClientRect(),
            filterMenu = this.menu,
            removeMenu = this.menu2;

        if (filterMenu.opened) {
            filterMenu.close();
        }
        else {
            filterMenu.open(rect.right - filterMenu.nativeElement.offsetWidth, rect.bottom);
        }

        removeMenu.close();
    }

    handleItemClick(event: CustomEvent) {
        this.rowToRemove.data.permission = event.detail.value;
    }

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
            table = that.table,
            filterIcon = that.button;

        that.filterowscontainer.nativeElement.addEventListener('click', that.handleFilterRowsContainerClick.bind(that));

        table.sortBy('name', 'asc');
        table.addEventListener('click', that.handleTableClick.bind(that));

        filterIcon.addEventListener('pointerup', function (event) {
            event.stopPropagation();
        });
    }
}