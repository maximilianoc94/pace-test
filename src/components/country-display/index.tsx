import React from 'react';
import { Country } from '../../types/country';
import { Descriptions, List, PageHeader, Typography } from 'antd';

interface CountryDisplayProps {
  country: Country;
  goBack: () => void;
}

function CountryDisplay({ country, goBack }: CountryDisplayProps): JSX.Element {
  return (
    <>
      <PageHeader onBack={goBack} title="Back" />
      <Descriptions title={country.name}>
        <Descriptions.Item label="Native Name">{country.native}</Descriptions.Item>
        <Descriptions.Item label="Capital">{country.capital}</Descriptions.Item>
        <Descriptions.Item label="Currency">{country.currency}</Descriptions.Item>
        <Descriptions.Item label="Languages">
          {country.languages.length > 0 ? (
            <List
              style={{ height: '600px', overflow: 'auto' }}
              size="small"
              dataSource={country.languages}
              renderItem={(item) => <List.Item>{item.name}</List.Item>}
            />
          ) : (
            <Typography>None</Typography>
          )}
        </Descriptions.Item>
        <Descriptions.Item label="States">
          {country.states.length > 0 ? (
            <List
              style={{ height: '600px', overflow: 'auto' }}
              size="small"
              dataSource={country.states}
              renderItem={(item) => <List.Item>{item.name}</List.Item>}
            />
          ) : (
            <Typography>None</Typography>
          )}
        </Descriptions.Item>
      </Descriptions>
    </>
  );
}

export default React.memo(CountryDisplay);
