import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameItemComponent } from './frame-item.component';

describe('FrameItemComponent', () => {
  let component: FrameItemComponent;
  let fixture: ComponentFixture<FrameItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
