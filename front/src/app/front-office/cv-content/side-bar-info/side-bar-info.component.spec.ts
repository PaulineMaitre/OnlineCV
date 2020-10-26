import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarInfoComponent } from './side-bar-info.component';

describe('SideBarInfoComponent', () => {
  let component: SideBarInfoComponent;
  let fixture: ComponentFixture<SideBarInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
