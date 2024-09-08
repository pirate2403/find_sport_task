import { SelectHTMLAttributes } from 'react'

interface Option {
  value: string
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[]
}

export default function Select({ options, ...props }: SelectProps) {
  return (
    <select className="border border-gray-500 px-2 py-1" {...props}>
      {options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  )
}
