export interface User {
    id: number;
    username: string;
    email: string;
    roles: string[];
    token?: string;
}

export interface AuthResponse extends User {
    token: string;
}
