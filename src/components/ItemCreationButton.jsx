import ItemCreationForm from "./ItemCreationForm";

const ItemCreationButton = ({ action, itemType, bufferMode, setBufferMode }) => {

  return (
    <>
      {bufferMode ? (
        <ItemCreationForm setBufferMode={setBufferMode} action={action} itemType={itemType} />
      ) : (
        <button className="item-creation-button" onClick={() => setBufferMode(true)}>
          Create {itemType}
        </button>
      )}
    </>
  );
};

export default ItemCreationButton;
