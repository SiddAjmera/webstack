import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIntroCardComponent } from './about-intro-card.component';

describe('AboutIntroCardComponent', () => {
  let component: AboutIntroCardComponent;
  let fixture: ComponentFixture<AboutIntroCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutIntroCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutIntroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
