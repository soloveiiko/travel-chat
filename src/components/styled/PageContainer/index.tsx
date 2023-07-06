const PageContainer = ({ children }: { children: any }) => {
  return (
    <div className="mx-2 mt-4 flex max-w-md flex-col rounded-lg p-3 sm:mx-auto sm:border sm:border-slate-600">
      {children}
    </div>
  )
}

export default PageContainer
