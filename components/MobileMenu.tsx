import clsx from 'clsx'
import useDelayedRender from 'helpers/hooks/useDelayedRender'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from 'styles/mnav.module.css'

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { mounted: isMenuMounted, rendered: isMenuRendered } = useDelayedRender(
    isMenuOpen,
    {
      enterDelay: 20,
      exitDelay: 300
    }
  )

  function toggleMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      document.body.style.overflow = ''
    } else {
      setIsMenuOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }

  useEffect(() => {
    return function cleanup() {
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <button
        className={clsx(styles.burger, 'visible md:hidden')}
        aria-label="Toggle menu"
        type="button"
        onClick={toggleMenu}
      >
        <MenuIcon data-hide={isMenuOpen} />
        <CrossIcon data-hide={!isMenuOpen} />
      </button>
      {isMenuMounted && (
        <ul
          className={clsx(
            styles.menu,
            'flex flex-col absolute bg-gray-50 dark:bg-gray-900',
            isMenuRendered && styles.menuRendered
          )}
        >
          <li
            className="text-sm font-semibold text-gray-900 border-b border-gray-300 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: '150ms' }}
          >
            <Link href="/">
              <a className="flex w-auto pb-4">Home</a>
            </Link>
          </li>
          <li
            className="text-sm font-semibold text-gray-900 border-b border-gray-300 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: '250ms' }}
          >
            <Link href="/blog">
              <a className="flex w-auto pb-4">Blog</a>
            </Link>
          </li>
          <li
            className="text-sm font-semibold text-gray-900 border-b border-gray-300 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: '275ms' }}
          >
            <Link href="/snippets">
              <a className="flex w-auto pb-4">Snippets</a>
            </Link>
          </li>
          <li
            className="text-sm font-semibold text-gray-900 border-b border-gray-300 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: '350ms' }}
          >
            <Link href="/uses">
              <a className="flex w-auto pb-4">Uses</a>
            </Link>
          </li>
          <li
            className="text-sm font-semibold text-gray-900 border-b border-gray-300 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: '350ms' }}
          >
            <Link href="/nfts">
              <a className="flex w-auto pb-4">NFTs</a>
            </Link>
          </li>
          <li
            className="text-sm font-semibold text-gray-900 border-b border-gray-300 dark:border-gray-700 dark:text-gray-100"
            style={{ transitionDelay: '175ms' }}
          >
            <Link href="https://github.com/sasicodes/sasi.codes/discussions/2">
              <a target="_blank" className="flex w-auto pb-4">
                Guestbook
              </a>
            </Link>
          </li>
        </ul>
      )}
    </>
  )
}

function MenuIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="absolute w-5 h-5 text-gray-900 dark:text-gray-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CrossIcon(props: JSX.IntrinsicElements['svg']) {
  return (
    <svg
      className="absolute w-5 h-5 text-gray-900 dark:text-gray-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  )
}
