import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../core/services/storage.service';
import { User } from '../../core/models/auth.model';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
   selector: 'app-profile',
   standalone: true,
   imports: [
      CommonModule,
      MatCardModule,
      MatIconModule,
      MatButtonModule,
      MatInputModule,
      MatFormFieldModule,
      MatSlideToggleModule
   ],
   templateUrl: './profile.component.html'
})
export class ProfileComponent {
   user: User | null;
   constructor(private storageService: StorageService) {
      this.user = this.storageService.getUser();
   }
}
