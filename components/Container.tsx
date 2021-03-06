import clsx from 'clsx'
import Footer from 'components/Footer'
import MobileMenu from 'components/MobileMenu'
import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

function NavItem({
  href,
  text,
  target = '_self'
}: {
  href: string
  text: string
  target?: string
}) {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <NextLink href={href}>
      <a
        target={target}
        className={clsx(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden md:inline-block px-3 transition-all hover:opacity-100 opacity-50'
        )}
      >
        <span className="text-sm">{text}</span>
      </a>
    </NextLink>
  )
}

export default function Container(props: {
  children: React.ReactNode
  title?: string
  description?: string
  image?: string
  date?: string
}) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const { children, description, title, image, date } = props
  const router = useRouter()
  const meta = {
    title: title ?? 'Sasidharan (aka sasi.eth)',
    description: description ?? `Full stack developer.`,
    image: image ?? 'https://sasi.codes/images/banner.png',
    type: 'website',
    date
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://sasi.codes${router.asPath}`}
        />
        <link rel="canonical" href={`https://sasi.codes${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sasicodes" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="flex flex-col justify-center px-5">
        <nav className="relative flex items-center justify-between w-full max-w-2xl py-5 mx-auto text-gray-900 border-gray-200 md:pb-16 md:pt-10 dark:border-gray-700 sm:pb-16 bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100">
          <div className="ml-[-0.60rem]">
            <MobileMenu />
            <NavItem href="/" text="Home" />
            <NavItem href="/uses" text="Uses" />
            <NavItem href="/nfts" text="NFTs" />
            <NavItem
              href="https://github.com/sasicodes/sasi.codes/discussions/2"
              text="Guestbook"
              target="_blank"
            />
          </div>
          <div className="flex items-center space-x-2 md:space-x-3">
            <a
              target="_blank"
              href="https://twitter.com/sasicodes"
              className="inline-flex items-center opacity-50 hover:opacity-100"
              rel="noreferrer"
            >
              <img
                src="/images/twitterlogo.svg"
                height={20}
                width={20}
                alt=""
                draggable={false}
              />
            </a>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="flex items-center justify-center rounded-lg"
              onClick={() =>
                setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
              }
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 opacity-50 hover:opacity-100"
                >
                  {resolvedTheme === 'dark' ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
      <main className="flex flex-col justify-center px-5 bg-gray-50 dark:bg-gray-900">
        {children}
        <Footer />
      </main>
    </>
  )
}
