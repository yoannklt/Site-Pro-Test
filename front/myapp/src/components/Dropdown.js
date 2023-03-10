import Accordion from 'react-bootstrap/Accordion';

function BasicExample() {
    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <img src="../img/rondgris.png" alt="the sense" />
                    <span>Qu'est-ce que THE SENSE ?</span>
                </Accordion.Header>
                <Accordion.Body>
                    <span>THE SENSE est une immersion poussée grâce à la réalité virtuelle. THE SENSE propose de nombreuses expériences à faire entre amis ou avec la famille. Vous pouvez tout à fait favoriser une expérience avec de l'action comme notre Dark Room basé sur l'horreur. Ou encore, si vous le souhaiter par exemple, vous pouvez favoriser l'aspect compétitif en participant aux expériences de notre Battle Room. de plus, THE SENSE propose un système de création d'expérience où les clients peuvent à leurs tours imaginer et créer la meilleure expériences possibles.</span>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <img src="../img/rondgris.png" alt="the sense" />
                    <span>Il y a-t-il un âge et une taille minimum pour participer à une expérience THE SENSE ?</span>
                </Accordion.Header>
                <Accordion.Body>
                    <span>THE SENSE est accessible dès l'âge de 12ans, cependant la Dark Room est interdit auxmoins de 18ans. Nos équipements sont adaptés à toutes les tailles.</span>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>
                    <img src="../img/rondgris.png" alt="the sense" />
                    <span>Quel est le nombre maximum de participants pour jouer ?</span>
                </Accordion.Header>
                <Accordion.Body>
                    <span>8.</span>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>
                    <img src="../img/rondgris.png" alt="the sense" />
                    <span>Avez-vous une politique d'annulation et de remboursement ? Si oui, comment se déroule-t-elle ?</span>
                </Accordion.Header>
                <Accordion.Body>
                    <span>Aucun remboursement.</span>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>
                    <img src="../img/rondgris.png" alt="the sense" />
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