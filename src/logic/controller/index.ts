import { Field } from '../entities/field'
import { makeAutoObservable } from 'mobx'
import { FieldData, FieldError } from '../interfaces'

export class Controller {
  private _fields: Field[] = []
  private _errors: FieldError[] = []

  constructor() {
    makeAutoObservable(this)
  }

  get fields() {
    return this._fields
  }

  get fieldsData() {
    return this._fields.map((field) => field.data)
  }

  get errors() {
    return this._errors
  }

  remove(id: FieldData['id']) {
    this._fields = this._fields.filter((field) => field.data.id !== id)
  }

  addField(type: FieldData['type']) {
    this._fields.push(new Field(type))
  }

  validate() {
    return this._fields.reduce((acc, field) => {
      const fieldIsInvalid = field.validate();
      return acc || fieldIsInvalid;  
    }, false);
  }
}
