import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { Photo } from '../mock/photo.interface';
import { photosFromTemp, photosFromTempTwo } from '../mock/discard/phototemp';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  ITEMS_PER_PAGE = 60; // 6 columns * 10 rows
  COLUMNS = 6;

  ngOnInit() {
    // Initialize unique tags
    this.filteredPhotos = this.photos;
    this.photos.forEach(photo => {
      photo.tags.forEach(tag => {
        if (this.uniqueTags.indexOf(tag) === -1) {
          this.uniqueTags.push(tag);
        }
      });
    });
    this.updatePage();
  }


  constructor(public dialog: MatDialog) { }

  // openDialog(photoUrl: string): void {
  //   this.dialog.open(PhotoDialogComponent, {
  //     data: { url: photoUrl },
  //     // width: '100vw',
  //     // height: '100vh',
  //     panelClass: 'full-screen-modal'
  //   });
  // }

  uniqueTags: string[] = [];

  filterByTag(tag: string) {
    this.filteredPhotos = this.photos.filter(photo => photo.tags.includes(tag));
    this.pageIndex = 0;  
    this.updatePage();
  }

  clearFilter() {
    this.filteredPhotos = this.photos;
    this.pageIndex = 0;  
    this.updatePage();
  }

  @Input() photos: Photo[] = [
    { id: 1, url: '...', tags: ['fantasy'] },
    { id: 2, url: '...', tags: ['girl'] }
];


  filteredPhotos: Photo[] = this.photos;
  pagedPhotos: Photo[] = [];
  pageIndex: number = 0;


  updatePage() {
    const start = this.pageIndex * this.ITEMS_PER_PAGE;
    const end = start + this.ITEMS_PER_PAGE;
    this.pagedPhotos = this.filteredPhotos.slice(start, end);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.updatePage();
  }

  getRowPhotos(rowIndex: number): Photo[] {
    const start = rowIndex * this.COLUMNS;
    const end = start + this.COLUMNS;
    return this.pagedPhotos.slice(start, end);
  }


}
