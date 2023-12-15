import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ManagementSessionItemPage } from "./management-session-item.page";

describe('ManagementSessionItemPage', () => {
  let component: ManagementSessionItemPage;
  let fixture: ComponentFixture<ManagementSessionItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManagementSessionItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
