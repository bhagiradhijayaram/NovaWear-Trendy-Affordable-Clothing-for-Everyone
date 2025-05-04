import "./Pagination.css";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <>
      {/*  pagination logic */}
      <div className="pagination-container">
        <div className="pagination-controls">
          <button
            className="prev-btn"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className="pagination-btn"
              onClick={() => setCurrentPage(index + 1)}
              style={{
                backgroundColor: currentPage === index + 1 ? "gainsboro" : "",
              }}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="next-btn"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
