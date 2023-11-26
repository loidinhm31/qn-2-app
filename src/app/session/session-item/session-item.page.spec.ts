import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SessionItemPage } from './session-item.page';

describe('SessionItemPage', () => {
  let component: SessionItemPage;
  let fixture: ComponentFixture<SessionItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SessionItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
