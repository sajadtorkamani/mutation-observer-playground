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

      <Container className="page-wrapper mx-auto mt-2 mb-5 py-5">
        <Alert
          variant="warning"
          className="text-sm position-fixed bottom-0 start-0 end-0 text-center m-0"
        >
          <Container>Open you browser's console to see the logs.</Container>
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
