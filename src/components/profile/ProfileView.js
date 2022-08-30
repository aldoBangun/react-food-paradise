import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { Person } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'
import FormEditProfile from './FormEditProfile'

const ProfileView = () => {
  const [showModal, setShowModal] = useState(false)
  const currentUser = useSelector(state => state.currentUser.user)
  const imageSize = 160

  return (
    <div className="d-flex align-items-center justify-content-center flex-grow-1" >
      <div className="text-center">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <label htmlFor="modal-button" className="overflow-hidden cursor-pointer rounded-circle bg-lightgray d-flex align-items-center justify-content-center" style={{ width: imageSize, height: imageSize }}>
            {currentUser.avatar ? (
              <img className="rounded-circle object-cover d-block mx-auto" src={currentUser.avatar} alt="user-avatar" width={imageSize} height={imageSize} />
            ) : (
              <Person size={48} />
            )}
          </label>
          <input className="d-none" type="button" id="modal-button" onClick={() => setShowModal(true)} />
        </div>
        <h5>{currentUser.name}</h5>
      </div>
      <Modal
        size="md"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Update Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormEditProfile />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ProfileView
