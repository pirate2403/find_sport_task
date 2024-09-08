import { FIELD_TYPES } from '../constants'

export interface FieldData {
  id: string
  label: string
  type: keyof typeof FIELD_TYPES
  value: string | boolean
}

export interface FieldError {
  label: boolean
  value: boolean
}
