import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DummyData } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() { }
  getProjects(size, page, filterInputs,formValue): Observable<any> {
    let tempArray = [];
    console.log("filter data is");
    console.log(filterInputs);
    if (filterInputs.length === 0 && formValue.fromDate === '' && formValue.toDate === '') {
      return of({
        data: DummyData.slice(page * size, page * (size + 1)),
        totalItems: DummyData.length,
      });
    }
    filterInputs.map((_) => {
      DummyData.map((data) => {
        if (
          data.clientName === _ ||
          data.projectName === _ ||
          data.skillsRequired.includes(_) ||
          data.location === _ 
        ) {
          if(!formValue.fromDate || !formValue.toDate){
            tempArray.push(data);
          }
          if(new Date(data.startDate)>= formValue.fromDate && new Date(data.startDate) <= formValue.toDate){
            tempArray.push(data);
          }
        } 
      });
    });
    return of({
      data: tempArray.slice(page * size, page * (size + 1)),
      totalItems: tempArray.length,
    });
  }

  getFilters(value): Observable<any> {
    const temp = value.toLowerCase()
    if (!temp) {
      return of([]);
    }
    let tempArray = new Set();
    DummyData.map((_) => {
      if (tempArray.size === 5) {
        return of(Array.from(tempArray));
      }
      if (_.clientName.toLowerCase().includes(temp)) {
        tempArray.add(_.clientName);
      } else if (_.projectName.toLowerCase().includes(temp)) {
        tempArray.add(_.projectName);
      } else if (_.location.toLowerCase().includes(temp)) {
        tempArray.add(_.location);
      } else {
        _.skillsRequired.map(skill=>{
          if(skill.toLowerCase().includes(temp)) {
            tempArray.add(skill)
          }
        })
      }
    });
    return of(Array.from(tempArray));
  }
}
