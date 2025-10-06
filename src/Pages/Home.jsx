import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/Hero/Hero'
import HealthConcern from '../Components/HealthConcern/HealthConcern'
import FeatureAll from '../Components/Featured/FeatureAll'
import ImmunitySupplements from '../Components/ImmunitySupplements/ImmunitySupplements'
import Vitamins_Supplements from '../Components/VitaminsAndSupplementsBanner/Vitamins_Supplements'
import TrendingNow from '../Components/TrendingNow/TrendingNow'
import HealthConcern_two from '../Components/HealthConcern/HealthConcern_two'
import SkinCareProducts from '../Components/TrendingNow/SkinCareProducts'
import MedicineBanner from '../Components/HealthConcern/MedicineBanner'
import ExploreSomethingNew from '../Components/TrendingNow/ExploreSomethingNew'
import AyurvedaTopBrand from '../Components/VitaminsAndSupplementsBanner/AyurvedaTopBrand'
import Spotlight from '../Components/TrendingNow/Spotlight'
import ThreeBannerContent from '../Components/ThreeBanner/ThreeBannerContent'
import SuperSavingDeals from '../Components/SuperSavingDeals/SuperSavingDeals'

const Home = () => {
  return (
    <>
        <Hero/>
        <FeatureAll/>
        <HealthConcern/>
        <ImmunitySupplements/>
        <Vitamins_Supplements/>
        <TrendingNow/>
        <HealthConcern_two/>
        <SkinCareProducts/>
        <MedicineBanner/>
        <ExploreSomethingNew/>
        <AyurvedaTopBrand/>
        <Spotlight/>
        <ThreeBannerContent/>
        <SuperSavingDeals/>
    </>
  )
}

export default Home