
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteData } from '../types';
import { api, DEFAULT_SITE_DATA } from '../services/api';

interface DataContextType {
  data: SiteData;
  isLoading: boolean;
  refreshData: () => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<SiteData>(DEFAULT_SITE_DATA);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const refreshData = async () => {
    setIsLoading(true);
    const fetchedData = await api.fetchSiteData();
    if (fetchedData) {
      // Merge fetched data with default structure to ensure no missing fields
      setData({
        config: { ...DEFAULT_SITE_DATA.config, ...fetchedData.config },
        services: fetchedData.services?.length > 0 ? fetchedData.services : DEFAULT_SITE_DATA.services,
        events: fetchedData.events?.length > 0 ? fetchedData.events : DEFAULT_SITE_DATA.events,
        videos: fetchedData.videos?.length > 0 ? fetchedData.videos : DEFAULT_SITE_DATA.videos,
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading, refreshData }}>
      {children}
    </DataContext.Provider>
  );
};
