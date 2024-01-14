import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";

type CustomLinkProps = {
  url: string;
  content: ReactNode | string;
  image?: StaticImageData;
};

const CustomLink: FC<CustomLinkProps> = ({ url, content, image }) => {
  return (
    <Link
      href={url}
      className="font-medium inline-flex items-center space-x-1 hover:text-orange-500 underline underline-offset-4"
      target="_blank"
    >
      {image && (
        <Image
          className="-mb-0.5 w-4 rounded-sm overflow-hidden"
          src={image}
          alt="image"
          placeholder="blur"
          draggable={false}
        />
      )}
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger>
            <div className="font-medium hover:text-orange-500 underline transition-all duration-200 underline-offset-4">
              {content}
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content className="select-none rounded-full text-xs bg-orange-500 px-4 py-1.5 font-medium">
              {new URL(url).hostname}
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>
    </Link>
  );
};

export default CustomLink;
