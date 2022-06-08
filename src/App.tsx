import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import GET_ALL_COUNTRIES_INFO from './querys/get-all-countries';
import { Country } from './types/country';
import { Row, Layout, Spin, Col, Typography } from 'antd';
import SearchList from './components/search-list';

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  const { loading, data } = useQuery(GET_ALL_COUNTRIES_INFO);
  const [selectedCountry, setSelectedCountry] = useState<Country>();

  const onChange = React.useCallback(
    (value: string) => {
      setSelectedCountry(data.countries[value]);
    },
    [data?.countries]
  );

  return (
    <Layout>
      <Header style={{ height: '50px' }}>
        <Title
          level={2}
          style={{ color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}
        >
          Pace country search
        </Title>
      </Header>
      <Content style={{ height: 'calc(100vh - 50px)', overflow: 'hidden' }}>
        {loading ? (
          <Spin
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ) : (
          <Row style={{ height: '100%' }}>
            <Col span={12} style={{ height: '100%' }}>
              <SearchList countries={data.countries} onSelect={onChange} />
            </Col>
            <Col span={12}>{/* <SelectedCountryDisplay country={selectedCountry} /> */}</Col>
          </Row>
        )}
      </Content>
    </Layout>
  );
}

export default App;
