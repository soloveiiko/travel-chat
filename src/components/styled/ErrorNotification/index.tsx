const ErrorNotification = ({ children }: { children: any }) => {
  return (
    <div className="rounded-md border border-red-600 bg-red-200 px-4 py-2 font-medium text-red-700">
      {children}
    </div>
  )
}

export default ErrorNotification
