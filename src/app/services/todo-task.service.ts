import { Injectable } from '@angular/core';
import { ITask } from '../task';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDummyJson } from '../dummy-json-todos';

const api = 'https://dummyjson.com';

@Injectable({
  providedIn: 'root',
})
export class TodoTaskService {
  constructor(private httpClient: HttpClient) {}

  getAllTasks(): Observable<IDummyJson> {
    return this.httpClient.get<IDummyJson>(api + '/todos?limit=20');
  }
}
