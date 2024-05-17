import { createStore } from 'redux';

const initialState = {
  tableData: [],
  filteredData: [],
  filterColumn: '',
  filterValue: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TABLE_DATA':
      return { ...state, tableData: action.payload };
    case 'SET_FILTERED_DATA':
      return { ...state, filteredData: action.payload };
    case 'SET_FILTER_COLUMN':
      return { ...state, filterColumn: action.payload };
    case 'SET_FILTER_VALUE':
      return { ...state, filterValue: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
