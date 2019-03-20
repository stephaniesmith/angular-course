import { Component, OnInit, Input, EventEmitter, Output, ContentChild, AfterViewInit } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit {
  @Input() course: Course;
  @Input() cardIndex: number;

  @Output() courseSelected = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent) image;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.image);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  onCourseViewed() {
    console.log('CLICKED!');
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    return this.course.category === 'BEGINNER' ? 'beginner' : '';
  }

  cardStyles() {
    return {
      'background-image': `url(${this.course.iconUrl})`,
    };
  }

}
