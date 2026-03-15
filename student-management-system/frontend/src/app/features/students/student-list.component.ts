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
import { Student } from '../../core/models/student.model';
import { SearchService } from '../../core/services/search.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { inject, DestroyRef } from '@angular/core';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { StudentFormComponent } from './student-form.component';
import { MatSelectModule } from '@angular/material/select';

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
    MatSnackBarModule,
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  displayedColumns: string[] = ['rollNumber', 'name', 'email', 'className', 'status', 'actions'];
  dataSource = new MatTableDataSource<Student>([]);
  searchQuery = '';
  private destroyRef = inject(DestroyRef);

  constructor(
    private studentService: StudentService,
    private searchService: SearchService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadStudents();

    this.searchService.searchQuery$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(query => {
        this.dataSource.filter = query.trim().toLowerCase();
      });
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
          ] as Student[];
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

  openAddDialog(): void {
    const dialogRef = this.dialog.open(StudentFormComponent, {
      width: '600px',
      data: { title: 'Add New Student', submitText: 'Enroll Student' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentService.create(result).subscribe({
          next: () => {
            this.snackBar.open('Student enrolled successfully!', 'Close', { duration: 3000 });
            this.loadStudents();
          },
          error: (err) => this.snackBar.open('Error enrolling student', 'Close', { duration: 3000 })
        });
      }
    });
  }

  openEditDialog(student: Student): void {
    const dialogRef = this.dialog.open(StudentFormComponent, {
      width: '600px',
      data: { title: 'Edit Student Details', submitText: 'Update Information', student }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentService.update(student.id, result).subscribe({
          next: () => {
            this.snackBar.open('Student updated successfully!', 'Close', { duration: 3000 });
            this.loadStudents();
          },
          error: (err) => this.snackBar.open('Error updating student', 'Close', { duration: 3000 })
        });
      }
    });
  }

  deleteStudent(student: Student): void {
    if (confirm(`Are you sure you want to delete ${student.firstName} ${student.lastName}?`)) {
      this.studentService.delete(student.id).subscribe({
        next: () => {
          this.snackBar.open('Student deleted successfully', 'Close', { duration: 3000 });
          this.loadStudents();
        },
        error: (err) => this.snackBar.open('Error deleting student', 'Close', { duration: 3000 })
      });
    }
  }
}
