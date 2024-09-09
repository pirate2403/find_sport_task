import useController from '@/logic/hook'
import { observer } from 'mobx-react-lite'

function Result() {
  const controller = useController()
  return <pre className="text-xs">{JSON.stringify(controller.fieldsData, null, 2)}</pre>
}

export default observer(Result)
