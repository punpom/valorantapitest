import { AgentType } from '../types/types'
import ConnectedModal from '../components/Modal/Modal'
import { useAgents } from '../hooks/useAgents'
import AgentCard from '../components/AgentCard/AgentCard'
import Error from '../components/Error/Error'

const Agents: React.FC = () => {
    const { isPending, error, data } = useAgents()

    if (isPending) return 'Loading...'

    if (error) return <Error message={error.message} />

    return (
        <>
            <div className="grid">
                {data.map((info: AgentType) => {
                    return <AgentCard key={info.uuid} info={info} />
                })}
            </div>
            <ConnectedModal />
        </>
    )
}

export default Agents
