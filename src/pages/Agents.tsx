import { AgentType } from '../types/types';
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
        {data.map((info: AgentType) => {
          return (
          <Card key={info.uuid} info={info}/>
          )
        })}
    </div>
      <ConnectedModal/>
    </div>
  )
}