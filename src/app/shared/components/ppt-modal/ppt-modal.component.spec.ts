import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PptModalComponent } from './ppt-modal.component';

describe('PptModalComponent', () => {
  let component: PptModalComponent;
  let fixture: ComponentFixture<PptModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PptModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PptModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
