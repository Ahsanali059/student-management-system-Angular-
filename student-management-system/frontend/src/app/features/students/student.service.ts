import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private students = [
        { id: 1, rollNumber: '101', firstName: 'John', lastName: 'Doe', email: 'john@example.com', phone: '123-456-7890', dateOfBirth: '2005-05-15', gender: 'Male', address: '123 Main St', className: '10A', status: 'Active' },
        { id: 2, rollNumber: '102', firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', phone: '234-567-8901', dateOfBirth: '2006-06-20', gender: 'Female', address: '456 Oak Ave', className: '10B', status: 'Active' },
        { id: 3, rollNumber: '103', firstName: 'Alice', lastName: 'Brown', email: 'alice@example.com', phone: '345-678-9012', dateOfBirth: '2005-08-10', gender: 'Female', address: '789 Pine Rd', className: '11A', status: 'Inactive' },
        { id: 4, rollNumber: '104', firstName: 'Bob', lastName: 'Wilson', email: 'bob@example.com', phone: '456-789-0123', dateOfBirth: '2006-01-05', gender: 'Male', address: '321 Elm St', className: '10A', status: 'Active' },
        { id: 5, rollNumber: '105', firstName: 'Charlie', lastName: 'Davis', email: 'charlie@example.com', phone: '567-890-1234', dateOfBirth: '2005-12-12', gender: 'Male', address: '654 Maple Dr', className: '12C', status: 'Active' }
    ];

    constructor() { }

    getAll(): Observable<any[]> {
        return of(this.students).pipe(delay(500));
    }

    get(id: any): Observable<any> {
        const student = this.students.find(s => s.id === +id);
        return of(student).pipe(delay(500));
    }

    create(data: any): Observable<any> {
        const newStudent = { ...data, id: this.students.length + 1 };
        this.students.push(newStudent);
        return of(newStudent).pipe(delay(500));
    }

    update(id: any, data: any): Observable<any> {
        const index = this.students.findIndex(s => s.id === +id);
        if (index !== -1) {
            this.students[index] = { ...this.students[index], ...data };
            return of(this.students[index]).pipe(delay(500));
        }
        return of(null);
    }

    delete(id: any): Observable<any> {
        this.students = this.students.filter(s => s.id !== +id);
        return of(true).pipe(delay(500));
    }

    search(query: string): Observable<any[]> {
        const filtered = this.students.filter(s =>
            s.firstName.toLowerCase().includes(query.toLowerCase()) ||
            s.lastName.toLowerCase().includes(query.toLowerCase()) ||
            s.email.toLowerCase().includes(query.toLowerCase())
        );
        return of(filtered).pipe(delay(500));
    }
}
