import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Analysis = React.lazy(() => import('./views/analysis/Analysis'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/analysis', name: 'Analysis', element: Analysis, exact: true },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard }
]

export default routes
