import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, email } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: var(--fz-md);
    font-weight: 400;

    &:before {
      bottom: 0;
      font-size: var(--fz-sm);
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .consulting-services {
    text-align: left;
    margin: 0 auto 32px;
    max-width: 100%;
    padding: 0 0 10px 0;
    ul {
      margin-left: 1.2em;
      padding-left: 0;
    }
    li {
      margin-bottom: 10px;
      line-height: 1.6;
    }
    p {
      margin-bottom: 10px;
    }
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h1 className="section-heading">Contact Me: Software Consultant Availability</h1>

      <div className="consulting-services">
        <p>I offer consultation services in:</p>
        <ul>
          <li>
            <strong>End-to-end Software Architecture &amp; Development:</strong> Specializing in
            native mobile apps (iOS, Android, Symbian), desktop and web applications, and
            high-performance backend systems using .NET, Python/Django, and modern frameworks.
          </li>
          <li>
            <strong>Data Science &amp; Analytics:</strong> Deep experience in predictive modeling,
            machine learning, and data visualization. I help organizations transform raw data into
            actionable strategic insights using tools such as Python (Scikit-Learn, TensorFlow,
            PyTorch), Qlik, Tableau, and Oracle BI.
          </li>
          <li>
            <strong>Cloud &amp; DevOps Solutions:</strong> Expertise in architecting and deploying
            scalable, cloud-native infrastructures leveraging AWS, Azure, and Google Cloud;
            including CI/CD and automation using Docker, Kubernetes, Ansible, and GitHub Actions.
          </li>
          <li>
            <strong>Business Intelligence &amp; Reporting:</strong> Design and development of
            intelligent dashboards, survey systems, and automated reporting tools for
            decision-makers in government, education, and enterprise sectors.
          </li>
        </ul>
        <p>
          Whether you require hands-on technical leadership for a new product, support in
          modernizing your existing systems, or specialist insight on your next data-driven
          initiative, I bring:
        </p>
        <ul>
          <li>
            Multi-domain, multicultural experience, having delivered projects across the Middle
            East, Europe, and Asia.
          </li>
          <li>
            Strong academic background with a Ph.D. in Computer Science, and a solid history of
            research and publication in software architecture and data science.
          </li>
          <li>
            Versatility across full project life cycles, from requirement analysis and solution
            design to implementation and post-deployment optimization.
          </li>
          <li>
            Commitment to clear communication, reliable delivery, and ongoing learning to ensure the
            adoption of best-in-class technologies and practices.
          </li>
        </ul>
        <p>
          I welcome opportunities for both short-term projects and long-term consulting
          partnerships. To discuss your requirements or schedule a consultation, please{' '}
          <strong>reach out via</strong>:
        </p>
        <ul>
          <li>
            <strong>Phone:</strong> (+966) 508817613
          </li>
          <li>
            <strong>Email:</strong> yunusrf@gmail.com
          </li>
          <li>
            <strong>LinkedIn:</strong> yunus-parvej-faniband-b7a42817{' '}
            <a
              href="https://www.linkedin.com/in/yunus-parvej-faniband-b7a42817/"
              aria-label="Linkedin"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4em' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="20"
                height="20"
                style={{ verticalAlign: 'middle' }}>
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </li>
          <li>
            <strong>Location:</strong> Based in Dhahran / Dammam, Saudi Arabia (available for remote
            and on-site engagements; Transferable Iqama)
          </li>
        </ul>
        <p>
          Let’s collaborate to solve your toughest challenges and unlock the full potential of your
          technology investments.
        </p>
      </div>

      <a className="email-link" href={`mailto:${email}`}>
        Contact Me via Email
      </a>
    </StyledContactSection>
  );
};

export default Contact;
