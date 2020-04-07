import React from 'react'

export default function () {
  return (
    <div>
      <h3>How it works</h3>
      <p>
        The example uses a serverless function that pre-renders a React app and
        sends the resulting HTML to the client. The client then re-hydrates the
        app and caches assets in a service worker for subsequent visits.
      </p>
      <p>
        <kbd>Cmd</kbd>
        <span className="separator">+</span>
        <kbd>Option</kbd>
        <span className="separator">+</span>
        <kbd>U</kbd> to view the server response.
      </p>
    </div>
  )
}
