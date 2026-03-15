import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SubjectService {
    private subjects = [
        { id: 1, name: 'Mathematics', code: 'MATH101', description: 'Advanced Calculus and Trigonometry', credits: 4, teacher: 'Dr. Robert Smith' },
        { id: 2, name: 'Physics', code: 'PHY201', description: 'Quantum Mechanics and Theory of Relativity', credits: 4, teacher: 'Prof. Sarah Jenkins' },
        { id: 3, name: 'Computer Science', code: 'CS301', description: 'Data Structures and Algorithms', credits: 3, teacher: 'Mr. David Miller' },
        { id: 4, name: 'English Literature', code: 'ENG102', description: 'Modern Drama and Classical Poems', credits: 2, teacher: 'Ms. Emily White' }
    ];

    constructor() { }

    getAll(): Observable<any[]> {
        return of(this.subjects).pipe(delay(500));
    }
}

@Injectable({
    providedIn: 'root'
})
export class ClassService {
    private classes = [
        { id: 1, className: '10A', section: 'Morning', capacity: 30, teacher: 'Dr. Robert Smith', totalStudents: 28 },
        { id: 2, className: '10B', section: 'Morning', capacity: 30, teacher: 'Prof. Sarah Jenkins', totalStudents: 25 },
        { id: 3, className: '11A', section: 'Afternoon', capacity: 25, teacher: 'Ms. Emily White', totalStudents: 22 }
    ];

    constructor() { }

    getAll(): Observable<any[]> {
        return of(this.classes).pipe(delay(500));
    }
}
