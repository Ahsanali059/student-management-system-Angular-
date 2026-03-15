import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherService } from './teacher.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
    selector: 'app-teacher-list',
    standalone: true,
    imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatCardModule, MatChipsModule],
    templateUrl: './teacher-list.component.html',
    styleUrl: './teacher-list.component.css'
})
export class TeacherListComponent implements OnInit {
    teachers: any[] = [];

    constructor(private teacherService: TeacherService) { }

    ngOnInit(): void {
        this.teacherService.getAll().subscribe(data => this.teachers = data);
    }
}
