import ThreeJSBackground from "./ThreeJSBackground";

export const Page = () => {

  return (
    <div className="App">

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
