export default [
  {
    'iconName': 'dashboard',
    'path': '/dashboard',
    'title': 'Dashboard',
  },
  {
    'iconName': 'tubes',
    'path': '/monitored',
    'title': 'Monitored',
    'subMenuItems': [
      {
        'title': 'Add New',
        'path': '/monitored/add'
      }
    ]
  },
  {
    'iconName': 'queue',
    'title': 'Queue',
    'path': '/queue',
    'subMenuItems': [
      {
        'title': 'Active',
        'path': '/queue/active',
      },
      {
        'title': 'Completed',
        'path': '/queue/completed',
      }
    ]
  },
  {
    'iconName': 'settings',
    'title': 'Settings',
    'path': '/settings'
  }
]