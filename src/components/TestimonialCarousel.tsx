
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface Testimonial {
  name: string;
  title: string;
  testimonial: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        What Our Members Say
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
        {testimonials.map((testimonial) => (
          <Card key={testimonial.name} sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {testimonial.title}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                {testimonial.testimonial}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialCarousel;
