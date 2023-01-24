import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { EditorComponent } from 'smart-webcomponents-angular/editor';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;
	
    sanitized: boolean = true;

    value: string = `
        Cross-Site Scripting (XSS) attacks are a type of injection, 
        in which malicious scripts are injected into otherwise benign and trusted websites. 
        XSS attacks occur when an attacker uses a web application to send malicious code, 
        generally in the form of a browser side script, to a different end user. 
        Flaws that allow these attacks to succeed are quite widespread and occur anywhere a web application uses 
        input from a user within the output it generates without validating or encoding it.
        The following is an attempt for a XSS attack:
            <script></script>
            <IMG """><SCRIPT>alert(" XSS")</SCRIPT>"\>
            <IMG SRC=/ onerror="alert(String.fromCharCode(88,83,83))"></img>
            \<a onmouseover=alert(document.cookie)\>xxs link\</a\>
                <IMG SRC=\`javascript: alert("RSnake says, 'XSS'")\`>
            <IMG SRC=JaVaScRiPt:alert('XSS')>
            <svg/onload='+/" /+/onmouseover=1/+/[*/[]/+alert(1)//'>
            <SCRIPT SRC=http://xss.rocks/xss.js></SCRIPT>
            <IMG src=javascript:alert(&quot;XSS&quot;)>`
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
    }
}