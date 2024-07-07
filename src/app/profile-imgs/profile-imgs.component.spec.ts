import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileImgsComponent } from './profile-imgs.component';

describe('ProfileImgsComponent', () => {
  let component: ProfileImgsComponent;
  let fixture: ComponentFixture<ProfileImgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileImgsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
