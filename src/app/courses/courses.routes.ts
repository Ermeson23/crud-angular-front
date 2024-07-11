import { Routes } from "@angular/router";

import { CoursesComponent } from "./containers/courses/courses.component";
import { CourseFormComponent } from "./containers/course-form/course-form.component";
import { CourseResolver } from "./guards/course.resolver";
import { CourseViewComponent } from "./components/course-view/course-view.component";

export const COURSES_ROUTES: Routes = [
    { path: '', component: CoursesComponent },
    { path: 'new', component: CourseFormComponent, resolve: { course: CourseResolver } },
    { path: 'edit/:id', component: CourseFormComponent, resolve: { course: CourseResolver } },
    { path: 'view/:id', component: CourseViewComponent, resolve: { course: CourseResolver } }
];