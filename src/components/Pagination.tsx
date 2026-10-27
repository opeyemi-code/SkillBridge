// Pagination.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./Button";
import professionals from "../data/professionals.json";

export const PROFESSIONALS_PER_PAGE = 6;

type PaginationProps = {
  currentPage: number;
  onPageChange: (page: number) => void;
};

function Pagination({ currentPage, onPageChange }: PaginationProps) {
  const totalProfessionals = professionals.length;

  const totalPages = Math.ceil(totalProfessionals / PROFESSIONALS_PER_PAGE);

  const activePage = Math.min(currentPage, totalPages || 1);

  const firstItem =
    totalProfessionals === 0
      ? 0
      : (activePage - 1) * PROFESSIONALS_PER_PAGE + 1;

  const lastItem = Math.min(
    activePage * PROFESSIONALS_PER_PAGE,
    totalProfessionals,
  );

  const goToPage = (page: number) => {
    const nextPage = Math.max(1, Math.min(page, totalPages || 1));

    onPageChange(nextPage);
  };

  return (
    <section className="flex flex-col justify-center items-center my-4 md:flex-row md:justify-between">
      <p className="text-[#58605C] flex items-center gap-1">
        Page <span>{totalPages === 0 ? 0 : activePage}</span> of{" "}
        <span>{totalPages}</span>
        <span className="w-1.5 h-1.5 bg-[#58605C] inline-block rounded-full"></span>
        <span>{totalProfessionals} total professionals shown</span>
      </p>

      <div className="my-2 flex items-center gap-1.5">
        <Button
          className="bg-[#E5F1EA] font-semibold text-xs text-secondary-text hover:text-primary-text"
          variant="secondary"
          disabled={activePage <= 1 || totalPages === 0}
          aria-label="Previous page"
          onClick={() => goToPage(activePage - 1)}
        >
          <ChevronLeft size={16} />
        </Button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <Button
              key={page}
              className={`bg-[#E5F1EA] font-semibold text-xs text-secondary-text hover:text-primary-text lg:text-sm ${
                page === activePage ? "ring-2 ring-secondary-text" : ""
              }`}
              variant="secondary"
              aria-label={`Page ${page}`}
              aria-current={page === activePage ? "page" : undefined}
              onClick={() => goToPage(page)}
            >
              {page}
            </Button>
          ),
        )}

        <Button
          className="bg-[#E5F1EA] font-semibold text-xs text-secondary-text hover:text-primary-text"
          variant="secondary"
          disabled={activePage >= totalPages || totalPages === 0}
          aria-label="Next page"
          onClick={() => goToPage(activePage + 1)}
        >
          <ChevronRight size={16} />
        </Button>
      </div>
    </section>
  );
}

export default Pagination;
