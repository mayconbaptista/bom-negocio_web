import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from '../components/notifier/notifier.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  public showNotification(
    message: string, 
    messageType: 'Alert' | 'Success' | 'Warning' | 'Danger' = 'Alert',
    action: string, 
    duration: number = 5000
  ): void {
    this.snackBar.openFromComponent(NotifierComponent, {
      data:{
        message: message,
        action: action,
        buttonText: 'Close',
        type: messageType
      },
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['notifier']
    });
  }

  public showSuccessNotification(message: string): void {
    this.showNotification(message, 'Success', 'Close', 5000);
  }
}
