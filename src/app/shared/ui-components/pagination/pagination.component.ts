import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent implements OnInit {
  @Input() currentPage: number | undefined;
  @Input() totalItems: number | undefined;
  @Input() itemsPerPage: number | undefined;

  @Output() pageChanged = new EventEmitter<number>();

  totalPages: number | undefined;
  pagesArray: number[] | undefined;

  ngOnInit(): void {
    this.totalPages = Math.ceil(this.totalItems! / this.itemsPerPage!);
    this.pagesArray = new Array(this.totalPages).fill(0).map((_, index) => index);
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages! && page !== this.currentPage) {
      this.pageChanged.emit(page);
    }
  }
}
