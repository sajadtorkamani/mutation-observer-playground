import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'

const AddDomNode: React.FC = () => {
  // 1. Define callback
  const callback: MutationCallback = (mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList' && mutation.removedNodes.length) {
        mutation.removedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element
            console.log('DOM node removed:', element)
          }
        })
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
    }

    // 4. Start observing
    observer.observe(document.body, config)

    // 5. Stop observing when component unmounts
    return () => {
      observer.disconnect()
    }
  }, [])

  const nodes: React.ReactNode[] = [
    <em>
      This is a {`<`}em{`>`} element.
    </em>,

    <span>
      This is a {`<`}span{`>`} element.
    </span>,

    <b>
      This is a {`<`}b{`>`} element.
    </b>,

    <button>This is a button</button>,
  ]

  return (
    <>
      <h1>Remove DOM node</h1>

      <p>
        We'll call a callback function whenever any DOM node is removed from
        this page.
      </p>

      <div className="d-flex flex-column gap-3" style={{ maxWidth: '270px' }}>
        {nodes.map((node, index) => (
          <div
            className="d-flex gap-2 align-items-center justify-content-between border-bottom border-secondary pb-3"
            key={index}
          >
            {node}

            <Button
              size="sm"
              variant="danger"
              onClick={(event) => {
                event.currentTarget.previousSibling?.remove()
              }}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </>
  )
}

export default AddDomNode
