import Form from 'react-bootstrap/Form';

function Filter() {
  return (
    <>
      <Form.Select size="sm" aria-label="Filter By Category">
        <option>Filter</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </>
  );
}

export default Filter;