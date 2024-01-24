import { useState, useEffect, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";

interface PaginationProps {
  totalPages: number;
}

import styles from "./Pagination.module.scss";
import { setPage } from "../../../store/movieSlice/movieSlice";

const Pagination: FC<PaginationProps> = ({ totalPages }) => {
  const visiblePages = 5;
  const [pages, setPages] = useState<number[]>([]);
  const { page: currentPage } = useAppSelector((state) => state.movieSlice);
  const dispatch = useAppDispatch();

  const generatePagination = () => {
    let pagin = [];

    if (totalPages <= visiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pagin.push(i);
      }
    } else {
      const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
      const endPage = Math.min(totalPages, startPage + visiblePages - 1);

      for (let i = startPage; i <= endPage; i++) {
        pagin.push(i);
      }
    }

    setPages(pagin);
  };
  useEffect(() => {
    generatePagination();
  }, [currentPage, totalPages]);

  const selectPage = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <div className={styles.pagination}>
      <span onClick={() => selectPage(1)}>start</span>
      {pages.map((pageNumber) => (
        <span onClick={() => selectPage(pageNumber)} key={pageNumber}>
          {pageNumber}
        </span>
      ))}
      <span onClick={() => selectPage(totalPages)}>end</span>
    </div>
  );
};

export default Pagination;
