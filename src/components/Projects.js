import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from '../assets/images/img1.png'

export const Projects = () => {
    return (
        <>
            <div className={"projects-section pt-5 mt-5"} style={{paddingLeft:"10rem"}}>
                <div className="container row">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{width:"18rem", hieght:"20rem"}} src={image} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{width:"18rem", hieght:"20rem"}} src={image}/>
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{width:"18rem", hieght:"20rem"}} src={image}  />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{width:"18rem", hieght:"20rem"}} src={image} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{width:"18rem", hieght:"20rem"}} src={image} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 mt-4">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" style={{width:"18rem", hieght:"20rem", }} src={image}  />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="dark">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end mt-4 mb-4 align-content-end">
                        <buttton className="btn btn-lg btn-dark">
                            See all Projects
                        </buttton>
                    </div>
                </div>
            </div>
        </>
    )
}