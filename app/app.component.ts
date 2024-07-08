import { Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

courses = COURSES;

// @ViewChild(CourseCardComponent)
// card: CourseCardComponent

@ViewChildren(CourseCardComponent)
card: QueryList<CourseCardComponent>;

ngAfterViewInit(){
  console.log(this.card.first)
}

onCourseSelected(course:Course){
  console.log('app component clicked', course)
}

// custom function to track unique identifiers
trackCourse(index:number, course:Course){
  return course.id
}
startDate = new Date('2024/07/06')
course = COURSES[0]
}
