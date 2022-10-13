import { Card } from './Card';
import addImg from '../assets/img/add.png';

export const Content = ({ data, isLoading }) => {
  return (
    <>
      <div id="cars"
        className="cars">
        {!isLoading && data.error && <p>No se encontraron resultados</p>}
        {!isLoading && !data.error &&
          <>
            {data.result.map((car) => <Card key={car.id} car={car} />)}
            <article className="card add" onClick={() => window.alert('En desarrollo')}>
              <img src={addImg} alt="" />
            </article>
          </>
        }
      </div>
      {/* <UpdateModal /> */}
    </>
  )
}
