import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";

const Pagination = ({ setCurrentPage, currentPage = 0, totalPages }) => {
  const handlePageClick = (event) => {
     console.log("Clicked page:", event.selected);
    setCurrentPage(event.selected);
  };

  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={paginationVariants}
      initial="hidden"
      whileInView="visible"
    >
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-slate-300 rounded">{`>`}</span>
        }
        onPageChange={handlePageClick}
       
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-slate-300 rounded mr-4">{`<`}</span>
        }
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-center mt-8 mb-4"
        pageClassName="block border border-solid border-slate-300 hover:bg-light w-10 h-10 flex items-center justify-center rounded mr-4"
        activeClassName="bg-primary text-white"
      />
    </motion.div>
  );
};

export default Pagination;
