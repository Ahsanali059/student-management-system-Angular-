import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; // Added for MatFormFieldModule
import { MatButtonToggleModule } from '@angular/material/button-toggle'; // Added for MatButtonToggleModule
import { MatInputModule } from '@angular/material/input'; // Added for MatInputModule

@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatInputModule,
    FormsModule, // Keep FormsModule for ngModel
    MatDatepickerModule, // Keep MatDatepickerModule
    MatNativeDateModule, // Keep MatNativeDateModule
    MatRadioModule // Keep MatRadioModule
  ],
  templateUrl: './attendance.component.html'
})
export class AttendanceComponent implements OnInit {
  selectedClass = '10A';
  today = new Date();
  displayedColumns: string[] = ['rollNumber', 'name', 'status'];
  attendanceData = [
    { rollNumber: '101', name: 'John Doe', status: 'Present' },
    { rollNumber: '102', name: 'Jane Smith', status: 'Present' },
    { rollNumber: '103', name: 'Alice Brown', status: 'Absent' },
    { rollNumber: '104', name: 'Bob Wilson', status: 'Present' },
    { rollNumber: '105', name: 'Charlie Davis', status: 'Present' }
  ];

  ngOnInit(): void { }

  markAll(status: string): void {
    this.attendanceData.forEach(s => s.status = status);
  }
}
