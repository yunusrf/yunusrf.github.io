import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }

  .technical-skills {
    margin-top: 40px;

    h3 {
      margin-bottom: 20px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: var(--fz-lg);
    }

    .skills-table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      background: var(--navy);
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: 0 10px 30px -15px var(--navy-shadow);

      th {
        background: var(--dark-navy);
        color: var(--green);
        padding: 15px 20px;
        text-align: left;
        font-family: var(--font-mono);
        font-size: var(--fz-sm);
        font-weight: 600;
        border-bottom: 1px solid var(--navy);
      }

      td {
        padding: 12px 20px;
        border-bottom: 1px solid rgba(100, 255, 218, 0.1);
        vertical-align: top;

        &:first-child {
          font-family: var(--font-mono);
          font-weight: 600;
          color: var(--green);
          width: 180px;
          font-size: var(--fz-sm);
        }

        &:last-child {
          font-size: var(--fz-xs);
          line-height: 1.5;
          color: var(--slate);
        }
      }

      tr:last-child td {
        border-bottom: none;
      }

      @media (max-width: 768px) {
        display: block;
        overflow-x: auto;
        white-space: nowrap;

        th,
        td {
          padding: 10px 15px;
          font-size: var(--fz-xxs);
        }

        td:first-child {
          width: 120px;
        }
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: ${props => (props.round ? '50%' : 'var(--border-radius)')};
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: ${props => (props.round ? '50%' : 'var(--border-radius)')};
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
      aspect-ratio: ${props => (props.round ? '1' : 'auto')};
      object-fit: cover;
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: ${props => (props.round ? '50%' : 'var(--border-radius)')};
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const technicalSkills = [
    {
      category: 'Programming',
      technologies:
        'Microsoft .NET (C#, ASP.NET), iOS (Objective–C, Swift), C, C++, Symbian C++, Python',
    },
    {
      category: 'Development Tools',
      technologies:
        'Microsoft Visual C++, Visual Studio, Visual Studio Code, Eclipse, X-Code, Android Studio, PyCharm, Jupyter Notebook, EB Guide Studio, Git, Docker, Kubernetes, Github Actions',
    },
    {
      category: 'Frameworks/Platforms',
      technologies:
        'Microsoft Foundation Class (MFC), Windows Presentation Foundation (WPF), Entity Framework, ADO.NET, Qualtrics Survey Platform, Nuance SR and TTS engine, Qlik Sense, Qlik Analytics Platform, Qlik Sense Developer tools, Open XML SDK for Microsoft Office, FORM (WorldAPP\'s) Enterprise Data Collection Platform, KeySurvey APIs, Selenium HQ Automation, Dask, MLflow, Gradio, Opencv, PyTorch Lightning, PyQt5, Django Framework',
    },
    {
      category: 'Analytics and BI Tools',
      technologies:
        'Qlik Sense, Qlik Analytics Platform, Tableau, Oracle Fusion Analytics, Power BI, Microsoft Excel, Google Analytics, Google Data Studio',
    },
    {
      category: 'Cloud Platforms',
      technologies: 'AWS, Azure, Google Cloud Platform',
    },
    {
      category: 'Web',
      technologies:
        'Javascript, Typescript, React, jQuery, Bootstrap, React JS, Node.js, Express.js, Eleventy, WordPress, HTML5, CSS3, SASS, LESS',
    },
    {
      category: 'Database',
      technologies: 'Microsoft SQL Server, MySQL, PostgreSQL, Redis, MongoDB',
    },
    {
      category: 'Design Tools',
      technologies: 'Enterprise Architect, Visual Studio, Microsoft Visio',
    },
    {
      category: 'Operating Systems',
      technologies: 'macOS, Windows Server, Windows 10/11, Linux Redhat',
    },
    {
      category: 'Python',
      technologies: 'Django Framework, PyQt5',
    },
    {
      category: 'Data Science Packages',
      technologies:
        'Scikit-Learn, Tensorflow, PyTorch, NumPy, SciPy, Pandas, XGBoost/LightGBM, Matplotlib, Seaborn, StatsModels',
    },
    {
      category: 'Statistics/ML',
      technologies: 'Linear/ Logistic Regression, SVM, Ensemble Trees, Random Forest',
    },
    {
      category: 'Others',
      technologies:
        'Service-Oriented Architecture (SOA), RFID, NFC, CI/CD (Continuous Integration and Continuous Delivery (or Continuous Deployment)), Ansible',
    },
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Hello! My name is Yunus Parvej Faniband.</p>
            <p>
              With over 20 years of experience as a senior technical professional, I specialize in
              the architecture, implementation, and management of software products across mobile
              and Windows platforms. My expertise spans system software development, analysis, and
              design, with a strong focus on native mobile application development, backend and
              infrastructure solutions, as well as desktop and web development.
            </p>

            <p>
              I have a solid background in data analysis, predictive modeling, and data
              visualization, utilizing machine learning and deep learning techniques to drive
              business insights. As both a leader and a dedicated team player, I am passionate about
              developing effective problem-solving strategies for complex challenges and
              continuously learning new technologies and tools as needed.
            </p>
            <p>
              Throughout my career, I have been actively involved in design reviews, technical
              document preparation, and comprehensive documentation at every phase of the software
              development life cycle. I regularly create technical proposals, conduct requirement
              analysis, lead estimation processes, and mentor engineering teams.
            </p>
            <p>
              Additionally, I assist in writing grant proposals and securing funding for research
              initiatives. My experience includes analyzing and interpreting research data, as well
              as preparing reports, publications, and presentations to effectively share findings
              with diverse audiences.
            </p>
          </div>

          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <table className="skills-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Technologies</th>
                </tr>
              </thead>
              <tbody>
                {technicalSkills.map((skillGroup, i) => (
                  <tr key={i}>
                    <td>{skillGroup.category}</td>
                    <td>{skillGroup.technologies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </StyledText>

        <StyledPic round={true}>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Yunus Parvej"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
