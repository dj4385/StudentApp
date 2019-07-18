import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentSerService {

  // studentApiUrl = "nodejsStudentAPI/v1/studentDetails"
  studentApiUrl = environment.baseURL + "studentDetails"
  constructor(
    private httpClient : HttpClient
  ) { }

  getAllStudents(){
    return this.httpClient.get(this.studentApiUrl)
  }
}
