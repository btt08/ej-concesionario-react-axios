import { Content } from './Content'
import { SearchForm } from './SearchForm'
import { SpinnerCircular } from 'spinners-react';

export const Main = ({ data, setFilters, manufacturers, isLoading }) => {
  const spinnerStyle = {
    width: '20%',
    margin: '100px'
  };
  return (
    <main id="main-content">
      <section>
        <SearchForm setFilters={setFilters} manufacturers={manufacturers} />
      </section>
      <section id="content"
        className="content">
        {isLoading && <SpinnerCircular style={spinnerStyle} />}
        {!isLoading && <Content data={data} />}
      </section>
    </main>
  )
}
