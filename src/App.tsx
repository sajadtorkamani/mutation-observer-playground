import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.tsx'
import AddDomNode from './pages/add-dom-node/AddDomNode.tsx'
import { ELEMENTS_CONTAINER_CLASS_NAME } from './lib/constants.ts'

const App: React.FC = () => {
  return (
    <>
      <Header />

      <Container className="page-wrapper mx-auto mt-2 mb-5 py-5">
        <Routes>
          <Route path="/add-dom-node" element={<AddDomNode />} />
          <Route path="*" element={<AddDomNode />} />
        </Routes>

        <div className={`${ELEMENTS_CONTAINER_CLASS_NAME} mt-4`} />
      </Container>
    </>
  )
}

export default App
