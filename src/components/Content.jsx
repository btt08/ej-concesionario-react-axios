import { Card } from './Card';
// import addImg from '../assets/img/add.png';

export const Content = ({ data }) => {
  return (
    <>
      <div id="cars"
        className="cars">
        {data.error && <p>No se encontraron resultados</p>}
        {!data.error &&
          <>
            {data.result.map((car) => <Card key={car.id} car={car} />)}
            {/* <article className="card add" onClick={() => window.alert('En desarrollo')}>
              <img src={addImg} alt="" />
            </article> */}
          </>
        }
      </div>
      {/* <UpdateModal /> */}
    </>
  )
}
