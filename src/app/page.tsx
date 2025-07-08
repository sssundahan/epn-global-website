
import React from 'react';
import Hero from '../components/Hero';
import FeatureGrid from '../components/FeatureGrid';
import TestimonialCarousel from '../components/TestimonialCarousel';
import graphqlClient, { GET_HOMEPAGE_DATA } from '../lib/graphql';
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

async function getHomepageData() {
  const data = await graphqlClient.request<HomepageResponse>(GET_HOMEPAGE_DATA);
  return data.homepage.data.attributes;
}

const HomePage = async () => {
  const homepageData = await getHomepageData();

  return (
    <div>
      <Hero
        heroVideo={homepageData.heroVideo?.data?.attributes?.url}
        heroTitle={homepageData.heroTitle}
      />
      <FeatureGrid features={homepageData.features} />
      <TestimonialCarousel testimonials={homepageData.testimonials} />
    </div>
  );
};

export default HomePage;
