import Button from 'react-bootstrap/Button'

export default function ScrollButton(){
    return(
        <div className="scrollButton">
            <Button href="#hero" >
                <h2 className='align-self-center'>SCROLL</h2>
            </Button>
        </div>
    )
}