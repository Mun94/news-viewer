import React, { useCallback,useState } from 'react';
import NewsList from './components/NewsList.js'
import Categories from './components/Categories.js';

const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback(category => setCategory(category),[])

  return (
  <>
  <Categories category={category} onSelect = {onSelect}/>
  <NewsList category={category}/>
  </>)
}

export default App;