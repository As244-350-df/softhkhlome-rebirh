import React from 'react';
import { Helmet } from 'react-helmet-async'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Policy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Softkhlome</title>
        <meta name="description" content="Read Softkhlome's Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is our priority." />
        <meta name="keywords" content="privacy policy, Softkhlome, data protection, personal information" />
        <link rel="canonical" href="https://softklhome-v1.firebaseapp.com/Policy" />
        <meta property="og:title" content="Privacy Policy - Softkhlome" />
        <meta property="og:description" content="Read Softkhlome's Privacy Policy to understand how we collect, use, and protect your personal information." />
        <meta property="og:url" content="https://softklhome-v1.firebaseapp.com/Policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy - Softkhlome" />
        <meta name="twitter:description" content="Read Softkhlome's Privacy Policy to understand how we collect, use, and protect your personal information." />
      </Helmet>
      <NavBar />
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              {/* Header Section */}
              <div className="text-center mb-5">
                <h1 className="display-4 fw-bold text-primary mb-3">Privacy Policy</h1>
                <p className="lead text-muted">
                  Your privacy is important to us. This policy explains how Softkhlome collects, uses, and protects your information.
                </p>
                <small className="text-muted">Last Updated: April 14, 2025</small>
              </div>

              {/* Introduction Card */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="h4 card-title text-primary mb-3">Introduction</h2>
                  <p className="card-text">
                    Welcome to Softkhlome! We are committed to protecting your privacy and ensuring the security of your personal information.
                    This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website,
                    use our services, or interact with us.
                  </p>
                  <p className="card-text">
                    By using our services, you agree to the collection and use of information in accordance with this policy.
                    If you do not agree with our policies and practices, please do not use our services.
                  </p>
                </div>
              </div>

              {/* Information We Collect */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="h4 card-title text-primary mb-3">Information We Collect</h2>
                  <p className="card-text mb-3">We collect information in the following ways:</p>

                  <h5 className="text-secondary mb-2">Personal Information</h5>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">Name, email address, and contact information</li>
                    <li className="list-group-item">Account credentials and profile information</li>
                    <li className="list-group-item">Payment information for transactions</li>
                    <li className="list-group-item">Communication preferences and feedback</li>
                  </ul>

                  <h5 className="text-secondary mb-2">Automatically Collected Information</h5>
                  <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item">IP address and location data</li>
                    <li className="list-group-item">Browser type and version</li>
                    <li className="list-group-item">Device information and screen resolution</li>
                    <li className="list-group-item">Pages visited and time spent on our site</li>
                    <li className="list-group-item">Referral sources and click-through data</li>
                  </ul>

                  <h5 className="text-secondary mb-2">Cookies and Tracking Technologies</h5>
                  <p className="card-text">
                    We use cookies, web beacons, and similar technologies to enhance your experience,
                    analyze site usage, and assist in our marketing efforts.
                  </p>
                </div>
              </div>

              {/* How We Use Information */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="h4 card-title text-primary mb-3">How We Use Your Information</h2>
                  <p className="card-text mb-3">We use the collected information for the following purposes:</p>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <h6 className="text-secondary">Service Delivery</h6>
                      <ul className="list-unstyled">
                        <li>• Provide and maintain our services</li>
                        <li>• Process transactions and payments</li>
                        <li>• Send service-related communications</li>
                        <li>• Respond to your inquiries and support requests</li>
                      </ul>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h6 className="text-secondary">Improvement & Analytics</h6>
                      <ul className="list-unstyled">
                        <li>• Analyze usage patterns and trends</li>
                        <li>• Improve our website and services</li>
                        <li>• Develop new features and products</li>
                        <li>• Conduct research and surveys</li>
                      </ul>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <h6 className="text-secondary">Marketing & Communication</h6>
                      <ul className="list-unstyled">
                        <li>• Send promotional materials (with consent)</li>
                        <li>• Provide personalized recommendations</li>
                        <li>• Conduct marketing campaigns</li>
                        <li>• Share updates about our services</li>
                      </ul>
                    </div>
                    <div className="col-md-6 mb-3">
                      <h6 className="text-secondary">Legal & Security</h6>
                      <ul className="list-unstyled">
                        <li>• Ensure legal compliance</li>
                        <li>• Protect against fraud and abuse</li>
                        <li>• Enforce our terms of service</li>
                        <li>• Respond to legal requests</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Information Sharing */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="h4 card-title text-primary mb-3">Information Sharing and Disclosure</h2>
                  <p className="card-text mb-3">
                    We do not sell, trade, or rent your personal information to third parties.
                    We may share your information in the following circumstances:
                  </p>

                  <div className="alert alert-info">
                    <strong>Important:</strong> We only share information when necessary and with appropriate safeguards in place.
                  </div>

                  <h5 className="text-secondary mb-2">With Your Consent</h5>
                  <p className="card-text mb-3">We share information when you explicitly agree to it.</p>

                  <h5 className="text-secondary mb-2">Service Providers</h5>
                  <p className="card-text mb-3">
                    We may share information with trusted third-party service providers who help us operate our business,
                    such as payment processors, hosting providers, and analytics services.
                  </p>

                  <h5 className="text-secondary mb-2">Legal Requirements</h5>
                  <p className="card-text mb-3">
                    We may disclose information if required by law, court order, or government request,
                    or to protect our rights, property, or safety, or that of our users.
                  </p>

                  <h5 className="text-secondary mb-2">Business Transfers</h5>
                  <p className="card-text mb-3">
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred
                    as part of the transaction, subject to the same privacy protections.
                  </p>
                </div>
              </div>

              {/* Data Security */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="h4 card-title text-primary mb-3">Data Security</h2>
                  <p className="card-text mb-3">
                    We implement comprehensive security measures to protect your personal information:
                  </p>

                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="text-secondary">Technical Measures</h6>
                      <ul className="list-unstyled">
                        <li>• SSL/TLS encryption for data transmission</li>
                        <li>• Secure data storage and access controls</li>
                        <li>• Regular security audits and updates</li>
                        <li>• Firewalls and intrusion detection systems</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h6 className="text-secondary">Administrative Measures</h6>
                      <ul className="list-unstyled">
                        <li>• Employee training on data protection</li>
                        <li>• Access restrictions and monitoring</li>
                        <li>• Incident response procedures</li>
                        <li>• Regular backup and recovery testing</li>
                      </ul>
                    </div>
                  </div>

                  <div className="alert alert-warning mt-3">
                    <strong>Note:</strong> While we strive to protect your information, no method of transmission over the internet
                    or electronic storage is 100% secure. We cannot guarantee absolute security.
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="h4 card-title text-primary mb-3">Your Rights and Choices</h2>
                  <p className="card-text mb-3">
                    You have several rights regarding your personal information:
                  </p>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-primary">
                        <div className="card-body">
                          <h6 className="card-title text-primary">Access & Portability</h6>
                          <p className="card-text small">
                            Request access to your personal data and obtain a copy in a portable format.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-success">
                        <div className="card-body">
                          <h6 className="card-title text-success">Correction</h6>
                          <p className="card-text small">
                            Request correction of inaccurate or incomplete personal information.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-warning">
                        <div className="card-body">
                          <h6 className="card-title text-warning">Deletion</h6>
                          <p className="card-text small">
                            Request deletion of your personal information, subject to legal requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <div className="card h-100 border-info">
                        <div className="card-body">
                          <h6 className="card-title text-info">Opt-out</h6>
                          <p className="card-text small">
                            Unsubscribe from marketing communications and manage cookie preferences.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="card-text mt-3">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>
              </div>

              {/* Cookies Policy */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="h4 card-title text-primary mb-3">Cookies and Tracking Technologies</h2>
                  <p className="card-text mb-3">
                    We use cookies and similar technologies to enhance your browsing experience:
                  </p>

                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Purpose</th>
                          <th>Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Essential Cookies</td>
                          <td>Enable core website functionality</td>
                          <td>Session</td>
                        </tr>
                        <tr>
                          <td>Analytics Cookies</td>
                          <td>Track usage and performance</td>
                          <td>2 years</td>
                        </tr>
                        <tr>
                          <td>Marketing Cookies</td>
                          <td>Deliver personalized ads</td>
                          <td>1 year</td>
                        </tr>
                        <tr>
                          <td>Functional Cookies</td>
                          <td>Remember your preferences</td>
                          <td>1 year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="card-text">
                    You can control cookies through your browser settings. However, disabling certain cookies
                    may affect website functionality.
                  </p>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="h4 card-title text-primary mb-3">Children's Privacy</h2>
                  <p className="card-text">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect
                    personal information from children under 13. If we become aware that we have collected such
                    information, we will take steps to delete it promptly.
                  </p>
                  <p className="card-text">
                    If you are a parent or guardian and believe your child has provided us with personal information,
                    please contact us immediately.
                  </p>
                </div>
              </div>

              {/* International Data Transfers */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="h4 card-title text-primary mb-3">International Data Transfers</h2>
                  <p className="card-text">
                    Your information may be transferred to and processed in countries other than your own.
                    We ensure that such transfers comply with applicable data protection laws and implement
                    appropriate safeguards to protect your information.
                  </p>
                </div>
              </div>

              {/* Changes to Policy */}
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h2 className="h4 card-title text-primary mb-3">Changes to This Privacy Policy</h2>
                  <p className="card-text">
                    We may update this Privacy Policy from time to time to reflect changes in our practices,
                    technology, legal requirements, or other factors. We will notify you of any material changes
                    by posting the updated policy on this page and updating the "Last Updated" date.
                  </p>
                  <p className="card-text">
                    We encourage you to review this policy periodically to stay informed about how we protect
                    your information.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="card shadow-sm mb-5">
                <div className="card-body">
                  <h2 className="h4 card-title text-primary mb-3">Contact Us</h2>
                  <p className="card-text mb-3">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                    please contact us:
                  </p>

                  <div className="row">
                    <div className="col-md-6">
                      <h6 className="text-secondary">Email</h6>
                      <p className="mb-2">
                        <a href="mailto:softkhlome@gmail.com" className="text-decoration-none">
                          softkhlome@gmail.com
                        </a>
                      </p>

                      <h6 className="text-secondary">Phone</h6>
                      <p className="mb-2">+265 (888) 652-2243</p>

                      <h6 className="text-secondary">Business Hours</h6>
                      <p className="mb-0">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    </div>
                    <div className="col-md-6">
                      <h6 className="text-secondary">Address</h6>
                      <address className="mb-0">
                        Softkhlome<br />
                        *** Technology Drive<br />
                        Lilongwe City, Mitundu<br />
                        Malawi
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Policy;