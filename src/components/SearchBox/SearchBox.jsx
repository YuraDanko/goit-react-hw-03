import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  const handleInput = (evt) => {
    onFilterChange(evt.target.value);
  };

  return (
    <div className={css.wraper}>
      <label>
        Find contacts by name
        <input type="text" value={filter} onChange={handleInput} />
      </label>
    </div>
  );
};

export default SearchBox;
