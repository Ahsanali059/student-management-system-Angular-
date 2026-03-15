import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectService } from './subject.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-subject-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatChipsModule],
  templateUrl: './subject-list.component.html'
})
export class SubjectListComponent implements OnInit {
  subjects: any[] = [];
  constructor(private subjectService: SubjectService) { }
  ngOnInit(): void { this.subjectService.getAll().subscribe(data => this.subjects = data); }
}
