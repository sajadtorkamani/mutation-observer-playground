import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'

const UpdateNodeAttribute: React.FC = () => {
  // 1. Define callback
  const callback: MutationCallback = (mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'attributes') {
        const info: Record<string, unknown> = {
          mutation,
          oldValue: mutation.oldValue,
          newValue: null,
        }

        if (mutation.attributeName && mutation.target instanceof HTMLElement) {
          info.newValue = mutation.target.getAttribute(mutation.attributeName)
        }

        console.log(info)
      }
    }
  }

  useEffect(() => {
    // 2. Create Observer
    const observer = new MutationObserver(callback)

    // 3. Configure observer
    const config: MutationObserverInit = {
      childList: true, // Observe changes to child nodes
      subtree: true, // Observe the entire subtree in addition to the child nodes
      attributes: true, // Observe changes to attributes
      attributeOldValue: true, // Record the previous value of changed attributes
    }

    // 4. Start observing
    observer.observe(document.body, config)

    // 5. Stop observing when component unmounts
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <h1>Update node attribute</h1>

      <p>
        We'll call a callback function whenever the attributes of any DOM nodes
        are changes.
      </p>

      <div className="d-flex gap-3">
        <Button
          variant="outline-success"
          onClick={() => {
            document.body.classList.add('hello')
          }}
        >
          Add 'hello' class to body
        </Button>

        <Button
          variant="outline-danger"
          onClick={() => {
            document.body.classList.remove('hello')
          }}
        >
          Remove 'hello' class to body
        </Button>
      </div>
    </>
  )
}

export default UpdateNodeAttribute
