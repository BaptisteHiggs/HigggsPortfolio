import { Fragment, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { Button } from "ui-neumorphism";
import { TextLinkCombo } from "./types";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {};

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
    { text: "LinkedIn", link: "https://linkedin.com/in/baptistehiggs/" },
    { text: "GitHub", link: "https://github.com/BaptisteHiggs" },
    {
      text: "CAADRIA Conference Paper",
      link: "http://dx.doi.org/10.52842/conf.caadria.2020.2.697",
    },
    {
      text: "Journal of Architectural Science Paper",
      link: "https://doi.org/10.1080/00038628.2020.1748869",
    },
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
            <Fragment key={`${link.text}-fragment`}>
              <p key={`${link.text}-comment`}>{/*@ts-ignore */}</p>
              <Button
                key={`${link.text}-button`}
                color={"#333"}
                onClick={() => goToUrl(link.link)}
              >
                {link.text}
              </Button>
              <br key={`${link.text}-br1`} />
              <br key={`${link.text}-br2`} />
            </Fragment>
          ))}
          {/*@ts-ignore */}
          <Button color={"#333"} onClick={() => downloadResume()}>
            Download CV
          </Button>
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

const downloadResume = () => {
  const pdfUrl = "/BaptisteHiggsResume.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "BaptisteHiggsResume.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
