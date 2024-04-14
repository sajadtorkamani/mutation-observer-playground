import React from 'react'
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

  return (
    <>
      <p>
        We'll call a callback function whenever any DOM node is added to this
        page.
      </p>

      <div className="d-flex gap-3">
        {['div', 'h1', 'p', 'span'].map((tag) => (
          <Button className="flex-shrink-0" onClick={() => handleAddNode(tag)}>
            Add {tag}
          </Button>
        ))}
      </div>
    </>
  )
}

export default AddDomNode
