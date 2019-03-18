import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {
  @Input() course: Course;
  @Input() cardIndex: number;

  @Output() courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
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
