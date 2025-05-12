import React from 'react';
import { Container } from '../../components/ui/Container';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const RIDCRCEDUPage: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <BookOpen className="h-12 w-12 text-white mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">RID-CRC EDU™</h1>
            <p className="text-xl mb-0">
              Education Engine for Patients and Clinicians
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="max-w-3xl mx-auto py-12">
          <Card>
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-6">Coming Soon</h2>
              <p className="text-gray-600 mb-8">
                We're currently developing comprehensive educational resources. 
                Check back soon for updates on our education initiatives.
              </p>
              <Link to="/movement-pillars">
                <Button variant="outline">Return to Movement Pillars</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default RIDCRCEDUPage;