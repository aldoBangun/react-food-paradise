import CommentItem from './CommentItem'

const CommentList = ({ comments = [] }) => {
  return (
    <div className="mb-5">
      <h4 className="mb-3">Comments</h4>
      
      {comments?.length ? (
        <ul>
          {comments.map(comment => (
            <li key={comment?.comment_id}>
              <CommentItem {...comment} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No Comments.</p>
      )}
    </div>
  )
}

export default CommentList
