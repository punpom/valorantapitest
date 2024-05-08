import axios from 'axios';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { InfoType } from './types/types';
import Card from './components/Card';

export default function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  )
}

function Page() {
  const { isPending, error, data } = useQuery({
    queryKey: ['valorantData'],
    queryFn: () =>
      axios
          .get('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
          .then((res) => res.data)
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(data)
  return (
    <div className='grid'>
        {data.data.map((info: InfoType) => {
          return (
          <Card key={info.uuid} Info={info} />
          )
        })}
    </div>
  )
}

