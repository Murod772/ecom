import React from 'react';
import { useGetAdvertsQuery } from '../api/apiSlice';

const AdvertsPage: React.FC = () => {
  const { data: adverts, error, isLoading } = useGetAdvertsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

  return (
    <div>
      {/* Render your adverts data here */}
      {adverts && adverts.map((advert: any) => (
        <div key={advert.id}>{advert.title}</div>
      ))}
    </div>
  );
};

export default AdvertsPage;