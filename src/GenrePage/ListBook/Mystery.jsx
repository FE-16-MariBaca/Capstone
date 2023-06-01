import { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Card,
  Spinner,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getPostMastery } from "../../redux/features/postMysterySlice";

const Mystery = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { postsMystery, loading } = useSelector((state) => state.postMystery);
  console.log(postsMystery);
  let [books, setBooks] = useState();
  const [searchBooks, setSearchBooks] = useState("");
  const [isLoading, setIsloading] = useState(false);
  let verifyLogin = localStorage.getItem("user.info");

  const loginFirst = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: top,
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "warning",
      title: "Silakan Masuk terlebih dahulu!",
    });
  };

  useEffect(() => {
    dispatch(() => {
      dispatch(getPostMastery());
    });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchBooks(e.target.value);
  };

  if (searchBooks.length > 0) {
    books = books.filter((i) => {
      return i.title.toLowerCase().match(searchBooks.toLocaleLowerCase());
    });
  }

  if (isLoading) {
    return (
      <Container>
        <Spinner animation="border" variant="danger" />
      </Container>
    );
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col lg={9}>
          <p className="fs-4 fw-semibolf">Mystery Genre</p>
        </Col>
        <Col lg={3}>
          <InputGroup className="mb-3 w-100">
            <Form.Control
              type="text"
              value={searchBooks}
              onChange={handleChange}
              placeholder="Search Book"
            />
            <InputGroup.Text>
              <i className="bx bx-search-alt-2"></i>
            </InputGroup.Text>
          </InputGroup>
        </Col>
      </Row>

      <Row className="mt-3 mb-5 g-3">
        {postsMystery.map((item) => (
          <Col key={item.id} xs={6} sm={4} md={3} lg={2}>
            <Link
              to={`/genre/mystery/${item.id}`}
              className="text-decoration-none"
            >
              <Card className="bg-light">
                <Card.Img
                  variant="top"
                  src={item.cover}
                  className="img-genre-book"
                />
                <Card.Body>
                  <Card.Text className="text-black title-genre-book">
                    {item.title}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Mystery;