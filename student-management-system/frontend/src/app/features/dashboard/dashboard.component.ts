import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  username = '';

  constructor(private storageService: StorageService) {
    this.username = this.storageService.getUser().username || 'User';
  }
  stats = [
    { title: 'Student Enrollment', value: '1,250', icon: 'school', color: 'bg-indigo-600', trend: 12, trendUp: true },
    { title: 'Faculty Members', value: '48', icon: 'badge', color: 'bg-emerald-500', trend: 5, trendUp: true },
    { title: 'Active Sections', value: '24', icon: 'layers', color: 'bg-purple-600', trend: 2, trendUp: false },
    { title: 'Overall Attendance', value: '98.4%', icon: 'verified', color: 'bg-amber-500', trend: 3, trendUp: true }
  ];

  activities = [
    { text: 'New Student: Sarah Jenkins enrolled in Class 10A', time: '12 minutes ago', icon: 'person_add', type: 'enrollment' },
    { text: 'Attendance finalized for High School Block', time: '2 hours ago', icon: 'done_all', type: 'attendance' },
    { text: 'System Maintenance scheduled for midnight', time: '5 hours ago', icon: 'settings', type: 'system' },
    { text: 'New Faculty member: Dr. Robert Wilson joined', time: 'Yesterday', icon: 'hail', type: 'faculty' }
  ];
}
