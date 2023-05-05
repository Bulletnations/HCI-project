import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import web1 from "../assets/img/page 1.jpg"
import web2 from "../assets/img/web2.jpg"
import web3 from "../assets/img/web3.webp"

export const Projects = () =>{

  const projects = [

    {
        imgUrl:web1,
        title: "Business Startup",
        description: "Design & Development",

      },
      {
        imgUrl:web2,
        title: "Business Startup",
        description: "Design & Development",
        
      },
      {
        imgUrl:web3,
        title: "Business Startup",
        description: "Design & Development",
       
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl:web1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl:web1,
      },
      {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl:web1,
      },
  ];
  return (

        <section className="project" id="Project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>lorem Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                   </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
  )
}

