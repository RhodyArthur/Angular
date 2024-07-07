import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

courses = COURSES;
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
