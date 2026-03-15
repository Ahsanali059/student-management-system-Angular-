import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
   selector: 'app-reports',
   standalone: true,
   imports: [
      CommonModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatProgressBarModule
   ],
   templateUrl: './reports.component.html'
})
export class ReportsComponent { }
