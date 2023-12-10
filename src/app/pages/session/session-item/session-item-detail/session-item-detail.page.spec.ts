import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SessionItemDetailPage } from "./session-item-detail.page";

describe('SessionItemDetailPage', () => {
  let component: SessionItemDetailPage;
  let fixture: ComponentFixture<SessionItemDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SessionItemDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
