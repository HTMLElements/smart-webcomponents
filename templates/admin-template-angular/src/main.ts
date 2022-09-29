import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}



document.body.addEventListener('click', function (event: Event) {

  const settingsButton = document.getElementById('settingsButton');
  const settingsPanel = document.getElementById('settingsPanel');
  
  if (
    document.body.classList.contains('settings-panel-shown') &&
    !settingsPanel!.contains(event.target as Node) &&
    !settingsButton!.contains(event.target as Node)
  ) {
    document.body.classList.remove('settings-panel-shown');
  }
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));