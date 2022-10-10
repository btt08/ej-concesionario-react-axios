import image from "../assets/img/NA.jpg";

export const Card = ({ car }) => {
  return (
    <article className="card" data-id={car.id}>
      <p className="carName">{car.brand}</p>
      <img src={image} alt="Imagen del coche" className="car-img" />
      <div className="details">
        <span className="label">Frabicante</span>
        <span className="dataNumber">{car.manufacturer}</span>
        <span className="label">CIF</span>
        <span className="dataNumber">{car.cif}</span>
        <span className="label">Color</span>
        <span className="dataNumber">{car.color}</span>
        <span className="label">Precio</span>
        <span className="dataPrice">{car.price + ' €'}</span>
      </div>
      <div className="btns">
        <div className="btn update" onClick={async (e) => {
          /*
          updateCar(car.id);
          getSearchCars();
          */
          window.alert('Actualizaciones en desarrollo');
        }}>Actualizar</div>
        <div className="btn delete" onClick={async (e) =>
          /* 
          window.confirm(`¿Seguro que desea borrar el coche ${car.brand}?`) ? deleteCar(car.id) : null*/
          window.alert('Borrados en desarrollo')
        }>
          Borrar</div>
      </div>
    </article >
  )
}
