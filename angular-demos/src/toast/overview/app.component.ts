import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ButtonComponent } from 'smart-webcomponents-angular/button';
import { ToastComponent } from 'smart-webcomponents-angular/toast';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit, OnInit {	
	@ViewChild('button', { read: ButtonComponent, static: false }) button!: ButtonComponent;
	@ViewChild('button2', { read: ButtonComponent, static: false }) button2!: ButtonComponent;
	@ViewChild('button3', { read: ButtonComponent, static: false }) button3!: ButtonComponent;
	@ViewChild('button4', { read: ButtonComponent, static: false }) button4!: ButtonComponent;
	@ViewChild('button5', { read: ButtonComponent, static: false }) button5!: ButtonComponent;
	@ViewChild('button6', { read: ButtonComponent, static: false }) button6!: ButtonComponent;
	@ViewChild('toast', { read: ToastComponent, static: false }) toast!: ToastComponent;
	@ViewChild('toast2', { read: ToastComponent, static: false }) toast2!: ToastComponent;
	@ViewChild('toast3', { read: ToastComponent, static: false }) toast3!: ToastComponent;
	@ViewChild('toast4', { read: ToastComponent, static: false }) toast4!: ToastComponent;
	@ViewChild('toast5', { read: ToastComponent, static: false }) toast5!: ToastComponent;
	@ViewChild('toast6', { read: ToastComponent, static: false }) toast6!: ToastComponent;
	
 
	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
		// afterViewInit code.
		this.init();
    }
		
	init(): void {
		// init code.
	    
    
        let mobileToast1 = document.getElementById('mobileToast1'), mobileToast2 = document.getElementById('mobileToast2'), desktopToast = document.getElementById('desktopToast'), notificationMessagingContainer = document.getElementById('notificationMessagingContainer'), mobileToastsAreOpened = false, notificationsCount = 0, toastContentOptions = ['Add a new label', 'This item alredy has the label "travel".'], notificationsText = ['Hi!', 'How are you?', 'Do you want to see a movie tohinght?'];
        const notificationMessaging = document.querySelector("#notificationMessaging");
        setInterval(function () { toggleMobileToasts(); }, 2000);
        function toggleMobileToasts() {
            if (mobileToastsAreOpened) {
                mobileToast1.closeAll();
                mobileToast2.closeAll();
                desktopToast.closeAll();
                if (notificationsCount > 2) {
                    notificationMessaging.closeAll();
                    notificationsCount = 0;
                }
            }
            else {
                mobileToast1.open();
                mobileToast2.value = toastContentOptions[Math.floor((Math.random() * 2))];
                mobileToast2.open();
                desktopToast.open();
                notificationMessaging.open();
                notificationMessaging.value = notificationsText[notificationsCount];
                notificationsCount++;
            }
            mobileToastsAreOpened = !mobileToastsAreOpened;
        }
        notificationMessagingContainer.addEventListener('click', function (event) {
            const target = event.target;
            let clickedArrow = target.closest('.material-icons.arrow'), clickedItem = target.closest('.smart-toast-item');
            if (clickedArrow) {
                let footer = clickedItem.querySelector('.message-footer');
                footer.classList.toggle('smart-hidden');
                clickedArrow.innerHTML = footer.classList.contains('smart-hidden') ? '&#xE313;' : '&#xE316;';
            }
        });
    

	}	
}