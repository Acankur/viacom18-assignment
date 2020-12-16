import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import {ItemService} from '../services/item.service';
@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  public formdata: any;
  public cities :any;
  constructor(private Itemservice: ItemService) { }

  ngOnInit(): void {
    this.formdata = new FormGroup({
      lineControls: new FormArray([])
    });
    this.createNewLineForm();
    this.Itemservice.getCity().subscribe(data => {
      this.cities = data;
      console.log(data);

    });
    console.log(this.cities);
  }

createNewLineForm(value?: any) {
  const newForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    contact: new FormControl(),
    city: new FormControl(),
  });
  if (value) {
    newForm.patchValue(value);
  } 
  const lineCtrls = <FormArray>this.formdata.get('lineControls');
  lineCtrls.push(newForm);
}

submit(){
  localStorage.setItem('form-data', JSON.stringify(this.formdata.value));
  console.log(localStorage);
}
reset() {
  this.formdata.reset();
}
}