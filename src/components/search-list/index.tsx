import React, { useState } from 'react';
import { Input, Space } from 'antd';
import { Country } from '../../types/country';
import FilterableList from './filterable-list';
import { Option } from 'antd/lib/mentions';

interface SearchListProps {
  countries: Country[];
  onSelect: (value: string) => void;
}

function SearchList({ countries, onSelect }: SearchListProps): JSX.Element {
  const [filterValue, setFilterValue] = useState<string>('');
  return (
    <>
      <Input
        style={{ height: '40px' }}
        allowClear
        placeholder="Country name"
        size="large"
        value={filterValue}
        onChange={(e) => {
          setFilterValue(e.target.value);
        }}
      />
      <div style={{ display: 'block', height: 'calc(100% - 40px)', overflow: 'auto' }}>
        <FilterableList filterValue={filterValue} onSelect={onSelect}>
          {countries.map((country: Country, index: number) => (
            <Option style={{ width: '100%' }} key={country.name} value={String(index)}>
              {country.name}
            </Option>
          ))}
        </FilterableList>
      </div>
    </>
  );
}

export default React.memo(SearchList);
