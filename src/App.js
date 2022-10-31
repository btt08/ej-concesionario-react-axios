import axios from "axios";
import { useEffect, useRef, useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';
import './styles.css';

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({ sort: { field: 'brand', order: 'ASC' } });
  const [pageNum, setPageNum] = useState(0);
  const [isLoading, setisLoading] = useState(true);

  const prevFilters = useRef({});
  const prevPage = useRef(pageNum);
  const firstRender = useRef(true);

  useEffect(() => {
    const isEmpty = () => !filters.brand && !filters.color && !filters.price && !filters.manufacturer;
    const samePage = () => prevPage.current === pageNum;
    const areEqual = () => Object.keys(filters).every((key) => filters[key] === prevFilters.current[key]);
    const getData = async () => {
      if (isEmpty()) {
        try {
          const response = await axios.get(`http://localhost:5000/products/all/${filters.sort.field}/${filters.sort.order}?page=${pageNum}&limit=3`);
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      } else {
        try {
          const response = await axios.post(`http://localhost:5000/products/search/${filters.sort.field}/${filters.sort.order}?page=${pageNum}&limit=3`, filters);
          setData(response.data);
        } catch (error) {
          console.log(error);
        }
      }
    }

    if (firstRender.current || !samePage() || !areEqual()) {
      setisLoading(true);
      getData();
      firstRender.current = false;
      setTimeout(() => setisLoading(false), 500);
    }
    prevPage.current = pageNum;
    prevFilters.current = filters;
  }, [filters, pageNum]);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Main data={data} filters={filters} setFilters={setFilters} pageNum={pageNum} setPageNum={setPageNum} isLoading={isLoading} />
        <Footer />
      </div >
    </div >
  );
}

export default App;
