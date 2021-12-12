import Container from '../Container'
import Section from './Section'
import SectionHeader from '../SectionHeader'

export default function SectionAbout() {
  return (
    <>
      <Container>
        <Section>
          <SectionHeader text="About" id="about"/>
          <div class="flex">
            <div class="drawerContents">
              <p>
                Brad Lubman, conductor/composer, is one of the foremost
                conductors of modern music and a leading figure in the field for
                over two decades. A frequent guest conductor of the world’s most
                distinguished orchestras and new music ensembles, he has gained
                widespread recognition for his versatility, commanding
                technique, and insightful interpretations. His flexibility in a
                variety of settings has led him to conduct a broad range of
                repertoire from classical to contemporary works, and to direct
                projects including orchestra, opera, multimedia, and mixed
                ensemble. Lubman has led major orchestras including the Bavarian
                Radio Symphony Orchestra, Royal Concertgebouw Orchestra, Los
                Angeles Philharmonic, San Francisco Symphony, Danish National
                Symphony, NDR Symphony Orchestra Hamburg, DSO Berlin, SWR
                Sinfonieorchester, WDR Symphony Cologne, Orchestre
                Philharmonique de Radio France, Finnish Radio Symphony, and the
                Netherlands Radio Philharmonic Orchestra.
              </p>
              <p>
                In addition, he has worked with some of the most important
                European and American ensembles for contemporary music,
                including Ensemble Modern, London Sinfonietta, Klangforum Wien,
                Musik Fabrik, Ensemble Resonanz, and Steve Reich and Musicians.
                Lubman has conducted at new-music festivals across Europe,
                including those in Lucerne, Salzburg, Berlin, Huddersfield,
                Paris, Cologne, Frankfurt, and Oslo.
              </p>
              <p>
                Lubman is founding Co-Artistic and Music Director of the
                NY-based Ensemble Signal. Since its debut in 2008, the Ensemble
                has performed over 300 concerts and co-produced ten recordings.
                Their recording of Reich’s <em>Music for 18 Musicians</em> on
                harmonia mundi was awarded a Diapason d’or in June 2015 and
                appeared on the Billboard Classical crossover charts.
              </p>
              <p>
                Lubman has been particularly noted for his ability to quickly
                master challenging scores in a variety of settings, a skill
                honed between 1989-94, when he was assistant to Oliver Knussen
                at Tanglewood. Lubman has conducted numerous world premieres.
                Among these are Steve Reich’s <em>Three Tales, Reich/Richter, Runner, Daniel Variations, Radio Rewrite,</em> and <em>Variations for Vibes, Pianos and Strings.</em> Additional
                world premieres given by Lubman include Helmut Lachenmann’s <em>Concertini</em> and Michael Gordon/David Lang/Julia Wolfe’s <em>Shelter,</em> as well as works by Philip Glass, Brian
                Ferneyhough, Charles Wuorinen, John Zorn, and Hilda Paredes.
              </p>
              <p>
                Lubman was the 2017 Composer in Residence at the Grafenegg
                Festival in Austria in his dual role as conductor and composer
                in residence; a highlight of his residency was a performance
                with the Tonkünstler Orchestra Austria, where he led works by
                Brahms and Mahler as well as the world premiere of his own <em>Reflections</em> for orchestra. His recent work <em>Tangents</em> was commissioned by the LA Philharmonic and
                premiered at Walt Disney Concert Hall. In Spring 2020, Rudolf
                Buchbinder will premiere a new work for solo piano by Lubman at
                the Vienna Musikverein as part of a project including 11
                contemporary composers each writing their own variations on
                Diabelli’s theme – which Buchbinder will also record for
                Deutsche Gramaphon and perform live on tour in 2020.
              </p>
              <p>
                Brad Lubman is on faculty at the Eastman School of Music and the
                Bang on a Can Summer Institute.
              </p>
            </div>
            <div className="sidebar">
              <div className="socialButtons">
                <a href="https://www.instagram.com/bradlubman"
                  ><img src="images/icon-instagram.png" /></a
                ><a
                  href="https://open.spotify.com/artist/48L7jI4tb5zi989IWlLGCS"
                  ><img src="images/icon-spotify.png" /></a
                ><a
                  href="https://itunes.apple.com/us/artist/brad-lubman/75054416"
                  ><img src="images/icon-applemusic.png"
                /></a>
              </div>
            </div>
          </div>
        </Section>
      </Container>
      <style jsx>{`
        .drawer:not(.drawerClosed) .drawerContents {
          padding-top: 20px;
        }

        .aboutMore {
          display: block;
          margin-top: 20px;
          font-size: 16px;
          line-height: 24px;
          font-weight: 700;
        }

        .drawer:not(.drawerClosed) .aboutMore {
          display: none;
        }

        @media screen and (min-width: 1024px) {
          .drawer:not(.drawerClosed) .drawerContents {
            padding-top: 30px;
          }

          .aboutMore {
            font-size: 18px;
            line-height: 28px;
          }
        }

        @media screen and (max-width: 720px) {
          .sidebar {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
