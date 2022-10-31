import { Content } from './Content'
import { SearchForm } from './SearchForm'
import { SpinnerCircular } from 'spinners-react';
import { OrderFilter } from './OrderFilter';
import { Pagination } from './Pagination';

export const Main = ({ data, filters, setFilters, pageNum, setPageNum, isLoading }) => {
  const spinnerStyle = {
    width: '30%',
    margin: '98px'
  };
  return (
    <main id="main-content">
      <section>
        <SearchForm filters={filters} setFilters={setFilters} setPageNum={setPageNum} />
      </section>
      <section id="content"
        className="content">
        {<OrderFilter filters={filters} setFilters={setFilters} />}
        {isLoading && <SpinnerCircular style={spinnerStyle} />}
        {!isLoading && <Content data={data} />}
        {<Pagination pageNum={pageNum} setPageNum={setPageNum} maxNumPages={data.maxNumPages} />}
      </section>
    </main>
  )
}
