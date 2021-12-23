import React from 'react'

import Meta from '../components/Meta'
import SectionTop from '../components/sections/SectionTop'
import SectionAbout from '../components/sections/SectionAbout'
import SectionEvents from '../components/sections/SectionEvents'
import SectionRecordings from '../components/sections/SectionRecordings'
import SectionVideos from '../components/sections/SectionVideos'
import SectionGallery from '../components/sections/SectionGallery'
import Footer from '../components/Footer'

import client from '../sanityClient'

export async function getStaticProps({ params }) {
  const sectionsData = await client.getDocuments(['sectionAbout', 'sectionRecordings'])
  const eventsData = await client.fetch('*[_type == "event"] | order(date)')

  // Hacky way of separately including cover asset urls
  const sectionRecordings = await client.fetch('*[_type == "sectionRecordings"]{ "coverImages": recordings[].cover.asset->url, ... }')

  return {
    props: {
      sectionRecordings,
      sectionsData,
      eventsData,
    },
  }
}

export default function Index(response) {
  return (
    <>
      <Meta />

      <SectionTop />
      {/* <SectionAbout {...response.sectionsData} /> */}
      <SectionAbout {...response.sectionsData[0]} />
      <SectionEvents {...response.eventsData} />
      {/* <SectionRecordings {...response.sectionsData[1]} /> */}
      <SectionRecordings {...response.sectionRecordings[0]} />
      <SectionVideos />
      <SectionGallery />
      <Footer />

      <style jsx global>{`
        @font-face {
          font-family: 'gtam-standard';
          font-style: normal;
          font-weight: 400;
          src: url('https://assets.ctfassets.net/8730t1z03k68/5UuLWhEaVGmu2wAcqEUmO4/52bc75bc5051da07af51a0784efeab45/GT-America-Standard-Regular.woff2')
              format('woff2'),
            url('https://assets.ctfassets.net/8730t1z03k68/4dhw81TmQ0ci8IAMkS8MOk/9f0af9bb1b638f8474f503f761dec99c/GT-America-Standard-Regular.woff')
              format('woff');
        }

        @font-face {
          font-family: 'gtam-standard';
          font-style: italic;
          font-weight: 400;
          src: url('https://assets.ctfassets.net/8730t1z03k68/4C3e4Tlo9quaScCmioeg4G/5a00f2c22946ef04060fbe1bd5f2c7f0/GT-America-Standard-Regular-Italic.woff2')
              format('woff2'),
            url('https://assets.ctfassets.net/8730t1z03k68/5HtnrU62K4QscGiooqkosW/4f093c643d898adfe2f13d76a40cd5a1/GT-America-Standard-Regular-Italic.woff')
              format('woff');
        }

        @font-face {
          font-family: 'gtam-standard';
          font-style: normal;
          font-weight: 700;
          src: url('https://assets.ctfassets.net/8730t1z03k68/1GFfjtS8FCGEu4OUAi4Ssu/0306ff68403972e4c564d26e02d32ad0/GT-America-Standard-Bold.woff2')
              format('woff2'),
            url('https://assets.ctfassets.net/8730t1z03k68/4dDqXVuU5WoQiQCmCwqQK8/4530e71ffb630392e08d89a585833efc/GT-America-Standard-Bold.woff')
              format('woff');
        }

        @font-face {
          font-family: 'gtam-compressed';
          src: url('https://assets.ctfassets.net/8730t1z03k68/1VE5VGgpkcgM0ciwg8G4Yw/2ff7d829803668feb1523bdd7acf5225/GT-America-Compressed-Bold.woff2')
              format('woff2'),
            url('https://assets.ctfassets.net/8730t1z03k68/5tdCDoy6uQ2KSkYOqEoOYg/92af9e9fd0af39ae0ef572f4d6bd626b/GT-America-Compressed-Bold.woff')
              format('woff');
        }

        *,
        *:before,
        *:after {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
        }

        html {
          box-sizing: border-box;
          font-family: 'gtam-standard', 'Helvetica', sans-serif;
        }

        .container {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
        }

        h1,
        h2,
        h3,
        #mainNav li {
          font-family: 'gtam-compressed';
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        h3 {
          font-size: 24px;
        }

        /* Content */

        h3 {
          margin-top: 28px;
          margin-bottom: 3px;
        }

        p {
          color: #333;
          font-size: 16px;
          line-height: 24px;
          max-width: 660px;
        }

        p {
          margin-bottom: 18px;
        }

        @media screen and (min-width: 1024px) {
          p {
            color: #333;
            font-size: 18px;
            line-height: 28px;
            max-width: 660px;
          }

          p {
            margin-bottom: 28px;
          }
        }

        a,
        a:visited {
          color: #000;
          text-decoration: none;
        }

        figcaption {
          color: #cccccc;
          font-size: 12px;
          // text-align: right;
          margin: 5px 5px 0 0;
        }

        .bigText,
        .quoteText p {
          font-size: 22px;
          line-height: 28px;
          font-style: italic;
          font-weight: 700;
          max-width: 750px;
          margin: 0 0 30px 0;
        }

        @media screen and (min-width: 720px) {
          .bigText,
          .quoteText p {
            font-size: 28px;
            line-height: 40px;
          }
        }

        .quoteSource {
          margin-left: 15px;
          text-transform: uppercase;
          font-size: 13px;
          line-height: 16px;
          font-weight: 400;
          font-style: normal;
          display: inline-block;
          color: #999;
        }

        .quote p {
          max-width: 750px;
        }

        /* Sidebar */

        .flex {
          display: flex;
          flex-direction: column;
        }

        @media screen and (min-width: 1024px) {
          .flex {
            flex-direction: row;
            justify-content: space-between;
          }
          .sidebar {
            width: 240px;
          }
        }

        .sidebar span {
          display: block;
          font-size: 13px;
          line-height: 20px;
          color: #666;
          margin-bottom: 20px;
        }

        .sidebar a {
          text-decoration: underline;
          color: #666;
        }

        /* Social Buttons */

        .socialButtons {
          margin-bottom: 20px;
        }

        .socialButtons img {
          max-width: 100%;
          max-height: 100%;
        }

        .socialButtons a {
          display: inline-block;
          width: 50px;
          height: 50px;
          background-color: #000;
          border-radius: 25px;
          margin-right: 10px;
        }

        .socialButtons a {
          transition: opacity 0.2s;
        }

        .socialButtons a:hover {
          opacity: 0.8;
        }

        /* Drawer Utilities */

        .drawer {
          cursor: pointer;
        }

        .drawerContents {
          cursor: default;
          width: 100%;
          height: auto;
          overflow: hidden;
          transition: height 0.5s;
        }

        .drawerClosed .drawerContents {
          height: 0;
        }

        .drawerClosed .drawerToggle {
          transform: rotate(0deg);
        }

        .drawerToggle {
          float: right;
          width: 50px;
          height: 50px;
          margin: -15px -15px 0 0;
          background: url('/images/icon-plus-yellow@2x.png');
          background-size: 100%;
          transform: rotate(45deg);
          transition: transform 0.1s ease-out;
        }

        @media screen and (min-width: 1024px) {
          .drawerToggle {
            width: 50px;
            height: 50px;
            margin: -15px -15px 0 0;
          }
        }

        .drawerToggle:hover {
          cursor: pointer;
        }
      `}</style>
    </>
  )
}
