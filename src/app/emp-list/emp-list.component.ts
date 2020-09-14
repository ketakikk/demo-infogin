import { Component, OnInit, HostListener } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";


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
  firstdata: any = [];
  alldata: any = [];
  firstfixdata:any=[];
  searchText: any = "";
  datalength = 6;
  total: any;
  open(member) {
    member.reveal = true;
    console.log("done");
  }

  ngOnInit() {
    this.getMembers();
  }

  // @HostListener("window:scroll", [])
  // onScroll(): void {
  //   var bottom_position =
  //     $(document).height() - ($(window).scrollTop() + $(window).height());
  //   // console.log("bott pos:",bottom_position, ",scroll:", $(window).scrollTop())
  //   if (bottom_position <= 1500 && this.storedata !== undefined) {
  //     if (this.datalength + 6 <= this.storedata.length) {
  //       this.datalength += 6;
  //     } else {
  //       this.datalength = this.storedata.length;
  //     }
  //   }
  // }
  getMembers() {
     this.spinner.show();
    this.http.get("/assets/json/employee-list.json").subscribe((data: any) => {
      console.log("com data", data.Employees);
      this.alldata = data.Employees;
      this.firstdata = data.Employees.slice(0, 9);
      this.firstfixdata = data.Employees.slice(0, 9);
      console.log(" this.storedata---", this.firstdata);
      this.total = data.Employees.length;
    });
  }

  onScroll() {
    // console.log("fis " ,this.firstdata.length)
    // console.log("all-->",this.alldata.length)
    if (this.firstdata.length < this.alldata.length) {
      let fixedlength = this.firstdata.length;
      let lastlenght = this.alldata.length - this.firstdata.length;
      if (lastlenght > this.firstfixdata.length){
         for (let i = fixedlength; i <= fixedlength + 9; i++) {
          this.firstdata.push(this.alldata[i]);
        }
      }else{
        for (let i = fixedlength; i <= fixedlength +lastlenght-1 ; i++) {
          this.firstdata.push(this.alldata[i]);
          console.log("--->" , i)
          this.spinner.hide();
        }
      }
    }
  }



  // if (this.firstdata.length < this.alldata.length) {
  //   let fixedlength = this.firstdata.length;
  //   let lastlenght = this.alldata.length - this.firstdata.length;
  //   console.log("length ---> ", this.firstdata.length);
  //   console.log("length ---> ", lastlenght);
  //   console.log("length ---> ", lastlenght);
  //   if (fixedlength < lastlenght) {
  //     for (let i = fixedlength; i <= fixedlength + 9; i++) {
  //       this.firstdata.push(this.alldata[i]);
  //     }
  //     // console.log("------------>",this.firstdata)
  //   }else{
  //      console.log("------------>",this.firstdata)
  //     for (let i = lastlenght; i <= lastlenght + 9; i++) {
  //       this.firstdata.push(this.alldata[i]);
  //     }
  //   }
  searchData(event) {
    console.log("--------->", event.target.value);
      if (event.target.value === "") {
        console.log("in")
        this.firstdata = this.alldata;
      } else {
        this.firstdata = this.alldata.filter((mem) => {
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
