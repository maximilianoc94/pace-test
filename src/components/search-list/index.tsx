import React, { useState } from 'react';
import { Input } from 'antd';
import { Country } from '../../types/country';
import FilterableList from './filterable-list';
import { Option } from 'antd/lib/mentions';
import classes from './search-list.module.scss';

interface SearchListProps {
  countries: Country[];
  onSelect: (value: string) => void;
}

function SearchList({ countries, onSelect }: SearchListProps): JSX.Element {
  const [filterValue, setFilterValue] = useState<string>('');
  return (
    <>
      <Input
        className={classes.input}
        allowClear
        placeholder="Country name"
        size="large"
        value={filterValue}
        onChange={(e) => {
          setFilterValue(e.target.value);
        }}
      />
      <div className={classes.listWrapper}>
        <FilterableList filterValue={filterValue} onSelect={onSelect}>
          {countries.map((country: Country, index: number) => (
            <Option key={country.name} value={String(index)}>
              {country.name}
            </Option>
          ))}
        </FilterableList>
      </div>
    </>
  );
}

export default React.memo(SearchList);
