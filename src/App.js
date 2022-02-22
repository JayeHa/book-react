import React, { useCallback, useState } from 'react';
import Categories from './14-news-viwer/Categories';
import NewsList from './14-news-viwer/NewsList';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
