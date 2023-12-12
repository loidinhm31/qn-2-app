import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagementSessionPage } from './management-session.page';

describe('ManagementSessionPage', () => {
  let component: ManagementSessionPage;
  let fixture: ComponentFixture<ManagementSessionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManagementSessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
