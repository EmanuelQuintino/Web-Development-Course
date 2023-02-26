import { Outlet } from 'react-router-dom'
export function App() {
  return (
    <div className="container">
      <p>Header</p>
      <h1>App</h1>
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}