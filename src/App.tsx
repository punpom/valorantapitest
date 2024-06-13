import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Agents from './pages/Agents'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Maps from './pages/Maps'
import Weapons from './pages/Weapons'
import Bundles from './pages/Bundles'

export default function App() {
    const queryClient = new QueryClient()

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Navbar />
                <Routes>
                    <Route index element={<Agents />} />
                    <Route path="maps" element={<Maps />} />
                    <Route path="weapons" element={<Weapons />} />
                    <Route path="bundles" element={<Bundles />} />
                </Routes>
            </QueryClientProvider>
        </>
    )
}
