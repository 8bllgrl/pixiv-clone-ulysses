import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileImgsComponent } from '../profile-imgs/profile-imgs.component';

interface Image {
  url: string;
  title: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  providers: [ProfileImgsComponent]
})
export class GalleryComponent {

  images: Image[];
  page!: number;
  imagesPerPage: number = 48;

  constructor(
    private imageService: ProfileImgsComponent,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.images = this.imageService.images;
    this.route.queryParams.subscribe(params => {
      this.page = params['p'] ? Number(params['p']) : 1;
    });
  }

  get startIndex(): number {
    return (this.page - 1) * this.imagesPerPage;
  }

  get endIndex(): number {
    return this.startIndex + this.imagesPerPage;
  }

  goToPage(pageNumber: number) {
    console.log(`Navigating to page ${pageNumber}`);
    const queryParams = { ...this.route.snapshot.queryParams, p: pageNumber };
    this.router.navigate(['/gallery'], { queryParams });
  }
  

}
