export const Pagination = ({ pageNum, setPageNum, maxNumPages }) => {
  const next = (e) => setPageNum(prev => prev === maxNumPages ? prev : ++prev);
  const prev = (e) => setPageNum(prev => prev === 0 ? prev : --prev);
  const pages = [];
  for (let i = 0; i <= maxNumPages; i++) {
    const btnElem =
      <li
        key={i}
        className={pageNum === i ? 'page-num current' : 'page-num'}
        onClick={(e) => setPageNum(e.target.innerText - 1)}
      >{i + 1}</li>;
    pages.push(btnElem);
  }
  return (
    <div id="pagination">
      <button className="page-nav-btn" disabled={pageNum === 0} onClick={prev}> &lt; </button>
      <ul>
        {pages}
      </ul>
      <button className="page-nav-btn" disabled={pageNum === maxNumPages} onClick={next}> &gt; </button>
    </div>
  )
}
