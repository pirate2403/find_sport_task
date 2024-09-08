import { Field } from '@/logic/entities/field'
import Button from '@/components/button'
import Input from '@/components/input'
import FormFieldSwitcher from './formFieldSwitcher'
import { observer } from 'mobx-react-lite'

interface Props {
  field: Field
  remove: () => void
}

function FormField({ field, remove }: Props) {
  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.changeData({ label: e.target.value })
    field.clearError('label')
  }

  return (
    <div className="w-full grid grid-cols-3 gap-4">
      <Input
        id={field.data.id}
        name="label"
        type="text"
        placeholder="Label"
        defaultValue={field.data.label}
        className={field.hasError('label') ? 'border-red-500' : ''}
        onChange={handleLabelChange}
      />
      <FormFieldSwitcher field={field} />
      <Button type="button" onClick={remove}>
        Remove
      </Button>
    </div>
  )
}

export default observer(FormField)
