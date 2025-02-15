import React, { ReactNode } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { centerContentCollum, centerContent } from '../style/modifiers';
import styled from '@emotion/styled';
import PlexusContainer from '../components/PlexusContainer';
import { AboutPageTemplateQuery } from '../typings/graphql';
import SectionHeader from '../components/SectionHeader';
import TextSection from '../components/TextSection';
import Logotype from '../components/Logotype';
import ResearchAreas from '../components/ResearchAreas';
import css from '@emotion/css';
import Button from '../components/Button';
import { letterSpacing } from '../style/helpers';
import { fontSecondary } from '../style/theme';
import Helmet from 'react-helmet';
import { oc } from 'ts-optchain.macro';
import cognitioUrl from '../utils/cognitioUrl';
import { mqMobile } from '../style/mediaQueries';

type Props = {
  description?: string | null;
  contentHTML?: string | null;
  content?: ReactNode;
};

const Description = styled(PlexusContainer)`
  padding: 42px 0;
  ${centerContentCollum};

  p {
    margin-top: 28px;
    width: 100%;
    max-width: 840px;
    text-align: center;
    padding: 0 20px;
    font-size: 22px;
    ${letterSpacing(1)};
    font-family: ${fontSecondary};
    font-weight: 300;
    line-height: 1.5;
    color: #fff;

    @media (max-width: 800px) {
      font-size: 16px;
    }
  }

  ${mqMobile} {
    svg {
      max-width: 90%;
    }
  }
`;

const MoreInfoButton = styled(Button)`
  margin: 8px;
  min-width: 300px;
  max-width: calc(100% - 32px);
`;

export const AboutPageTemplate = ({
  description,
  content,
  contentHTML,
}: Props) => (
  <>
    <Description>
      <Logotype textColor="#fff" height={140} />
      <p>{description}</p>
    </Description>

    {(content || contentHTML) && (
      <>
        <SectionHeader label="Histórico do grupo" />
        <TextSection content={content} contentHTML={contentHTML} />
      </>
    )}

    <SectionHeader label="Linhas de pesquisa" />
    <ResearchAreas />

    <SectionHeader label="Mais Informações" />
    <div
      css={css`
        width: 100%;
        ${centerContentCollum};
      `}
    >
      <MoreInfoButton outline label="Projetos de pesquisa" to="/projetos" />
      <MoreInfoButton outline label="Produção científica" to="/pesquisa" />
      <MoreInfoButton outline label="Contato" to="/contato" />
    </div>
  </>
);

const AboutPage = ({ data }: { data: AboutPageTemplateQuery }) => {
  const { description } = oc(data).markdownRemark.frontmatter() || {};

  return (
    <Layout pageTitle="Sobre">
      <Helmet>
        <title>COGNITIO · Sobre</title>
        <meta name="description" content={`${description}`} />
      </Helmet>
      <AboutPageTemplate
        description={description}
        contentHTML={oc(data).markdownRemark.html()}
      />
    </Layout>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        description
      }
    }
  }
`;
