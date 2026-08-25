import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight,
  HeartHandshake, Building2, GraduationCap, Leaf, Droplets, Droplet,
  Factory, Landmark, Scale, Truck, Wifi,
  Sprout, Heart, Atom, Zap, Trees, Settings, HeartPulse,
  BookOpen, Shield, Wrench, Ship, Banknote, Hammer, Trophy,
  Compass, Users
} from 'lucide-react'
import departmentsData from '../data/departments.json'

const ICON_MAP = {
  'heart-handshake': HeartHandshake,
  'building': Building2,
  'graduation-cap': GraduationCap,
  'leaf': Leaf,
  'droplets': Droplets,
  'droplet': Droplet,
  'factory': Factory,
  'landmark': Landmark,
  'scale': Scale,
  'truck': Truck,
  'wifi': Wifi,
  'sprout': Sprout,
  'heart': Heart,
  'atom': Atom,
  'zap': Zap,
  'trees': Trees,
  'settings': Settings,
  'heart-pulse': HeartPulse,
  'book-open': BookOpen,
  'shield': Shield,
  'wrench': Wrench,
  'ship': Ship,
  'banknote': Banknote,
  'hammer': Hammer,
  'trophy': Trophy,
  'compass': Compass,
  'users': Users,
}

function DepartmentCard({ dept }) {
  const isLive = dept.status === 'live'
  const IconComponent = ICON_MAP[dept.icon] || Building2

  if (isLive) {
    return (
      <a
        id={`dept-card-${dept.id}`}
        className="dept-card dept-card--live"
        href={dept.url}
        target="_blank"
        rel="noopener noreferrer"
        title={dept.name}
      >
        <div className="dept-card__top-row">
          <div className="dept-card__icon-badge dept-card__icon-badge--live">
            <IconComponent strokeWidth={2} />
          </div>
          <div className="status-badge status-badge--live">
            <span className="status-badge__dot" />
            Live
          </div>
        </div>
        <h3 className="dept-card__name">{dept.name}</h3>
        <p className="dept-card__desc">{dept.description}</p>
        <span className="dept-card__action-label">
          Open dashboard <ArrowRight />
        </span>
      </a>
    )
  }

  return (
    <div
      id={`dept-card-${dept.id}`}
      className="dept-card dept-card--coming-soon"
      aria-disabled="true"
      title={dept.name}
    >
      <div className="dept-card__top-row">
        <div className="dept-card__icon-badge dept-card__icon-badge--coming-soon">
          <IconComponent strokeWidth={2} />
        </div>
        <div className="status-badge status-badge--coming-soon">
          <span className="status-badge__dot" />
          Coming soon
        </div>
      </div>
      <h3 className="dept-card__name">{dept.name}</h3>
      <p className="dept-card__desc">{dept.description}</p>
    </div>
  )
}

export default function DepartmentsPage() {
  return (
    <main className="page-content page-content--departments" id="departments-page">
      <div className="dept-page__header">
        <div className="dept-page__title-group">
          <Link to="/" className="back-link">
            <ArrowLeft />
            <span>Back to home</span>
          </Link>
          <h2 className="dept-page__heading">Department Dashboards</h2>
        </div>
        <p className="dept-page__sub">
          Browse specialized department dashboards tracking KPIs, schemes, and key metrics.
        </p>
      </div>

      <div className="dept-grid">
        {departmentsData.departments.map((dept) => (
          <DepartmentCard key={dept.id} dept={dept} />
        ))}
      </div>
    </main>
  )
}
