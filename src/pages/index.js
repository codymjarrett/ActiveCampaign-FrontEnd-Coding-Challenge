import React from "react"

import AppProvider from "../context"
import Layout from "../components/Layout"
import Donation from "../components/Donation"
import Card from "../components/Card"
import ProgressBar from "../components/ProgressBar"

const IndexPage = () => {
  return (
    <AppProvider>
      <Layout>
        <Donation />
        <ProgressBar />
        <Card />
      </Layout>
    </AppProvider>
  )
}

export default IndexPage
