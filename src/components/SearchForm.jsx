import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const SearchForm = ({ filters, setFilters, setPageNum }) => {
  const [manufacturers, setManufacturers] = useState([]);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    const getManufacturers = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/manufacturers`);
        if (!response.data.error) setManufacturers(response.data.result);
      } catch (error) {
        console.log(error);
      }
    }

    getManufacturers();
  }, []);

  async function searchCars(searchParams) {
    if (Object.values(searchParams).every((value) => value !== '')) {
      setFilters({ ...filters });
      setPageNum(0);
    } else {
      setFilters({ ...filters, ...searchParams });
      setPageNum(0);
    }
  }

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
