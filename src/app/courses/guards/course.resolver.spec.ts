import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { CourseResolver } from './course.resolver';

describe('CourseResolver', () => {
  let resolver: CourseResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [CourseResolver]
    });

    resolver = TestBed.inject(CourseResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should resolve the route', () => {
    const route: ActivatedRouteSnapshot = TestBed.inject(ActivatedRouteSnapshot);
    const state: RouterStateSnapshot = TestBed.inject(RouterStateSnapshot);

    const resolvedData = resolver.resolve(route, state);

    expect(resolvedData).toBeTruthy();
  });
});
