import { useState, useEffect } from 'react';
import { Activity, AlertTriangle, CheckCircle, Clock, Server, TrendingUp, Zap, Shield } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface SystemMetric {
  label: string;
  value: number;
  unit: string;
  status: 'healthy' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
}

interface Alert {
  id: string;
  severity: 'info' | 'warning' | 'critical';
  message: string;
  timestamp: string;
  resolved: boolean;
}

export default function ProductDemo() {
  const [activeTab, setActiveTab] = useState<'monitoring' | 'alerts' | 'analytics'>('monitoring');
  const [liveMetrics, setLiveMetrics] = useState<SystemMetric[]>([
    { label: 'CPU Usage', value: 45, unit: '%', status: 'healthy', trend: 'stable' },
    { label: 'Memory', value: 62, unit: '%', status: 'healthy', trend: 'up' },
    { label: 'Network I/O', value: 234, unit: 'MB/s', status: 'healthy', trend: 'down' },
    { label: 'Response Time', value: 145, unit: 'ms', status: 'healthy', trend: 'stable' },
  ]);

  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      severity: 'warning',
      message: 'Database query response time increased by 15%',
      timestamp: '2 minutes ago',
      resolved: false
    },
    {
      id: '2',
      severity: 'info',
      message: 'Scheduled maintenance completed successfully',
      timestamp: '15 minutes ago',
      resolved: true
    },
    {
      id: '3',
      severity: 'critical',
      message: 'High memory usage detected on server cluster 3',
      timestamp: '45 minutes ago',
      resolved: true
    }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMetrics(prev => prev.map(metric => ({
        ...metric,
        value: Math.max(0, Math.min(100, metric.value + (Math.random() - 0.5) * 10)),
        status: metric.value > 80 ? 'critical' : metric.value > 60 ? 'warning' : 'healthy'
      })));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'text-green-600 dark:text-green-400';
      case 'warning': return 'text-yellow-600 dark:text-yellow-400';
      case 'critical': return 'text-red-600 dark:text-red-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'info': return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300';
      case 'warning': return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300';
      case 'critical': return 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300';
      default: return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300';
    }
  };

  return (
    <section id="product-demo" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-4 py-2 rounded-full text-blue-300 mb-4">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Interactive Demo</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Experience SafeOps in Action
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              See real-time monitoring, intelligent alerts, and powerful analytics working together to keep your systems secure and performant.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
            <div className="flex border-b border-gray-700 bg-gray-900/50">
              <button
                onClick={() => setActiveTab('monitoring')}
                className={`flex-1 px-6 py-4 font-medium transition-all ${
                  activeTab === 'monitoring'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Activity className="w-5 h-5" />
                  Real-Time Monitoring
                </div>
              </button>
              <button
                onClick={() => setActiveTab('alerts')}
                className={`flex-1 px-6 py-4 font-medium transition-all ${
                  activeTab === 'alerts'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Intelligent Alerts
                </div>
              </button>
              <button
                onClick={() => setActiveTab('analytics')}
                className={`flex-1 px-6 py-4 font-medium transition-all ${
                  activeTab === 'analytics'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Advanced Analytics
                </div>
              </button>
            </div>

            <div className="p-8">
              {activeTab === 'monitoring' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">System Health Dashboard</h3>
                    <div className="flex items-center gap-2 text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Live Data</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {liveMetrics.map((metric, index) => (
                      <div
                        key={index}
                        className="bg-gray-900/50 border border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-gray-400 text-sm font-medium">{metric.label}</span>
                          <Server className={`w-5 h-5 ${getStatusColor(metric.status)}`} />
                        </div>
                        <div className="flex items-end justify-between">
                          <div>
                            <div className="text-3xl font-bold">
                              {metric.value.toFixed(0)}
                              <span className="text-lg text-gray-400 ml-1">{metric.unit}</span>
                            </div>
                          </div>
                          <div className={`flex items-center gap-1 ${getStatusColor(metric.status)}`}>
                            <TrendingUp className="w-4 h-4" />
                            <span className="text-xs font-medium">{metric.status}</span>
                          </div>
                        </div>
                        <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-500 ${
                              metric.status === 'critical'
                                ? 'bg-red-500'
                                : metric.status === 'warning'
                                ? 'bg-yellow-500'
                                : 'bg-green-500'
                            }`}
                            style={{ width: `${metric.value}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">All Systems Operational</h4>
                        <p className="text-blue-200 text-sm">
                          Your infrastructure is running smoothly with 99.98% uptime over the last 30 days.
                          SafeOps is continuously monitoring 127 endpoints across 8 server clusters.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'alerts' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">Alert Management</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400">Last updated: Just now</span>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {alerts.map((alert) => (
                      <div
                        key={alert.id}
                        className={`border rounded-xl p-4 ${
                          alert.resolved
                            ? 'bg-gray-900/30 border-gray-700 opacity-60'
                            : 'bg-gray-900/50 border-gray-700'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start gap-3 flex-1">
                            {alert.resolved ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            ) : (
                              <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                            )}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className={`text-xs font-bold px-2 py-1 rounded ${getSeverityColor(alert.severity)}`}>
                                  {alert.severity.toUpperCase()}
                                </span>
                                {alert.resolved && (
                                  <span className="text-xs text-green-500 font-medium">Resolved</span>
                                )}
                              </div>
                              <p className="text-white font-medium mb-1">{alert.message}</p>
                              <div className="flex items-center gap-2 text-sm text-gray-400">
                                <Clock className="w-4 h-4" />
                                <span>{alert.timestamp}</span>
                              </div>
                            </div>
                          </div>
                          {!alert.resolved && (
                            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm font-medium transition-colors">
                              Resolve
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-500/30 rounded-xl p-6 mt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Smart Alert Filtering</h4>
                        <p className="text-green-200 text-sm">
                          AI-powered alert correlation has reduced noise by 78%. Only critical alerts that require
                          your attention are surfaced, while minor issues are automatically handled.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold mb-6">Performance Analytics</h3>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/40 border border-blue-500/30 rounded-xl p-6">
                      <div className="text-blue-300 text-sm font-medium mb-2">Average Response Time</div>
                      <div className="text-4xl font-bold mb-1">142ms</div>
                      <div className="text-green-400 text-sm flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>18% faster than last month</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-900/40 to-green-800/40 border border-green-500/30 rounded-xl p-6">
                      <div className="text-green-300 text-sm font-medium mb-2">Uptime</div>
                      <div className="text-4xl font-bold mb-1">99.98%</div>
                      <div className="text-green-400 text-sm flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        <span>Above SLA target</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/40 border border-purple-500/30 rounded-xl p-6">
                      <div className="text-purple-300 text-sm font-medium mb-2">Incidents Prevented</div>
                      <div className="text-4xl font-bold mb-1">247</div>
                      <div className="text-purple-400 text-sm flex items-center gap-1">
                        <Shield className="w-4 h-4" />
                        <span>This month</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                    <h4 className="font-bold mb-4">7-Day Performance Trend</h4>
                    <div className="h-48 flex items-end justify-between gap-2">
                      {[65, 72, 68, 85, 78, 92, 88].map((height, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                          <div
                            className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all hover:from-blue-500 hover:to-blue-300"
                            style={{ height: `${height}%` }}
                          ></div>
                          <span className="text-xs text-gray-400">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <h4 className="font-bold mb-4">Top Performing Endpoints</h4>
                      <div className="space-y-3">
                        {[
                          { name: '/api/users', time: '45ms', requests: '12.4K' },
                          { name: '/api/data', time: '67ms', requests: '8.2K' },
                          { name: '/api/auth', time: '89ms', requests: '6.7K' }
                        ].map((endpoint, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                            <div>
                              <div className="font-medium text-sm">{endpoint.name}</div>
                              <div className="text-xs text-gray-400">{endpoint.requests} requests</div>
                            </div>
                            <div className="text-green-400 font-bold">{endpoint.time}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
                      <h4 className="font-bold mb-4">Resource Utilization</h4>
                      <div className="space-y-4">
                        {[
                          { name: 'CPU', value: 45, color: 'bg-blue-500' },
                          { name: 'Memory', value: 62, color: 'bg-green-500' },
                          { name: 'Storage', value: 38, color: 'bg-purple-500' },
                          { name: 'Network', value: 71, color: 'bg-yellow-500' }
                        ].map((resource, index) => (
                          <div key={index}>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium">{resource.name}</span>
                              <span className="text-sm text-gray-400">{resource.value}%</span>
                            </div>
                            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${resource.color} transition-all duration-500`}
                                style={{ width: `${resource.value}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <p className="text-blue-200 mb-6">Ready to see how SafeOps can transform your operations?</p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl inline-flex items-center gap-2">
              Schedule a Personalized Demo
              <Zap className="w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
