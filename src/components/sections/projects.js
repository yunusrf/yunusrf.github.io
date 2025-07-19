import React, { useState, useEffect, useRef } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px; /* Increase margin to prevent overlap */

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
    margin-bottom: 60px; /* Add margin below heading */
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    color: var(--green); /* Ensure visibility */
    margin-bottom: 30px; /* Add spacing below the link */
    text-decoration: underline; /* Add underline for better visibility */
    padding-bottom: 10px; /* Add padding below the archive link */
    &:after {
      bottom: 0.1em;
    }
    z-index: 1; /* Ensure the link is above the grid */
    position: relative; /* Establish stacking context */
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Set grid to display two cards per row */
    grid-gap: 20px; /* Adjust gap for better spacing */
    position: relative;
    margin-top: 10px; /* Increase spacing between the archive link and the grid */
    align-items: stretch;
    grid-auto-rows: 1fr;
    justify-items: start; /* Align cards to the start of the grid */

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 10px auto 0;
    background: transparent;
    color: var(--green);
    font-weight: bold;
    border: 1px solid var(--lightest-slate);
    padding: 1rem 1.5rem;
    font-size: var(--fz-md);
    border-radius: var(--border-radius);
    transition: var(--transition);
    opacity: 0.9;
    margin-top: 50px; /* Increase space above the button to prevent overlap with the last row of cards */

    &:hover {
      background: var(--light-navy);
      color: var(--green);
      transform: translateY(-3px);
      opacity: 1;
    }
  }
`;

const StyledProject = styled.li`
  position: relative;
  cursor: default;
  transition: var(--transition);

  @media (prefers-reduced-motion: no-preference) {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
        will-change: transform, opacity; /* Add this line */
      }
    }
  }

  a {
    pointer-events: none; /* Disable all link clicks */
  }

  .project-inner {
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    justify-content: space-between; /* Ensure proper layout */
    align-items: flex-start;
    position: relative;
    height: 100%; /* Make cards take up full height */
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
    overflow: hidden; /* Prevent the entire card from being scrollable */
    pointer-events: auto; /* Allow interaction with child elements */
    will-change: transform, opacity; /* Add this line */
  }
  .project-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;

    .folder {
      color: var(--green);
      svg {
        width: 40px;
        height: 40px;
      }
    }

    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);

      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;

        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);

    a {
      position: static;

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }

  .project-description {
    position: relative;
    color: var(--light-slate);
    font-size: 17px;
    max-height: 150px; /* Limit the height */
    overflow: hidden; /* Remove scrollbar */
    padding-bottom: 0rem; /* Reduce space for the button */
    display: -webkit-box; /* Enable flexbox for text clamping */
    -webkit-line-clamp: 3; /* Limit to 3 lines */
    -webkit-box-orient: vertical; /* Set box orientation to vertical */
    overflow: hidden; /* Hide overflowed text */
    text-overflow: ellipsis; /* Add ellipsis for overflowed text */
    white-space: normal; /* Allow text wrapping */

    .more-button {
      position: absolute;
      bottom: 1rem; /* Ensure the button is always visible */
      right: 1rem;
      background: transparent; /* Match dynamic background with theme */
      color: var(--green); /* Use theme variable for text color */
      font-weight: bold; /* Make text more prominent */
      border: 1px solid var(--lightest-slate); /* Match border style */
      padding: 0.5rem 1rem; /* Adjust padding for better fit */
      font-size: var(--fz-sm); /* Match font size */
      border-radius: var(--border-radius);
      transition: var(--transition); /* Smooth hover effect */
      opacity: 0.9; /* Add transparency */

      &:hover {
        background: var(--light-navy); /* Match hover background with theme */
        color: var(--green); /* Adjust text color for hover */
        transform: translateY(-3px); /* Add hover effect */
        opacity: 1; /* Remove transparency on hover */
      }
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
    margin: 25px 0 10px;
    padding: 0;
    list-style: none;

    li {
      margin: 0 8px 8px 0;
      padding: 6px 12px;
      background-color: var(--navy);
      border: 1px solid var(--light-navy);
      border-radius: 4px;
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      white-space: nowrap;
      transition: var(--transition);

      &:hover {
        background-color: var(--light-navy);
        border-color: var(--green);
        color: var(--lightest-slate);
        transform: translateY(-2px);
      }
    }
  }

  .project-title a,
  .project-links a {
    pointer-events: auto; /* Enable clicks for external and GitHub links */
    color: var(--green); /* Ensure visibility */
    text-decoration: none; /* Remove underline */
    transition: var(--transition); /* Smooth hover effect */
  }

  .project-title a:hover,
  .project-links a:hover {
    color: var(--light-green); /* Slightly lighter shade on hover */
    text-decoration: underline; /* Add underline on hover for clarity */
  }

  .project-inner a {
    pointer-events: none; /* Disable all link clicks inside the card */
  }
`;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background-color: var(--light-navy);
    padding: 20px;
    border-radius: var(--border-radius);
    max-width: 800px;
    width: 90%;
    max-height: 80%;
    overflow-y: auto;
  }

  .close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: var(--green); /* Use theme color for visibility */
    border: none;
    color: var(--lightest-slate); /* Ensure contrast with background */
    font-size: 24px;
    cursor: pointer;
    border-radius: var(--border-radius);
    padding: 5px 10px; /* Add padding for better click area */
    transition: var(--transition); /* Smooth hover effect */

    &:hover {
      background: var(--light-green); /* Slightly lighter shade on hover */
      color: var(--navy); /* Contrast adjustment */
    }
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/projects/" }
          frontmatter: { showInProjects: { ne: false } }
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              tech
              github
              external
            }
            html
          }
        }
      }
    }
  `);

  const [showMore, setShowMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  useEffect(() => {
    const handleEscape = event => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const GRID_LIMIT = 6;
  const projects = data.projects.edges.filter(({ node }) => node);
  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  const handleShowMore = content => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const projectInner = node => {
    const { frontmatter, html } = node;
    const { github, external, title, tech } = frontmatter;

    return (
      <div className="project-inner">
        <header>
          <div className="project-top">
            <div className="folder">
              <Icon name="Folder" />
            </div>
            <div className="project-links">
              {github && (
                <a href={github} aria-label="GitHub Link" target="_blank" rel="noreferrer">
                  <Icon name="GitHub" />
                </a>
              )}
              {external && (
                <a
                  href={external}
                  aria-label="External Link"
                  className="external"
                  target="_blank"
                  rel="noreferrer">
                  <Icon name="External" />
                </a>
              )}
            </div>
          </div>

          <h3 className="project-title">
            <a href={external} target="_blank" rel="noreferrer">
              {title}
            </a>
          </h3>

          <div className="project-description">
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <button
            className="more-button"
            onClick={e => {
              e.preventDefault(); // Prevent default link behavior
              e.stopPropagation(); // Stop event propagation to parent
              handleShowMore(html); // Open the modal
            }}>
            {'>'} Details
          </button>

          {tech && (
            <ul className="project-tech-list">
              {tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          )}
        </header>
      </div>
    );
  };

  return (
    <StyledProjectsSection>
      <h2 ref={revealTitle}>Highlighted Additional Projects | Supplementary Project Portfolio</h2>

      <Link className="inline-link archive-link" to="/archive" ref={revealArchiveLink}>
        View Archive
      </Link>

      <ul className="projects-grid">
        {prefersReducedMotion ? (
          <>
            {projectsToShow &&
              projectsToShow.map(({ node }, i) => (
                <StyledProject key={i}>{projectInner(node)}</StyledProject>
              ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {projectsToShow &&
              projectsToShow.map(({ node }, i) => (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i >= GRID_LIMIT ? (i - GRID_LIMIT) * 300 : 300}
                  exit={false}>
                  <StyledProject
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    style={{
                      transitionDelay: `${i >= GRID_LIMIT ? (i - GRID_LIMIT) * 100 : 0}ms`,
                    }}>
                    {projectInner(node)}
                  </StyledProject>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </ul>

      {isModalOpen && (
        <StyledModal>
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            <div dangerouslySetInnerHTML={{ __html: modalContent }} />
          </div>
        </StyledModal>
      )}

      <button className="more-button" onClick={() => setShowMore(!showMore)}>
        Show {showMore ? 'Less' : 'More'}
      </button>
    </StyledProjectsSection>
  );
};

export default Projects;
