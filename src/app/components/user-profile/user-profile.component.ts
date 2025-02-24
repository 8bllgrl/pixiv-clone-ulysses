import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from '../mock/profile.interface';
import { PROFILES } from '../mock/profile.mock';
import { DEFAULT_PROFILE } from '../mock/profile.default';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  profile: Profile = DEFAULT_PROFILE;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.router.events.subscribe(event => {
      const username = this.route.snapshot.paramMap.get('username');
      if (username) {
        const profile = PROFILES.find(p => p.username === username);
        if (profile) {
          this.profile = profile;
        } else {
          this.profile = DEFAULT_PROFILE;
        }
      }
    });
  }
}
