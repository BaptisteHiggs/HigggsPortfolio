import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import * as styles from "./style.module.scss";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { Button } from "ui-neumorphism";
import { TextLinkCombo } from "./types";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#FEFEFE",
        },
      },
      fpsLimit: 120,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: ["grab", "bubble"],
            parallax: {
              enable: true,
              force: 40,
              smooth: 30,
            },
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 50,
            duration: 1,
          },
          grab: {
            distance: 400,
          },
          bubble: {
            distance: 400,
            duration: 2,
            mix: true,
            opacity: 1,
            divs: {
              distance: 200,
              duration: 0.4,
              mix: false,
              selectors: {},
            },
          },
        },
      },
      particles: {
        color: {
          value: "#cccccc",
        },
        links: {
          color: "#ffffff",
          distance: 30,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none", //MoveDirection.none
          enable: true,
          outModes: {
            default: "out", //OutMode.out
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export const Page = () => {
  const links: TextLinkCombo[] = [
    { text: "LinkedIn", link: "https://www.google.com/" },
    { text: "GitHub", link: "https://www.google.com/" },
    { text: "CAADRIA Conference Paper", link: "https://www.google.com/" },
    {
      text: "Journal of Architectural Science Paper",
      link: "https://www.google.com/",
    },
    { text: "Download CV", link: "https://www.google.com/" },
  ];

  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 500,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 500,
          }}
        >
          {links.map((link) => (
            <>
              {/*@ts-ignore */}
              <Button color={"#333"} onClick={() => goToUrl(link.link)}>
                {link.text}
              </Button>
              <br />
              <br />
            </>
          ))}
        </div>
      </div>

      <ParticlesBackground />

      <header className="App-header"></header>
    </div>
  );
};

function goToUrl(url: string) {
  window.location.href = url;
}
