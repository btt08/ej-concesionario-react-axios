import { useForm } from 'react-hook-form';

export const SearchForm = ({ setFilters, manufacturers }) => {
  async function searchCars(searchParams) {
    if (Object.values(searchParams).every((value) => value !== '')) {
      setFilters({});
    } else {
      setFilters(searchParams);
    }
  }

  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <form id="search" onSubmit={handleSubmit(searchCars)}>
      <label htmlFor="manufacturer">Marca</label>
      <select id="select-manufacturers" {...register('manufacturer')}>
        <option key={0} value="">All</option>
        {manufacturers.map((manufacturer) =>
          <option key={manufacturer.cif} value={manufacturer.cif}>{manufacturer.name}</option>)}
      </select>

      <label htmlFor="brand">Modelo</label>
      <input type="text"
        id="input-brand"
        placeholder="Modelo"
        autoFocus
        {...register('brand', {
          maxLength: 16
        })}
      />
      {errors.brand?.type === 'maxLength' && <p className='error'>El modelo debe tener menos de 16 caracteres</p>}

      <label htmlFor="bodyType">Color</label>
      <input type="text"
        id="input-color"
        placeholder="Color"
        {...register('color', {
          maxLength: 10
        })} />

      {errors.color?.type === 'maxLength' && <p className='error'>El color debe tener menos de 10 caracteres</p>}

      <label htmlFor="year">Precio</label>
      <input type="number"
        id="input-price"
        placeholder="Precio"
        {...register('price', {
          min: 0
        })} />

      {errors.price?.type === 'min' && <p className='error'>El precio debe ser positivo</p>}

      <button id="btn-search">Buscar</button>
    </form>
  )
}
