import { Component, OnInit } from '@angular/core';
import { StudentSerService } from '../common/student-ser.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(
    private studentAPI : StudentSerService
  ) { }

  ngOnInit() {
    this.getAllStudentDetails()
  }
  getAllStudentDetails(){
    this.studentAPI.getAllStudents()
      .subscribe(
        res => {
          console.log(res)
        }, err => {
          console.log(err)
        }
      )
  }

}
