export const UpdateForm = ({ showModal, setShowModal }) => {
  return (
    <form id="update">
      <label htmlFor="brand">Marca</label>
      <select name="cif"
        id="select-manufacturers-update">

      </select>

      <label htmlFor="model">Modelo</label>
      <input type="text"
        id="input-brand-update"
        placeholder="Modelo"
        required />

      <label htmlFor="bodyType">Color</label>
      <input type="text"
        id="input-color-update"
        placeholder="Color"
        required />

      <label htmlFor="year">Precio</label>
      <input type="number"
        id="input-price-update"
        placeholder="Precio"
        required />

      <button id="btn-update"
        type="submit" onClick={() => {
          window.alert('actualizado')
        }}>Aceptar</button>
      <button id="btn-cancel-update" onClick={setShowModal(false)}>Cancelar</button>
    </form>)
}
