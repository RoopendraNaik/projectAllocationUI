import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { headers, inputDataKeys } from '../constants';
import { ProjectsService } from './projects.service'
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  displayedColumns: string[] = [];
  searchForm: FormGroup;
  removable = true;
  dataSource: MatTableDataSource<any>;
  selectable = true;
  filterOptions = [];
  addOnBlur = true;
  page = 0;
  size = 10;
  lastPage = 0;
  firstMember = 1;
  lastMember = 10;
  inputDataKeys = inputDataKeys;
  inputData: [];
  totalDataSize = 0;
  headers = headers;
  inputFilters: string[] = [];
  allFruits: string[] = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  @ViewChild('filterInput') filterInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', { static: false }) matAutocomplete: MatAutocomplete;
  filteredOptions: Observable<string[]>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  actualData = [];
  constructor(private projectsService: ProjectsService, private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.searchForm = this.fb.group({
      filters: [[]],
      fromDate: [''],
      toDate: ['']
    })
    this.filteredOptions = this.searchForm.get('filters').valueChanges
      .pipe(debounceTime(150))
      .pipe(map(filter => filter ? this._filter(filter) : []));
    this.getData()
  }
  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      if ((value || '').trim()) {
        this.inputFilters.push(value.trim());
      }
      if (input) {
        input.value = '';
      }
      this.searchForm.get('filters').setValue(null);
    }
  }
  getData() {
    this.projectsService.getProjects(this.page, this.size,this.inputFilters, this.searchForm.value).subscribe(succ => {
      console.log("succ dat ss");
      console.log(succ);
      this.displayedColumns = Object.keys(this.headers);
      this.dataSource = new MatTableDataSource(succ.data);
      this.actualData = succ.data;
      this.dataSource.sort = this.sort;
      this.totalDataSize = succ.totalItems
      this.lastPage = Math.floor(this.totalDataSize / this.size);
      this.firstMember = this.page * this.size + 1;
      this.lastMember = Math.min(this.firstMember + this.size - 1, this.totalDataSize);
    }, err => {
      this.snackBar.open('There was some problem fetching data. Please try later', 'dismiss', { duration: 3000 })
    })
  }
  remove(filterOption: string): void {
    const index = this.inputFilters.indexOf(filterOption);
    if (index >= 0) {
      this.inputFilters.splice(index, 1);
    }
  }
  private _filter(value: string): string[] {
    this.projectsService.getFilters(value).subscribe(succ => {
      console.log("got filters");
      console.log(succ);
      this.allFruits = succ;
    })
    return this.allFruits
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.inputFilters.push(event.option.viewValue);
    this.filterInput.nativeElement.value = '';
    this.searchForm.get('filters').setValue(null);
  }
  changePage(n: number): void {
    if (n === 0 && this.page !== 0) {
      this.page = 0;
      this.getData();
    } else if (n === -1 && this.page !== 0) {
      this.page -= 1;
      this.getData();
    } else if (n === 1 && this.page !== this.lastPage) {
      this.page += 1;
      this.getData();
    } else if (n === 2 && this.page !== this.lastPage) {
      this.page = this.lastPage;
      this.getData();
    }
  }
  onSubmit(event) {
    event.preventDefault();
    this.page = 0;
    this.size = 10;
    this.getData();
  }
}
