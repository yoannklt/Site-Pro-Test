import rondgris from '../img/rondgris.png';
import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <img src={rondgris} alt="" />
                    <span>Qu'est-ce que THE SENSE ?</span>
                </Accordion.Header>
                <Accordion.Body>
                    <span>Non là t'abuses frère.</span>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <img src={rondgris} alt="" />
                    <span>Il y a-t-il un âge et une taille minimum pour participer à une expérience THE SENSE ?</span>
                </Accordion.Header>
                <Accordion.Body>
                    <span>THE SENSE est accessible dès l'âge de 12ans, cependant la Dark Room est interdit auxmoins de 18ans. Nos équipements sont adaptés à toutes les tailles.</span>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>
                    <img src={rondgris} alt="" />
                    <span>Quel est le nombre maximum de participants pour jouer ?</span>
                </Accordion.Header>
                <Accordion.Body>
                    <span>8.</span>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>
                    <img src={rondgris} alt="" />
                    <span>Avez-vous une politique d'annulation et de remboursement ? Si oui, comment se déroule-t-elle ?</span>
                </Accordion.Header>
                <Accordion.Body>
                    <span>Aucun remboursement.</span>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>
                    <img src={rondgris} alt="" />
                    <span>Est-il possible de déposer mes affaires "encombrants" avant de faire une expérience ? Puis-je garder mes lunettes ?</span>
                </Accordion.Header>
                <Accordion.Body>
                    <span>Des casiers sont mis à votre disposition. Les casques sont adaptés pour garder vos lunettes si besoin.</span>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default BasicExample;