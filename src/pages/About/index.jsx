import Header from "../../components/header";
import { ContainerAplication } from "../../style";
import paz from "../../assets/img/paz.gif";
function About() {
  return (
    <>
      <ContainerAplication>
        <Header />
        <div className="btn-sector"></div>
        <div>
          <p
            style={{
              textAlign: "justify",
              maxWidth: "1000px",
              margin: "5%",
              lineHeight: "40px",
              color: "var(--color-font)",
              fontSize: "1.3rem",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            egestas dolor quam. Praesent porta at velit ac faucibus. Curabitur
            ac leo a libero vehicula ullamcorper eu at turpis. In facilisis nibh
            sit amet eros scelerisque viverra. Etiam facilisis consectetur
            tincidunt. Proin varius libero dui, in faucibus mi fermentum sit
            amet. Sed id libero nisi. Ut fringilla enim quis varius porttitor.
            Nulla feugiat eu est semper lacinia. Duis egestas tortor et rutrum
            pellentesque. Praesent tempus lectus at malesuada convallis. In hac
            habitasse platea dictumst. Aliquam fermentum felis metus, id tempus
            neque facilisis et. In maximus euismod odio, et molestie odio. Fusce
            arcu arcu, elementum vitae augue nec, tempor volutpat urna.
          </p>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <img
              style={{
                display: "flex",
                width: "200px",
                alignSelf: "flex-end",
              }}
              src={paz}
            />
          </div>
        </div>
      </ContainerAplication>
    </>
  );
}

export default About;
