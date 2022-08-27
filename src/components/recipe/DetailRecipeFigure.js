const DetailRecipeFigure = ({ imageURL, title }) => (
  <div className="text-center mb-5">
    <h3 className="mb-3">{title}</h3>
    <img className="rounded-3 object-cover" src={imageURL} alt={title} width={480} height={320} />
  </div>
)

export default DetailRecipeFigure