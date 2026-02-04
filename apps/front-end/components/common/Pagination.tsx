import { Button } from "@heroui/react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}

export function Pagination({
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    onPageChange,
}: PaginationProps) {
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);

    // Generate page numbers to display (e.g., 1, 2, 3, 4, 5)
    const generatePageNumbers = () => {
        const pages: (number | string)[] = [];
        const maxPagesToShow = 5;
        const halfWindow = Math.floor(maxPagesToShow / 2);

        let startPage = Math.max(1, currentPage - halfWindow);
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        // Adjust start page if end page is capped
        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        // Add first page and ellipsis
        if (startPage > 1) {
            pages.push(1);
            if (startPage > 2) {
                pages.push("...");
            }
        }

        // Add page numbers
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        // Add ellipsis and last page
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push("...");
            }
            pages.push(totalPages);
        }

        return pages;
    };

    const pageNumbers = generatePageNumbers();

    return (
        <div className="flex items-center justify-between mt-6 px-2">
            {/* Left: Info Text */}
            <p className="text-sm text-gray-400">
                Showing <span className="text-white font-medium">{startItem}</span> to{" "}
                <span className="text-white font-medium">{endItem}</span> of{" "}
                <span className="text-white font-medium">{totalItems}</span> entries
            </p>

            {/* Right: Page Controls */}
            <div className="flex items-center gap-2">
                {/* Previous Button */}
                <Button
                    isIconOnly
                    onClick={() => onPageChange(Math.max(1, currentPage - 1))}
                    isDisabled={currentPage === 1}
                    className="bg-zinc-900 border border-zinc-800 text-gray-400 hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    ‹
                </Button>

                {/* Page Numbers */}
                {pageNumbers.map((page, index) => (
                    <div key={index}>
                        {page === "..." ? (
                            <span className="px-2 text-gray-500">...</span>
                        ) : (
                            <Button
                                isIconOnly
                                onClick={() => onPageChange(page as number)}
                                className={`${currentPage === page
                                        ? "bg-red-600 hover:bg-red-700 text-white"
                                        : "bg-zinc-900 border border-zinc-800 text-gray-400 hover:bg-zinc-800"
                                    }`}
                            >
                                {page}
                            </Button>
                        )}
                    </div>
                ))}

                {/* Next Button */}
                <Button
                    isIconOnly
                    onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
                    isDisabled={currentPage === totalPages}
                    className="bg-zinc-900 border border-zinc-800 text-gray-400 hover:bg-zinc-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    ›
                </Button>
            </div>
        </div>
    );
}
