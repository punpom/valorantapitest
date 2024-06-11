import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import AgentCards from './pages/AgentCards';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function App() {

  const queryClient = new QueryClient();


  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar/>
          <Routes>
            <Route>
              <Route index element={<AgentCards/>} />
            </Route>
          </Routes>    
      </QueryClientProvider>
    </>
  )
}