export default function ItemImage(props) {
  const { model = 'section-image-outline', source, title } = props
 
  return (
    <>
      <div className={`section-image ${model} position-relative rounded`}>
        <img src={source} alt={title} className="rounded"/>
      </div>
    </>
  )
}