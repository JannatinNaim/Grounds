import ItemCreationForm from "./ItemCreationForm";

const ItemCreationButton = ({ action, itemType, bufferMode, setBufferMode }) => {
  return (
    <>
      {bufferMode ? (
        <ItemCreationForm setBufferMode={setBufferMode} action={action} itemType={itemType} />
      ) : (
        <button className="item-creation-button btn btn-primary" onClick={() => setBufferMode(true)}>
          <i className="fa-solid fa-plus"></i>
          Create {itemType}
        </button>
      )}
    </>
  );
};

export default ItemCreationButton;
