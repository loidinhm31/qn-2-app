import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-session",
  templateUrl: "./session.page.html",
  styleUrls: ["./session.page.scss"],
})
export class SessionPage implements OnInit {
  public title!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}



  ngOnInit() {
    this.title = "Session";
  }
}
