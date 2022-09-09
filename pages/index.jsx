import { Dashboard } from '../pages/Dashboard'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="bg-dashboard">
      <Header />
      <Dashboard />
    </div>
  )
}
