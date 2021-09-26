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
    'children': [
      {
        'title': 'Add New Channel',
        'path': '/monitored/add/channel',
      },
      {
        'title': 'Add New Playlist',
        'path': '/monitored/add/playlist',
      }
    ]
  },
  {
    'iconName': 'queue',
    'title': 'Queue',
    'path': '/queue',
    'children': [
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