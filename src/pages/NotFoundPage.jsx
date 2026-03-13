import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Section, Button } from '../components/ui';
import { ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Estus Health</title>
        <meta name="description" content="The page you're looking for doesn't exist. Head back to the Estus Health homepage." />
      </Helmet>

      <Section className="py-32 lg:py-40 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">404</h1>
        <p className="text-xl text-foreground/70 mb-8 max-w-md mx-auto">
          This page doesn't exist. It may have moved, or the link might be outdated.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button to="/" size="lg">
            Back to Home
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button to="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}
