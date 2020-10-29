import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvContentComponent } from './cv-content.component';

describe('CvContentComponent', () => {
  let component: CvContentComponent;
  let fixture: ComponentFixture<CvContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
