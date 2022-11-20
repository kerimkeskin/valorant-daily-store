/* eslint-disable no-unused-vars */
import Dropdown from 'components/dropdown/dropdown';
import React, { useState } from 'react';
import { useGetAllSkinsQuery } from 'services/store-service';

interface IProps {
  value: any;
  errorText?: string;
  optionLabel?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, value: any) => void;
  placeholder?: string;
  emptyText?: string;
}

const SkinDropdown: React.FC<IProps> = (props) => {
  const { value, onChange, ...other } = props;

  const { data } = useGetAllSkinsQuery({ language: 'tr-TR' });

  return <Dropdown value={value} data={data || []} onChange={onChange} optionValue="uuid" {...other} />;
};

export default SkinDropdown;
