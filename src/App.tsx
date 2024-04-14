import React from 'react'
import { Alert, Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.tsx'
import AddDomNode from './pages/AddDomNode.tsx'
import { ELEMENTS_CONTAINER_CLASS_NAME, ROUTES } from './lib/constants.ts'
import UpdateNodeAttribute from './pages/UpdateNodeAttribute.tsx'
import RemoveDomNode from './pages/RemoveDomNode.tsx'

const App: React.FC = () => {
  return (
    <>
      <Header />

      <Container className="page-wrapper mx-auto pb-5 pt-4">
        <Alert variant="warning" style={{ maxWidth: '500px' }}>
          <Container>
            IMPORTANT: Open your browser's console to see the logs.
          </Container>
        </Alert>

        <Routes>
          <Route path={ROUTES.addDomNode} element={<AddDomNode />} />
          <Route path={ROUTES.removeDomNode} element={<RemoveDomNode />} />
          <Route
            path={ROUTES.updateNodeAttribute}
            element={<UpdateNodeAttribute />}
          />
          <Route path="*" element={<AddDomNode />} />
        </Routes>

        <div className={`${ELEMENTS_CONTAINER_CLASS_NAME} mt-4`} />
      </Container>
    </>
  )
}

export default App
