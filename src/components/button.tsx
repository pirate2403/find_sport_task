import { ButtonHTMLAttributes } from 'react'

export default function Button({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="border p-2 border-gray-500 rounded active:scale-95"
      {...props}
    >
      {children}
    </button>
  )
}
