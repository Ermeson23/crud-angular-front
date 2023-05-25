import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  // Injeção de uma dependência : solicitando uma instância do HttpClient
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(),
      tap(courses => console.log(courses))
    );
  }

  save(record: Course) {
    return this.httpClient.post<Course>(this.API, record);
  }

}
