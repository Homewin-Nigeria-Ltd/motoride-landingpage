import React, { useState, useMemo } from 'react';

type TabType = 'privacy' | 'terms';

interface PolicySection {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
}

export const PrivacyPolicyPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('privacy');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopySectionLink = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  // Exact 21 Sections from the MotoRide Rider App Privacy Policy
  const privacySections: PolicySection[] = [
    {
      id: 'privacy-introduction',
      number: '1',
      title: 'INTRODUCTION',
      content: (
        <>
          <p>
            This Privacy Policy explains how MotoBites Limited (&ldquo;MotoRide&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
            collects, uses, stores, protects and shares personal information when you use the MotoRide Rider App.
          </p>
          <p>
            MotoRide is a technology platform used to coordinate delivery services for <strong>MotoBites</strong> and other authorised delivery operations.
          </p>
          <p>
            MotoRide may support different categories of delivery partners, including motorcycle riders, car drivers, van operators, bicycle riders and other approved delivery partners.
          </p>
          <p>
            This Privacy Policy applies to Riders, Delivery Partners and other individuals who access or use MotoRide.
          </p>
          <p>
            By using MotoRide, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </>
      ),
    },
    {
      id: 'privacy-information-we-collect',
      number: '2',
      title: 'INFORMATION WE COLLECT',
      content: (
        <>
          <p>
            We may collect information necessary to create and operate your MotoRide account and facilitate delivery services.
          </p>
          <h3 style={{ fontSize: '1.05rem', color: '#1e293b', margin: '1.25rem 0 0.5rem 0' }}>
            2.1 Information You Provide
          </h3>
          <p>This may include:</p>
          <div className="feature-cards-grid">
            <div className="feature-card">
              <div className="feature-card-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div className="feature-card-title">Identity &amp; Contact</div>
              <ul className="styled-list" style={{ marginTop: '0.5rem' }}>
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Residential / contact address</li>
                <li>Date of birth where required</li>
                <li>Profile photograph</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="feature-card-title">Credentials &amp; Verification</div>
              <ul className="styled-list" style={{ marginTop: '0.5rem' }}>
                <li>Identification information</li>
                <li>Driver&rsquo;s licence information</li>
                <li>Vehicle registration details</li>
                <li>Insurance information where applicable</li>
                <li>Information submitted during verification</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div className="feature-card-title">Banking &amp; Support</div>
              <ul className="styled-list" style={{ marginTop: '0.5rem' }}>
                <li>Bank account or payment information</li>
                <li>Emergency contact information</li>
                <li>Account login credentials</li>
                <li>Information provided when contacting support</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'privacy-vehicle-information',
      number: '3',
      title: 'VEHICLE INFORMATION',
      content: (
        <>
          <p>
            Where applicable, MotoRide may collect information relating to the vehicle used for delivery, including:
          </p>
          <ul className="styled-list">
            <li>Vehicle type;</li>
            <li>Make and model;</li>
            <li>Registration number;</li>
            <li>Vehicle ownership/use information;</li>
            <li>Vehicle documentation;</li>
            <li>Insurance information;</li>
            <li>Vehicle inspection information.</li>
          </ul>
          <p>
            This information may be used to verify eligibility and determine whether a vehicle is suitable for particular delivery assignments.
          </p>
        </>
      ),
    },
    {
      id: 'privacy-location-information',
      number: '4',
      title: 'LOCATION INFORMATION',
      content: (
        <>
          <p>
            MotoRide may collect precise or approximate location information while you are using the platform.
          </p>
          <p>Location information may be collected through:</p>
          <ul className="styled-list">
            <li>GPS;</li>
            <li>Mobile network;</li>
            <li>Wi-Fi;</li>
            <li>Device location services;</li>
            <li>Other location technologies.</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>Location information may be used to:</p>
          <ul className="styled-list">
            <li>Assign delivery requests;</li>
            <li>Provide navigation and routing;</li>
            <li>Monitor active deliveries;</li>
            <li>Estimate pickup and delivery times;</li>
            <li>Confirm delivery locations;</li>
            <li>Provide customer support;</li>
            <li>Investigate delivery incidents;</li>
            <li>Detect fraudulent activity;</li>
            <li>Improve delivery operations;</li>
            <li>Improve platform performance.</li>
          </ul>
          <div className="document-intro-banner" style={{ marginTop: '1.25rem' }}>
            <div className="banner-icon">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="banner-text">
              <strong>Active Delivery Requirement:</strong> MotoRide may require location services to be enabled while a Rider is actively performing a delivery.
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'privacy-device-technical',
      number: '5',
      title: 'DEVICE AND TECHNICAL INFORMATION',
      content: (
        <>
          <p>
            When you use MotoRide, we may automatically collect certain technical information, including:
          </p>
          <ul className="styled-list">
            <li>Device type;</li>
            <li>Operating system;</li>
            <li>App version;</li>
            <li>Device identifiers;</li>
            <li>IP address;</li>
            <li>Network information;</li>
            <li>Mobile network information;</li>
            <li>Login information;</li>
            <li>Crash reports;</li>
            <li>Application performance information;</li>
            <li>Date and time of platform activity.</li>
          </ul>
          <p>
            This information helps us maintain security, troubleshoot problems and improve the MotoRide application.
          </p>
        </>
      ),
    },
    {
      id: 'privacy-delivery-operational',
      number: '6',
      title: 'DELIVERY AND OPERATIONAL INFORMATION',
      content: (
        <>
          <p>
            MotoRide may collect information relating to your use of the platform, including:
          </p>
          <ul className="styled-list">
            <li>Orders assigned;</li>
            <li>Orders accepted;</li>
            <li>Orders declined;</li>
            <li>Pickup times;</li>
            <li>Delivery times;</li>
            <li>Delivery locations;</li>
            <li>Order status;</li>
            <li>Cancellation information;</li>
            <li>Failed delivery information;</li>
            <li>Customer and merchant interactions;</li>
            <li>Ratings and feedback;</li>
            <li>Support requests;</li>
            <li>Incident reports;</li>
            <li>Performance information.</li>
          </ul>
          <p>
            This information may be used to operate the delivery service and improve the Rider experience.
          </p>
        </>
      ),
    },
    {
      id: 'privacy-payment-information',
      number: '7',
      title: 'PAYMENT INFORMATION',
      content: (
        <>
          <p>
            Where applicable, MotoRide may collect information required to process Rider payments and earnings.
          </p>
          <p>This may include:</p>
          <ul className="styled-list">
            <li>Bank account details;</li>
            <li>Payment account information;</li>
            <li>Transaction records;</li>
            <li>Earnings;</li>
            <li>Bonuses;</li>
            <li>Incentives;</li>
            <li>Payment history.</li>
          </ul>
          <p>
            Payment information may be processed through authorised payment providers.
          </p>
          <p>
            MotoRide may not directly store certain sensitive payment information where the relevant service provider processes and stores that information on our behalf.
          </p>
        </>
      ),
    },
    {
      id: 'privacy-how-we-use',
      number: '8',
      title: 'HOW WE USE YOUR INFORMATION',
      content: (
        <>
          <p>We may use personal information to:</p>
          <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', marginTop: '0.75rem', color: '#475569' }}>
            <li>Create and manage your MotoRide account.</li>
            <li>Verify your identity and eligibility.</li>
            <li>Verify vehicle information.</li>
            <li>Facilitate delivery assignments.</li>
            <li>Track active deliveries.</li>
            <li>Process payments and earnings.</li>
            <li>Communicate with you.</li>
            <li>Provide customer and Rider support.</li>
            <li>Investigate complaints and incidents.</li>
            <li>Prevent fraud and platform abuse.</li>
            <li>Maintain platform security.</li>
            <li>Monitor and improve service quality.</li>
            <li>Analyse platform performance.</li>
            <li>Meet legal and regulatory obligations.</li>
            <li>Resolve disputes.</li>
            <li>Enforce our Terms &amp; Conditions.</li>
            <li>Improve MotoRide and related services.</li>
          </ol>
        </>
      ),
    },
    {
      id: 'privacy-information-sharing',
      number: '9',
      title: 'INFORMATION SHARING',
      content: (
        <>
          <p>
            We may share relevant information with authorised parties where necessary to operate MotoRide. These parties may include:
          </p>
          <div className="feature-cards-grid" style={{ marginTop: '1.25rem' }}>
            <div className="feature-card">
              <div className="feature-card-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="feature-card-title">MotoBites</div>
              <div className="feature-card-desc">
                Information may be shared with MotoBites to facilitate order fulfilment, delivery operations, customer support and service management.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="feature-card-title">Customers</div>
              <div className="feature-card-desc">
                Customers may receive limited information necessary to facilitate delivery, such as the Rider&rsquo;s first name, vehicle information or delivery status, where applicable.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="feature-card-title">Merchants</div>
              <div className="feature-card-desc">
                Relevant information may be shared with merchants to facilitate order pickup and delivery.
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <div className="feature-card-title">Technology Providers</div>
              <div className="feature-card-desc">
                Third-party providers for cloud hosting, GPS/location services, identity verification, communication, analytics, payment processing, customer support, and security.
              </div>
            </div>
          </div>
          <p style={{ marginTop: '1.25rem' }}>
            <strong>Government and Regulatory Authorities:</strong> We may disclose information where required by applicable law, regulation, court order or lawful governmental request.
          </p>
        </>
      ),
    },
    {
      id: 'privacy-data-security',
      number: '10',
      title: 'DATA SECURITY',
      content: (
        <>
          <p>
            We take reasonable technical and organisational measures to protect personal information against:
          </p>
          <ul className="styled-list">
            <li>Unauthorised access;</li>
            <li>Loss;</li>
            <li>Theft;</li>
            <li>Misuse;</li>
            <li>Alteration;</li>
            <li>Unauthorised disclosure;</li>
            <li>Destruction.</li>
          </ul>
          <p>
            Security measures may include access controls, authentication, encryption where appropriate, monitoring and other safeguards.
          </p>
          <p style={{ fontStyle: 'italic', color: '#64748b' }}>
            However, no digital system can be guaranteed to be completely secure.
          </p>
        </>
      ),
    },
    {
      id: 'privacy-data-retention',
      number: '11',
      title: 'DATA RETENTION',
      content: (
        <>
          <p>
            We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy.
          </p>
          <p>Retention periods may depend on:</p>
          <ul className="styled-list">
            <li>The purpose for which the information was collected;</li>
            <li>Legal and regulatory requirements;</li>
            <li>Accounting requirements;</li>
            <li>Dispute resolution;</li>
            <li>Fraud prevention;</li>
            <li>Security requirements;</li>
            <li>Our legitimate operational needs.</li>
          </ul>
          <p>
            When information is no longer required, we may securely delete, anonymise or otherwise dispose of it.
          </p>
        </>
      ),
    },
    {
      id: 'privacy-rights',
      number: '12',
      title: 'YOUR PRIVACY RIGHTS',
      content: (
        <>
          <p>
            Depending on applicable law, you may have rights relating to your personal information, including the right to:
          </p>
          <ul className="styled-list">
            <li>Request access to personal information we hold about you;</li>
            <li>Request correction of inaccurate information;</li>
            <li>Request deletion where legally applicable;</li>
            <li>Request restriction of certain processing;</li>
            <li>Object to certain processing;</li>
            <li>Request information about how your data is processed;</li>
            <li>Withdraw consent where processing is based on consent;</li>
            <li>Lodge a complaint with the relevant data protection authority.</li>
          </ul>
          <p>
            Some rights may be subject to legal or operational limitations.
          </p>
        </>
      ),
    },
    {
      id: 'privacy-marketing',
      number: '13',
      title: 'MARKETING COMMUNICATIONS',
      content: (
        <>
          <p>Where permitted, MotoRide may send communications about:</p>
          <ul className="styled-list">
            <li>Platform updates;</li>
            <li>Rider opportunities;</li>
            <li>Promotions;</li>
            <li>Incentives;</li>
            <li>Operational announcements.</li>
          </ul>
          <p>
            You may be able to opt out of certain promotional communications through the available unsubscribe or communication preference mechanisms.
          </p>
          <p>
            Operational and service-related communications may still be sent where necessary.
          </p>
        </>
      ),
    },
    {
      id: 'privacy-cookies',
      number: '14',
      title: 'COOKIES AND SIMILAR TECHNOLOGIES',
      content: (
        <>
          <p>
            MotoRide and its service providers may use cookies, SDKs, analytics technologies or similar mechanisms where applicable.
          </p>
          <p>These technologies may help us:</p>
          <ul className="styled-list">
            <li>Understand application usage;</li>
            <li>Improve performance;</li>
            <li>Detect errors;</li>
            <li>Improve security;</li>
            <li>Analyse service usage.</li>
          </ul>
          <p>
            The technologies used may vary depending on the version and architecture of the MotoRide platform.
          </p>
        </>
      ),
    },
    {
      id: 'privacy-children',
      number: '15',
      title: 'CHILDREN&rsquo;S PRIVACY',
      content: (
        <>
          <p>
            MotoRide is intended for individuals who are legally eligible to perform delivery services.
          </p>
          <p>
            We do not knowingly collect personal information from individuals who are not eligible to use the platform.
          </p>
          <p>
            If we become aware that personal information has been collected from an ineligible individual, we may take appropriate steps to delete it.
          </p>
        </>
      ),
    },
    {
      id: 'privacy-third-party',
      number: '16',
      title: 'THIRD-PARTY SERVICES',
      content: (
        <>
          <p>
            MotoRide may integrate with third-party services. These services may have their own privacy policies and terms.
          </p>
          <p>
            MotoRide is not responsible for the independent privacy practices of third-party services that are outside our control.
          </p>
          <p>
            Users should review the privacy policies of relevant third-party providers where appropriate.
          </p>
        </>
      ),
    },
    {
      id: 'privacy-transfers',
      number: '17',
      title: 'INTERNATIONAL DATA TRANSFERS',
      content: (
        <>
          <p>
            Some technology or service providers used by MotoRide may process information outside Nigeria or outside the country where you operate.
          </p>
          <p>
            Where applicable, we will take reasonable steps to ensure that personal information is processed in accordance with applicable data protection requirements.
          </p>
        </>
      ),
    },
    {
      id: 'privacy-nigeria-ndpa',
      number: '18',
      title: 'DATA PROTECTION IN NIGERIA',
      content: (
        <>
          <div className="document-intro-banner">
            <div className="banner-icon">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="banner-text">
              <strong>NDPA Compliance:</strong> Where applicable, MotoRide will process personal information in accordance with relevant Nigerian data protection requirements, including the <strong>Nigeria Data Protection Act 2023 (NDPA)</strong> and applicable regulations or guidance.
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'privacy-changes',
      number: '19',
      title: 'CHANGES TO THIS PRIVACY POLICY',
      content: (
        <>
          <p>
            We may update this Privacy Policy from time to time.
          </p>
          <p>
            When significant changes are made, we may provide notice through the MotoRide application, email, website or other appropriate communication channels.
          </p>
          <p>
            The updated Privacy Policy will include a revised &ldquo;Last Updated&rdquo; date.
          </p>
        </>
      ),
    },
    {
      id: 'privacy-contact-us',
      number: '20',
      title: 'CONTACT US',
      content: (
        <>
          <p>
            If you have questions, concerns or requests relating to your personal information, please contact:
          </p>
          <div className="contact-highlight-box">
            <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1e293b', marginBottom: '0.25rem' }}>
              MotoRide Privacy Team
            </div>
            <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
              Operated by MotoBites Limited
            </div>
            <div className="contact-channels">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-val">privacy@motobites.com</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">Support Phone</div>
                  <div className="contact-item-val">+234 (0) 1 888 6686</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">Address</div>
                  <div className="contact-item-val">Lagos, Nigeria</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'privacy-acknowledgement',
      number: '21',
      title: 'ACKNOWLEDGEMENT',
      content: (
        <>
          <p>
            By using MotoRide, you acknowledge that you have had the opportunity to review this Privacy Policy and understand how your personal information may be processed in connection with the MotoRide platform.
          </p>
        </>
      ),
    },
  ];

  // Exact 32 Sections from the MotoRide Rider Terms & Conditions
  const termsSections: PolicySection[] = [
    {
      id: 'terms-about',
      number: '1',
      title: 'ABOUT MOTORIDE',
      content: (
        <>
          <p>
            MotoRide is a technology platform used to coordinate delivery activities for MotoBites.
          </p>
          <p>
            The platform enables approved Riders and Delivery Partners to receive, manage and complete delivery assignments.
          </p>
          <p>
            MotoRide is not limited to motorcycles. Depending on operational requirements, approved delivery vehicles may include:
          </p>
          <ul className="styled-list">
            <li>Motorcycles;</li>
            <li>Cars;</li>
            <li>Vans;</li>
            <li>Three-wheel vehicles;</li>
            <li>Bicycles; and</li>
            <li>Other approved vehicles.</li>
          </ul>
          <p>
            These Terms apply to every individual or entity authorised to use MotoRide for delivery purposes.
          </p>
        </>
      ),
    },
    {
      id: 'terms-acceptance',
      number: '2',
      title: 'ACCEPTANCE OF THESE TERMS',
      content: (
        <>
          <p>
            By registering for, accessing or using MotoRide, you agree to comply with these Terms &amp; Conditions.
          </p>
          <p>
            If you do not agree with these Terms, you should not use the MotoRide application.
          </p>
          <p>
            MotoRide may update these Terms from time to time in accordance with Section 26.
          </p>
        </>
      ),
    },
    {
      id: 'terms-eligibility',
      number: '3',
      title: 'ELIGIBILITY',
      content: (
        <>
          <p>To become a MotoRide Rider, you must:</p>
          <ul className="styled-list">
            <li>Meet applicable minimum age requirements;</li>
            <li>Be legally permitted to perform delivery services;</li>
            <li>Provide accurate registration information;</li>
            <li>Complete required verification;</li>
            <li>Provide required identification documents;</li>
            <li>Provide valid vehicle documentation where applicable;</li>
            <li>Hold required licences and permits;</li>
            <li>Meet MotoRide&rsquo;s safety requirements;</li>
            <li>Complete required onboarding or training.</li>
          </ul>
          <p>
            MotoRide may reject or suspend an application where eligibility requirements are not satisfied.
          </p>
        </>
      ),
    },
    {
      id: 'terms-account',
      number: '4',
      title: 'RIDER ACCOUNT',
      content: (
        <>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials.
          </p>
          <p>You must not:</p>
          <ul className="styled-list">
            <li>Share your account;</li>
            <li>Allow another person to deliver using your account;</li>
            <li>Create fraudulent accounts;</li>
            <li>Provide false information;</li>
            <li>Attempt to bypass an account restriction.</li>
          </ul>
          <p>
            You must notify MotoRide promptly if you believe your account has been compromised.
          </p>
        </>
      ),
    },
    {
      id: 'terms-vehicle-requirements',
      number: '5',
      title: 'VEHICLE REQUIREMENTS',
      content: (
        <>
          <p>Every vehicle used for MotoRide deliveries must be:</p>
          <ul className="styled-list">
            <li>Legally registered where required;</li>
            <li>Roadworthy;</li>
            <li>Properly maintained;</li>
            <li>Suitable for the relevant delivery;</li>
            <li>Covered by required insurance;</li>
            <li>Operated by an appropriately licensed individual.</li>
          </ul>
          <p>
            MotoRide may request evidence of vehicle documentation or conduct verification before or during your participation on the platform.
          </p>
          <p>
            MotoRide may restrict particular vehicle types from certain delivery assignments based on order characteristics, location, safety or operational requirements.
          </p>
        </>
      ),
    },
    {
      id: 'terms-assignments',
      number: '6',
      title: 'DELIVERY ASSIGNMENTS',
      content: (
        <>
          <p>MotoRide may offer delivery assignments based on factors such as:</p>
          <ul className="styled-list">
            <li>Rider location;</li>
            <li>Availability;</li>
            <li>Vehicle type;</li>
            <li>Delivery distance;</li>
            <li>Order characteristics;</li>
            <li>Operational demand;</li>
            <li>Estimated delivery time.</li>
          </ul>
          <p>
            Assignments may be communicated through the application. Riders are responsible for reviewing assignment information before accepting a delivery.
          </p>
        </>
      ),
    },
    {
      id: 'terms-accepting-order',
      number: '7',
      title: 'ACCEPTING AN ORDER',
      content: (
        <>
          <p>
            When a Rider accepts a delivery assignment, the Rider is expected to make reasonable efforts to complete it.
          </p>
          <p>
            If an unexpected situation prevents completion, the Rider must notify MotoRide through the appropriate support or cancellation process as soon as reasonably possible.
          </p>
          <p>
            Repeated unjustified cancellations may affect account status.
          </p>
        </>
      ),
    },
    {
      id: 'terms-pickup',
      number: '8',
      title: 'PICKUP REQUIREMENTS',
      content: (
        <>
          <p>At pickup, Riders should:</p>
          <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.45rem', marginTop: '0.75rem', color: '#475569' }}>
            <li>Arrive at the designated location.</li>
            <li>Confirm the relevant order.</li>
            <li>Verify the order where reasonably possible.</li>
            <li>Secure the order appropriately.</li>
            <li>Follow reasonable merchant instructions.</li>
            <li>Update the delivery status through MotoRide.</li>
          </ol>
          <div className="document-intro-banner" style={{ marginTop: '1.25rem' }}>
            <div className="banner-icon">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="banner-text">
              <strong>Order Integrity Mandate:</strong> Riders must not intentionally interfere with, consume, open or tamper with customer orders.
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'terms-delivery-requirements',
      number: '9',
      title: 'DELIVERY REQUIREMENTS',
      content: (
        <>
          <p>Riders must:</p>
          <ul className="styled-list">
            <li>Follow delivery instructions;</li>
            <li>Use reasonable routes;</li>
            <li>Drive or operate their vehicle safely;</li>
            <li>Treat customers respectfully;</li>
            <li>Handle orders carefully;</li>
            <li>Provide accurate delivery status;</li>
            <li>Complete delivery confirmation through the approved process.</li>
          </ul>
          <p style={{ fontWeight: 600, color: '#dc2626' }}>
            A Rider must not falsely mark an order as delivered.
          </p>
        </>
      ),
    },
    {
      id: 'terms-failed-deliveries',
      number: '10',
      title: 'FAILED DELIVERIES',
      content: (
        <>
          <p>
            If a customer cannot be reached, the Rider must follow the MotoRide failed-delivery procedure. This may include:
          </p>
          <ul className="styled-list">
            <li>Attempting to contact the customer;</li>
            <li>Waiting for the applicable period;</li>
            <li>Contacting MotoRide support;</li>
            <li>Following instructions provided by support.</li>
          </ul>
          <p>
            Riders must not independently dispose of, retain or falsely mark an undelivered order without following the applicable procedure.
          </p>
        </>
      ),
    },
    {
      id: 'terms-delays',
      number: '11',
      title: 'DELIVERY DELAYS',
      content: (
        <>
          <p>Delivery estimates may be affected by circumstances including:</p>
          <ul className="styled-list">
            <li>Traffic;</li>
            <li>Weather;</li>
            <li>Road conditions;</li>
            <li>Customer availability;</li>
            <li>Merchant preparation;</li>
            <li>Vehicle problems;</li>
            <li>Network problems;</li>
            <li>Security incidents;</li>
            <li>Other circumstances beyond the Rider&rsquo;s reasonable control.</li>
          </ul>
          <p>
            Riders must report significant delays where appropriate.
          </p>
        </>
      ),
    },
    {
      id: 'terms-safety',
      number: '12',
      title: 'SAFETY',
      content: (
        <>
          <p>Safety is a fundamental requirement of MotoRide. Riders must:</p>
          <ul className="styled-list">
            <li>Comply with traffic laws;</li>
            <li>Follow applicable speed limits;</li>
            <li>Use appropriate protective equipment;</li>
            <li>Maintain their vehicle;</li>
            <li>Avoid reckless driving;</li>
            <li>Avoid driving under the influence of alcohol or drugs;</li>
            <li>Avoid using a handheld phone while driving;</li>
            <li>Stop driving if continuing would create an unreasonable safety risk.</li>
          </ul>
          <div className="document-intro-banner" style={{ marginTop: '1.25rem' }}>
            <div className="banner-icon">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="banner-text">
              <strong>Core MotoRide Principle:</strong> No delivery target, incentive or payment justifies unsafe behaviour.
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'terms-conduct',
      number: '13',
      title: 'RIDER CONDUCT',
      content: (
        <>
          <p>
            Riders must behave professionally when interacting with customers, merchants, employees and other delivery partners.
          </p>
          <p>The following are strictly prohibited:</p>
          <ul className="styled-list">
            <li>Harassment;</li>
            <li>Threats;</li>
            <li>Violence;</li>
            <li>Discrimination;</li>
            <li>Abusive behaviour;</li>
            <li>Intimidation;</li>
            <li>Theft;</li>
            <li>Fraud;</li>
            <li>Unauthorised solicitation;</li>
            <li>Misuse of customer information;</li>
            <li>Manipulation of delivery records.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'terms-customer-payments',
      number: '14',
      title: 'CUSTOMER PAYMENTS',
      content: (
        <>
          <p>
            Where cash collection is enabled, Riders must collect only the amount displayed or authorised through MotoRide.
          </p>
          <p>Riders must not:</p>
          <ul className="styled-list">
            <li>Request unauthorised fees;</li>
            <li>Inflate order amounts;</li>
            <li>Misappropriate customer funds;</li>
            <li>Falsify payment records;</li>
            <li>Direct customers to unauthorised payment channels.</li>
          </ul>
          <p>
            Any collected funds must be handled and remitted according to MotoRide&rsquo;s applicable procedures.
          </p>
        </>
      ),
    },
    {
      id: 'terms-rider-earnings',
      number: '15',
      title: 'RIDER EARNINGS',
      content: (
        <>
          <p>Rider earnings may consist of:</p>
          <ul className="styled-list">
            <li>Delivery fees;</li>
            <li>Distance-based payments;</li>
            <li>Incentives;</li>
            <li>Bonuses;</li>
            <li>Promotions;</li>
            <li>Other applicable payments.</li>
          </ul>
          <p>
            The applicable payment structure will be communicated through the Rider platform or relevant agreement.
          </p>
          <p>
            MotoRide may introduce, modify or discontinue incentives subject to applicable agreements and law.
          </p>
        </>
      ),
    },
    {
      id: 'terms-performance',
      number: '16',
      title: 'PERFORMANCE STANDARDS',
      content: (
        <>
          <p>MotoRide may monitor operational performance, including:</p>
          <ul className="styled-list">
            <li>Delivery completion;</li>
            <li>Acceptance;</li>
            <li>Cancellation;</li>
            <li>Timeliness;</li>
            <li>Customer feedback;</li>
            <li>Merchant feedback;</li>
            <li>Failed deliveries;</li>
            <li>Safety incidents;</li>
            <li>Platform compliance.</li>
          </ul>
          <p>
            Performance information may be used for operational improvement, training, fraud prevention and account management.
          </p>
        </>
      ),
    },
    {
      id: 'terms-ratings',
      number: '17',
      title: 'RATINGS AND FEEDBACK',
      content: (
        <>
          <p>
            Customers, merchants and MotoRide may provide ratings or feedback relating to delivery services.
          </p>
          <p>MotoRide may use this information to:</p>
          <ul className="styled-list">
            <li>Improve service quality;</li>
            <li>Identify training requirements;</li>
            <li>Investigate complaints;</li>
            <li>Identify potential policy violations.</li>
          </ul>
          <p>
            Riders may be given an opportunity to respond to relevant complaints where appropriate.
          </p>
        </>
      ),
    },
    {
      id: 'terms-incidents',
      number: '18',
      title: 'INCIDENTS AND ACCIDENTS',
      content: (
        <>
          <p>Riders must promptly report material incidents, including:</p>
          <ul className="styled-list">
            <li>Accidents;</li>
            <li>Injuries;</li>
            <li>Theft;</li>
            <li>Vehicle breakdowns;</li>
            <li>Damaged orders;</li>
            <li>Customer disputes;</li>
            <li>Security incidents;</li>
            <li>Loss of an order;</li>
            <li>Other serious events affecting a delivery.</li>
          </ul>
          <p>
            <strong>Emergency Assistance:</strong> In an emergency, Riders should contact appropriate emergency services where necessary.
          </p>
        </>
      ),
    },
    {
      id: 'terms-prohibited-use',
      number: '19',
      title: 'PROHIBITED PLATFORM USE',
      content: (
        <>
          <p>You must not:</p>
          <ul className="styled-list">
            <li>Manipulate GPS information;</li>
            <li>Create fake deliveries;</li>
            <li>Manipulate order status;</li>
            <li>Use multiple fraudulent accounts;</li>
            <li>Share your account;</li>
            <li>Circumvent platform restrictions;</li>
            <li>Manipulate incentives;</li>
            <li>Defraud MotoRide, MotoBites, customers or merchants;</li>
            <li>Attempt to access unauthorised platform systems;</li>
            <li>Reverse engineer or interfere with the application.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'terms-vendors-fleets',
      number: '20',
      title: 'VENDORS AND FLEET OPERATORS',
      content: (
        <>
          <p>
            MotoRide may work with third-party fleet operators, logistics companies and other delivery service providers.
          </p>
          <p>
            Riders operating through such organisations may be subject to additional contractual requirements.
          </p>
          <p>
            However, use of MotoRide remains subject to applicable MotoRide platform, safety and conduct requirements.
          </p>
        </>
      ),
    },
    {
      id: 'terms-insurance-licensing',
      number: '21',
      title: 'INSURANCE AND LICENSING',
      content: (
        <>
          <p>
            Riders are responsible for maintaining all licences, permits, registrations and insurance required by applicable law or their specific engagement arrangement.
          </p>
          <p>
            Unless expressly provided under a separate written agreement, Riders should not assume that MotoRide provides personal accident, vehicle, health or third-party liability insurance.
          </p>
        </>
      ),
    },
    {
      id: 'terms-intellectual-property',
      number: '22',
      title: 'INTELLECTUAL PROPERTY',
      content: (
        <>
          <p>
            MotoRide and its licensors retain ownership of the MotoRide application, software, trademarks, designs, content and other intellectual property.
          </p>
          <p>You may use the application only for authorised purposes. You must not:</p>
          <ul className="styled-list">
            <li>Copy the application;</li>
            <li>Modify the software;</li>
            <li>Reverse engineer the platform;</li>
            <li>Sell access;</li>
            <li>Reproduce MotoRide branding without permission;</li>
            <li>Attempt to extract source code.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'terms-account-suspension',
      number: '23',
      title: 'ACCOUNT SUSPENSION',
      content: (
        <>
          <p>
            MotoRide may suspend an account where there is a reasonable basis to believe that a Rider:
          </p>
          <ul className="styled-list">
            <li>Violated these Terms;</li>
            <li>Engaged in fraud;</li>
            <li>Created a safety risk;</li>
            <li>Provided false information;</li>
            <li>Misused the platform;</li>
            <li>Repeatedly failed to meet operational requirements;</li>
            <li>Failed required verification.</li>
          </ul>
          <p>
            Serious safety, fraud or security issues may result in immediate suspension while an investigation takes place.
          </p>
        </>
      ),
    },
    {
      id: 'terms-account-termination',
      number: '24',
      title: 'ACCOUNT TERMINATION',
      content: (
        <>
          <p>
            MotoRide may terminate access where appropriate, subject to applicable law and any separate contractual arrangement.
          </p>
          <p>
            Where appropriate, Riders may be informed of the reason for termination and available review or appeal procedures.
          </p>
          <p>
            Termination does not remove obligations that are intended to survive termination.
          </p>
        </>
      ),
    },
    {
      id: 'terms-appeals-complaints',
      number: '25',
      title: 'APPEALS AND COMPLAINTS',
      content: (
        <>
          <p>
            If you believe an account action, payment issue or delivery-related decision is incorrect, you may contact MotoRide Support.
          </p>
          <p>You should provide:</p>
          <ul className="styled-list">
            <li>Your account information;</li>
            <li>Relevant order number;</li>
            <li>Date and time;</li>
            <li>Description of the issue;</li>
            <li>Supporting evidence where available.</li>
          </ul>
          <p>
            MotoRide may investigate the matter and communicate the outcome through the appropriate channel.
          </p>
        </>
      ),
    },
    {
      id: 'terms-changes',
      number: '26',
      title: 'CHANGES TO THESE TERMS',
      content: (
        <>
          <p>MotoRide may modify these Terms to reflect:</p>
          <ul className="styled-list">
            <li>Changes to the platform;</li>
            <li>Changes in delivery operations;</li>
            <li>Regulatory requirements;</li>
            <li>New features;</li>
            <li>Safety requirements;</li>
            <li>Changes to the Rider program.</li>
          </ul>
          <p>
            Where appropriate, material changes will be communicated through the MotoRide application, email or other appropriate channels.
          </p>
        </>
      ),
    },
    {
      id: 'terms-availability',
      number: '27',
      title: 'AVAILABILITY OF THE PLATFORM',
      content: (
        <>
          <p>
            MotoRide aims to maintain reliable access to the application but does not guarantee uninterrupted availability. Access may be temporarily unavailable because of:
          </p>
          <ul className="styled-list">
            <li>Maintenance;</li>
            <li>Technical failures;</li>
            <li>Network outages;</li>
            <li>Third-party service interruptions;</li>
            <li>Security incidents;</li>
            <li>Other circumstances beyond reasonable control.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'terms-liability',
      number: '28',
      title: 'LIMITATION OF LIABILITY',
      content: (
        <>
          <p>
            To the maximum extent permitted by applicable law, MotoRide shall not be responsible for losses arising from circumstances outside its reasonable control.
          </p>
          <p>
            Nothing in these Terms excludes liability that cannot legally be excluded.
          </p>
        </>
      ),
    },
    {
      id: 'terms-force-majeure',
      number: '29',
      title: 'FORCE MAJEURE',
      content: (
        <>
          <p>
            MotoRide shall not be responsible for failure or delay caused by circumstances beyond its reasonable control, including natural disasters, government actions, civil unrest, infrastructure failures, widespread network outages or other extraordinary events.
          </p>
        </>
      ),
    },
    {
      id: 'terms-governing-law',
      number: '30',
      title: 'GOVERNING LAW',
      content: (
        <>
          <div className="document-intro-banner">
            <div className="banner-icon">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
            </div>
            <div className="banner-text">
              <strong>Jurisdiction:</strong> These Terms shall be governed by the laws applicable in the jurisdiction where MotoRide operates. For operations in Nigeria, applicable Nigerian laws and regulations shall apply.
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'terms-dispute-resolution',
      number: '31',
      title: 'DISPUTE RESOLUTION',
      content: (
        <>
          <p>
            MotoRide encourages Riders to first attempt to resolve disputes through the designated MotoRide support process.
          </p>
          <p>
            Where a dispute cannot be resolved through internal procedures, the parties may pursue any remedies available under applicable law.
          </p>
        </>
      ),
    },
    {
      id: 'terms-contact-info',
      number: '32',
      title: 'CONTACT INFORMATION',
      content: (
        <>
          <p>For questions regarding these Terms, contact:</p>
          <div className="contact-highlight-box">
            <div style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1e293b', marginBottom: '0.25rem' }}>
              MotoRide Support Team
            </div>
            <div style={{ fontSize: '0.9rem', color: '#64748b' }}>
              Operated by MotoBites Limited
            </div>
            <div className="contact-channels">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">Support Email</div>
                  <div className="contact-item-val">support@motobites.com</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">Support Line</div>
                  <div className="contact-item-val">+234 (0) 1 888 6686</div>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-item-label">Office Address</div>
                  <div className="contact-item-val">Lagos, Nigeria</div>
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: 'terms-acknowledgement',
      number: '33',
      title: 'RIDER ACKNOWLEDGEMENT',
      content: (
        <>
          <p>By registering for or using MotoRide, I confirm that:</p>
          <ul className="styled-list">
            <li>The information I have provided is accurate;</li>
            <li>I have read and understood these Terms &amp; Conditions;</li>
            <li>I will comply with applicable laws;</li>
            <li>I will follow MotoRide safety requirements;</li>
            <li>I will handle customer orders responsibly;</li>
            <li>I will treat customers and merchants respectfully;</li>
            <li>I will not misuse the MotoRide platform;</li>
            <li>I understand that violations may result in suspension or termination.</li>
          </ul>

          <div style={{ background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '12px', padding: '1.5rem', marginTop: '1.5rem' }}>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1e293b', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Rider Verification &amp; Acceptance Record
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', fontSize: '0.875rem' }}>
              <div>
                <span style={{ color: '#64748b' }}>Rider Legal Name:</span>
                <div style={{ borderBottom: '1px solid #94a3b8', height: '24px', marginTop: '4px' }}></div>
              </div>
              <div>
                <span style={{ color: '#64748b' }}>Phone Number:</span>
                <div style={{ borderBottom: '1px solid #94a3b8', height: '24px', marginTop: '4px' }}></div>
              </div>
              <div>
                <span style={{ color: '#64748b' }}>Vehicle Type:</span>
                <div style={{ borderBottom: '1px solid #94a3b8', height: '24px', marginTop: '4px' }}></div>
              </div>
              <div>
                <span style={{ color: '#64748b' }}>Vehicle Registration:</span>
                <div style={{ borderBottom: '1px solid #94a3b8', height: '24px', marginTop: '4px' }}></div>
              </div>
              <div>
                <span style={{ color: '#64748b' }}>Digital / Physical Signature:</span>
                <div style={{ borderBottom: '1px solid #94a3b8', height: '24px', marginTop: '4px' }}></div>
              </div>
              <div>
                <span style={{ color: '#64748b' }}>Date:</span>
                <div style={{ borderBottom: '1px solid #94a3b8', height: '24px', marginTop: '4px' }}></div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  const currentSections = activeTab === 'privacy' ? privacySections : termsSections;

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return currentSections;
    const query = searchQuery.toLowerCase();
    return currentSections.filter(
      (sec) =>
        sec.title.toLowerCase().includes(query) ||
        sec.id.toLowerCase().includes(query)
    );
  }, [currentSections, searchQuery]);

  return (
    <div className="page-container">
      {/* Navigation Header */}
      <header className="navbar">
        <div className="navbar-inner">
          <a href="#" className="brand-logo" aria-label="MotoRide Home">
            <div className="brand-icon-wrapper">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="5.5" cy="17.5" r="3.5" />
                <circle cx="18.5" cy="17.5" r="3.5" />
                <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5L9 9l4.5-3 3 4.5h3.5" />
              </svg>
            </div>
            <span>MotoRide</span>
          </a>

          <ul className="nav-links">
            <li><a href="#privacy-information-we-collect">Collected Data</a></li>
            <li><a href="#privacy-location-information">Location &amp; GPS</a></li>
            <li><a href="#privacy-information-sharing">MotoBites Network</a></li>
            <li><a href="#privacy-nigeria-ndpa">NDPA Compliance</a></li>
            <li><a href="#privacy-contact-us">Support</a></li>
          </ul>

          <button
            className="btn-contact"
            onClick={() => {
              const el = document.getElementById(activeTab === 'privacy' ? 'privacy-contact-us' : 'terms-contact-info');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Team
          </button>
        </div>
      </header>

      {/* Hero Section matching User Reference Screenshot */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="last-updated-badge">Last updated: Sep 2026</div>
          <h1 className="hero-title">
            {activeTab === 'privacy' ? 'We care about your privacy' : 'Rider Terms & Conditions'}
          </h1>

          {/* Segmented Pill Switcher - exact match */}
          <div className="pill-switcher-container" role="tablist" aria-label="Legal Documents Switcher">
            <button
              role="tab"
              aria-selected={activeTab === 'terms'}
              className={`pill-button ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('terms');
                setSearchQuery('');
              }}
            >
              Terms &amp; Conditions
            </button>
            <button
              role="tab"
              aria-selected={activeTab === 'privacy'}
              className={`pill-button ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => {
                setActiveTab('privacy');
                setSearchQuery('');
              }}
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </section>

      {/* Tools Bar (Search & Print) */}
      <section className="tools-bar-wrapper">
        <div className="tools-bar-inner">
          <div className="search-box">
            <svg className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder={`Search ${activeTab === 'privacy' ? 'privacy policy' : 'terms'} sections...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="tools-actions">
            <button className="btn-tool" onClick={handlePrint} title="Print or save as PDF">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Print Document</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="content-wrapper">
        <div className="content-grid">
          {/* Table of Contents Sticky Sidebar */}
          <aside className="toc-sidebar">
            <div className="toc-title">
              {activeTab === 'privacy' ? 'Privacy Sections (21)' : 'Terms Sections (32)'}
            </div>
            <nav className="toc-list">
              {currentSections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="toc-link"
                >
                  {sec.number}. {sec.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Policy Document Body */}
          <article className="document-container">
            {activeTab === 'privacy' ? (
              <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <span className="policy-badge orange">RIDER APP</span>
                  <span className="policy-badge">NDPA 2023 COMPLIANT</span>
                </div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em' }}>
                  MOTORIDE RIDER APP PRIVACY POLICY
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.75rem', color: '#64748b', fontSize: '0.875rem' }}>
                  <div><strong>Operated by:</strong> MotoBites Limited</div>
                  <div>&bull;</div>
                  <div><strong>Platform:</strong> MotoRide</div>
                  <div>&bull;</div>
                  <div><strong>Related Platform:</strong> MotoBites</div>
                  <div>&bull;</div>
                  <div><strong>Effective:</strong> September 2026</div>
                </div>
              </div>
            ) : (
              <div style={{ marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <span className="policy-badge orange">DELIVERY PARTNER AGREEMENT</span>
                  <span className="policy-badge">OPERATIONAL TERMS</span>
                </div>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#1e293b', letterSpacing: '-0.02em' }}>
                  MOTORIDE RIDER APP RIDER TERMS &amp; CONDITIONS
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.75rem', color: '#64748b', fontSize: '0.875rem' }}>
                  <div><strong>Operated by:</strong> MotoBites Limited</div>
                  <div>&bull;</div>
                  <div><strong>Platform:</strong> MotoRide</div>
                  <div>&bull;</div>
                  <div><strong>Fleet:</strong> Motorcycles, Cars, Vans, Three-Wheelers &amp; Bicycles</div>
                  <div>&bull;</div>
                  <div><strong>Effective:</strong> September 2026</div>
                </div>
              </div>
            )}

            {filteredSections.length === 0 ? (
              <div className="no-results">
                <h3>No matching sections found</h3>
                <p>We couldn&rsquo;t find any clauses matching &ldquo;{searchQuery}&rdquo;.</p>
                <button className="no-results-btn" onClick={() => setSearchQuery('')}>
                  Clear search
                </button>
              </div>
            ) : (
              filteredSections.map((sec) => (
                <section key={sec.id} id={sec.id} className="policy-section">
                  <div className="section-header">
                    <div className="section-title-wrap">
                      <span className="section-number">{sec.number}</span>
                      <h2 className="section-title">{sec.title}</h2>
                    </div>
                    <button
                      className="btn-tool"
                      onClick={() => handleCopySectionLink(sec.id)}
                      title="Copy link to this section"
                    >
                      {copiedId === sec.id ? (
                        <>
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#16a34a' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span style={{ color: '#16a34a' }}>Copied!</span>
                        </>
                      ) : (
                        <>
                          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          <span>Share</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="section-body">
                    {sec.content}
                  </div>
                </section>
              ))
            )}
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="#" className="brand-logo">
                <div className="brand-icon-wrapper" style={{ width: '32px', height: '32px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="5.5" cy="17.5" r="3.5" />
                    <circle cx="18.5" cy="17.5" r="3.5" />
                    <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5L9 9l4.5-3 3 4.5h3.5" />
                  </svg>
                </div>
                <span>MotoRide</span>
              </a>
              <p>
                MotoRide is operated by MotoBites Limited to coordinate delivery services for MotoBites and other authorised delivery operations.
              </p>
            </div>

            <div className="footer-columns">
              <div>
                <div className="footer-col-title">Legal &amp; Compliance</div>
                <ul className="footer-col-links">
                  <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('privacy'); }}>Privacy Policy</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); setActiveTab('terms'); }}>Terms &amp; Conditions</a></li>
                  <li><a href="#privacy-nigeria-ndpa">NDPA 2023 Compliance</a></li>
                  <li><a href="#privacy-location-information">Location Data Policy</a></li>
                </ul>
              </div>

              <div>
                <div className="footer-col-title">Platforms</div>
                <ul className="footer-col-links">
                  <li><a href="#">MotoRide Rider App</a></li>
                  <li><a href="#">MotoBites Delivery</a></li>
                  <li><a href="#">Fleet &amp; Partner Onboarding</a></li>
                </ul>
              </div>

              <div>
                <div className="footer-col-title">Support</div>
                <ul className="footer-col-links">
                  <li><a href="#privacy-contact-us">Privacy Team</a></li>
                  <li><a href="#terms-contact-info">Rider Support</a></li>
                  <li><a href="#terms-appeals-complaints">Appeals &amp; Complaints</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>&copy; 2026 MotoBites Limited. All rights reserved. Platform: MotoRide.</div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <span>NDPA 2023</span>
              <span>MotoBites Ecosystem</span>
              <span>Rider Safety First</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
