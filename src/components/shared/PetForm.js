import {
    Form,
    Button
} from 'react-bootstrap'

// pet model fields:
// name, type, age(number), adoptable (boolean)

const PetForm = (props) => {
    const { pet } = props
    return (
        <div>
            <Form>
                <Form.Label htmlFor='Name'>Pet Name</Form.Label>
                <Form.Control 
                    name="name" 
                    id="Name" 
                    type="text" 
                    placeholder="Enter Pet Name"
                    // value={ pet.name }
                />
                <Form.Label htmlFor='type'>Pet Type</Form.Label>
                <Form.Control 
                    name="type" 
                    id="type" 
                    type="text" 
                    placeholder="Enter Pet Type"
                    // value={ pet.type }
                />
                <Form.Label htmlFor='age'>Pet Age</Form.Label>
                <Form.Control 
                    name="age" 
                    id="age" 
                    type="number" 
                    placeholder="Enter Pet Age"
                    // value={ pet.age }
                />
                <Form.Check
                    label="Is this pet adoptable?" 
                    id="adoptable" 
                    name="adoptable"
                    // defaultChecked={ pet.adoptable }
                    defaultChecked={false}
                />
                <Button 
                    variant="primary" 
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default PetForm;