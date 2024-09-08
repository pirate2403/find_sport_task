import React from 'react'

interface State {
  hasError: boolean
}

interface Props {
  children: React.ReactNode
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state = { hasError: false }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    return this.state.hasError ? (
      <div className="px-6 py-4 h-screen w-full bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold mb-4">Что-то пошло не так.</h1>
        <p>Попробуйте перезагрузить страницу.</p>
      </div>
    ) : (
      this.props.children
    )
  }
}
