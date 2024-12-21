import React from "react";

// COMPONENTS
import Button from "./../Button";

// CSS
import "./index.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isLastFourPages = currentPage > totalPages - 4;

  const getPageNumbers = () => {
    const pageNumbers = [];

    // Determine the range of page numbers to display
    if (isLastFourPages) {
      // Show the last four pages
      for (let i = totalPages - 3; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Show 3 pages starting from the current page
      const startPage = currentPage;
      const endPage = Math.min(currentPage + 2, totalPages - 1);

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="container" role="navigation" aria-label="Pagination">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        label="Previous page"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          focusable="false"
          aria-hidden="true"
        >
          <path d="M5.874.35a1.28 1.28 0 011.761 0 1.165 1.165 0 010 1.695L3.522 6l4.113 3.955a1.165 1.165 0 010 1.694 1.28 1.28 0 01-1.76 0L0 6 5.874.35z"></path>
        </svg>
        <span>Previous</span>
      </Button>
      {getPageNumbers().map((number) => (
        <Button
          key={number}
          onClick={() => onPageChange(number)}
          active={currentPage === number}
          label={`Page ${number}`}
        >
          {number}
        </Button>
      ))}
      {!isLastFourPages && <span className="ellipsis">...</span>}
      {!isLastFourPages && <span className="total-pages">{totalPages}</span>}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        label="Next page"
      >
        <span>Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="12"
          viewBox="0 0 8 12"
          focusable="false"
          aria-hidden="true"
        >
          <path d="M2.126.35a1.28 1.28 0 00-1.761 0 1.165 1.165 0 000 1.695L4.478 6 .365 9.955a1.165 1.165 0 000 1.694 1.28 1.28 0 001.76 0L8 6 2.126.35z"></path>
        </svg>
      </Button>
    </div>
  );
};

export default Pagination;
