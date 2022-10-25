function PageErrorFallback({error, resetErrorBoundary}: {error: any, resetErrorBoundary: any}) {
  return (
    <div className="text-white text-center">
      <i className="bi bi-bug px-2 py-1 rounded-md bg-blue-600 text-3xl"></i>
      <p className="text-3xl mt-2">Failed to load your page </p>
      <pre>{error.message}</pre>
      <div className="text-center mt-2">
        <button className="bg-blue-500 margin-x-auto hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => window.location.reload()}>
            Try again
        </button>
        </div>
    </div>
  )
}

export default PageErrorFallback;