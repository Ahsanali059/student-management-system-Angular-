import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from './student.service';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    FormsModule
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['rollNumber', 'name', 'email', 'className', 'status', 'actions'];
  dataSource = new MatTableDataSource<any>([]);
  searchQuery = '';

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getAll().subscribe({
      next: (data) => {
        let students = data;
        // Mock data if empty for visualization
        if (students.length === 0) {
          students = [
            { id: 1, rollNumber: '101', firstName: 'John', lastName: 'Doe', email: 'john@example.com', className: '10A', status: 'Active' },
            { id: 2, rollNumber: '102', firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', className: '10B', status: 'Active' },
            { id: 3, rollNumber: '103', firstName: 'Alice', lastName: 'Brown', email: 'alice@example.com', className: '11A', status: 'Inactive' },
          ];
        }
        this.dataSource.data = students;
      },
      error: (e) => console.error(e)
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSearch(): void {
    if (this.searchQuery) {
      this.studentService.search(this.searchQuery).subscribe(data => this.dataSource.data = data);
    } else {
      this.loadStudents();
    }
  }
}
