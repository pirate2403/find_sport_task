import { useContext } from 'react'
import { ControllerContext } from '../provider'

export default function useController() {
  const { controller } = useContext(ControllerContext)
  if (!controller) throw new Error('Controller not found')
  return controller
}
