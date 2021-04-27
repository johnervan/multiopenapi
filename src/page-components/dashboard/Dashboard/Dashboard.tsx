import { FunctionComponent, useState } from 'react';
import SwaggerUI from 'swagger-ui-react';
import { Select } from 'antd';

import { openapiList } from '@/data/open-api';
import { BaseLayout } from '@/layouts';
import { IOpenAPI } from '@/model/open-api';

import '@/../node_modules/swagger-ui-react/swagger-ui.css';

const { Option } = Select;

export const Dashboard: FunctionComponent = () => {
  const [currentApi, setCurrentAPI] = useState(openapiList[0].service);
  const onChange = (value) => {
    setCurrentAPI(value);
  };
  return (
    <BaseLayout>
      <Select defaultValue={openapiList[0].service} onChange={onChange}>
        {openapiList.map((openapi: IOpenAPI) => (
          <Option key={openapi.service} value={openapi.service}>
            {openapi.label}
          </Option>
        ))}
      </Select>
      <SwaggerUI url={`/api/open-api/${currentApi}`} />
    </BaseLayout>
  );
};
