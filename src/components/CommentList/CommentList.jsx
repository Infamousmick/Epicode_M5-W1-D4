import { Star, CircleUserRound } from "lucide-react";

const CommentList = ({ comments }) => {
  console.log(comments);
  return (
    <>
      {comments.map(({ _id, author, rate, comment }) => (
        <div
          className="d-flex flex-column gap-3 mt-4 border rounded p-3 bg-dark-subtle"
          key={_id}
        >
          <div className="d-flex align-items-center gap-3">
            <CircleUserRound />
            <p className="mb-0">Autore: {author}</p>
          </div>

          <p className="mb-0">Ha scritto: {comment}</p>
          <div className="d-flex gap-1">
            {" "}
            {[...Array(rate)].map((value, index) => {
              return <Star key="index" color="yellow" fill="yellow" />;
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default CommentList;
