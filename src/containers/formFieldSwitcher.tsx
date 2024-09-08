import { Field } from '@/logic/entities/field'
import Input from '@/components/input'
import Select from '@/components/select'
import { observer } from 'mobx-react-lite'

interface Props {
  field: Field
}

function FormFieldSwitcher({ field }: Props) {
  if (field.data.type === 'checkbox') {
    return (
      <Input
        id={field.data.id}
        type="checkbox"
        name="value"
        checked={!!field.data.value}
        onChange={(e) => field.changeData({ value: e.target.checked })}
      />
    )
  }

  if (field.data.type === 'text' && typeof field.data.value === 'string') {
    return (
      <Input
        id={field.data.id}
        type="text"
        name="value"
        value={field.data.value}
        onChange={(e) => field.changeData({ value: e.target.value })}
      />
    )
  }

  if (field.data.type === 'dropdown' && typeof field.data.value === 'string') {
    return (
      <Select
        id={field.data.id}
        name="value"
        value={field.data.value}
        onChange={(e) => field.changeData({ value: e.target.value })}
        options={[
          { value: 'Option 1', label: 'Option 1' },
          { value: 'Option 2', label: 'Option 2' },
        ]}
      />
    )
  }

  return null
}

export default observer(FormFieldSwitcher)
