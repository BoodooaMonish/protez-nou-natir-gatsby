import React from "react"
import LogoCompany from "../logos/logo_company"

// About Us Page component

export default function AboutUs() {
  return (
    <article className="about">
      <span className="about__logo" aria-hidden="true">
        <LogoCompany size="lg" color="color" />
      </span>
      <h2 className="about__heading">We are Lorem Group</h2>
      <p className="about__text">
        Duis scelerisque hendrerit erat. Sed tincidunt dictum tellus ornare
        rutrum. Ut at mattis ipsum. Fusce et lorem mattis, feugiat turpis non,
        condimentum erat. Nulla facilisi. Phasellus gravida tellus odio, sit
        amet pharetra augue consequat id. Donec mollis, nunc in vestibulum
        semper, risus turpis cursus ligula, quis feugiat tellus urna ac ipsum.
        Mauris eget libero vel est fringilla sagittis. Mauris vitae nibh sit
        amet sapien dapibus pulvinar ac sit amet tortor. In sollicitudin quis
        ligula sollicitudin pretium. Nunc ut tortor nisl.
      </p>
      <div className="cards about__container">
        <Goal
          title="Save Environment"
          text="Curabitur dignissim quam ut leo aliquam maximus. In cursus libero diam, sollicitudin finibus magna scelerisque a. Nulla tristique ex eget diam venenatis condimentum non vel libero. Aliquam erat volutpat. Praesent eu finibus felis, ut blandit augue. Ut in nibh erat. Donec odio metus, commodo nec justo at, commodo sagittis elit. Nulla non auctor sapien. Pellentesque tristique mi lacus, nec accumsan est pulvinar nec."
          image="//images.ctfassets.net/kkemqa78y6pu/7ltZTYjXNWXqIVImIO1Dhm/f6ba7641c215ad63a9e19ec4fb2168a8/pexels-matthew-montrone-1179229.jpg"
        />
        <Goal
          title="Inform Public"
          text="Curabitur dignissim quam ut leo aliquam maximus. In cursus libero diam, sollicitudin finibus magna scelerisque a. Nulla tristique ex eget diam venenatis condimentum non vel libero. Aliquam erat volutpat. Praesent eu finibus felis, ut blandit augue. Ut in nibh erat. Donec odio metus, commodo nec justo at, commodo sagittis elit. Nulla non auctor sapien. Pellentesque tristique mi lacus, nec accumsan est pulvinar nec. Duis imperdiet porttitor elit, in iaculis dolor pellentesque eget. Vestibulum at elementum libero, vel scelerisque sem. Vestibulum congue massa eget magna commodo, eu maximus quam ullamcorper."
          image="//images.ctfassets.net/kkemqa78y6pu/2YrgpeYs25QHBeWYhpdemD/4cccdf52d134ab2c48954f25da7b0c87/pexels-hert-niks-3224225.jpg"
        />
        <Goal
          title="Stop Pollution"
          text="Curabitur dignissim quam ut leo aliquam maximus. In cursus libero diam, sollicitudin finibus magna scelerisque a. Nulla tristique ex eget diam venenatis condimentum non vel libero. Aliquam erat volutpat. Praesent eu finibus felis, ut blandit augue. Ut in nibh erat. Donec odio metus, commodo nec justo at, commodo sagittis elit. Nulla non auctor sapien. Pellentesque tristique mi lacus, nec accumsan est pulvinar nec. Duis imperdiet porttitor elit, in iaculis dolor pellentesque eget. Vestibulum at elementum libero, vel scelerisque sem. Vestibulum congue massa eget magna commodo."
          image="//images.ctfassets.net/kkemqa78y6pu/4vZoQSsfM1nGHcKLVduftn/f9111f356468f8d4a3090369c3e0c4b5/pexels-chris-leboutillier-929385.jpg"
        />
        <Goal
          title="Fight Global Warming"
          text="Curabitur dignissim quam ut leo aliquam maximus. In cursus libero diam, sollicitudin finibus magna scelerisque a. Nulla tristique ex eget diam venenatis condimentum non vel libero. Aliquam erat volutpat. Praesent eu finibus felis, ut blandit augue. Ut in nibh erat. Donec odio metus, commodo nec justo at, commodo sagittis elit. Nulla non auctor sapien. Pellentesque tristique mi lacus, nec accumsan est pulvinar nec. Duis imperdiet porttitor elit, in iaculis dolor pellentesque eget. Vestibulum at elementum libero, vel scelerisque sem."
          image="//images.ctfassets.net/kkemqa78y6pu/4FTDhCnxUbndgasMA7DWBy/7d2c529979482ce650fe3daa0f9a1a6b/pexels-landon-parenteau-6554499.jpg"
        />
      </div>
    </article>
  )
}

function Goal({ title, text, image }) {
  return (
    <article className="cards__card about__card">
      <div className="cards__card__aside about__card__aside">
        <img className="cards__card__image" src={image} alt={title} />
      </div>
      <div className="cards__card__container about__card__container">
        <h3 className="cards__card__heading">{title}</h3>
        <p className="cards__card__text">{text}</p>
      </div>
    </article>
  )
}
