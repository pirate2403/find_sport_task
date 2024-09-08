import { PropsWithChildren, useState } from 'react'
import { Controller } from '../controller'
import { createContext } from 'react'

export const ControllerContext = createContext<{
  controller: Controller | null
}>({ controller: null })

export default function ControllerProvider({ children }: PropsWithChildren) {
  const [controller] = useState(() => new Controller())

  return (
    <ControllerContext.Provider value={{ controller }}>
      {children}
    </ControllerContext.Provider>
  )
}
