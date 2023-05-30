import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, InputGroup, ListGroup, Card, Spinner, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import empty from '../assets/no-bookmark.png';
import './BookmarksPage.css';

const BookmarksPage = () => {
  const [dataBookmark, setDataBookmark] = useState([]);
  const [searchBooks, setSearchBooks] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  let dataUser = JSON.parse(localStorage.getItem('user-info'));

  useEffect(() => {
    const getAPI = async () => {
      try {
        const response = await axios.get('https://64670f90ba7110b663ae7915.mockapi.io/bookmarks');
        setDataBookmark(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(true);
      }
    };
    getAPI();
  }, []);

  let dataList = dataBookmark.filter((data) => data.email === dataUser.email);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchBooks(e.target.value);
  };

  const deletedAlert = () => {
    const swalWithBootstrapButtons = Swal.mixin({
      buttonsStyling: true,
    });

    swalWithBootstrapButtons
      .fire({
        title: 'Success!',
        text: 'Bookmark berhasil dihapus.',
        icon: 'success',
        confirmButtonColor: '#db3635',
        confirmButtonText: 'OK',
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate('/home');
        }
      });
  };

  const handleDelete = (id) => {
    axios.delete(`https://64670f90ba7110b663ae7915.mockapi.io/bookmarks/${id}`);
    deletedAlert();
  };

  if (searchBooks.length > 0) {
    dataList = dataList.filter((i) => {
      return i.title.toLowerCase().match(searchBooks.toLowerCase());
    });
  }

  if (isLoading)
    return (
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="danger" />
      </Container>
    );

  return (
    <Container>
      <Row className="mt-5">
        <Col lg={9}>
          <p className="fs-4 fw-semibold">Bookmarks</p>
        </Col>
        <Col lg={3}>
          <InputGroup className="mb-3 w-100">
            <Form.Control type="text" value={searchBooks} onChange={handleChange} placeholder="Search Bookmarks" />
            <InputGroup.Text>
              <i className="bx bx-search-alt-2"></i>
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>
      <Row className="mt-3 mb-5 g-3">
        {dataList.lenth == 0 ? (
          <Container className="vh-100 d-flex flex-column justify-content-center align-items-center">
            <img src={empty} alt="Bookmark still empty" className="py-5 img-fluid img-bookmark-empty" />
            <span className="fw-semibold title-bookmark-empty">Bookmark masih kosong.</span>
          </Container>
        ) : (
          <>
            {dataList.map((item) => (
              <Col key={item.id} xs={6} sm={4} md={3} lg={2}>
                <Card className="bg-light">
                  <Link to={item.link} className="text-decoration-none">
                    <Card.Img variant="top" src={item.cover} className="img-genre-book" />
                    <Card.Body>
                      <Card.Text className="text-black title-genre-book">{item.title}</Card.Text>
                    </Card.Body>
                  </Link>
                  <ListGroup.Item>
                    <Button onClick={() => handleDelete(item.id)} className="float-end mb-2 me-2 btn-delete-bookmark">
                      <i className="bx bx-trash"></i>
                    </Button>
                  </ListGroup.Item>
                </Card>
              </Col>
            ))}
          </>
        )}
      </Row>
    </Container>
  );
};

export default BookmarksPage;
