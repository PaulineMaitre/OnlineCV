import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameItemFormComponent } from './frame-item-form.component';

describe('FrameItemFormComponent', () => {
  let component: FrameItemFormComponent;
  let fixture: ComponentFixture<FrameItemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameItemFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
