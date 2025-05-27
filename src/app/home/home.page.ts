import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRow, IonCol } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterModule, IonCol, IonRow, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage {
  constructor() { }
}
