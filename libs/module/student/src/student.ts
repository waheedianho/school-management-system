import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonsComponent } from '@school-hub/ui-elements';

@Component({
  selector: 'lib-student',
  imports: [RouterModule, ButtonsComponent],
  templateUrl: './student.html',
  styleUrl: './student.scss',
})
export class Student {}
