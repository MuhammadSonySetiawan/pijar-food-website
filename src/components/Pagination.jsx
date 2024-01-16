import React from 'react'

function Pagination({ totalPages, currentPage, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(
      <li key={i} className={`page-item ${i === currentPage ? "active" : ""}`}>
        <a
          className="page-link"
          href="#popular-recipe"
          onClick={() => onPageChange(i)}
        >
          {i}
        </a>
      </li>
    );
  }
  return (
    <>
      
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              href="#popular-recipe"
              onClick={() => onPageChange(currentPage - 1)}
              aria-disabled={currentPage === 1}
            >
              Previous
            </a>
          </li>
          {pageNumbers}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <a
              className="page-link"
              href="#popular-recipe"
              onClick={() => onPageChange(currentPage + 1)}
              aria-disabled={currentPage === totalPages}
            >
              Next
            </a>
          </li>
        </ul>
      
    </>
  );
}

export default Pagination