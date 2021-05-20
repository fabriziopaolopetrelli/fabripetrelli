import React, { useState } from 'react'

// Chackra UI
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Image
} from '@chakra-ui/react'

// Style
import './modal.css'

// Assets
import fabripetrelli from '../images/fabriziopaolopetrelli.jpg'

const GreetingModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} isCentered size="3xl" motionPreset="slideInBottom">
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody className="modalBody">
          <div>
            <Image
              borderRadius="full"
              boxSize="150px"
              alt="Fabrizio Paolo Petrelli"
              src={fabripetrelli}
              className="modalImg"
            />
          </div>
          <div className="modalContentText">
            <h1>FABRIZIO PAOLO PETRELLI</h1>
            Hi, I&apos;m Fabrizio
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsOpen(false)}>Go deeper</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default GreetingModal
