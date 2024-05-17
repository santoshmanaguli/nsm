export const setTableData = data => ({
  type: 'SET_TABLE_DATA',
  payload: data,
});

export const setFilteredData = data => ({
  type: 'SET_FILTERED_DATA',
  payload: data,
});

export const setFilterColumn = column => ({
  type: 'SET_FILTER_COLUMN',
  payload: column,
});

export const setFilterValue = value => ({
  type: 'SET_FILTER_VALUE',
  payload: value,
});
