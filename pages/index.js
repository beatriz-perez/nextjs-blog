// Modules:
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
// Components
import Layout, { siteTitle } from '../components/layout'
// Styles:
import utilStyles from '../styles/utils.module.css'
// Data and services:
import { getSortedPostsData } from '../lib/posts'
import staticInfo from '../data/staticInfo.json'

export default function Home({ allPostsData, data }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hola! I am Beatriz, a junior software developer and architect getting started with Next.js</p>
        <p>{data}</p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {staticInfo.projects.map(({ name }) => (
            <li className={utilStyles.listItem} key={name}>
                <Link href="/projects/[project]" as={`/projects/${name}`}>
                  <a>{name}</a>
                </Link>
              <br />
              <small className={utilStyles.lightText}>
                <p>This is {name}</p>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps({ req }) {
  const allPostsData = getSortedPostsData()

  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const res = await fetch(`${baseUrl}/api/hello`)
  const data = await res.json()

  return {
    props: {
      allPostsData,
      data
    }
  }
}