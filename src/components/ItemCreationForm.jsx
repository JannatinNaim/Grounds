import { useRef, useState, useEffect } from "react";

const ItemCreationForm = ({ setBufferMode, action, itemType, initName = "", initDescription = "", updateMode }) => {
  const [itemName, setItemName] = useState(initName);
  const [itemDescription, setItemDescription] = useState(initDescription);

  const itemNameInput = useRef(null);
  useEffect(() => {
    if (itemNameInput.current?.className === "item-name-input") itemNameInput.current.focus();
  }, [updateMode]);

  const itemCreationSubmitHandler = (e) => {
    e.preventDefault();

    action(itemName, itemDescription);
    setItemName("");
    setItemDescription("");
    setBufferMode(false);
  };

  return (
    <form className="item-creation-form" onSubmit={(e) => itemCreationSubmitHandler(e)}>
      <div className="item-creation-form__inputs">
        <input
          ref={itemNameInput}
          className="item-name-input"
          required
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Name"
        />

        <textarea
          className="item-description-input"
          type="text"
          value={itemDescription}
          onChange={(e) => setItemDescription(e.target.value)}
          placeholder="Description"
        ></textarea>
      </div>

      <div className="item-creation-form__actions">
        <button type="submit" className="submit-button">
          {updateMode ? "Update" : "Add"} {itemType}
        </button>
        <button type="button" className="cancel-button" onClick={() => setBufferMode(false)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ItemCreationForm;
