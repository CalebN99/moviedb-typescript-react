
import Dropdown from 'react-bootstrap/Dropdown';
function GenreFilter(props: any) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success">
                Genres
            </Dropdown.Toggle>
             <Dropdown.Menu>
                <Dropdown.Item>
                    Comedy
                </Dropdown.Item>
                <Dropdown.Item onClick={() => props.filter(35)}>
                    Action
                </Dropdown.Item>
                <Dropdown.Item>
                    Horror
                </Dropdown.Item>
                <Dropdown.Item>
                    Drama
                </Dropdown.Item>
             </Dropdown.Menu>
        </Dropdown>
    )
}

export default GenreFilter;