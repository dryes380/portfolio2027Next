import React from "react";
import "./Pagination.css";

const Pagination = ({
  length,
  initialPerPage,
  handlePagination,
  currentPage,
}) => {
  const PaginationNumber = [];
  for (let i = 1; i <= Math.ceil(length / initialPerPage); i++) {
    PaginationNumber.push(i);
  }
  return (
    <>
      <div className="pagination">
        {PaginationNumber.map((data) => (
          <button
            className="paginationButton"
            key={data}
            onClick={() => handlePagination(data)}
          >
            {data}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>Page Actuelle: {currentPage}</div>
    </>
  );
};

export default Pagination;
