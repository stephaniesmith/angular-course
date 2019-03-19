import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  title = 'this is a title';

  startDate = new Date(2000, 0, 1);

  price = 9.92335333;

  rate = 0.67;

  course = COURSES[0];

  onCourseSelected(course: Course) {
    console.log('Selected!!', course);
  }

}
