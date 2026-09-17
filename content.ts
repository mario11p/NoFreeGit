import { NavItem, ServiceItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'nav-services', label: 'Services', href: '#services' },
  { id: 'nav-about', label: 'About', href: '#about' },
  { id: 'nav-contact', label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'service-distributed-systems',
    title: 'Distributed Systems',
    summary: 'High-throughput event streams, consensus protocols, and fault-tolerant architectures.',
    deliverables: ['Event-Driven Topologies', 'Kafka & Streaming', 'CAP Consistency Modeling'],
    icon: 'Network',
    tag: '01'
  },
  {
    id: 'service-cloud-native',
    title: 'Cloud Infrastructure',
    summary: 'Resilient multi-region cloud designs, declarative IaC, and Kubernetes orchestration.',
    deliverables: ['Kubernetes & Service Mesh', 'Multi-Region High Availability', 'Zero-Trust Security'],
    icon: 'Cloud',
    tag: '02'
  },
  {
    id: 'service-architecture-audit',
    title: 'Architecture Audits',
    summary: 'Targeted code and system audits to isolate latency spikes, bottlenecks, and failure points.',
    deliverables: ['P99 Latency Profiling', 'SPOF Analysis', 'Prioritized Remediation'],
    icon: 'Activity',
    tag: '03'
  },
  {
    id: 'service-legacy-modernization',
    title: 'Modernization',
    summary: 'Pragmatic decomposition of monolithic architectures into decoupled services with zero downtime.',
    deliverables: ['Strangler Fig Strategy', 'Dual-Write Cutover', 'Schema Evolution'],
    icon: 'Cpu',
    tag: '04'
  }
];
