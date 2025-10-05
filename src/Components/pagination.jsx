export default function Pagination({ page, totalPages, onPrev, onNext }) {
  return (
    <div className="flex justify-center items-center mt-6 gap-4">
      <button
        onClick={onPrev}
        disabled={page === 0}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Previous
      </button>
      <span>
        Page {page + 1} of {totalPages || 1}
      </span>
      <button
        onClick={onNext}
        disabled={page === totalPages - 1 || !totalPages}
        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
