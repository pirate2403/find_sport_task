import Layout from '@/components/layout'
import FieldControls from '@/containers/fieldControls'
import Form from '@/containers/form'
import ControllerProvider from './logic/provider'
import ErrorBoundary from './components/errorBoundary'
import Result from './containers/result'

export function App() {
  return (
    <ErrorBoundary>
      <ControllerProvider>
        <Layout>
          <div className="rounded border-gray-500 border w-full p-4 flex flex-col gap-4">
            <FieldControls />
            <hr className="border-gray-500" />
            <Form />
            <hr className="border-gray-500" />
            <Result />
          </div>
        </Layout>
      </ControllerProvider>
    </ErrorBoundary>
  )
}
