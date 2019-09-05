import styled from '@emotion/styled';
import { rgba } from '@lucasols/utils';
import { Link } from 'gatsby';
import React from 'react';
import { oc } from 'ts-optchain.macro';
import { letterSpacing } from '../style/helpers';
import { centerContent, centerContentCollum } from '../style/modifiers';
import { colorSecondary } from '../style/theme';
import { ProjectsFragment } from '../typings/graphql';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import SectionHeader from './SectionHeader';

type Props = {
  moreButton?: boolean;
  projects?: ProjectsFragment;
};

const Container = styled.div`
  padding: 0 10px;
  ${centerContent};
  flex-wrap: wrap;
`;

const Project = styled(Link)`
  ${centerContentCollum};
  margin: 8px;
  width: 320px;
  height: 200px;
  border: 1.5px solid ${rgba(colorSecondary, 0.4)};
  border-radius: 8px;
  transition: 160ms;
  overflow: hidden;
  padding: 16px;
  transition: border-color 160ms;

  &:hover {
    border-color: ${colorSecondary};
  }

  h1 {
    padding: 0 8px;
    font-size: 22px;
    font-weight: 400;
    ${letterSpacing(4)};
  }
`;

const Image = styled(PreviewCompatibleImage)`
  margin-bottom: 16px;
  height: 140px;
  width: 90%;

  img {
    object-fit: contain !important;
  }
`;

const Projects = ({ moreButton, projects }: Props) => {
  return projects && projects.edges.length > 0 ? (
    <>
      <SectionHeader
        label="Projetos de Pesquisa"
        moreButton={moreButton && { label: 'Ver todos', to: '/projetos' }}
      />
      <Container>
        {projects.edges.map((item, i) => {
          const image = oc(item).node.frontmatter.projectThumb.childImageSharp.fluid();

          return (
            <Project key={i} to={oc(item).node.fields.slug('ERRO!')}>
              {image && <Image imageInfo={image} />}
              <h1
                css={{ fontSize: !image ? '28px !important' : undefined }}
                title={oc(item).node.frontmatter.projectName() || undefined}
              >
                {oc(item).node.frontmatter.projectName()}
              </h1>
            </Project>
          );
        })}
      </Container>
    </>
  ) : null;
};

export default Projects;
