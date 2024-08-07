import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tutorials/quickstart"
          >
            Quickstart - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

function DocsGroup({ title, description, href }) {
  return (
    <article className="col col--6 margin-bottom--lg">
      <a
        className="card padding--lg cardContainer_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module"
        href={href}
      >
        <h2 className="text--truncate cardTitle_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module">
          {title}
        </h2>
        <p className=" cardDescription_node_modules-@docusaurus-theme-classic-lib-theme-DocCard-styles-module">
          {description}
        </p>
      </a>
    </article>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="The official documentation for all things Smithy."
    >
      <HomepageHeader />
      <main
        style={{
          margin: "0 auto",
          maxWidth: "768px",
          padding: "var(--ifm-spacing-vertical) var(--ifm-spacing-horizontal)",
          width: "100%",
        }}
      >
        <section className="row margin-top--lg">
          <DocsGroup
            title="Tutorials"
            description="Learning: Learn how Smithy works by doing something meaningful."
            href="/docs/category/tutorials"
          />
          <DocsGroup
            title="How-Tos"
            description="Goals: Get something specific done, correctly and safely."
            href="/docs/category/how-tos"
          />
          <DocsGroup
            title="Explanation"
            description="Understanding: Deepen and broaden your understanding of Smithy."
            href="/docs/category/explanation"
          />
          <DocsGroup
            title="Reference"
            description="Information: Technical descriptions of the machinery and how to operate it."
            href="/docs/category/reference"
          />
        </section>
      </main>
    </Layout>
  );
}
