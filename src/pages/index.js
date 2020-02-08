import React, { useState } from "react"

import Layout from "../components/Layout"
import Donation from "../components/Donation"
import Card from "../components/Card"
import ProgressBar from "../components/ProgressBar"

const IndexPage = () => {
  const [goal, setGoal] = useState(5000)
  const [contributors, setContributors] = useState(1)

  return (
    <Layout>
      <Donation goal={goal} />
      <ProgressBar />
      <Card contributors={contributors} />
    </Layout>
  )
}

export default IndexPage
