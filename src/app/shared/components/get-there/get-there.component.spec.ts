import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetThereComponent } from './get-there.component';

describe('GetThereComponent', () => {
  let component: GetThereComponent;
  let fixture: ComponentFixture<GetThereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetThereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetThereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
