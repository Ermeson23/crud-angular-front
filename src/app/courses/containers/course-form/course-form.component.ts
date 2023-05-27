import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

import { CoursesService } from '../../services/courses.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [''],
    category: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: CoursesService,
    private snackBar: MatSnackBar,
    private location: Location) {
    // this.form
   }

   ngOnInit(): void {
     this.form.value.name = 'Ermeson';
   }

   onSubmit() {
    this.service.save(this.form.value)
      .subscribe(result => this.onSuccess(), error => this.onError());
   }

   onCancel() {
    this.location.back();
   }

   onSuccess() {
    this.snackBar.open('Curso adicionado com sucesso!', '', { duration: 5000 });
    this.onCancel();
   }

   onError() {
    this.snackBar.open('Erro ao salvar curso', '', { duration: 5000 });
   }

}
