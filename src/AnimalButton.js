import "./AnimalButton.css";
export default function AnimalButton({ setType, thisType }) {
  function whenClick() {
    setType(thisType);
  }

  return (
    <div>
      <button id="thisButton" onClick={whenClick}>
        {thisType}
      </button>
    </div>
  );
}
