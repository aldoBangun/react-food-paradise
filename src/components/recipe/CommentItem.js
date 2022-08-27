const CommentItem = ({ user_id, message }) => {
  console.log(user_id)
  const avatar = 'https://picsum.photos/id/99/100'
  const name = 'Aldo Bangun'

  return (
    <div className="user-card d-flex align-items-center gap-4">
      <div className="user-card-image">
        <img className="rounded-circle" src={avatar} alt="user-avatar" width={48} height={48} />
      </div>
      <div className="user-card-detail">
        <h6 className="mb-0">{name}</h6>
        <p className="mb-0">{message}</p>
      </div>
    </div>
  )
}

export default CommentItem
