import { Component, OnInit } from '@angular/core';
import { StudentSerService } from '../common/student-ser.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  _gender = ['Male','Female', 'Other']
  _courses = ['MCA','MBA','BBA','BCA','B.tech', 'M.tech']
  _courseDur = [2,3,5]

  studentObj = {
    name : "",
    gender : "",
    dob : "",
    image : "",
    email : "",
    contactNo : "",
    address : "",
    course : "",
    courseDuration : ""
  }

  
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

  saveStudentDetails(){
    this.studentAPI.createStudentDetail(this.studentObj)
      .subscribe(
        res => {
          console.log("Response",res);
          this.reset();
        },
        err => {
          console.log(err)
        }
      )
  }

  reset(){
    this.studentObj = {
      name : "",
      gender : "",
      dob : "",
      image : "",
      email : "",
      contactNo : "",
      address : "",
      course : "",
      courseDuration : ""
    }
  }

}
