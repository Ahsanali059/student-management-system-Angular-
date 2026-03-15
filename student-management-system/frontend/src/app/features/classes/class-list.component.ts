import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassService } from '../subjects/subject.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-class-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatProgressBarModule],
  templateUrl: './class-list.component.html'
})
export class ClassListComponent implements OnInit {
  classes: any[] = [];
  constructor(private classService: ClassService) { }
  ngOnInit(): void { this.classService.getAll().subscribe(data => this.classes = data); }
}
