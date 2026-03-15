import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-marks',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './marks.component.html'
})
export class MarksComponent {
  displayedColumns: string[] = ['rollNumber', 'name', 'marks', 'grade'];
  marksData = [
    { rollNumber: '101', name: 'John Doe', marks: 85 },
    { rollNumber: '102', name: 'Jane Smith', marks: 92 },
    { rollNumber: '103', name: 'Alice Brown', marks: 78 },
    { rollNumber: '104', name: 'Bob Wilson', marks: 65 },
    { rollNumber: '105', name: 'Charlie Davis', marks: 45 }
  ];

  calculateGrade(marks: number): string {
    if (marks >= 90) return 'A+';
    if (marks >= 80) return 'A';
    if (marks >= 70) return 'B';
    if (marks >= 50) return 'C';
    return 'F';
  }

  getGradeClass(marks: number): any {
    const grade = this.calculateGrade(marks);
    return {
      'bg-emerald-100 text-emerald-700': grade === 'A+' || grade === 'A',
      'bg-indigo-100 text-indigo-700': grade === 'B',
      'bg-amber-100 text-amber-700': grade === 'C',
      'bg-rose-100 text-rose-700': grade === 'F'
    };
  }
}
