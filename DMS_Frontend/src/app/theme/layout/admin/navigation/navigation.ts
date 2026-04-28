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
        id: 'course-categories',
        title: 'Categories',
        type: 'item',
        classes: 'nav-item',
        url: '/application/categories',
        icon: 'ti ti-layout-grid'
      },
      {
        id: 'courses',
        title: 'View Courses',
        type: 'item',
        classes: 'nav-item',
        url: '/application/courses',
        icon: 'ti ti-list-details'
      },
      {
        id: 'course-player',
        title: 'Course Player',
        type: 'item',
        classes: 'nav-item',
        url: '/application/course-player',
        icon: 'ti ti-player-play'
      }
    ]
  },
  {
    id: 'learner-services',
    title: 'Learner Services',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'profile',
        title: 'Profile',
        type: 'item',
        classes: 'nav-item',
        url: '/application/profile',
        icon: 'ti ti-user-circle'
      },
      {
        id: 'certificates',
        title: 'Certificates',
        type: 'item',
        classes: 'nav-item',
        url: '/application/certificates',
        icon: 'ti ti-certificate'
      },
      {
        id: 'notifications',
        title: 'Notifications',
        type: 'item',
        classes: 'nav-item',
        url: '/application/notifications',
        icon: 'ti ti-bell'
      },
      {
        id: 'payment-history',
        title: 'Payment History',
        type: 'item',
        classes: 'nav-item',
        url: '/application/payment-history',
        icon: 'ti ti-credit-card'
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
