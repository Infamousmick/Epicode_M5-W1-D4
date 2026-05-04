import SingleComment from "../SingleComment/SingleComment";

const CommentList = ({
  comments,
  getComments,
  triggerToast,
  editingId,
  setEditingId,
}) => {
  return (
    <>
      {comments.map(({ _id, author, rate, comment }) => (
        <SingleComment
          key={_id}
          author={author}
          rate={rate}
          comment={comment}
          id={_id}
          getComments={getComments}
          triggerToast={triggerToast}
          editingId={editingId}
          setEditingId={setEditingId}
        />
      ))}
    </>
  );
};

export default CommentList;
