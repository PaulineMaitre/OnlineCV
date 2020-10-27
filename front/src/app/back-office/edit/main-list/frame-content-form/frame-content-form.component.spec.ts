import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameContentFormComponent } from './frame-content-form.component';

describe('FrameContentFormComponent', () => {
  let component: FrameContentFormComponent;
  let fixture: ComponentFixture<FrameContentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrameContentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameContentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
