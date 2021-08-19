import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

import DescriptionApp from './Description/Description';
import RetreatSizeApp from './RetreatSelection/RetreatSize';
import RetreatTypeApp from './RetreatSelection/RetreatType';
import GeneralActivitiesApp from './Activities/GeneralRecreation';
import WildlifeCenterApp from './Activities/WildlifeCenter';
import HighAdventureApp from './Activities/HighAdventure';
import HorseProgramsApp from './Activities/HorsePrograms';
import TeambuildingApp from './Activities/Teambuilding';
import PoolPartiesApp from './Activities/PoolParties';
import FormApp from './Form/Form';
import FooterApp from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <DescriptionApp />
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <Row>
          <Col sm="12" lg="6">
            <RetreatSizeApp />
          </Col>
          <Col sm="12" lg="6">
            <RetreatTypeApp />
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <Row>
          <Col sm="12" lg="6">
            <GeneralActivitiesApp />
          </Col>
          <Col sm="12" lg="6">
            <WildlifeCenterApp />
          </Col>
        </Row>
        <br/>
        <br/>
        <Row>
          <Col sm="12" lg="6">
            <HighAdventureApp />
          </Col>
          <Col sm="12" lg="6">
            <TeambuildingApp />
          </Col>
        </Row>
        <br/>
        <br/>
        <Row>
          <Col sm="12" lg="6">
            <HorseProgramsApp />
          </Col>
          <Col sm="12" lg="6">
            <PoolPartiesApp />
          </Col>
        </Row>
        <br/>
        <br/>
        <Row>
          <Col sm="12" lg="12">
            <FormApp />
          </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <FooterApp />
      </Container>
    </div>
  );
}

export default App;
