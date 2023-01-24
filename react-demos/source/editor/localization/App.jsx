import React from "react";
import ReactDOM from "react-dom";
import { RadioButton } from 'smart-webcomponents-react/radiobutton';
import { Editor } from 'smart-webcomponents-react/editor';

class App extends React.Component {
	constructor(prop) {
		super(prop);

		this.editor = React.createRef();
	}

	toolbarItems = ['Bold', 'Italic', 'Underline', 'StrikeThrough',
		'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
		'LowerCase', 'UpperCase', '|',
		'Formats', 'Alignment', 'OrderedList', 'UnorderedList',
		'Outdent', 'Indent', '|',
		'hyperlink', 'table', 'Image', '|', 'ClearFormat', 'Print',
		'SourceCode', 'splitmode', 'FullScreen', '|', 'Undo', 'Redo', 'subscript', 'superscript', 'delete'
	];

	locale = 'de';

	messages = {
		'en': {
			'invalidValue': '{{elementType}}: Invalid {{property}} value. {{property}} should be of type {{typeOne}} or {{typeTwo}}.',
			'incorrectArgument': '{{elementType}}: Incorrect argument {{argumentName}} in method {{methodName}}.',
			'permissionsRequired': '{{elementType}}: Permissions are required for the following action {{actionName}}.',
			'ok': 'Ok',
			'cancel': 'Cancel',
			'alignLeft': 'Align Left',
			'alignCenter': 'Align Center',
			'alignRight': 'Align Right',
			'alignJustify': 'Align Justify',
			'segoeUi': 'Segoe UI',
			'arial': 'Arial',
			'georgia': 'Georgia',
			'impact': 'Impact',
			'tahoma': 'Tahoma',
			'timesNewRoman': 'Times New Roman',
			'verdana': 'Verdana',
			'p': 'Paragraph',
			'pre': 'Code',
			'code': 'Code',
			'blockquote': 'Quotation',
			'h1': 'Heading 1',
			'h2': 'Heading 2',
			'h3': 'Heading 3',
			'h4': 'Heading 4',
			'h5': 'Heading 5',
			'h6': 'Heading 6',
			'bold': 'Bold',
			'italic': 'Italic',
			'underline': 'Underline',
			'strikethrough': 'Strikethrough',
			'orderedlist': 'Ordered List',
			'unorderedlist': 'Unordered List',
			'subscript': 'Subscript',
			'superscript': 'Superscript',
			'alignment': 'Alignments',
			'fontname': 'Font Name',
			'fontsize': 'Font Size',
			'formats': 'Formats',
			'backgroundcolor': 'Background Color',
			'fontcolor': 'Font Color',
			'redo': 'Redo',
			'undo': 'Undo',
			'indent': 'Indent',
			'outdent': 'Outdent',
			'createlink': 'Hyperlink',
			'hyperlink': 'Hyperlink',
			'editlink': 'Hyperlink',
			'removelink': 'Remove link',
			'openlink': 'Open link',
			'image': 'Image',
			'table': 'Table',
			'lowercase': 'Lower Case',
			'uppercase': 'Upper Case',
			'print': ' Print',
			'cut': ' Cut',
			'copy': ' Copy',
			'paste': ' Paste',
			'clearformat': 'Clear Format',
			'fullscreen': 'Full Screen',
			'restore': 'Restore Screen',
			'sourcecode': 'Source Code',
			'preview': 'Preview',
			'splitmode': 'Split Editor',
			'address': 'Web Address',
			'text': 'Display Text',
			'addressPlaceholder': 'http://example.com',
			'textPlaceholder': 'Enter Text',
			'targetPlaceholder': 'Select Target',
			'titlePlaceholder': 'Enter a Title',
			'urlPlaceholder': 'http://example.com/image.png',
			'captionPlaceholder': 'Caption',
			'altPlaceholder': 'Alternative Text',
			'widthPlaceholder': 'auto',
			'heightPlaceholder': 'auto',
			'target': 'Open Link in',
			'linkBlankDescr': 'New Window',
			'linkSelfDescr': 'Same Window',
			'linkParentDescr': 'Parent Frame',
			'linkTopDescr': 'Full Body of the Window',
			'linkCustomDescr': 'Custom Frame Name',
			'title': 'Title',
			'url': 'You can also provide the URL to an image',
			'width': 'Width',
			'height': 'Height',
			'alt': 'Alternative Text',
			'caption': 'Caption',
			'display': 'Display',
			'displayPlaceholder': 'Display',
			'displayBlock': 'Block',
			'displayInline': 'Inline',
			'draggable': 'Enable Dragging',
			'resizable': 'Enable Resizing',
			'browse': 'Browse',
			'connectionError': '{{elementType}}: File Upload requires connection to the server.',
			'wrongItemIndex': '{{elementType}}: There is no file with such an index in the list of uploaded files.',
			'tooLongFileName': '{{elementType}}: File name is too long.',
			'totalFiles': 'Total files: ',
			'cancelFile': 'Cancel File',
			'dashedborders': 'Dashed Borders',
			'altrows': 'Alternate Rows',
			'insertRowBefore': 'Insert Row Before',
			'insertRowAfter': 'Insert Row After',
			'deleteRow': 'Delete Row',
			'insertColumnLeft': 'Insert Column Left',
			'insertColumnRight': 'Insert Column Right',
			'deleteColumn': 'Delete Column',
			'alignTop': 'Align Top',
			'alignMiddle': 'Align Middle',
			'alignBottom': 'Align Bottom',
			'delete': 'Delete',
			'tablerows': 'Table Rows',
			'tablecolumns': 'Table Columns',
			'tablevalign': 'Table Cell Vertical Align',
			'tablestyle': 'Table Style',
			'tableheader': 'Table Header',
			'buttonLabel': 'Custom Table',
			'pasteLabel': 'Choose the paste format action:',
			'cols': 'Columns',
			'rows': 'Rows',
			'alphabet': 'abcdefghijklmnopqrstuvwxyz',
			'header': 'Header',
			'column': 'Column',
			'plainText': 'Plain Text',
			'keepFormat': 'Keep Format',
			'cleanFormat': 'Clean Format',
			'roleDescription': 'Text Editor',
			'iframeTitle': 'Editor Content is Encloused in it\'s own DOM inside an iFrame',
			'toolbarButtonAriaLabel': 'Toolbar Toggle Button',
			'primaryToolbarAriaLabel': 'Primary Toolbar',
			'secondaryToolbarAriaLabel': 'Secondary Toolbar',
			'inputAriaLabel': 'Enter Text'
		},
		'de': {
			'invalidValue': '{{elementType}}: Ungültiger {{property}} Wert. {{property}} sollte vom Typ {{typeOne}} oder {{typeTwo}} sein.',
			'incorrectArgument': '{{elementType}}: Falsches Argument {{argumentName}} in Methode {{methodName}}.',
			'permissionsRequired': '{{elementType}}: Für die folgende Aktion {{actionName}} sind Berechtigungen erforderlich.',
			'ok': 'Ok',
			'cancel': 'Stornieren',
			'alignLeft': 'Linksbündig',
			'alignCenter': 'Im Zentrum anordnen',
			'alignRight': 'Rechts ausrichten',
			'alignJustify': 'Ausrichten Ausrichten',
			'segoeUi': 'Segoe UI',
			'arial': 'Arial',
			'georgia': 'Georgia',
			'impact': 'Impact',
			'tahoma': 'Tahoma',
			'timesNewRoman': 'Times New Roman',
			'verdana': 'Verdana',
			'p': 'Absatz',
			'pre': 'Code',
			'code': 'Code',
			'blockquote': 'Zitat',
			'h1': 'Überschrift 1',
			'h2': 'Überschrift 2',
			'h3': 'Überschrift 3',
			'h4': 'Überschrift 4',
			'h5': 'Überschrift 5',
			'h6': 'Überschrift 6',
			'bold': 'Fett gedruckt',
			'italic': 'Kursiv',
			'underline': 'Unterstreichen',
			'strikethrough': 'Durchgestrichen',
			'orderedlist': 'Bestellliste',
			'unorderedlist': 'Ungeordnete Liste',
			'subscript': 'Index',
			'superscript': 'Superscript',
			'alignment': 'Ausrichtungen',
			'fontname': 'Schriftartenname',
			'fontsize': 'Schriftgröße',
			'formats': 'Formate',
			'backgroundcolor': 'Hintergrundfarbe',
			'fontcolor': 'Schriftfarbe',
			'redo': 'Wiederholen',
			'undo': 'Rückgängig machen',
			'indent': 'Einzug',
			'outdent': 'Outdent',
			'createlink': 'Hyperlink',
			'hyperlink': 'Hyperlink',
			'editlink': 'Hyperlink',
			'removelink': 'Link entfernen',
			'openlink': 'Verbindung öffnen',
			'image': 'Bild',
			'table': 'Tabelle',
			'lowercase': 'Kleinbuchstaben',
			'uppercase': 'Großbuchstaben',
			'print': 'Drucken',
			'cut': 'Schnitt',
			'copy': 'Kopieren',
			'paste': ' Einfügen',
			'clearformat': 'Format löschen',
			'fullscreen': 'Vollbild',
			'restore': 'Bildschirm wiederherstellen',
			'sourcecode': 'Quellcode',
			'preview': 'Vorschau',
			'splitmode': 'Geteilter Editor',
			'address': 'Webadresse',
			'text': 'Text anzeigen',
			'addressPlaceholder': 'http://example.com',
			'textPlaceholder': 'Text eingeben',
			'targetPlaceholder': 'Ziel auswählen',
			'titlePlaceholder': 'Geben Sie einen Titel ein',
			'urlPlaceholder': 'http://example.com/image.png',
			'captionPlaceholder': 'Bildbeschriftung',
			'altPlaceholder': 'alternativer Text',
			'widthPlaceholder': 'auto',
			'heightPlaceholder': 'auto',
			'target': 'Öffnen Sie den Link in',
			'linkBlankDescr': 'Neues Fenster',
			'linkSelfDescr': 'Gleiches Fenster',
			'linkParentDescr': 'Übergeordneter Rahmen',
			'linkTopDescr': 'Ganzkörper des Fensters',
			'linkCustomDescr': 'Benutzerdefinierter Frame-Name',
			'title': 'Titel',
			'url': 'Sie können auch die URL zu einem Bild angeben',
			'width': 'Breite',
			'height': 'Höhe',
			'alt': 'alternativer Text',
			'caption': 'Bildbeschriftung',
			'display': 'Anzeige',
			'displayPlaceholder': 'Anzeige',
			'displayBlock': 'Block',
			'displayInline': 'Im Einklang',
			'draggable': 'Aktivieren Sie das Ziehen',
			'resizable': 'Aktivieren Sie die Größenänderung',
			'browse': 'Durchsuche',
			'connectionError': '{{elementType}}: Für das Hochladen von Dateien ist eine Verbindung zum Server erforderlich.',
			'wrongItemIndex': '{{elementType}}: Die Liste der hochgeladenen Dateien enthält keine Datei mit einem solchen Index.',
			'tooLongFileName': '{{elementType}}: Der Dateiname ist zu lang.',
			'totalFiles': 'Gesamtzahl der Dateien: ',
			'cancelFile': 'Datei abbrechen',
			'dashedborders': 'Gestrichelte Grenzen',
			'altrows': 'Alternative Zeilen',
			'insertRowBefore': 'Zeile vor einfügen',
			'insertRowAfter': 'Zeile nach einfügen',
			'deleteRow': 'Zeile löschen',
			'insertColumnLeft': 'Spalte links einfügen',
			'insertColumnRight': 'Spalte rechts einfügen',
			'deleteColumn': 'Spalte löschen',
			'alignTop': 'Oben ausrichten',
			'alignMiddle': 'Mitte ausrichten',
			'alignBottom': 'Unten ausrichten',
			'delete': 'Löschen',
			'tablerows': 'Tabellenzeilen',
			'tablecolumns': 'Tabellenspalten',
			'tablevalign': 'Vertikale Ausrichtung der Tabellenzelle',
			'tablestyle': 'Tischstil',
			'tableheader': 'Tabellenüberschrift',
			'buttonLabel': 'Benutzerdefinierte Tabelle',
			'pasteLabel': 'Wählen Sie die Aktion zum Einfügen des Formats:',
			'cols': 'Säulen',
			'rows': 'Reihen',
			'alphabet': 'abcdefghijklmnopqrstuvwxyz',
			'header': 'Header',
			'column': 'Säule',
			'plainText': 'Klartext',
			'keepFormat': 'Format beibehalten',
			'cleanFormat': 'Format bereinigen',
			'roleDescription': 'Texteditor',
			'iframeTitle': 'Der Inhalt des Editors befindet sich in einem eigenen DOM in einem iFrame',
			'toolbarButtonAriaLabel': 'Symbolleisten-Umschalttaste',
			'primaryToolbarAriaLabel': 'Primäre Symbolleiste',
			'secondaryToolbarAriaLabel': 'Sekundäre Symbolleiste',
			'inputAriaLabel': 'Text eingeben'
		},
		'it': {
			'invalidValue': '{{elementType}}: valore {{property}} non valido. {{property}} deve essere di tipo {{typeOne}} o {{typeTwo}}.',
			'incorrectArgument': '{{elementType}}: argomento {{topicName}} non corretto nel metodo {{methodName}}.',
			'permissionsRequired': '{{elementType}}: sono necessarie autorizzazioni per la seguente azione {{actionName}}.',
			'ok': 'Ok',
			'cancel': 'Annulla',
			'alignLeft': 'Allineare a sinistra',
			'alignCenter': 'Allinea al centro',
			'alignRight': 'Allinea a destra',
			'alignJustify': 'Allinea Giustifica',
			'segoeUi': 'Segoe UI',
			'arial': 'Arial',
			'georgia': 'Georgia',
			'impact': 'Impact',
			'tahoma': 'Tahoma',
			'timesNewRoman': 'Times New Roman',
			'verdana': 'Verdana',
			'p': 'Paragrafo',
			'pre': 'Codice',
			'code': 'Codice',
			'blockquote': 'Quotazione',
			'h1': 'Intestazione 1',
			'h2': 'Intestazione 2',
			'h3': 'Intestazione 3',
			'h4': 'Intestazione 4',
			'h5': 'Intestazione 5',
			'h6': 'Intestazione 6',
			'bold': 'Grassetto',
			'italic': 'Corsivo',
			'underline': 'Sottolineare',
			'strikethrough': 'Barrato',
			'orderedlist': 'Lista ordinata',
			'unorderedlist': 'Lista non ordinata',
			'subscript': 'Pedice',
			'superscript': 'Apice',
			'alignment': 'Allineamenti',
			'fontname': 'Nome carattere',
			'fontsize': 'Dimensione del font',
			'formats': 'Formati',
			'backgroundcolor': 'Colore di sfondo',
			'fontcolor': 'Colore del carattere',
			'redo': 'Rifare',
			'undo': 'Disfare',
			'indent': 'Rientro',
			'outdent': 'Outdent',
			'createlink': 'Collegamento ipertestuale',
			'hyperlink': 'Collegamento ipertestuale',
			'editlink': 'Collegamento ipertestuale',
			'removelink': 'Rimuovi collegamento',
			'openlink': 'Link aperto',
			'image': 'Immagine',
			'table': 'Tavolo',
			'lowercase': 'Case inferiore',
			'uppercase': 'Maiuscolo',
			'print': 'Stampa',
			'cut': 'Taglio',
			'copy': 'Copia',
			'paste': 'Incolla',
			'clearformat': 'Cancella formato',
			'fullscreen': 'A schermo intero',
			'restore': 'Ripristina schermo',
			'sourcecode': 'Codice sorgente',
			'preview': 'Anteprima',
			'splitmode': 'Editor diviso',
			'address': 'Indirizzo Web',
			'text': 'Visualizza testo',
			'addressPlaceholder': 'http://example.com',
			'textPlaceholder': 'Inserire il testo',
			'targetPlaceholder': 'Seleziona Target',
			'titlePlaceholder': 'Immettere un titolo',
			'urlPlaceholder': 'http://example.com/image.png',
			'captionPlaceholder': 'Didascalia',
			'altPlaceholder': 'Testo alternativo',
			'widthPlaceholder': 'auto',
			'heightPlaceholder': 'auto',
			'target': 'Apri collegamento in',
			'linkBlankDescr': 'Nuova finestra',
			'linkSelfDescr': 'Stessa finestra',
			'linkParentDescr': 'Frame genitore',
			'linkTopDescr': 'Tutto il corpo della finestra',
			'linkCustomDescr': 'Nome frame personalizzato',
			'title': 'Titolo',
			'url': 'Puoi anche fornire l\'URL a un\'immagine',
			'width': 'Larghezza',
			'height': 'Altezza',
			'alt': 'Testo alternativo',
			'caption': 'Didascalia',
			'display': 'Schermo',
			'displayPlaceholder': 'Schermo',
			'displayBlock': 'Bloccare',
			'displayInline': 'In linea',
			'draggable': 'Abilita il trascinamento',
			'resizable': 'Abilita ridimensionamento',
			'browse': 'Navigare',
			'connectionError': '{{elementType}}: il caricamento del file richiede la connessione al server.',
			'wrongItemIndex': '{{elementType}}: non è presente alcun file con tale indice nell\'elenco dei file caricati.',
			'tooLongFileName': '{{elementType}}: il nome del file è troppo lungo.',
			'totalFiles': 'File totali: ',
			'cancelFile': 'Annulla file',
			'dashedborders': 'Bordi tratteggiati',
			'altrows': 'Righe alternative',
			'insertRowBefore': 'Inserisci riga prima',
			'insertRowAfter': 'Inserisci riga dopo',
			'deleteRow': 'Elimina riga',
			'insertColumnLeft': 'Inserisci colonna a sinistra',
			'insertColumnRight': 'Inserisci colonna a destra',
			'deleteColumn': 'Elimina colonna',
			'alignTop': 'Allinea in alto',
			'alignMiddle': 'Allinea al centro',
			'alignBottom': 'Allinea in basso',
			'delete': 'Elimina',
			'tablerows': 'Righe tabella',
			'tablecolumns': 'Colonne della tabella',
			'tablevalign': 'Allineamento verticale delle celle della tabella',
			'tablestyle': 'Stile tavolo',
			'tableheader': 'Intestazione tabella',
			'buttonLabel': 'Tabella personalizzata',
			'pasteLabel': 'Scegli l\'azione di formato Incolla:',
			'cols': 'Colonne',
			'rows': 'Righe',
			'alphabet': 'abcdefghijklmnopqrstuvwxyz',
			'header': 'Intestazione',
			'column': 'Colonna',
			'plainText': 'Testo normale',
			'keepFormat': 'Mantieni formato',
			'cleanFormat': 'Formato pulito',
			'roleDescription': 'Editor di testo',
			'iframeTitle': 'Il contenuto dell\'editor è racchiuso nel proprio DOM all\'interno di un iFrame',
			'toolbarButtonAriaLabel': 'Pulsante di attivazione',
			'primaryToolbarAriaLabel': 'Barra degli strumenti principale',
			'secondaryToolbarAriaLabel': 'Barra degli strumenti secondaria',
			'inputAriaLabel': 'Inserire il testo'
		}
	};

	init() {
		const that = this,
			editor = that.editor.current;

		editor.value = that.getEditorValue(editor.locale);

		document.querySelector('.options').addEventListener('change', function (event) {
			const locale = event.target.innerHTML.trim().toLowerCase();

			editor.locale = locale;
			editor.value = that.getEditorValue(locale);
		});
	};

	getEditorValue(locale) {
		switch (locale) {
			case 'en':
				return `
	            <div>
	                <h2>What is Lorem Ipsum?</h2>
	                <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem
	                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
	                    a galley of type and scrambled it to make a type specimen book. It has survived not only five
	                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
	                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
	                    more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
	                    Ipsum.</p>
	            </div>
	            <div>
	                <h2>Why do we use it?</h2>
	                <p>It is a long established fact that a reader will be distracted by the readable content of a page when
	                    looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
	                    distribution of letters, as opposed to using 'Content here, content here', making it look like
	                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
	                    default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
	                    infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose
	                    (injected humour and the like).</p>
	            </div><br>
	            <div>
	                <h2>Where does it come from?</h2>
	                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
	                    classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
	                    professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
	                    consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
	                    literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
	                    of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
	                    book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
	                    Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
	                <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
	                    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in
	                    their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
	                </p>
	            </div>
	            <div>
	                <h2>Where can I get some?</h2>
	                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
	                    alteration in some form, by injected humour, or randomised words which don't look even slightly
	                    believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
	                    anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet
	                    tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
	                    It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,
	                    to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free
	                    from repetition, injected humour, or non-characteristic words etc.</p>
	            </div>`;
			case 'de':
				return `
	            <div>
	                <h2>Was ist Lorem Ipsum?</h2>
	                <p><strong>Lorem Ipsum</strong> ist ein einfacher Demo-Text für die Print- und Schriftindustrie. Lorem
	                    Ipsum ist in der Industrie bereits der Standard Demo-Text seit 1500, als ein unbekannter
	                    Schriftsteller eine Hand voll Wörter nahm und diese durcheinander warf um ein Musterbuch zu
	                    erstellen. Es hat nicht nur 5 Jahrhunderte überlebt, sondern auch in Spruch in die elektronische
	                    Schriftbearbeitung geschafft (bemerke, nahezu unverändert). Bekannt wurde es 1960, mit dem
	                    erscheinen von "Letraset", welches Passagen von Lorem Ipsum enhielt, so wie Desktop Software wie
	                    "Aldus PageMaker" - ebenfalls mit Lorem Ipsum.</p>
	            </div>
	            <div>
	                <h2>Warum nutzen wir es?</h2>
	                <p>Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird, wenn er sich ein Layout
	                    ansieht. Der Punkt, Lorem Ipsum zu nutzen, ist, dass es mehr oder weniger die normale Anordnung von
	                    Buchstaben darstellt und somit nach lesbarer Sprache aussieht. Viele Desktop Publisher und
	                    Webeditoren nutzen mittlerweile Lorem Ipsum als den Standardtext, auch die Suche im Internet nach
	                    "lorem ipsum" macht viele Webseiten sichtbar, wo diese noch immer vorkommen. Mittlerweile gibt es
	                    mehrere Versionen des Lorem Ipsum, einige zufällig, andere bewusst (beeinflusst von Witz und des
	                    eigenen Geschmacks)</p>
	            </div><br>
	            <div>
	                <h2>Wo kommt es her?</h2>
	                <p>Glauben oder nicht glauben, Lorem Ipsum ist nicht nur ein zufälliger Text. Er hat Wurzeln aus der
	                    Lateinischen Literatur von 45 v. Chr, was ihn über 2000 Jahre alt macht. Richar McClintock, ein
	                    Lateinprofessor des Hampden-Sydney College in Virgnia untersuche einige undeutliche Worte,
	                    "consectetur", einer Lorem Ipsum Passage und fand eine unwiederlegbare Quelle. Lorem Ipsum komm aus
	                    der Sektion 1.10.32 und 1.10.33 des "de Finibus Bonorum et Malorum" (Die Extreme von Gut und Böse)
	                    von Cicero, geschrieben 45 v. Chr. Dieses Buch ist Abhandlung der Ethiktheorien, sehr bekannt wärend
	                    der Renaissance. Die erste Zeile des Lorem Ipsum, "Lorem ipsum dolor sit amet...", kommt aus einer
	                    Zeile der Sektion 1.10.32.</p>
	                <p>Der Standardteil von Lorem Ipsum, genutzt seit 1500, ist reproduziert für die, die es interessiert.
	                    Sektion 1.10.32 und 1.10.33 von "de Finibus Bonorum et Malroum" von Cicero sind auch reproduziert in
	                    ihrer Originalform, abgeleitet von der Englischen Version aus von 1914 (H. Rackham)</p>
	            </div>
	            <div>
	                <h2>Wo kann ich es kriegen?</h2>
	                <p>Es gibt viele Variationen der Passages des Lorem Ipsum, aber der Hauptteil erlitt Änderungen in
	                    irgendeiner Form, durch Humor oder zufällige Wörter welche nicht einmal ansatzweise glaubwürdig
	                    aussehen. Wenn du eine Passage des Lorem Ipsum nutzt, solltest du aufpassen dass in der Mitte des
	                    Textes keine ungewollten Wörter stehen. Viele der Generatoren im Internet neigen dazu, vorgefertigte
	                    Stücke zu wiederholen - was es nötig machte einen richtigen Generator zu entwickeln. Wir nutzen ein
	                    Wörterbuch aus über 200 Lateinischen Wörter, kombiniert mit einer Handvoll Kunstsätzen, welche das
	                    Lorem Ipsum glaubwürdig macht. Das generierte Lorem Ipsum ist außerdem frei von Wiederholungen,
	                    Humor oder unqualitativen Wörter etc, ...</p>
	            </div>`;
			case 'it':
				return `
	            <div>
	                <h2>Cos’è Lorem Ipsum?</h2>
	                <p><strong>Lorem Ipsum</strong> è un testo segnaposto utilizzato nel settore della tipografia e della
	                    stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un
	                    anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È
	                    sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione,
	                    pervenendoci sostanzialmente inalterato. Fu reso popolare, negli anni ’60, con la diffusione dei
	                    fogli di caratteri trasferibili “Letraset”, che contenevano passaggi del Lorem Ipsum, e più
	                    recentemente da software di impaginazione come Aldus PageMaker, che includeva versioni del Lorem
	                    Ipsum.</p>
	            </div>
	            <div>
	                <h2>Perchè lo utilizziamo?</h2>
	                <p>È universalmente riconosciuto che un lettore che osserva il layout di una pagina viene distratto dal
	                    contenuto testuale se questo è leggibile. Lo scopo dell’utilizzo del Lorem Ipsum è che offre una
	                    normale distribuzione delle lettere (al contrario di quanto avviene se si utilizzano brevi frasi
	                    ripetute, ad esempio “testo qui”), apparendo come un normale blocco di testo leggibile. Molti
	                    software di impaginazione e di web design utilizzano Lorem Ipsum come testo modello. Molte versioni
	                    del testo sono state prodotte negli anni, a volte casualmente, a volte di proposito (ad esempio
	                    inserendo passaggi ironici).</p>
	            </div><br>
	            <div>
	                <h2>Da dove viene?</h2>
	                <p>Al contrario di quanto si pensi, Lorem Ipsum non è semplicemente una sequenza casuale di caratteri.
	                    Risale ad un classico della letteratura latina del 45 AC, cosa che lo rende vecchio di 2000 anni.
	                    Richard McClintock, professore di latino al Hampden-Sydney College in Virginia, ha ricercato una
	                    delle più oscure parole latine, consectetur, da un passaggio del Lorem Ipsum e ha scoperto tra i
	                    vari testi in cui è citata, la fonte da cui è tratto il testo, le sezioni 1.10.32 and 1.10.33 del
	                    "de Finibus Bonorum et Malorum" di Cicerone. Questo testo è un trattato su teorie di etica, molto
	                    popolare nel Rinascimento. La prima riga del Lorem Ipsum, "Lorem ipsum dolor sit amet..", è tratta
	                    da un passaggio della sezione 1.10.32.</p>
	                <p>Il brano standard del Lorem Ipsum usato sin dal sedicesimo secolo è riprodotto qui di seguito per
	                    coloro che fossero interessati. Anche le sezioni 1.10.32 e 1.10.33 del "de Finibus Bonorum et
	                    Malorum" di Cicerone sono riprodotte nella loro forma originale, accompagnate dalla traduzione
	                    inglese del 1914 di H. Rackham.</p>
	            </div>
	            <div>
	                <h2>Dove posso trovarlo?</h2>
	                <p>Esistono innumerevoli variazioni dei passaggi del Lorem Ipsum, ma la maggior parte hanno subito delle
	                    variazioni del tempo, a causa dell’inserimento di passaggi ironici, o di sequenze casuali di
	                    caratteri palesemente poco verosimili. Se si decide di utilizzare un passaggio del Lorem Ipsum, è
	                    bene essere certi che non contenga nulla di imbarazzante.
	                    In genere, i generatori di testo segnaposto disponibili su internet tendono a ripetere paragrafi
	                    predefiniti, rendendo questo il primo vero generatore automatico su intenet. Infatti utilizza un
	                    dizionario di oltre 200 vocaboli latini, combinati con un insieme di modelli di strutture di
	                    periodi, per generare passaggi di testo verosimili. Il testo così generato è sempre privo di
	                    ripetizioni, parole imbarazzanti o fuori luogo ecc.</p>
	            </div>`;
			default:
				return '';
		}
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
				<Editor ref={this.editor} id="editor" toolbarItems={this.toolbarItems} locale={this.locale} messages={this.messages}></Editor>
				<div className="options">
					<div className="description">
						<h4>Select a locale:</h4>
					</div>
					<div className="option">
						<RadioButton>EN</RadioButton>
						<RadioButton checked>DE</RadioButton>
						<RadioButton>IT</RadioButton>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
