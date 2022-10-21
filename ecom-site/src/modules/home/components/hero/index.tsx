import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32" id="hero-block-lines">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Confused about gifts? <br />
          No worries, we are <br /> here to help!
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          <strong>This year, our new flower gift collection will provide <br />  you with the best varities,
          elements and spread <br /> freshness into the receiver&apos;s world.</strong>
        </p>
        <UnderlineLink href="/store"><strong>Explore Collection</strong></UnderlineLink>
      </div>
      <Image
        src="/hero.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
