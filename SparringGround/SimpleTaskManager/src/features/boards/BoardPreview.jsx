import TimeAgo from "../../components/TimeAgo";

const BoardPreview = ({ board }) => {
  const { boardName, boardDescription, boardLists, boardTasks, createdAt, updatedAt } = board;

  return (
    <div className="board-preview card">
      <div className="board-preview-info card-body">
        <span className="board-name card-title">{boardName}</span>
        <p className="board-description card-subtitle">{boardDescription || "No description."}</p>

        <div className="board-preview-info-stats">
          <span className="board-lists">Lists: {boardLists.length}</span>
          <span className="board-tasks">Tasks: {boardTasks.length}</span>
        </div>
      </div>

      <div className="board-preview-date-info card-body">
        <span>Last Updated: {<TimeAgo timestamp={updatedAt} />}</span>
        <span>Created: {<TimeAgo timestamp={createdAt} />}</span>
      </div>
    </div>
  );
};

export default BoardPreview;
