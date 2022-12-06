import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Bag from '../../../components/Bag'
import Dashboard from '../../../components/Dashboard'
import Privacy from '../../../components/Privacy'
import Profile from '../../../components/Profile'
import Requests from '../../../components/Requests'

const Acount: React.FC = () => {
  const { query } = useRouter()

  return (
    <>
      <Head>
        <title>Painel de controle | Corteletti</title>
      </Head>

      <Dashboard>
        {query.router === 'profile' && <Profile />}
        {query.router === 'requests' && <Requests />}
        {query.router === 'privacy' && <Privacy />}
        {query.router === 'bag' && <Bag />}
      </Dashboard>
    </>
  )
}

export default Acount
