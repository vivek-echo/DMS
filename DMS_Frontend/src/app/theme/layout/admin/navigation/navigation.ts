export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: NavigationItem[];
  role?: string[];
  isMainParent?: boolean;
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'student-dashboard',
        title: 'Dashboard',
        type: 'item',
        classes: 'nav-item',
        url: '/application/dashboard',
        icon: 'ti ti-dashboard',
        breadcrumbs: false
      }
    ]
  },
  {
    id: 'course-management',
    title: 'Courses',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'create-course',
        title: 'Add Course',
        type: 'item',
        classes: 'nav-item',
        url: '/application/create-course',
        icon: 'ti ti-book-upload'
      },
      {
        id: 'courses',
        title: 'View Courses',
        type: 'item',
        classes: 'nav-item',
        url: '/application/courses',
        icon: 'ti ti-list-details'
      }
    ]
  },
  {
    id: 'job-management',
    title: 'Jobs & Internships',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'add-job',
        title: 'Add Job',
        type: 'item',
        classes: 'nav-item',
        url: '/application/add-job',
        icon: 'ti ti-briefcase'
      },
      {
        id: 'jobs',
        title: 'View Jobs',
        type: 'item',
        classes: 'nav-item',
        url: '/application/jobs',
        icon: 'ti ti-list-details'
      },
      {
        id: 'applied-jobs',
        title: 'Applied Jobs',
        type: 'item',
        classes: 'nav-item',
        url: '/application/applied-jobs',
        icon: 'ti ti-user-check'
      }
    ]
  }
];
