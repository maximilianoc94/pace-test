import React from 'react';
import { Country } from '../../types/country';
import { Descriptions, List, PageHeader, Typography } from 'antd';
import classes from './country-display.module.scss';
import { boldStyle } from '../../styles/inline-globals';

interface CountryDisplayProps {
  country: Country;
  goBack: () => void;
}

function CountryDisplay({ country, goBack }: CountryDisplayProps): JSX.Element {
  return (
    <>
      <PageHeader onBack={goBack} title="Back" />
      <Descriptions title={country.name}>
        <Descriptions.Item labelStyle={boldStyle} label="Native Name">
          {country.native}
        </Descriptions.Item>
        <Descriptions.Item labelStyle={boldStyle} label="Capital">
          {country.capital}
        </Descriptions.Item>
        <Descriptions.Item labelStyle={boldStyle} label="Currency">
          {country.currency}
        </Descriptions.Item>
        <Descriptions.Item labelStyle={boldStyle} label="Languages">
          {country.languages.length > 0 ? (
            <List
              className={classes.list}
              size="small"
              dataSource={country.languages}
              renderItem={(item) => <List.Item>{item.name}</List.Item>}
            />
          ) : (
            <Typography>None</Typography>
          )}
        </Descriptions.Item>
        <Descriptions.Item labelStyle={boldStyle} label="States">
          {country.states.length > 0 ? (
            <List
              className={classes.list}
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
