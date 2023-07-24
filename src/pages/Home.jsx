import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import request from '../Request'

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title='Up Coming' fetchURL={request.requestUpComing} />
      <Row rowID='2' title='Popular' fetchURL={request.requestPopular} />
      <Row rowID='3' title='Top Rated' fetchURL={request.requestTopRated} />
      <Row rowID='4' title='Latest' fetchURL={request.requestTrending} />
    </div>
  )
}

export default Home
