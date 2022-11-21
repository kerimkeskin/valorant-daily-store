/* eslint-disable no-unused-vars */
import React from 'react';
import FormControl from '@mui/material/FormControl';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface IProps {
  data: any;
  value: any;
  errorText?: string;
  optionLabel?: string;
  onChange: any;
  placeholder?: string;
  emptyText?: string;
  optionValue?: string;
}

const Dropdown: React.FC<IProps> = (props) => {
  const {
    data,
    value,
    onChange,
    errorText,
    optionLabel = 'displayName',
    placeholder,
    emptyText = 'No Record',
    optionValue = 'id',
    ...other
  } = props;

  return (
    <FormControl fullWidth>
      <Autocomplete
        options={data}
        value={value}
        onChange={onChange}
        noOptionsText={emptyText}
        getOptionLabel={(option) => option?.[optionLabel] ?? ''}
        isOptionEqualToValue={(option, value) => option?.[optionValue] === value?.[optionValue]}
        blurOnSelect
        renderInput={(params) => <TextField variant="filled" label={placeholder} {...params} />}
        {...other}
      />
    </FormControl>
  );
};

export default Dropdown;
