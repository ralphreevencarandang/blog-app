import Card from "../components/Card";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import FetchPostsQueries from "../queryOptions/FetchPostsQueries";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import { useState } from "react";

const Blogs = ({ isHome = false }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 5;

  const [queryOptions] = FetchPostsQueries(isHome);
  const { data, error, isPending, isSuccess } = useQuery(queryOptions);

  let totalPages = 0;
  let currentItems = [];

  if (isSuccess) {
    totalPages = Math.ceil(data.length / postsPerPage);
    const start = currentPage * postsPerPage;
    const end = start + postsPerPage;
    currentItems = data.slice(start, end);
  }

  return (
    <section className="mb-10">
      {isPending ? (
        <Loading />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-7 my-5"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 3,
              ease: "backInOut",
              type: "spring",
            }}
          >
            {currentItems.map((item, index) => (
              <Card {...item} key={index} />
            ))}
          </motion.div>

          <Pagination
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </>
      )}
    </section>
  );
};

export default Blogs;
