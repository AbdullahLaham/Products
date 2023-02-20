import React from 'react'
import AddsSection from '../components/AddsSection'
import Markets from '../components/Markets'
import Stories from '../components/Stories'

const HomePage = () => {
  return (
    <div>
      <Stories />
      <AddsSection />
      <Markets />
    </div>
  )
}

export default HomePage