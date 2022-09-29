import { Component, ViewChild } from '@angular/core';
import { ToolbarItem } from 'smart-webcomponents-angular';
import { EditorComponent } from 'smart-webcomponents-angular/editor';

@Component({
  selector: 'sm-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorPageComponent {

  @ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;

  toolbarItems: ToolbarItem[] = ['Bold', 'Italic', 'Underline', 'StrikeThrough',
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    'LowerCase', 'UpperCase', '|',
    'Formats', 'Alignment', 'OrderedList', 'UnorderedList',
    'Outdent', 'Indent', '|',
    'hyperlink', 'table', 'Image', '|', 'ClearFormat', 'Print',
    'SourceCode', 'splitmode', 'FullScreen', '|', 'Undo', 'Redo', 'subscript', 'superscript', 'delete']
    .map(item => {

      const toolbarItem: ToolbarItem = {
        name: item
      };

      return toolbarItem;
    });

  constructor() { }

  ngAfterViewInit(): void {
    // afterViewInit code.
    this.init();
  }

  init(): void {
    // init code.
    this.editor.expandToolbar();
  };
}
