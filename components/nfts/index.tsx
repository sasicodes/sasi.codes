import Container from 'components/Container'
import Tooltip from 'components/Tooltip'
import React from 'react'
import { NFTType, PoapType } from 'types'

const ExternalLink = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="absolute p-1 bg-gray-900 rounded-lg outline-none cursor-default bottom-2 right-2"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  </a>
)
type Props = {
  nfts: NFTType[]
  poaps: PoapType[]
}

const NFTPage = ({ nfts, poaps }: Props) => {
  return (
    <Container title="NFTs" description="NFT collections of sasid.eth">
      <div className="w-full max-w-2xl mx-auto mb-16 ">
        <h3 className="mb-10 text-2xl font-semibold tracking-tight text-gray-700 md:text-4xl dark:text-gray-200">
          Collections
        </h3>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {nfts?.map(
            (nft, idx) =>
              nft.metadata.image_url && (
                <Tooltip key={idx} content={nft.metadata.name}>
                  <span className="relative overflow-hidden min-h-[150px] max-h-[150px]">
                    <ExternalLink href={nft.permalink} />
                    <img
                      className="w-full h-full bg-gray-100 rounded-lg dark:bg-gray-800"
                      src={nft.metadata.image_url}
                      alt=""
                      draggable={false}
                    />
                  </span>
                </Tooltip>
              )
          )}
          {poaps?.map((poap, idx) => (
            <Tooltip key={idx} content={poap.event.name}>
              <span className="relative overflow-hidden min-h-[150px] max-h-[150px]">
                <ExternalLink
                  href={`https://app.poap.xyz/token/${poap.tokenId}`}
                />
                <img
                  className="w-full h-full bg-gray-100 rounded-lg dark:bg-gray-800"
                  src={poap.event.image_url}
                  alt=""
                  draggable={false}
                />
              </span>
            </Tooltip>
          ))}
        </div>
      </div>
    </Container>
  )
}

export default NFTPage
