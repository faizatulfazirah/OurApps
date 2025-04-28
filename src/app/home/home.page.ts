import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastController } from '@ionic/angular/standalone';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonButton, IonList, IonRadioGroup, IonRadio, IonListHeader } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonInput,
    IonItem,
    IonLabel,
    IonButton,
    IonList,
    IonRadioGroup,
    IonRadio,
    IonListHeader
  ]
})
export class HomePage {
  constructor(private toastCtrl: ToastController) {}

  async onSubmit(form: NgForm) {
    if (form.invalid) return;
    
    console.log('Form submitted:', form.value);
    
    const toast = await this.toastCtrl.create({
      message: 'Form submitted successfully!',
      duration: 2000,
      color: 'success'
    });
    await toast.present();
  }
}