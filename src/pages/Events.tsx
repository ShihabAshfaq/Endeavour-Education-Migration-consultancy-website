import { useState } from 'react';
import { Calendar as CalendarIcon, MapPin, Clock, Users, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';

export function Events() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Education Fair: Study in Australia',
      date: '2025-11-25',
      time: '10:00 AM - 4:00 PM',
      location: 'Sydney Convention Centre',
      type: 'fair',
      description: 'Meet representatives from over 50 Australian universities and colleges.',
      spots: 200,
      registered: 145
    },
    {
      id: 2,
      title: 'Student Visa Workshop',
      date: '2025-11-28',
      time: '2:00 PM - 4:00 PM',
      location: 'Endeavour Office, Sydney',
      type: 'workshop',
      description: 'Learn about the student visa application process and requirements.',
      spots: 30,
      registered: 22
    },
    {
      id: 3,
      title: 'Pre-Departure Orientation',
      date: '2025-12-05',
      time: '1:00 PM - 5:00 PM',
      location: 'Online (Zoom)',
      type: 'seminar',
      description: 'Essential information for students departing to Australia.',
      spots: 100,
      registered: 67
    },
    {
      id: 4,
      title: 'Migration Pathways Seminar',
      date: '2025-12-10',
      time: '6:00 PM - 8:00 PM',
      location: 'Melbourne Office',
      type: 'seminar',
      description: 'Explore different migration pathways to Australia.',
      spots: 50,
      registered: 38
    },
    {
      id: 5,
      title: 'University Open Day',
      date: '2025-11-20',
      time: '9:00 AM - 3:00 PM',
      location: 'Sydney Office',
      type: 'meet-greet',
      description: 'Meet university representatives and explore course options.',
      spots: 25,
      registered: 18
    },
    {
      id: 6,
      title: 'IELTS Preparation Workshop',
      date: '2025-12-18',
      time: '3:00 PM - 5:00 PM',
      location: 'Online (Zoom)',
      type: 'workshop',
      description: 'Expert tips and strategies for achieving your target IELTS score.',
      spots: 75,
      registered: 52
    }
  ];

  const pastEvents = [
    {
      id: 101,
      title: 'Australian Universities Expo 2025',
      date: '2025-10-15',
      time: '10:00 AM - 5:00 PM',
      location: 'Sydney Convention Centre',
      type: 'fair',
      description: 'A successful expo featuring 40+ Australian universities with over 500 attendees.',
      attendees: 523,
      spots: 500
    },
    {
      id: 102,
      title: 'Skilled Migration Masterclass',
      date: '2025-09-28',
      time: '2:00 PM - 5:00 PM',
      location: 'Melbourne Office',
      type: 'workshop',
      description: 'In-depth workshop covering skilled migration pathways and requirements.',
      attendees: 45,
      spots: 50
    },
    {
      id: 103,
      title: 'Student Success Stories Panel',
      date: '2025-09-10',
      time: '6:00 PM - 8:00 PM',
      location: 'Online (Zoom)',
      type: 'seminar',
      description: 'Alumni shared their experiences studying and working in Australia.',
      attendees: 230,
      spots: 200
    },
    {
      id: 104,
      title: 'OSHC Information Session',
      date: '2025-08-22',
      time: '3:00 PM - 4:30 PM',
      location: 'Sydney Office',
      type: 'seminar',
      description: 'Comprehensive session about Overseas Student Health Cover requirements.',
      attendees: 38,
      spots: 40
    },
    {
      id: 105,
      title: 'Meet & Greet: University Representatives',
      date: '2025-08-05',
      time: '11:00 AM - 2:00 PM',
      location: 'Brisbane Office',
      type: 'meet-greet',
      description: 'One-on-one meetings with representatives from top Australian universities.',
      attendees: 62,
      spots: 60
    },
    {
      id: 106,
      title: 'Accommodation Options Workshop',
      date: '2025-07-18',
      time: '4:00 PM - 6:00 PM',
      location: 'Online (Zoom)',
      type: 'workshop',
      description: 'Explored various accommodation options for international students.',
      attendees: 127,
      spots: 150
    },
    {
      id: 107,
      title: 'English Proficiency Test Preparation',
      date: '2025-07-01',
      time: '1:00 PM - 4:00 PM',
      location: 'Sydney Office',
      type: 'workshop',
      description: 'Intensive preparation session for IELTS, PTE, and TOEFL tests.',
      attendees: 88,
      spots: 100
    },
    {
      id: 108,
      title: 'Post-Study Work Visa Seminar',
      date: '2025-06-12',
      time: '5:00 PM - 7:00 PM',
      location: 'Perth Office',
      type: 'seminar',
      description: 'Information about Temporary Graduate Visa (subclass 485) options.',
      attendees: 72,
      spots: 80
    }
  ];

  const eventTypes = {
    fair: { label: 'Fair', color: 'bg-[#1E5A8E]' },
    workshop: { label: 'Workshop', color: 'bg-[#FF6B35]' },
    seminar: { label: 'Seminar', color: 'bg-purple-500' },
    'meet-greet': { label: 'Meet & Greet', color: 'bg-green-500' }
  };

  // Calendar logic
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const monthYear = currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  // Get events for a specific date
  const getEventsForDate = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return upcomingEvents.filter(event => event.date === dateStr);
  };

  // Get events for selected date
  const selectedDateEvents = selectedDate ? upcomingEvents.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.toDateString() === selectedDate.toDateString();
  }) : [];

  // Create calendar grid
  const calendarDays = [];
  const totalSlots = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  for (let i = 0; i < totalSlots; i++) {
    const day = i - firstDay + 1;
    if (day > 0 && day <= daysInMonth) {
      calendarDays.push(day);
    } else {
      calendarDays.push(null);
    }
  }

  const isToday = (day: number | null) => {
    if (!day) return false;
    const today = new Date();
    return day === today.getDate() && 
           currentDate.getMonth() === today.getMonth() && 
           currentDate.getFullYear() === today.getFullYear();
  };

  const isSelected = (day: number | null) => {
    if (!day || !selectedDate) return false;
    return day === selectedDate.getDate() && 
           currentDate.getMonth() === selectedDate.getMonth() && 
           currentDate.getFullYear() === selectedDate.getFullYear();
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1E5A8E] via-[#2470a8] to-[#1E5A8E] text-white py-20 md:py-28 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='13' cy='13' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-[#1E5A8E]/40 backdrop-blur-md border border-white/40 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <span className="flex items-center gap-2">
                📅 <span>Events & Workshops</span>
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
              Join Our <span className="text-white drop-shadow-lg">Upcoming Events</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
              Connect with universities, attend workshops, and learn about studying in Australia
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Full Calendar */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-8">
                      <h2 className="text-3xl text-gray-900">Event Calendar</h2>
                      <div className="flex items-center gap-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={previousMonth}
                          className="h-10 w-10 p-0"
                        >
                          <ChevronLeft size={20} />
                        </Button>
                        <h3 className="text-xl text-gray-900 min-w-[200px] text-center">{monthYear}</h3>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={nextMonth}
                          className="h-10 w-10 p-0"
                        >
                          <ChevronRight size={20} />
                        </Button>
                      </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-2">
                      {/* Day headers */}
                      {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                        <div key={day} className="text-center py-3 text-gray-600">
                          {day}
                        </div>
                      ))}
                      
                      {/* Calendar days */}
                      {calendarDays.map((day, index) => {
                        const events = day ? getEventsForDate(day) : [];
                        const hasEvents = events.length > 0;
                        
                        return (
                          <div
                            key={index}
                            onClick={() => {
                              if (day) {
                                setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
                              }
                            }}
                            className={`
                              aspect-square p-2 rounded-lg border transition-all cursor-pointer
                              ${!day ? 'bg-gray-50 border-gray-100 cursor-default' : ''}
                              ${day && !hasEvents ? 'bg-white border-gray-200 hover:border-[#1E5A8E] hover:bg-blue-50' : ''}
                              ${isToday(day) ? 'bg-gray-900 text-white border-gray-900' : ''}
                              ${isSelected(day) ? 'border-2 border-[#1E5A8E] bg-blue-50' : ''}
                            `}
                          >
                            {day && (
                              <div className="h-full flex flex-col">
                                <span className={`text-sm mb-1 ${isToday(day) ? 'text-white' : 'text-gray-900'}`}>
                                  {day}
                                </span>
                                {hasEvents && (
                                  <div className="flex-1 flex flex-col gap-1 overflow-hidden">
                                    {events.slice(0, 2).map((event, i) => (
                                      <div
                                        key={i}
                                        className={`text-xs px-1 py-0.5 rounded truncate ${eventTypes[event.type as keyof typeof eventTypes].color} text-white`}
                                        title={event.title}
                                      >
                                        {event.title}
                                      </div>
                                    ))}
                                    {events.length > 2 && (
                                      <div className="text-xs text-gray-500">
                                        +{events.length - 2} more
                                      </div>
                                    )}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    {/* Legend */}
                    <div className="mt-8 flex flex-wrap gap-4">
                      {Object.entries(eventTypes).map(([key, type]) => (
                        <div key={key} className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded ${type.color}`}></div>
                          <span className="text-sm text-gray-600">{type.label}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Event Details Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl text-gray-900 mb-4">
                        {selectedDate 
                          ? `Events on ${selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
                          : 'Select a date'
                        }
                      </h3>
                      
                      {selectedDateEvents.length > 0 ? (
                        <div className="space-y-4">
                          {selectedDateEvents.map(event => (
                            <div key={event.id} className="p-4 bg-gray-50 rounded-lg">
                              <Badge className={`${eventTypes[event.type as keyof typeof eventTypes].color} text-white mb-2`}>
                                {eventTypes[event.type as keyof typeof eventTypes].label}
                              </Badge>
                              <h4 className="text-gray-900 mb-2">{event.title}</h4>
                              <div className="space-y-1 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                  <Clock size={14} />
                                  <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <MapPin size={14} />
                                  <span>{event.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users size={14} />
                                  <span>{event.spots - event.registered} spots left</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-500 text-sm">
                          {selectedDate ? 'No events scheduled for this date' : 'Click on a date to view events'}
                        </p>
                      )}
                    </CardContent>
                  </Card>

                  {/* Quick Stats */}
                  <Card className="border-0 shadow-lg mt-6">
                    <CardContent className="p-6">
                      <h3 className="text-xl text-gray-900 mb-4">Quick Stats</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Total Events</span>
                          <span className="text-2xl text-[#1E5A8E]">{upcomingEvents.length}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">This Month</span>
                          <span className="text-2xl text-[#FF6B35]">
                            {upcomingEvents.filter(e => new Date(e.date).getMonth() === currentDate.getMonth()).length}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events List */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#1E5A8E] uppercase tracking-wide text-sm">What's Coming Up</span>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 mt-2">All Upcoming Events</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map(event => (
                <Card key={event.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className={`${eventTypes[event.type as keyof typeof eventTypes].color} text-white`}>
                        {eventTypes[event.type as keyof typeof eventTypes].label}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </span>
                    </div>
                    
                    <h3 className="text-xl text-gray-900 mb-3">{event.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{event.description}</p>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock size={16} className="text-[#1E5A8E]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#1E5A8E]" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>{event.registered} registered</span>
                        <span>{event.spots - event.registered} spots left</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#1E5A8E] h-2 rounded-full transition-all"
                          style={{ width: `${(event.registered / event.spots) * 100}%` }}
                        />
                      </div>
                    </div>

                    <Button className="w-full bg-[#1E5A8E] hover:bg-[#164a73]">
                      Register Now
                      <ArrowRight className="ml-2" size={18} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#FF6B35] uppercase tracking-wide text-sm">Event Archive</span>
              <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 mt-2">Past Events</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Take a look at our successful events and workshops we've hosted
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map(event => (
                <Card key={event.id} className="border-0 shadow-md hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge className={`${eventTypes[event.type as keyof typeof eventTypes].color} text-white opacity-70`}>
                        {eventTypes[event.type as keyof typeof eventTypes].label}
                      </Badge>
                      <span className="text-sm text-gray-400">
                        {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                    
                    <h3 className="text-lg text-gray-900 mb-3 group-hover:text-[#1E5A8E] transition-colors">{event.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{event.description}</p>
                    
                    <div className="space-y-2 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-gray-400" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-gray-400" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} className="text-gray-400" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Event Completed</span>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-xs text-green-600">
                            {Math.round((event.attendees / event.spots) * 100)}% capacity
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E5A8E] to-[#1a4d7a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl mb-4">Want to Host an Event with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            We partner with universities and education providers to organize events
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-[#1E5A8E] hover:bg-gray-100 px-8 h-14 text-lg shadow-xl">
              Contact Us
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}