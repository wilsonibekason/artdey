import React from "react";
import styles from "../../styles/AppdeyCustomStyles";

const OurStory = () => {
  const { flexCentered, flexCol, paragraphCustom } = styles;
  return (
    <>
      <div className={`${flexCentered} mx-40`}>
        <div className={`${flexCol} space-y-12`}>
          <h1 className={`${paragraphCustom} text-6xl text-gradientBaseAccent`}>
            Our Story
          </h1>
          {/* description */}
          <div className={``}>
            <p
              className={`${paragraphCustom} leading-9 tracking-wider text-md text-gradientBaseAccent `}
            >
              artdey is an online art marketplace dedicated to demystifying the
              contemporary art market for emerging artists and collectors.
              Founded during the COVID-19 pandemic lockdown in 2020, artdey
              supports the historically underrepresented market of African
              contemporary art by connecting African artists to global
              collectors. Serving primarily as a springboard platform, artdey
              discovers, nurtures, and promotes emerging independent African
              artists, connecting them with budding art enthusiasts and
              discerning global collectors. We ensure equitable compensation for
              our artists, creating the backdrop for a strong arts and culture
              landscape. Thus, 70% of our revenue goes directly to our artists.
              Since conception, we have successfully onboarded and managed 50
              artists from Nigeria and Ghana. These artists are phenomenal, with
              extensive thematic and stylistic diversity. Through artdey,
              collectors across the globe can easily navigate the burgeoning
              African art scene, accessing artists, art, and collectibles.
              artdey is developing an international reputation as a hotspot for
              emerging artists, and a marketplace for art shoppers, including
              interior and film set decorators. Notable pieces from Artdey were
              featured in Season 2 of Apple TV’s crime show “Truth Be Told” and
              Peacock’s “Belair," an exciting, dramatic retelling of the popular
              sitcom Fresh Prince of Belair created by Morgan Cooper and
              Executive Producer Will Smith.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
