export interface Student {
    id: number;
    rollNumber: string;
    firstName: string;
    lastName: string;
    email: string;
    className: string;
    status: 'Active' | 'Inactive';
    phone?: string;
    dateOfBirth?: string;
    gender?: string;
    address?: string;
}
