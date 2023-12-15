import React from 'react'

function ViewComment(props) {
    const comments = props.comments;
    console.log("from view comments",comments);
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-20 lg:py-8 bg-[#f5f5f5] min-h-[300px] max-h-[350px] overflow-scroll ">
      <h1 className="mb-2 text-md font-semibold leading-5">Recent comments</h1>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div className="duration-300 transform bg-white border-l-4 border-deep-purple-accent-400 hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">
                {comment.content}
              </h6>
              <p className="text-sm text-gray-900">{comment.commented_on}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No comments available</p>
      )}
    </div>
  );
}

export default ViewComment