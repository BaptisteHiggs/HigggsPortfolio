import { Fragment } from "react";
import ThreeJSBackground from "./ThreeJSBackground";
import { Button } from "ui-neumorphism";
import { TextLinkCombo } from "./types";


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

  console.log("here")

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

      <ThreeJSBackground />

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
