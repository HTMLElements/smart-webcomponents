
/* Smart HTML Elements v4.5.0 (2019-Sep) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

/**
 * Card item custom element.
 */
Smart('smart-card', class Card extends Smart.ContentElement {
    // Card item's properties.
    static get properties() {
        return {
            'dataSource': {
                value: null,
                type: 'object?',
                reflectToAttribute: false
            },
            'itemTemplate': {
                value: null,
                type: 'any?',
                reflectToAttribute: false
            },
            'contentHandler': {
                value: null,
                type: 'function?',
                reflectToAttribute: false
            }
        };
    }

    /**
     * Card item's event listeners.
     */
    static get listeners() {
        return {
            'mouseenter': '_mouseEnterHandler',
            'mouseleave': '_mouseLeaveHandler',
            'container.swipeleft': '_swipeHandler',
            'container.swiperight': '_swipeHandler',
            'container.swipetop': '_swipeHandler',
            'container.swipebottom': '_swipeHandler'
        };
    }

    static get styleUrls() {
        return [
            'smart.card.css'
        ]
    }

    /**
     * Card's HTML template.
     */
    template() {
        return `<div id="container" inner-h-t-m-l="[[innerHTML]]">
                <content></content>
            </div>`;
    }

    /**
    * Updates the Card when a property is changed.
    * @param {string} propertyName The name of the property.
    * @param {number/string} oldValue The previously entered value.
    * @param {number/string} newValue The new entered value.
    */
    propertyChangedHandler(propertyName, oldValue, newValue) {
        super.propertyChangedHandler(propertyName, oldValue, newValue);
        const that = this;

        switch (propertyName) {
            case 'itemTemplate':
                that._template = that._handleTemplate();
                that.innerHTML = that._processTemplate();
                if (that.contentHandler) {
                    that.contentHandler(that);
                }
                break;
            case 'dataSource':
                that.innerHTML = that._processTemplate();
                if (that.contentHandler) {
                    that.contentHandler(that);
                }
                break;
            case 'contentHandler':
                if (that.contentHandler) {
                    that.contentHandler(that);
                }
                break;
        }
    }

    /**
    * Called when the element is ready. Used for one-time configuration of the Accordion.
    */
    ready() {
        super.ready();
        const that = this;

        that._template = that._handleTemplate();

        if (that._template.hasBindings) {
            that.innerHTML = that._processTemplate();
        }
        else if (that.itemTemplate) {
            that.innerHTML = that._template.content;
        }

        if (that.contentHandler) {
            that.contentHandler(that);
        }
    }

    _handleTemplate() {
        const that = this;
        let template = that.itemTemplate,
            templateContent = '',
            hasBindings = false,
            regex = /{{\w+}}/g;

        if (that.itemTemplate) {
            if (template instanceof HTMLElement) {
                templateContent = template.innerHTML;
            }
            else {
                template = document.getElementById(template);
                templateContent = template ? template.innerHTML : '';
            }
        }
        else {
            templateContent = that.innerHTML;
        }

        if (regex.exec(templateContent)) {
            hasBindings = true;
        }

        return { content: templateContent, hasBindings: hasBindings };
    }

    _processTemplate() {
        const that = this,
            regex = /{{\w+}}/g,
            bindings = that._template.content.match(regex),
            dataSource = that.dataSource || {};
        let processedTemplate = that._template.content;

        if (!bindings || bindings.length === 0) {
            return processedTemplate;
        }

        bindings.forEach(function (binding) {
            const propertyName = binding.replace('{{', '').replace('}}', '');
            let data = dataSource[propertyName];

            if (data === undefined) {
                data = '';
            }

            processedTemplate = processedTemplate.replace(binding, data);
        });

        return processedTemplate;
    }

    /**
    * Swipe events handler.
    **/
    _swipeHandler() { }
});
