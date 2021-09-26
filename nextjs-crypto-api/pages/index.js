import Head from 'next/head'
import Image from 'next/image'
import CoinList from '../components/coinList'
import Coins from '../components/coins'
import SearchBar from '../components/searchBar/index'
import Layout from '../components/Layout';
import { useState } from 'react';
export default function Home({ filterCoins}) {
  const [search, setSearch] = useState('');

  const allCoins = filterCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = e => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    <Layout>
    <div className='coin_app'>
    <SearchBar type='text' placeholder='Search' onChange={handleChange} />
    <CoinList filterCoins={allCoins}/>
    </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=czk&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  const filterCoins = await res.json()
  return {
    props : {
      filterCoins
    }
  }
}
