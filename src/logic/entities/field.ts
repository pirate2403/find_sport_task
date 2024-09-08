import { makeAutoObservable } from 'mobx'
import { nanoid } from 'nanoid'
import { FIELD_TYPES } from '../constants'
import { FieldData, FieldError } from '../interfaces'

export class Field {
  private _data: FieldData = {
    id: '',
    label: '',
    value: '',
    type: FIELD_TYPES.text,
  }

  private _errors: FieldError = {
    label: false,
    value: false,
  }

  constructor(type: keyof typeof FIELD_TYPES) {
    makeAutoObservable(this)
    this._data = {
      id: nanoid(),
      label: '',
      value: type === FIELD_TYPES.checkbox ? false : '',
      type,
    }
  }

  get data() {
    return this._data
  }

  hasError(name: keyof FieldError) {
    return !!this._errors[name]
  }

  changeData(field: Partial<FieldData>) {
    this._data = { ...this._data, ...field }
  }

  validate() {
    this._errors.label = !this._data.label
    return this._errors.label
  }

  clearError(name: keyof FieldError) {
    this._errors[name] = false
  }
}
