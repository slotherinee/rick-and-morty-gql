import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

type PaginationListProps = {
  currentPage: number
  setCurrentPage: (update: (page: number) => number) => void
}

const PaginationList: React.FC<PaginationListProps> = ({
  currentPage,
  setCurrentPage,
}) => {
  const nextPage = () => {
    if (currentPage === 5) {
      setCurrentPage(() => 0)
    }
    setCurrentPage((prevPage: number) => prevPage + 1)
  }
  const prevPage = () =>
    setCurrentPage((prevPage: number) => Math.max(prevPage - 1, 1))

  return (
    <div>
      <Pagination className='mt-3 mb-3'>
        <PaginationContent className='cursor-pointer'>
          <PaginationItem>
            <PaginationPrevious onClick={prevPage} />
          </PaginationItem>
          {Array.from({ length: 5 }, (_, index) => (
            <PaginationItem key={index + 1}>
              <PaginationLink
                onClick={() => setCurrentPage(() => index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext onClick={nextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default PaginationList
