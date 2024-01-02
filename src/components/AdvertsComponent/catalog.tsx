import React from 'react';
import { useGetCatalogsQuery } from '../api/apiSlice';

const CatalogsComponent: React.FC = () => {
  const { data: catalogs, error, isLoading } = useGetCatalogsQuery();

  if (isLoading) return <div>Loading catalogs...</div>;
  if (error) return <div>Error loading catalogs: {error.toString()}</div>;

  return (
    <div>
      {catalogs?.map((catalog: any) => (
        <div key={catalog.id}>{catalog.name}</div> // Adjust based on your actual data structure
      ))}
    </div>
  );
};

export default CatalogsComponent;