import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '../../model/course';
import { CategoryPipe } from '../../../shared/pipes/category.pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
    standalone: true,
    imports: [MatTableModule, MatIconModule, MatButtonModule, CategoryPipe]
})
export class CoursesListComponent {

  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);
  @Output() details = new EventEmitter(false);
  @Output() view: EventEmitter<Course> = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'actions'];

  onAdd() {
    this.add.emit(true);
  }

  onEdit(course: Course) {
    this.edit.emit(course);
  }

  onRemove(course: Course) {
    this.remove.emit(course);
  }

  onDetails(record: Course) {
    this.details.emit(record);
  }

  onView(record: Course) {
    this.view.emit(record);
  }

}
