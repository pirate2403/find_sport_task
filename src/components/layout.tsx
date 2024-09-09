export  default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-6 py-4 min-h-screen w-full bg-gray-100 flex flex-col items-center">
      <h1 className="text-2xl font-semibold mb-4">Dynamic Form Builder</h1>
      {children}
    </div>
  )
}
