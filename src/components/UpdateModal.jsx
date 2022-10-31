import UpdateForm from './UpdateForm'

export const UpdateModal = () => {
  return (
    <div className="modal"
      id="modal">
      <div className="modal-content">
        <h2>Actualizar vehículo</h2>
        <UpdateForm />
      </div>
    </div>
  )
}
