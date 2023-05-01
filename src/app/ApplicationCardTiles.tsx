import React from 'react'
import ApplicationCard from './ApplicationCard'

const ApplicationCardTiles = () => {
  return (
    <div className="flex justify-center flex-wrap gap-10">
        <ApplicationCard key={1} />
        <ApplicationCard key={2} />
        <ApplicationCard key={3} />
        <ApplicationCard key={4} />
        <ApplicationCard key={5} />
        <ApplicationCard key={6} />
    </div>
  )
}

export default ApplicationCardTiles