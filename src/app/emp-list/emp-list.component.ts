import { Component, OnInit, HostListener } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";

declare var $;

@Component({
  selector: "app-emp-list",
  templateUrl: "./emp-list.component.html",
  styleUrls: ["./emp-list.component.css"],
})

export class EmpListComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    public spinner: NgxSpinnerService
  ) {}
  copydata: any = [];
  storedata: any = [];
  searchText: any = '';
  datalength = 6;
  total: any;
  open(member) {
    member.reveal = true;
    console.log("done");
  }

  ngOnInit() {
    this.spinner.show();
    this.getMembers();
  }


  @HostListener('window:scroll', [])
  onScroll(): void {
    var bottom_position = $(document).height() - ($(window).scrollTop() + $(window).height());
    // console.log("bott pos:",bottom_position, ",scroll:", $(window).scrollTop())
    if (bottom_position <= 1500 && this.storedata !== undefined) {
      if (this.datalength + 6 <= this.storedata.length) {
        this.datalength += 6;
      } else {
        this.datalength = this.storedata.length;
      }
    }
  }

  getMembers() {
    this.http.get("/assets/json/employee-list.json").subscribe((data: any) => {
      this.spinner.hide();
      console.log("com data", data.Employees);
      this.copydata = data.Employees;
      this.storedata = data.Employees;

      this.total = data.Employees.length;
    });
  }

  searchData(event) {
    console.log("--------->", event.target.valuent);
    if (event.target.value === "") {
      this.copydata = this.storedata;
    } else {
      this.copydata = this.storedata.filter((mem) => {
        return (
          mem.jobTitle
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          mem.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
      });
      console.log("--- this.copydata------>", this.copydata);
    }
  }
}
