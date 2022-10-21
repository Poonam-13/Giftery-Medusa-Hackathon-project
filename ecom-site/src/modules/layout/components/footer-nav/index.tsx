import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"
import Image from 'next/image'

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="content-container flex flex-col gap-y-8 pt-16 pb-8">
      <div className="flex flex-col gap-y-6 xsmall:flex-row items-start justify-between">
        <div>
          <Link href="/">
            <a className="text-xl-semi uppercase">
              <img src="https://medusa-server139.fra1.digitaloceanspaces.com/Giftery-transparent.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YDDHNTG6HIWX3RFQZWCD%2F20221018%2Ffra1%2Fs3%2Faws4_request&X-Amz-Date=20221018T154736Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1a5460078db37ad97853b7cbdab394eb9d49580a7c5d62b99a0ec20319586cb8" id="giftery-logo" />
            </a>
          </Link>
        </div>
        <div className="text-small-regular grid grid-cols-2 gap-x-16">
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Collections</span>
            <ul
              className={clsx("grid grid-cols-1 gap-y-2", {
                "grid-cols-2": (collections?.length || 0) > 4,
              })}
            >
              {collections?.map((c) => (
                <li key={c.id}>
                  <Link href={`/collections/${c.id}`}>
                    <a>{c.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <li>
                <a
                  href=""
                  //target="_blank"
                  rel="noreferrer"
                >
                  Flowers
                </a>
              </li>
              <li>
                <a
                  href=""
                  //target="_blank"
                  rel="noreferrer"
                >
                  Bouquets
                </a>
              </li>
              <li>
                <a
                  href=""
                  //target="_blank"
                  rel="noreferrer"
                >
                  Chocolates
                </a>
              </li>
              <li>
                <a
                  href=""
                  //target="_blank"
                  rel="noreferrer"
                >
                  Action Figures
                </a>
              </li>
              <li>
                <a
                  href=""
                  //target="_blank"
                  rel="noreferrer"
                >
                  Plush Toys
                </a>
              </li>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-base-semi">Resources</span>
            <ul className="grid grid-cols-1 gap-y-2">
              <li>
                <a
                  href="https://github.com/medusajs"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://docs.medusajs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Documentation (Medusa)
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Poonam-13/Giftery-Medusa-Hackathon-project"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source code
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
        <span className="text-xsmall-regular text-gray-500">
          Made with ❤️✨ by Giftery © Copyright 2022. All Rights Reserved.
        </span>
        <div className="min-w-[316px] flex xsmall:justify-end">
          <CountrySelect />
        </div>
      </div>
    </div>
  )
}

export default FooterNav
