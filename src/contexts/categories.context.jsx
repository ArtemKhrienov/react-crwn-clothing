/**
 * Migrated to redux, this code left here just for example of using React Context API
 */
import { createContext, useState, useEffect } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const CategoriesContext = createContext({
  categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategories] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();

      setCategories(categoriesMap);
    }

    getCategoriesMap();
  }, [])

  const value = { categoriesMap };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
}