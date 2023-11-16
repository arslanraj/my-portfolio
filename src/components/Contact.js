import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact(){
    return (
        <>
            <div className={"mt-4 container col-6"}>
                <Form>
                    <fieldset>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
                            <Form.Control id="disabledTextInput" placeholder="example@example.com" />
                            <Form.Label htmlFor="disabledTextInput" className='pt-5'>Password</Form.Label>
                            <Form.Control id="disabledTextInput" placeholder="Arslan@134" />
                        </Form.Group>
                        <Button variant={"dark"} type="submit">Submit</Button>
                    </fieldset>
                </Form>
            </div>
        </>
    )
}