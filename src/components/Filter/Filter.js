// import PropTypes from 'prop-types';
import { FilterLabel, FilterText, FilterInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectedFilter, filter } from 'redux/contactSlice';

export const Filter = () => {
  const filterValue = useSelector(selectedFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <FilterLabel>
        <FilterText>Find contacts by name</FilterText>
        <FilterInput
          type="text"
          name="filter"
          value={filterValue}
          onChange={e => dispatch(filter(e.currentTarget.value.trim()))}
        />
      </FilterLabel>
    </div>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
