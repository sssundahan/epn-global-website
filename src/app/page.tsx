
import React from 'react';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import TestimonialCarousel from '../components/TestimonialCarousel';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EPN Global - Home',
  description: 'The official homepage of EPN Global, connecting executives worldwide.',
};

interface HomepageAttributes {
  heroTitle: string;
  heroVideo?: {
    data?: {
      attributes?: {
        url: string;
      };
    };
  };
  features: Array<{
    title: string;
    description: string;
  }>;
  testimonials: Array<{
    name: string;
    title: string;
    testimonial: string;
  }>;
}

interface HomepageResponse {
  homepage: {
    data: {
      attributes: HomepageAttributes;
    };
  };
}

const homepageData = {
  heroTitle: 'Welcome to EPN Global',
  heroVideo: undefined,
  features: [
    { title: 'Networking', description: 'Connect with top executives.' },
    { title: 'Events', description: 'Exclusive access to global events.' },
    { title: 'Resources', description: 'Premium content and insights.' },
  ],
  testimonials: [
    { name: 'Jane Doe', title: 'CEO', testimonial: 'EPN Global transformed my career.' },
  ],
};

const HomePage = () => {
  return (
    <div>
      <Hero
        heroVideo={homepageData.heroVideo}
        heroTitle={homepageData.heroTitle}
      />
      <FeatureGrid features={homepageData.features} />
      <TestimonialCarousel testimonials={homepageData.testimonials} />
    </div>
  );
};

export default HomePage;
