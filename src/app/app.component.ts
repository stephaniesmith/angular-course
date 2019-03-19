import { Component, ViewChild, ElementRef } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('cardRef1') card1: CourseCardComponent;
  @ViewChild('cardRef2', { read: ElementRef }) card2: CourseCardComponent;

  @ViewChild('container') container: ElementRef;

  courses = COURSES;

  title = 'this is a title';

  startDate = new Date(2000, 0, 1);

  price = 9.92335333;

  rate = 0.67;

  course = COURSES[0];

  onCourseSelected(course: Course) {
    // console.log('Selected!!', course);
    console.log('Card!!', this.card1);
    console.log('Card!!', this.card2);
    // console.log('Container!!', this.container);
  }

}
