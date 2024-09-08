import Button from '@/components/button'
import FormField from './fromFiled'
import useController from '@/logic/hook'
import { toJS } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useRef } from 'react'

function Form() {
  const ref = useRef<HTMLFormElement | null>(null)
  const controller = useController()

  const hasFields = !!controller.fields.length

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const isValid = controller.validate()
    if (!isValid) return
    console.log(toJS(controller.fields))
  }

  return (
    <form
      ref={ref}
      className="w-full flex flex-col gap-2"
      onSubmit={handleSubmit}
    >
      {controller.fields.map((field) => (
        <FormField
          key={field.data.id}
          field={field}
          remove={() => controller.remove(field.data.id)}
        />
      ))}
      {hasFields && <Button type="submit">Send</Button>}
    </form>
  )
}

export default observer(Form)
