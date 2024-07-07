import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileImgsComponent } from '../profile-imgs/profile-imgs.component';

interface Image {
  url: string;
  title: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ProfileImgsComponent]
})
export class ProfileComponent {

  images: Image[];

  constructor(private router: Router, private imageService: ProfileImgsComponent) {
    this.images = this.imageService.images;
  }

  showGallery() {
    this.router.navigate(['/gallery']);
  }
}
