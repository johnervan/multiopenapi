import { FunctionComponent, useState } from 'react';
import SwaggerUI from 'swagger-ui-react';
import { Select } from 'antd';

import { getOpenAPIs } from '@/data/open-api';
import { BaseLayout } from '@/layouts';
import { IOpenAPI } from '@/model/open-api';

import '@/../node_modules/swagger-ui-react/swagger-ui.css';

const { Option } = Select;

export const Dashboard: FunctionComponent = () => {
  const openapiList = getOpenAPIs();

  const [currentUrl, setCurrentUrl] = useState(openapiList[0].url);
  const onChange = (value) => {
    setCurrentUrl(value);
  };
  
  return (
    <BaseLayout>
      <Select defaultValue={openapiList[0].label} onChange={onChange}>
        {openapiList.map((openapi: IOpenAPI) => (
          <Option key={openapi.service} value={openapi.url}>
            {openapi.label}
          </Option>
        ))}
      </Select>
      <SwaggerUI url={currentUrl} />
    </BaseLayout>
  );
};
