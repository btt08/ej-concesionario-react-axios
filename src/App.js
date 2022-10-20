import axios from "axios";
import { useEffect, useRef, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import './styles.css';

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({});
  const [manufacturers, setManufacturers] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const prevFilters = useRef({});
  const firstRender = useRef(true);

  useEffect(() => {
    const getData = async () => {
      if (Object.keys(filters).length === 0) {
        try {
          const response = await axios.get('http://localhost:5000/products/all')
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          const response = await axios.post(`http://localhost:5000/products/search`, filters);
          setData(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    }

    const getManufacturers = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/manufacturers`);
        if (!response.data.error) setManufacturers(response.data.result);
      } catch (error) {
        console.log(error);
      }
    }

    const areEqual = () => Object.keys(filters).every((key) => filters[key] === prevFilters.current[key]);

    if (firstRender.current || !areEqual()) {
      setisLoading(true);
      getData();
      getManufacturers();
      firstRender.current = false;
      setTimeout(() => setisLoading(false), 500);
    }
    prevFilters.current = filters;
  }, [filters]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Main data={data} setFilters={setFilters} manufacturers={manufacturers} isLoading={isLoading} />
        <Footer />
      </div >
    </div >
  );
}

export default App;
