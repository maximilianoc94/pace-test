import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import GET_ALL_COUNTRIES_INFO from './querys/get-all-countries';
import { Country } from './types/country';
import { Row, Layout, Spin, Col, Typography } from 'antd';
import SearchList from './components/search-list';
import CountryDisplay from './components/country-display';
import WorldMapImg from './assets/world-map.webp';
import classes from './App.module.scss';
import { fullHeight, fullWidth } from './styles/inline-globals';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const { loading, data } = useQuery(GET_ALL_COUNTRIES_INFO);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const onChange = React.useCallback(
    (value: string) => {
      setSelectedCountry(data.countries[value]);
    },
    [data?.countries]
  );

  return (
    <Layout>
      <Header className={classes.header}>
        <Title level={2} className={classes.title}>
          Pace country search
        </Title>
      </Header>
      <Content className={classes.content}>
        {loading ? (
          <Spin className={classes.spin} />
        ) : (
          <Row style={fullHeight}>
            {!selectedCountry ? (
              <>
                <Col span={12} style={fullHeight}>
                  <SearchList countries={data.countries} onSelect={onChange} />
                </Col>
                <Col span={12} className={classes.imageContainer}>
                  <img style={fullWidth} src={WorldMapImg} alt="World Map" />
                </Col>
              </>
            ) : (
              <Col style={fullHeight}>
                <CountryDisplay country={selectedCountry} goBack={() => setSelectedCountry(null)} />
              </Col>
            )}
          </Row>
        )}
      </Content>
    </Layout>
  );
}

export default App;
