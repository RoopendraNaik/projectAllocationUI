import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-project-application',
  templateUrl: './project-application.component.html',
  styleUrls: ['./project-application.component.scss']
})
export class ProjectApplicationComponent implements OnInit {

  applicationForm: FormGroup
  constructor(public dialogRef: MatDialogRef<ProjectApplicationComponent>, @Inject(MAT_DIALOG_DATA) public dialogData = null, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.applicationForm = this.fb.group({
      name: ['', Validators.required],
      yearsOfExperience: ['', Validators.required],
      currentLocation: ['', Validators.required],
      skills: ['', Validators.required]
    })
    this.applicationForm.get('yearsOfExperience').valueChanges.subscribe(val => {
      if (this.dialogData.projectDetails.minExperience > val) {
        this.applicationForm.get('yearsOfExperience').setErrors({ minError: true })
      } else {
        this.applicationForm.get('yearsOfExperience').setErrors(null)
      }
    })
    this.applicationForm.get('skills').valueChanges.subscribe(val => {
      let foundSkill = false
      for(let i=0;i<this.dialogData.projectDetails.skillsRequired.length;i++){
        if(val.toLowerCase().includes(this.dialogData.projectDetails.skillsRequired[i].toLowerCase())){
          foundSkill = true
          this.applicationForm.get('skills').setErrors(null)
          break;
        }
      }
      if(!foundSkill){
        this.applicationForm.get('skills').setErrors({ skillsNotPresent: true })
      }
    })
  }
}
