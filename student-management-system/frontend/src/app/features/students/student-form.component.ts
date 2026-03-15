import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-student-form',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule
    ],
    templateUrl: './student-form.component.html'
})
export class StudentFormComponent implements OnInit {
    studentForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<StudentFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.studentForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            rollNumber: ['', Validators.required],
            className: ['', Validators.required],
            status: ['Active', Validators.required]
        });
    }

    ngOnInit(): void {
        if (this.data.student) {
            this.studentForm.patchValue(this.data.student);
        }
    }

    onSubmit(): void {
        if (this.studentForm.valid) {
            this.dialogRef.close(this.studentForm.value);
        }
    }

    onCancel(): void {
        this.dialogRef.close();
    }
}
