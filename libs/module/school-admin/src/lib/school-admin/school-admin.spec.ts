import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchoolAdmin } from './school-admin';

describe('SchoolAdmin', () => {
  let component: SchoolAdmin;
  let fixture: ComponentFixture<SchoolAdmin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchoolAdmin],
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolAdmin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
