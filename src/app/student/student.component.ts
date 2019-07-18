import { Component, OnInit } from '@angular/core';
import { StudentSerService } from '../common/student-ser.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {


  students :any = []
  individualStudent : any = {}
  isIndividualStudentObjEmpty = true
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
          this.students = res;
        }, err => {
          console.log(err)
        }
      )
  }

  studentFullDetail(studentDetail){
    this.isIndividualStudentObjEmpty = false
    this.individualStudent = studentDetail
    console.log("Full Detail",this.individualStudent)

  }
}
