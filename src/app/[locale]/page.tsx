"use client";

import { domAnimation, LazyMotion, MotionConfig } from 'framer-motion';
import { PortfolioOpening } from '../../components/PortfolioOpening';
import { PortfolioDetails, PortfolioFooter } from '../../components/PortfolioDetails';
import { PortfolioHeader } from '../../components/PortfolioHeader';

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
      <PortfolioHeader />
      <main>
        <PortfolioOpening />
        <PortfolioDetails />
      </main>
      <PortfolioFooter />
      </LazyMotion>
    </MotionConfig>
  );
}
