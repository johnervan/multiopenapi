import { IOpenAPI } from '@/model/open-api';

export const DEFAULT_OPEN_APIS: IOpenAPI[] = [
  {
    service: 'petstore-v3',
    label: 'Pet Store V3',
    url: 'https://petstore3.swagger.io/api/v3/openapi.json',
  },
];

function parseRawToOpenAPIs(openAPIsRaw): IOpenAPI[] {
  return openAPIsRaw.map((element) => {
    return {
      service: element.service,
      label: element.label,
      url: element.url,
    };
  });
}

export function getOpenAPIs(): IOpenAPI[] {
  if (process.env.NEXT_PUBLIC_OPEN_APIS) {
    const openAPIsRaw = JSON.parse(process.env.NEXT_PUBLIC_OPEN_APIS);
    return parseRawToOpenAPIs(openAPIsRaw);
  }

  return DEFAULT_OPEN_APIS;
}
