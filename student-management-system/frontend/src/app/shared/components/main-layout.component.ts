import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { StorageService } from '../../core/services/storage.service';
import { SearchService } from '../../core/services/search.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  username = '';
  roles: string[] = [];

  constructor(
    private storageService: StorageService,
    private router: Router,
    private searchService: SearchService
  ) {
    const user = this.storageService.getUser();
    this.username = user?.username || 'User';
    this.roles = user?.roles || [];
  }

  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.searchService.setSearchQuery(query);
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['/login']);
  }
}
