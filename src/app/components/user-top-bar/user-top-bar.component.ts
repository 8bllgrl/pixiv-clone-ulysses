import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-top-bar',
  templateUrl: './user-top-bar.component.html',
  styleUrls: ['./user-top-bar.component.css']
})
export class UserTopBarComponent {

  @Input() bannerImage?: string;
  // bannerImage = 'https://cdn.midjourney.com/54904328-e98d-42e2-930d-02e8c72cf53f/0_1.png';
  @Input() profilePicture?: string;
  @Input() username?: string;
  @Input() description?: string;
  
}
