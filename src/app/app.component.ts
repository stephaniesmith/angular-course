import { Component, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { CachedResourceLoader } from '@angular/platform-browser-dynamic/src/resource_loader/resource_loader_cache';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  // @ViewChild('cardRef1') card1: CourseCardComponent;
  // @ViewChild('cardRef2', { read: ElementRef }) card2: CourseCardComponent;

  // @ViewChild('container') container: ElementRef;

  @ViewChildren(CourseCardComponent, { read: ElementRef }) cards: QueryList<CourseCardComponent>;

  courses = COURSES;

  // title = 'this is a title';

  // startDate = new Date(2000, 0, 1);

  // price = 9.92335333;

  // rate = 0.67;

  // course = COURSES[0];

  ngAfterViewInit() {
    console.log(this.cards);
    this.cards.changes.subscribe(card => {
      console.log(card);
    });
    // console.log('Card!!', this.cards.first);
  }

  onCourseSelected(course: Course) {
    console.log('Selected!!', course);
    // console.log('Card!!', this.card1);
    // console.log('Card!!', this.card2);
    // console.log('Container!!', this.container);
  }

  onCoursesEdited() {
    this.courses.push({
      id: 1,
      description: 'Hello',
      iconURL: 'none',
      longDescription: 'Hellooooo',
      lessonsCount: 1000
    });
  }

}
