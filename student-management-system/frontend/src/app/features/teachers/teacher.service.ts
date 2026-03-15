import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {
    private teachers = [
        { id: 1, name: 'Dr. Robert Smith', email: 'robert@unimail.com', phone: '555-0101', subject: 'Mathematics', qualification: 'PhD in Math', experience: 12 },
        { id: 2, name: 'Prof. Sarah Jenkins', email: 'sarah@unimail.com', phone: '555-0102', subject: 'Physics', qualification: 'MSc Physics', experience: 8 },
        { id: 3, name: 'Mr. David Miller', email: 'david@unimail.com', phone: '555-0103', subject: 'Computer Science', qualification: 'B.Tech IT', experience: 5 },
        { id: 4, name: 'Ms. Emily White', email: 'emily@unimail.com', phone: '555-0104', subject: 'English', qualification: 'MA English', experience: 10 }
    ];

    constructor() { }

    getAll(): Observable<any[]> {
        return of(this.teachers).pipe(delay(500));
    }

    get(id: any): Observable<any> {
        const teacher = this.teachers.find(t => t.id === +id);
        return of(teacher).pipe(delay(500));
    }

    create(data: any): Observable<any> {
        const newTeacher = { ...data, id: this.teachers.length + 1 };
        this.teachers.push(newTeacher);
        return of(newTeacher).pipe(delay(500));
    }
}
