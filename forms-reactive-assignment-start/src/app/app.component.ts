  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup, Validators } from '@angular/forms';
  import { CustomValidators } from './custom-validators';

  @Component({
    selector: 'app-root',
    template: `
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
          <!--
              Create a Form with the following Controls and Validators
              1) Project Name (should not be empty)
              2) Mail (should not be a empty and a valid email)
              3) Project Status Dropdown, with three values: 'Stable', 'Critical', 'Finished'
              4) Submit Button

              Add your own Validator which doesn't allow "Test" as a Project Name

              Also implement that Validator as an async Validator (replace the other one)

              Upon submitting the form, simply print the value to the console
          -->
          <form [formGroup]="pForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label for="name">Project Name</label>
              <input
                type="text"
                id="name"
                formControlName="projectName"
                class="form-control">
            </div>
            <div class="form-group">
              <label for="email">email</label>
              <input
                type="text"
                id="email"
                formControlName="email"
                class="form-control">
            </div>
            <div class="form-group">
              <label for="status">Project Status</label>
              <select 
                id="status" 
                formControlName="projectStatus"
                class="form-control">
                <option value="Stable">Stable</option>
                <option value="Critical">Critical</option>
                <option value="Finnished">Finnished</option>
              </select>
            </div>
            <button class="btn btn-primary" type="submit">Create Project</button>
          </form>
        </div>
      </div>
    </div>`,
    styles: `
    .container {margin-top: 30px;}
    input.ng-invalid.ng-touched {border: 1px solid red;}
    `
  })
  export class AppComponent implements OnInit {
    pForm: FormGroup;

    ngOnInit(): void {
      this.pForm = new FormGroup({
        'projectName': new FormControl(
          '',
          [Validators.required, CustomValidators.invalidProjectName],
          CustomValidators.asyncInvalidProjectName
        ),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'projectStatus': new FormControl('Critical')
      });
    }

    onSubmit() {
      console.log(this.pForm.value)
    }
  }
