import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-notifier',
  standalone: true,
  imports: [],
  templateUrl: './notifier.component.html',
  styleUrl: './notifier.component.scss'
})
export class NotifierComponent implements OnInit{

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public snackBarRef: MatSnackBarRef<NotifierComponent>
  ) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
