import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarJacComponent } from './navbar-jac.component';

describe('NavbarJacComponent', () => {
  let component: NavbarJacComponent;
  let fixture: ComponentFixture<NavbarJacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarJacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarJacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
