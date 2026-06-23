import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'student',
    loadChildren: () =>
      import('@school-hub/student').then((m) => m.studentRoutes),
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('@school-hub/teacher').then((m) => m.teacherRoutes),
  },
  {
    path: 'parent',
    loadChildren: () =>
      import('@school-hub/parent').then((m) => m.parentRoutes),
  },
  {
    path: 'school-admin',
    loadChildren: () =>
      import('@school-hub/school-admin').then((m) => m.schoolAdminRoutes),
  },
  {
    path: 'super-admin',
    loadChildren: () =>
      import('@school-hub/super-admin').then((m) => m.superAdminRoutes),
  },
  {
    path: '',
    redirectTo: 'student',
    pathMatch: 'full',
  },
];
