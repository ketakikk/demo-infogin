import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as SampleJson from '../../assets/json/company.json';


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css'],
})
export class CompanyDetailsComponent implements OnInit {
  public companyForm: FormGroup;
  copydata: any;
  constructor(private fb: FormBuilder, private http: HttpClient) {
    console.log(SampleJson);

    this.companyForm = this.fb.group({
      comp_name: '',
      address: '',
      phone: '',
      website: '',
      linkdin_url: '',
      parent_copm: '',
      indusrty: '',
      emp_size: '',
      all_industry: '',
      Revenue: '',
    });
  }
  public jsonData: any;
  ngOnInit() {
    // this.http.get('/assets/json/company.json').subscribe((data: any) => {
    //   console.log('com data', data[0]);
    //   this.copydata = Object.assign({}, data[0]);
    //   console.log('cpy data', this.copydata);
    //   this.companyForm.controls["comp_name"].setValue(this.copydata.comp_name);
    //   this.companyForm.controls["address"].setValue(this.copydata.address);
    //   this.companyForm.controls["phone"].setValue(this.copydata.phone);
    //   this.companyForm.controls["website"].setValue(this.copydata.website);
    //   this.companyForm.controls["linkdin_url"].setValue(this.copydata.linkdin_url);
    //   this.companyForm.controls["parent_copm"].setValue(this.copydata.parent_copm);
    //   this.companyForm.controls["indusrty"].setValue(this.copydata.indusrty);
    //   this.companyForm.controls["emp_size"].setValue(this.copydata.emp_size);
    //   this.companyForm.controls["all_industry"].setValue(this.copydata.all_industry);
    //   this.companyForm.controls["Revenue"].setValue(this.copydata.Revenue);

    // });
// console.log("SampleJson---> " ,SampleJson[0].Revenue)
    this.companyForm.controls["comp_name"].setValue(SampleJson[0].comp_name);
      this.companyForm.controls["address"].setValue(SampleJson[0].address);
      this.companyForm.controls["phone"].setValue(SampleJson[0].phone);
      this.companyForm.controls["website"].setValue(SampleJson[0].website);
      this.companyForm.controls["linkdin_url"].setValue(SampleJson[0].linkdin_url);
      this.companyForm.controls["parent_copm"].setValue(SampleJson[0].parent_copm);
      this.companyForm.controls["indusrty"].setValue(SampleJson[0].indusrty);
      this.companyForm.controls["emp_size"].setValue(SampleJson[0].emp_size);
      this.companyForm.controls["all_industry"].setValue(SampleJson[0].all_industry);
      this.companyForm.controls["Revenue"].setValue(SampleJson[0].Revenue);

  }

  gotoLinkdin(){
    console.log("click")
    window.open("https://www.linkedin.com/company/smarte-inc/", "_blank");



  }
}
