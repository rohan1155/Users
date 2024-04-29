/* eslint-disable react/prop-types */
import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount, onPageChange }) {
  return (
    <div className="pagination-container">
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={onPageChange}
        previousLabel={"←"}
        nextLabel={"→"}
        breakLabel={"..."}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}
