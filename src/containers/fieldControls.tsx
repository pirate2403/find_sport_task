import Button from '@/components/button'
import { FIELD_TYPES } from '@/logic/constants'
import useController from '@/logic/hook'
import { observer } from 'mobx-react-lite'

function FieldControls() {
  const controller = useController()

  return (
    <div className="flex items-center gap-4 justify-center w-full pb-2">
      <Button onClick={() => controller.addField(FIELD_TYPES.text)}>
        Add text
      </Button>
      <Button onClick={() => controller.addField(FIELD_TYPES.checkbox)}>
        Add checkbox
      </Button>
      <Button onClick={() => controller.addField(FIELD_TYPES.dropdown)}>
        Add dropdown
      </Button>
    </div>
  )
}

export default observer(FieldControls)
