import React from 'react';
import { Container } from '../../../components/ui/Container';
import { Card, CardContent } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Link } from 'react-router-dom';
import {
  Search,
  Clock,
  ShieldCheck,
  Microscope,
  AlertCircle,
  CalendarCheck,
  HeartPulse,
  Users
} from 'lucide-react';

const ColonoscopyGoldStandard: React.FC = () => {
  // Data arrays are well-structured
  const benefits = [
    {
      icon: <Search className="h-6 w-6 text-blue-500" />,
      title: "Detection + Removal",
      description: "Finds and removes precancerous polyps in a single session"
    },
    {
      icon: <Microscope className="h-6 w-6 text-teal-500" />,
      title: "Comprehensive View",
      description: "Complete visualization of the colon and rectum"
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-500" />,
      title: "Long Interval",
      description: "Only needed once every 10 years with normal results"
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-green-500" />,
      title: "Life-Saving Potential",
      description: "Dramatically reduces CRC incidence and mortality"
    }
  ];

  const considerations = [
    {
      age: "50+",
      description: "Standard age to begin screening for average-risk individuals",
      note: "Earlier screening may be recommended based on risk factors"
    },
    {
      age: "45+",
      description: "Consider starting earlier if you have:",
      factors: [
        "Family history of CRC or polyps",
        "Personal history of inflammatory bowel disease",
        "Certain inherited syndromes",
        "Certain ethnic groups (e.g., African ancestry) associated with higher risk"
      ]
    }
  ];

  return (
    // Consider if pt-20 should be part of a Layout component instead
    <div className="pt-20"> {/* [Review Point 1, 3] */}
      {/* Hero Section */}
      {/* Good use of gradient, clear text */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            {/* [Review Point 2] Heading structure is good (h1) */}
            {/* [Review Point 4] Consider responsive text size */}
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">Why Colonoscopy Is Still the Gold Standard</h1>
            {/* [Review Point 4] Consider responsive text size */}
            <p className="text-lg sm:text-xl mb-0">
              Understanding the most effective tool for colorectal cancer prevention and early detection.
            </p>
          </div>
        </Container>
      </div>

      {/* Main Content */}
      {/* Consistent padding */}
      <section className="py-16">
        <Container>
          {/* Consistent content width */}
          <div className="max-w-3xl mx-auto">
            {/* [Review Point 1, 3] Prose is great for article content */}
            <div className="prose prose-lg max-w-none">
              {/* [Review Point 1] Good intro paragraph */}
              {/* Removed mb-8 as prose adds vertical rhythm. Consider adjusting prose config if needed */}
              <p className="text-xl text-gray-600"> {/* [Review Point 3] */}
                When it comes to preventing colorectal cancer (CRC), no tool has proven more effective than colonoscopy.
                Its unique ability to both detect and remove precancerous polyps makes it the gold standard in CRC prevention.
              </p>

              {/* [Review Point 2] Good use of h2 */}
              {/* Removed mb-6 as prose handles heading margins */}
              <h2 className="text-2xl font-bold">Why Colonoscopy Matters</h2> {/* [Review Point 3] */}
              {/* [Review Point 3, 4] Grid and gap are used well */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 not-prose"> {/* [Review Point 3] Added not-prose */}
                {benefits.map((benefit, index) => (
                  // Card hover effect is a nice touch
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      {/* [Review Point 3] Use gap utility for spacing */}
                      <div className="flex items-start gap-4"> {/* Changed mr-4 to gap-4 */}
                        {/* [Review Point 2] Icons are decorative, hide from screen readers */}
                        {/* Removed mt-1, rely on flex alignment */}
                        <div aria-hidden="true">{benefit.icon}</div> {/* Added aria-hidden */}
                        <div>
                          {/* [Review Point 2] Good use of h3 */}
                          <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Callout box - good visual distinction */}
              {/* [Review Point 3] Added not-prose */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-12 not-prose">
                {/* [Review Point 2] Consider using an icon + h3 might be slightly better semantically if this is a distinct subsection */}
                <h3 className="text-lg font-bold text-blue-800 mb-2 flex items-center gap-2">
                  {/* [Suggestion] Optional: Add an icon for consistency */}
                  {/* <Info className="h-5 w-5" aria-hidden="true" /> */}
                  Remember
                </h3>
                <p className="text-blue-700">
                  Most colorectal cancers begin as benign polyps. Removing them early through colonoscopy
                  can literally prevent cancer from developing.
                </p>
              </div>

              {/* [Review Point 2] Good use of h2 */}
              {/* Removed mb-6 as prose handles heading margins */}
              <h2 className="text-2xl font-bold">When Should You Consider Colonoscopy?</h2> {/* [Review Point 3] */}
              {/* [Review Point 3] space-y is good here */}
              {/* [Review Point 3] Added not-prose */}
              <div className="space-y-6 mb-12 not-prose">
                {considerations.map((item, index) => (
                  <Card key={index} className="bg-gradient-to-r from-gray-50 to-white">
                    <CardContent className="p-6">
                      {/* [Review Point 1, 4] Flex layout. Consider stacking on small screens */}
                      {/* [Review Point 3] Use gap utility */}
                      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6"> {/* Changed mr-6, added flex-col/sm:flex-row */}
                        {/* Center age text, provide fixed width */}
                        <div className="sm:w-16 flex-shrink-0 text-left sm:text-center mb-2 sm:mb-0"> {/* [Review Point 5] */}
                          <div className="text-3xl font-bold text-blue-600">{item.age}</div>
                        </div>
                        <div className="flex-grow"> {/* Allow text content to take remaining space */}
                          <p className="text-lg font-semibold mb-2">{item.description}</p>
                          {item.factors && (
                            /* [Review Point 2] Standard list, good */
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              {item.factors.map((factor, idx) => (
                                <li key={idx}>{factor}</li>
                              ))}
                            </ul>
                          )}
                          {item.note && (
                            <p className="text-gray-600 mt-2 italic">{item.note}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Statistics Section */}
              {/* [Review Point 3, 4] Grid and gap are well used */}
              {/* [Review Point 3] Added not-prose */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 not-prose">
                {/* Card 1 */}
                <Card className="bg-gradient-to-b from-blue-50 to-white text-center">
                  <CardContent className="p-6">
                    {/* [Review Point 2] Hide decorative icon */}
                    <HeartPulse aria-hidden="true" className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                    <p className="text-gray-600">Prevention rate when polyps are removed early</p>
                  </CardContent>
                </Card>
                {/* Card 2 */}
                <Card className="bg-gradient-to-b from-teal-50 to-white text-center">
                  <CardContent className="p-6">
                    {/* [Review Point 2] Hide decorative icon */}
                    <CalendarCheck aria-hidden="true" className="h-8 w-8 text-teal-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-teal-600 mb-2">10</div>
                    <p className="text-gray-600">Years between screenings with normal results</p>
                  </CardContent>
                </Card>
                {/* Card 3 */}
                <Card className="bg-gradient-to-b from-purple-50 to-white text-center">
                  <CardContent className="p-6">
                    {/* [Review Point 2] Hide decorative icon */}
                    <Users aria-hidden="true" className="h-8 w-8 text-purple-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
                    <p className="text-gray-600">Reduction in CRC deaths through screening</p>
                  </CardContent>
                </Card>
              </div>

              {/* Call to Action Section */}
              {/* [Review Point 3] Added not-prose */}
              {/* [Review Point 5] Consider if bg-blue-50 is distinct enough, maybe stronger bg or border */}
              <div className="bg-blue-50 rounded-lg p-8 mb-12 not-prose">
                {/* [Review Point 5] Suggestion: Icon choice */}
                <div className="flex items-center justify-center mb-6">
                  {/* Replaced AlertCircle with a more positive/action-oriented icon */}
                  {/* <CheckCircle className="h-12 w-12 text-green-600" />  OR */}
                  {/* <ArrowRightCircle className="h-12 w-12 text-blue-600" /> */}
                  {/* Keeping original for now, but consider the tone */}
                  <AlertCircle aria-hidden="true" className="h-12 w-12 text-red-600" /> {/* Added aria-hidden */}
                </div>
                {/* [Review Point 2] Good use of h2 */}
                <h2 className="text-2xl font-bold text-center mb-6">Ready to Take Control of Your Health?</h2>
                <p className="text-lg text-center mb-8">
                  A colonoscopy remains the gold standard for preventing colorectal cancer by detecting and removing precancerous polyps early.
                </p>
                {/* [Review Point 3] space-y and max-w good */}
                <div className="space-y-4 max-w-lg mx-auto">
                  {/* [Review Point 2] h3 is appropriate here */}
                  {/* Removed mb-6, rely on space-y from parent */}
                  <h3 className="text-xl font-bold text-center">Take the first step today:</h3> {/* [Review Point 3] */}
                  <Link to="/screening/find-specialist" className="block">
                    {/* Assuming Button component handles a11y */}
                    {/* [Review Point 3] Consider abstracting button styles if used elsewhere */}
                    <Button variant="primary" className="w-full py-3 text-lg">
                      Book a Colonoscopy Consultation with a Specialist
                    </Button>
                  </Link>
                  <Link to="/screening/find-gp" className="block">
                    <Button variant="outline" className="w-full py-3 text-lg">
                      Discuss Screening Options with a GP
                    </Button>
                  </Link>
                </div>
                {/* Informative footnote */}
                <p className="text-center mt-8 text-gray-700 italic">
                  Project COLONAiVE™ is here to support you on your journey toward early detection, prevention, and peace of mind.
                </p>
              </div>
            </div> {/* End prose */}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ColonoscopyGoldStandard;