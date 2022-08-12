import { Route, Routes } from 'solid-app-router'
import { NoHydration } from 'solid-js/web'
import './index.css'

import { About } from './pages/About.jsx'
import { Home } from './pages/Home.jsx'

export function App() {
  return (
    <NoHydration>
      <Routes>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Routes>
    </NoHydration>
  );
}
