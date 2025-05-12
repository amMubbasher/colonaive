import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../components/ui/Container';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import {
  UserCircle2,
  Rocket,
  MessageCircleHeart,
  Building2,
  HeartPulse,
  Target,
  Calendar,
  Medal,
  Bell,
  ChevronRight
} from 'lucide-react';

const roleConfig: Record<string, {
  title: string;
  icon: JSX.Element;
  intro: string;
  actions: Array<{
    title: string;
    description: string;
    link: string;
    icon: JSX.Element;
  }>;
  stats: Array<{
    label: string;
    value: string;
    icon: JSX.Element;
  }>;
}> = {
  citizen: {
    title: "Citizen Champion",
    icon: <UserCircle2 className="h-8 w-8 text-blue-600" />,
    intro: "Thank you for stepping up to support CRC awareness. Together, we are saving lives.",
    actions: [
      {
        title: "Take the CRC Quiz",
        description: "Test your knowledge and share with friends",
        link: "/quiz",
        icon: <Target className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Book Screening",
        description: "Schedule your CRC screening appointment",
        link: "/screening",
        icon: <Calendar className="h-6 w-6 text-teal-600" />
      },
      {
        title: "Share Your Story",
        description: "Inspire others with your journey",
        link: "/share",
        icon: <MessageCircleHeart className="h-6 w-6 text-purple-600" />
      }
    ],
    stats: [
      {
        label: "Quiz Score",
        value: "80%",
        icon: <Medal className="h-5 w-5 text-yellow-500" />
      },
      {
        label: "Friends Invited",
        value: "3",
        icon: <UserCircle2 className="h-5 w-5 text-blue-500" />
      },
      {
        label: "Actions Completed",
        value: "2/5",
        icon: <Target className="h-5 w-5 text-green-500" />
      }
    ]
  },
  healthcare: {
    title: "Healthcare Champion",
    icon: <HeartPulse className="h-8 w-8 text-green-600" />,
    intro: "You're a crucial force in prevention and early detection. Let's protect lives, one patient at a time.",
    actions: [
      {
        title: "Register Your Clinic",
        description: "Add your practice to our network",
        link: "/register-clinic",
        icon: <Building2 className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Host a CRC Talk",
        description: "Organize an awareness session",
        link: "/host-talk",
        icon: <MessageCircleHeart className="h-6 w-6 text-teal-600" />
      },
      {
        title: "Access Resources",
        description: "Clinical guidelines and materials",
        link: "/resources",
        icon: <Rocket className="h-6 w-6 text-purple-600" />
      }
    ],
    stats: [
      {
        label: "Patients Screened",
        value: "12",
        icon: <UserCircle2 className="h-5 w-5 text-blue-500" />
      },
      {
        label: "Talks Hosted",
        value: "1",
        icon: <MessageCircleHeart className="h-5 w-5 text-teal-500" />
      },
      {
        label: "Resources Accessed",
        value: "5",
        icon: <Rocket className="h-5 w-5 text-purple-500" />
      }
    ]
  },
  corporate: {
    title: "Corporate Champion",
    icon: <Building2 className="h-8 w-8 text-purple-600" />,
    intro: "Your organisation is leading by example. Thank you for supporting a healthier nation.",
    actions: [
      {
        title: "Employee Screening",
        description: "Organize workplace screening",
        link: "/employee-screening",
        icon: <Target className="h-6 w-6 text-blue-600" />
      },
      {
        title: "CSR Dashboard",
        description: "Track your impact metrics",
        link: "/csr-dashboard",
        icon: <Building2 className="h-6 w-6 text-teal-600" />
      },
      {
        title: "Resources",
        description: "Access promotional materials",
        link: "/resources",
        icon: <Rocket className="h-6 w-6 text-purple-600" />
      }
    ],
    stats: [
      {
        label: "Employees Screened",
        value: "25",
        icon: <UserCircle2 className="h-5 w-5 text-blue-500" />
      },
      {
        label: "Events Organized",
        value: "2",
        icon: <Calendar className="h-5 w-5 text-teal-500" />
      },
      {
        label: "Lives Impacted",
        value: "100+",
        icon: <HeartPulse className="h-5 w-5 text-red-500" />
      }
    ]
  },
  community: {
    title: "Community Champion",
    icon: <MessageCircleHeart className="h-8 w-8 text-rose-600" />,
    intro: "Grassroots heroes like you spark real change. Help us reach more people in your network.",
    actions: [
      {
        title: "Organize Event",
        description: "Plan a community awareness event",
        link: "/organize-event",
        icon: <Calendar className="h-6 w-6 text-blue-600" />
      },
      {
        title: "Resources",
        description: "Access outreach materials",
        link: "/resources",
        icon: <Rocket className="h-6 w-6 text-teal-600" />
      },
      {
        title: "Impact Report",
        description: "Track your community impact",
        link: "/impact",
        icon: <Target className="h-6 w-6 text-purple-600" />
      }
    ],
    stats: [
      {
        label: "Events Organized",
        value: "3",
        icon: <Calendar className="h-5 w-5 text-blue-500" />
      },
      {
        label: "People Reached",
        value: "150+",
        icon: <UserCircle2 className="h-5 w-5 text-teal-500" />
      },
      {
        label: "Resources Shared",
        value: "45",
        icon: <Rocket className="h-5 w-5 text-purple-500" />
      }
    ]
  }
};

export default function ChampionDashboard() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const role = searchParams.get("role") || "citizen";
  const [championData, setChampionData] = useState(roleConfig[role]);

  useEffect(() => {
    setChampionData(roleConfig[role] || roleConfig["citizen"]);
  }, [role]);

  return (
    <div className="pt-20">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              {championData.icon}
              <div>
                <h1 className="text-2xl font-bold">{championData.title}</h1>
                <p className="text-gray-600">{championData.intro}</p>
              </div>
            </div>
            <Bell className="h-6 w-6 text-gray-400 hover:text-gray-600 cursor-pointer" />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {championData.stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    {stat.icon}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Actions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {championData.actions.map((action, index) => (
              <Link to={action.link} key={index}>
                <Card className="h-full hover:shadow-lg transition-all duration-200 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      {action.icon}
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
                    <p className="text-gray-600 text-sm">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Quick Links */}
          <Card className="bg-gradient-to-r from-blue-50 to-teal-50">
            <CardContent className="p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <Link to="/resources">Resources</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/profile">Edit Profile</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/support">Get Support</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}