import DetailContent from './_components/detail-content'

const Pages = ({ params }: { params: { category: string; title: string } }) => {
  return (
    <div>
      <DetailContent params={params} />
    </div>
  )
}

export default Pages
