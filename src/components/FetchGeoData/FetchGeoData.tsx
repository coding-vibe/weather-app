/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { axiosDefaultConfig } from 'api/axiosDefaultConfig';

// TODO: Describe the type of data in interface below
interface FetchedGeoData {}

interface Props {
  valueForSearch: string;
}

export default function FetchGeoData({ valueForSearch }: Props) {
  const [geoData, setGeoData] = useState<FetchedGeoData | null>(null);
  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const response = await axiosDefaultConfig.get<FetchedGeoData>(
          '/geo/1.0/direct',
          {
            params: {
              q: valueForSearch,
              limit: 5,
            },
          },
        );
        setGeoData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (valueForSearch !== '') {
      fetchGeoData().catch((error) => console.error(error));
    }
  }, [valueForSearch]);

  console.log(geoData);

  return null;
}
