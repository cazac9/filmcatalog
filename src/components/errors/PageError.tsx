import ActionButton from "../controls/ActionButton";

function PageErrorFallback({error, resetErrorBoundary}: {error: any, resetErrorBoundary: any}) {
  return (
    <div className="text-white text-center" role="page-error-fallback">
      <i className="bi bi-bug px-2 py-1 rounded-md bg-blue-600 text-3xl"></i>
      <p className="text-3xl mt-2">Failed to load your page</p>
      <pre>{error.message}</pre>
      <div className="text-center mt-2">
        <ActionButton title="Try again" action={() => window.location.reload()}></ActionButton>
      </div>
    </div>
  )
}

export default PageErrorFallback;