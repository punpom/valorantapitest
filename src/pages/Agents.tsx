import { InfoType } from '../types/types';
import Card from '../components/Card';
import ConnectedModal from '../components/Modal';
import { useAgents } from '../hooks/useAgents';


export default function Agents() {
  const { isPending, error, data } = useAgents();

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