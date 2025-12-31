import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, Clock, Activity, ArrowRight, ExternalLink } from 'lucide-react';

interface StatusPageProps {
  onSubscribe?: () => void;
}

const services = [
  { name: 'Dashboard', status: 'operational', uptime: '99.99%' },
  { name: 'API', status: 'operational', uptime: '99.98%' },
  { name: 'Blueprint Generation', status: 'operational', uptime: '99.95%' },
  { name: 'Export Service', status: 'operational', uptime: '99.97%' },
  { name: 'Authentication', status: 'operational', uptime: '99.99%' },
  { name: 'Webhooks', status: 'operational', uptime: '99.96%' }
];

const incidents = [
  {
    date: 'Dec 28, 2025',
    title: 'Increased API Latency',
    status: 'resolved',
    duration: '23 minutes',
    description: 'Some users experienced slower API response times due to increased load. Issue resolved by scaling up backend services.'
  },
  {
    date: 'Dec 15, 2025',
    title: 'Export Service Degradation',
    status: 'resolved',
    duration: '45 minutes',
    description: 'PDF exports were temporarily unavailable. Root cause was a memory leak in the rendering service.'
  },
  {
    date: 'Dec 3, 2025',
    title: 'Scheduled Maintenance',
    status: 'completed',
    duration: '2 hours',
    description: 'Database migration and infrastructure upgrades. All services remained available during this window.'
  }
];

const uptimeData = [
  { day: 'Mon', uptime: 100 },
  { day: 'Tue', uptime: 100 },
  { day: 'Wed', uptime: 99.9 },
  { day: 'Thu', uptime: 100 },
  { day: 'Fri', uptime: 100 },
  { day: 'Sat', uptime: 100 },
  { day: 'Sun', uptime: 100 }
];

const StatusPage: React.FC<StatusPageProps> = ({ onSubscribe }) => {
  const allOperational = services.every(s => s.status === 'operational');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Status Banner */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-3xl p-8 text-center ${
              allOperational 
                ? 'bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800' 
                : 'bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800'
            }`}
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
              allOperational ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-amber-100 dark:bg-amber-900/30'
            }`}>
              {allOperational ? (
                <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
              ) : (
                <AlertCircle className="w-8 h-8 text-amber-600 dark:text-amber-400" />
              )}
            </div>
            <h1 className={`text-3xl font-bold mb-2 ${
              allOperational ? 'text-emerald-900 dark:text-emerald-100' : 'text-amber-900 dark:text-amber-100'
            }`}>
              {allOperational ? 'All Systems Operational' : 'Partial Service Disruption'}
            </h1>
            <p className={allOperational ? 'text-emerald-700 dark:text-emerald-300' : 'text-amber-700 dark:text-amber-300'}>
              Last updated: {new Date().toLocaleString()}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Service Status
          </h2>
          
          <div className="space-y-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    service.status === 'operational' ? 'bg-emerald-500' :
                    service.status === 'degraded' ? 'bg-amber-500' : 'bg-red-500'
                  }`} />
                  <span className="font-medium text-gray-900 dark:text-white">
                    {service.name}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">
                    {service.uptime} uptime
                  </span>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                    service.status === 'operational' 
                      ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                      : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                  }`}>
                    {service.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Uptime Chart */}
      <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            7-Day Uptime
          </h2>
          
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800">
            <div className="flex items-end justify-between gap-2 h-32">
              {uptimeData.map((day, index) => (
                <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className={`w-full rounded-t-lg ${
                      day.uptime === 100 ? 'bg-emerald-500' : 'bg-amber-500'
                    }`}
                    style={{ height: `${day.uptime}%` }}
                  />
                  <span className="text-xs text-gray-500">{day.day}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-emerald-500" />
                  <span className="text-gray-600 dark:text-gray-400">100% uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-amber-500" />
                  <span className="text-gray-600 dark:text-gray-400">Partial outage</span>
                </div>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                99.98% average
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Incidents */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Recent Incidents
          </h2>
          
          <div className="space-y-4">
            {incidents.map((incident, index) => (
              <motion.div
                key={incident.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {incident.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {incident.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      {incident.duration}
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      incident.status === 'resolved' || incident.status === 'completed'
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                        : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400'
                    }`}>
                      {incident.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {incident.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-2xl mx-auto text-center">
          <Activity className="w-12 h-12 text-brand-500 mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get notified of incidents
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Subscribe to receive real-time updates when services are affected.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            <button
              onClick={onSubscribe}
              className="px-6 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold hover:opacity-90 transition-all"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatusPage;
