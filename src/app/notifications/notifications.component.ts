import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- Add this line

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule], // <-- Add RouterModule here
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {}