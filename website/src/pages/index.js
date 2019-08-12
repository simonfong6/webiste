import React from 'react'
import { Head } from 'react-static'

// Bootstrap
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

// Custome Components
import SocialIcon from '../components/SocialIcon'


const dataSciencePresentationUrl = "https://docs.google.com/presentation/d/e/2PACX-1vS6ga2yJyG4DLHy3NqM45bMSaWShGB8QL8UWTp_AIHuywmi9bT1lAvE9VftSEF6QdJfw8IVJLOL5IXH/pub?start=false&loop=false&delayms=3000&slide=id.p1";


export default () => (
  <div style={{ textAlign: 'center' }}>
    <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>

      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
    </Head>
    
    <Container>
      <h1>Simon Fong</h1>
      <SocialIcon
        icon="envelope-square"
        link="mailto:simonfong6@gmail.com"
        tooltip="Email"
      />
      <SocialIcon
        icon="github-square"
        link="https://github.com/simonfong6"
        tooltip="GitHub"
      />
      <SocialIcon
        icon="linkedin-square"
        link="https://linkedin.com/in/simonfong6"
        tooltip="LinkedIn"
      />
      <SocialIcon
        icon="file"
        link="/resume.pdf"
        tooltip="Resume"
      />
      <div class="card-deck">
        <Card style={{ width: '18rem'}}>
          <Card.Body>
            <Card.Title>Subtle Asian Dating Score Test</Card.Title>
            <Card.Text>
              A quiz to measure how dateable you are in the Subtle Asian Dating
              community.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Built within 4 hours</ListGroupItem>
            <ListGroupItem>Over 20,000 visits</ListGroupItem>
            <ListGroupItem><Card.Link href={dataSciencePresentationUrl}>Data Analysis Presentation</Card.Link></ListGroupItem>
            <ListGroupItem><Card.Link href="https://github.com/simonfong6/ECE-143-Team-6">Data Analysis Code</Card.Link></ListGroupItem>
          </ListGroup>
          <Card.Body>
            <SocialIcon
              icon="globe"
              link="http://subtleasiandating.org/"
              tooltip="subtleasiandating.org"
            />
            <SocialIcon
              icon="github-square"
              link="https://github.com/simonfong6"
              tooltip="Code"
            />
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>More projects to come... <span role="img" aria-label="smileyface">😊</span></Card.Title>
            <Card.Text>
              Please check my <a href="https://github.com/simonfong6">GitHub</a> for now.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  </div>
)
