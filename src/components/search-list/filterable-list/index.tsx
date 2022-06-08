import { Button } from 'antd';
import React from 'react';

interface FilterableListProps {
  children: React.ReactNode;
  filterValue: string;
  onSelect: (value: string) => void;
}

type Child = { props: { children: string; value: string } };

function FilterableList({ children, filterValue, onSelect }: FilterableListProps): JSX.Element | null {
  return (
    <>
      {React.Children.toArray(children)
        .filter((child) => {
          return (child as Child).props.children.match(new RegExp(`${[filterValue]}`, 'gi'));
        })
        .map((child) => (
          <Button
            block
            key={(child as Child).props.value}
            style={{ width: '100%' }}
            onClick={() => {
              onSelect((child as Child).props.value);
            }}
          >
            {(child as Child).props.children}
          </Button>
        ))}
    </>
  );
}

export default React.memo(FilterableList);
