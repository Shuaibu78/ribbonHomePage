import React from 'react';
import ConversionCard from '../components/conversionCard';
import RecentActivity from '../components/recentActivity';
import SelectCurrency from '../components/selectCurrencyCard';

const Home = () => {
  return (
    <div>
      <ConversionCard />
      <SelectCurrency />
      <RecentActivity />
    </div>
  )
}

export default Home;