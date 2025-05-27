import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonChip, IonLabel, IonList, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-grid-basic',
  templateUrl: './grid-basic.page.html',
  styleUrls: ['./grid-basic.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonItem, IonList, IonLabel, IonChip, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class GridBasicPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // init something 
  }

}
