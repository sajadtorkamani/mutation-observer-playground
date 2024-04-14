import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { ELEMENTS_CONTAINER_CLASS_NAME } from '../../lib/constants.ts'

const AddDomNode: React.FC = () => {
  function handleAddNode(tag: string) {
    const node = document.createElement(tag)
    node.textContent = `This is a ${tag} element`

    const container = document.querySelector(
      `.${ELEMENTS_CONTAINER_CLASS_NAME}`,
    )

    container?.appendChild(node)
  }

  // 1. Define callback
  const callback: MutationCallback = (mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList' && mutation.addedNodes.length) {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element
            console.log('DOM node added:', element)
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
      childList: true,
      subtree: true, // Observe the entire subtree to catch additions anywhere in the DOM tree
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
      <p>
        We'll call a callback function whenever any DOM node is added to this
        page.
      </p>

      <div className="d-flex gap-3">
        {['div', 'h1', 'p', 'span'].map((tag) => (
          <Button
            key={tag}
            className="flex-shrink-0"
            onClick={() => handleAddNode(tag)}
          >
            Add {tag}
          </Button>
        ))}
      </div>
    </>
  )
}

export default AddDomNode
