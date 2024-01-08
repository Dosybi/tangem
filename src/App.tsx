import React, { useState, useEffect, useRef } from 'react'

import Header from './components/Header'
import Banner from './components/Banner'

import alertImage from './assets/images/black-friday-alert.png'
import bannerImage from './assets/images/black-friday-banner.png'
import classNames from 'classnames'

const data = {
  header: {
    alert: {
      date: '**Black Friday**, 24-27 Nov',
      discount: '10%OFF',
      text: 'Use code //10FRIDAY// at checkout',
      image: alertImage,
      button: {
        label: 'Shop now',
        link: '#',
      },
      closeIcon: 'close',
    },
  },
  banner: {
    title: 'Black Friday',
    discount: '10%OFF',
    text: 'Use code //10FRIDAY// at checkout',
    image: bannerImage,
    button: {
      label: 'Shop now through Monday',
      link: '#',
    },
    closeIcon: 'close',
  },
}

function App() {
  const [isAlertOpen, setIsAlertOpen] = useState(true)
  const [isBannerShown, setIsBannerShown] = useState(false)
  const [isBannerClosed, setIsBannerClosed] = useState(false)
  const alertRef = useRef(null)

  const handleCloseAlert = () => {
    setIsAlertOpen(false)
    localStorage.setItem('alertClosed', 'true')
  }

  const handleCloseBanner = () => {
    setIsBannerShown(false)
    setIsBannerClosed(true)
    localStorage.setItem('bannerClosed', 'true')
  }

  useEffect(() => {
    localStorage.getItem('bannerClosed') === 'true' && setIsBannerClosed(true)
  }, [])

  useEffect(() => {
    const alertClosed = localStorage.getItem('alertClosed') === 'true'
    const bannerClosed = localStorage.getItem('bannerClosed') === 'true'

    setIsAlertOpen(!alertClosed)
    setIsBannerShown(false)
    setIsBannerClosed(bannerClosed)

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting && !isBannerClosed && !bannerClosed) {
          setIsBannerShown(true)
        }
      },
      { threshold: 0.1 }
    )

    if (alertRef.current) {
      observer.observe(alertRef.current)
    }

    return () => {
      if (alertRef.current) {
        observer.unobserve(alertRef.current)
      }
    }
  }, [isBannerClosed])

  return (
    <main className="min-h-[200vh] relative">
      <div ref={alertRef}>
        <Header
          alert={data.header.alert}
          onClose={handleCloseAlert}
          isVisible={isAlertOpen}
        />
      </div>
      <div
        className={classNames(
          'banner-enter',
          isBannerShown && 'banner-enter-active'
        )}
      >
        {isBannerShown && (
          <Banner {...data.banner} onClose={handleCloseBanner} />
        )}
      </div>
      {isBannerClosed && (
        <div
          className="fixed left-4 bottom-4 cursor-pointer hover:text-red-600"
          onClick={() => {
            localStorage.setItem('bannerClosed', 'false')
            localStorage.setItem('alertClosed', 'false')
            window.location.reload()
          }}
        >
          Reset localStorage
        </div>
      )}
    </main>
  )
}

export default App
