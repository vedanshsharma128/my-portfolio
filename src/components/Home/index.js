import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/d.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['e', 'd', 'a', 'n', 's', 'h']
  const jobArrayPart1 = [
    'a',
    ' ',
    'c',
    'o',
    'm',
    'p',
    'u',
    't',
    'e',
    'r',
    ' ',
    's',
    'c',
    'i',
    'e',
    'n',
    'c',
    'e',
  ]
  const jobArrayPart2 = [
    's',
    't',
    'u',
    'd',
    'e',
    'n',
    't',
    ' ',
    'a',
    'n',
    'd',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="My primary focus lies in Full-Stack Web Development, and I'm dedicated to expanding my knowledge across various domains within technology and product development."
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArrayPart1}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArrayPart2}
              idx={jobArrayPart1.length + 22}
            />
          </h1>
          <h2>
            My primary focus lies in Full-Stack Web Development, and I'm
            dedicated to expanding my knowledge across various domains within
            technology and product development.
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
