import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class TodoFormService {

  public form: FormGroup;

  constructor(
    private builderService: FormBuilder) {
    this.form = this.builderService.group({
      name: ["", Validators.required],
      description: ["", Validators.required]
    });
  }

}
