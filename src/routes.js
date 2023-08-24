import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Analysis = React.lazy(()=>import('./views/analysis/Analysis'))
const DataTable = React.lazy(()=>import('./views/table/DataTable'))
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/analysis', name: 'Analysis', element: Analysis, exact: true },
  { path: '/datatable', name: 'Analysis', element: DataTable, exact: true }
]

export default routes
