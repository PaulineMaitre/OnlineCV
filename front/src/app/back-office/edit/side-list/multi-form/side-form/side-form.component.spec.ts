import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideFormComponent } from './side-form.component';

describe('SideFormComponent', () => {
  let component: SideFormComponent;
  let fixture: ComponentFixture<SideFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
