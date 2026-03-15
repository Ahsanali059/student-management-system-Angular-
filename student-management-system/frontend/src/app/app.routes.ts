import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login.component';
import { MainLayoutComponent } from './shared/components/main-layout.component';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', loadComponent: () => import('./features/auth/register.component').then(m => m.RegisterComponent) },
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent)
            },
            {
                path: 'students',
                loadComponent: () => import('./features/students/student-list.component').then(m => m.StudentListComponent)
            },
            {
                path: 'teachers',
                loadComponent: () => import('./features/teachers/teacher-list.component').then(m => m.TeacherListComponent)
            },
            {
                path: 'classes',
                loadComponent: () => import('./features/classes/class-list.component').then(m => m.ClassListComponent)
            },
            {
                path: 'subjects',
                loadComponent: () => import('./features/subjects/subject-list.component').then(m => m.SubjectListComponent)
            },
            {
                path: 'attendance',
                loadComponent: () => import('./features/attendance/attendance.component').then(m => m.AttendanceComponent)
            },
            {
                path: 'marks',
                loadComponent: () => import('./features/marks/marks.component').then(m => m.MarksComponent)
            },
            {
                path: 'reports',
                loadComponent: () => import('./features/reports/reports.component').then(m => m.ReportsComponent)
            },
            {
                path: 'profile',
                loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent)
            }
        ]
    },
    { path: '**', redirectTo: 'dashboard' }
];
