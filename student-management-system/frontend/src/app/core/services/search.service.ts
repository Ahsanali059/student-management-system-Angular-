import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private searchSubject = new BehaviorSubject<string>('');
    searchQuery$ = this.searchSubject.asObservable();

    setSearchQuery(query: string): void {
        this.searchSubject.next(query);
    }

    getSearchQuery(): string {
        return this.searchSubject.getValue();
    }
}
