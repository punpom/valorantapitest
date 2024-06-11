import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { InfoType } from '../types/types';
import Card from '../components/Card';
import ConnectedModal from '../components/Modal';


export default function AgentCards() {
  const { isPending, error, data } = useQuery({
    queryKey: ['valorantData'],
    queryFn: () =>
      axios
          .get('https://valorant-api.com/v1/agents?isPlayableCharacter=true')
          .then((res) => res.data)
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
    <div className='grid'>
        {data.data.map((info: InfoType) => {
          return (
          <Card key={info.uuid} info={info}/>
          )
        })}
    </div>
      <ConnectedModal/>
    </div>
  )
}