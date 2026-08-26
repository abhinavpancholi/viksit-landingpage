import React from 'react'
import { Link } from 'react-router-dom'
import {
  Target, Building2, ArrowRight, TrendingUp, BarChart3,
  Users, MapPin, Calendar, Lightbulb, ShieldCheck, Layers, Activity,
  DollarSign,
  CircleDollarSignIcon,
  IndianRupeeIcon,
  TargetIcon,
  GoalIcon,
  LucideGoal,
  LucideTarget,
  Goal
} from 'lucide-react'

export default function HomePage() {
  return (
    <main className="page-content page-content--home" id="home-page">

      {/* ─── Hero section ─── */}
      <section className="hero" id="hero-section">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />

        <div className="hero__inner">
          <div className="hero__content">
            <span className="hero__badge">
              <Calendar strokeWidth={2} />
              Vision 2047
            </span>
            <h2 className="hero__heading">
              Gujarat's Transformation<br />
              <span className="hero__heading-accent">Dashboard Portal</span>
            </h2>
            <p className="hero__sub">
              Track real-time progress across pillars, themes, and macro goals
              powering Gujarat's journey towards Viksit Gujarat&nbsp;@2047.
            </p>
          </div>

          {/* Right side highlights inside Hero to make it look full & rich */}
          <div className="hero__highlights">
            <div className="hero__pill">
              <div className="hero__pill-icon hero__pill-icon--economy">
                <TrendingUp />
              </div>
              <div className="hero__pill-text">
                <strong>GSDP (nominal)</strong>
                <span>Gross State Domestic Product</span>
              </div>
            </div>

            <div className="hero__pill">
              <div className="hero__pill-icon hero__pill-icon--citizen">
                <Users />
              </div>
              <div className="hero__pill-text">
                <strong>Poverty Index (MPI)</strong>
                <span>Multidimensional Poverty Index</span>
              </div>
            </div>

            <div className="hero__pill">
              <div className="hero__pill-icon hero__pill-icon--enablers">
                <IndianRupeeIcon />
              </div>
              <div className="hero__pill-text">
                <strong>Per Capita Income</strong>
                <span>Avg Personal Income</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative grid dots */}
        <div className="hero__dots" aria-hidden="true" />
      </section>

      {/* ─── Two CTA cards ─── */}
      <section className="cta-section" id="cta-section">
        <div className="section-label">Explore Dashboards</div>
        <div className="cta-grid">
          {/* Card 1 — Macro Goals */}
          <a
            id="cta-macro-goals"
            className="cta-card cta-card--purple"
            href="https://viksit-dashboard.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="cta-card__shimmer" />
            <div className="cta-card__top">
              <div className="cta-card__icon-badge cta-card__icon-badge--purple">
                <Goal strokeWidth={2} />
              </div>
              <div className="cta-card__header-text">
                <h3 className="cta-card__title">Macro goals dashboard</h3>
                <p className="cta-card__desc">
                  Track progress across every pillar, theme, and macro goal with interactive charts and status indicators.
                </p>
              </div>
            </div>
            <ul className="cta-card__features">
              <li><TrendingUp /> Real-time tracking</li>
              <li><BarChart3 /> Interactive charts</li>
              <li><Target /> Goal status overview</li>
            </ul>
            <span className="cta-card__action">
              Open dashboard <ArrowRight />
            </span>
          </a>

          {/* Card 2 — Departments */}
          <Link
            id="cta-departments"
            className="cta-card cta-card--teal"
            to="/departments"
          >
            <div className="cta-card__shimmer" />
            <div className="cta-card__top">
              <div className="cta-card__icon-badge cta-card__icon-badge--teal">
                <Building2 strokeWidth={2} />
              </div>
              <div className="cta-card__header-text">
                <h3 className="cta-card__title">Department-wise dashboards</h3>
                <p className="cta-card__desc">
                  Browse dedicated dashboards with KPIs, schemes, and progress reports for each state department.
                </p>
              </div>
            </div>
            <ul className="cta-card__features">
              <li><Building2 /> Per-department view</li>
              <li><Users /> Scheme beneficiaries</li>
              <li><MapPin /> District-level data</li>
            </ul>
            <span className="cta-card__action">
              View departments <ArrowRight />
            </span>
          </Link>
        </div>
      </section>

      {/* ─── Vision banner ─── */}
      <section className="vision-banner" id="vision-banner">
        <div className="vision-banner__content">
          <Lightbulb strokeWidth={1.8} className="vision-banner__icon" />
          <div className="vision-banner__text-wrap">
            <h3 className="vision-banner__title">Viksit Gujarat @2047 Vision</h3>
            <p className="vision-banner__text">
              A comprehensive framework to transform Gujarat into a developed state by 2047 —
              driving inclusive growth, citizen welfare, and sustainable development
              through data-driven governance and transparent progress tracking.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}
