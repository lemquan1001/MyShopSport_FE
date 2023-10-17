import { Component, OnInit } from '@angular/core';
import { AdminModule } from './admin-module';
import { NewFunitureService } from '../user/landing-page/type-furniture/new-funiture/services/new-funiture-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  standalone: true,
  // imports: [CommonModule, RouterModule]
  imports: [AdminModule],
})
export class AdminComponent implements OnInit {
  isLoading = this.service.getLoading();
  constructor(private service: NewFunitureService) {}

  ngOnInit() {}
}
