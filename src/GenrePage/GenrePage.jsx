/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import { Col, Card, Container, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import "./GenrePage.css";
import { useDispatch, useSelector } from "react-redux";
import { getGenre } from "../redux/features/featuresGenre/listGenre";
// import listGenre, { setGenres } from "../redux/features/featuresGenre/listGenre";

const SelfImprovementDetail = () => {
  const navigate = useNavigate();
  const [searchGenre, setSearchGenre] = useState("");
  const dispatch = useDispatch();
  const {genre, loading} = useSelector((state) => state.genre)
  console.log(genre)
  // const genres = useSelector((state) => state.genre)
  // let listGenre = [
  //   {
  //     img: "https://res.cloudinary.com/dwsgej6rd/image/upload/v1685091005/13_vwqvyn.png",
  //     title: "Programming",
  //     url: "/genre/programming",
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dwsgej6rd/image/upload/v1685091004/D34903C0-57AA-430D-A89F-EC10DC8C909C_axnhdx.webp",
  //     title: "Self Improvement",
  //     url: "/genre/self-improvement",
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dwsgej6rd/image/upload/v1685105698/filsafat_s9izog.jpg",
  //     title: "Philosophy",
  //     url: "/genre/philosophy",
  //   },
  //   {
  //     img: "https://res.cloudinary.com/dwsgej6rd/image/upload/v1685109015/Historysss_wdo2ou.jpg",
  //     title: "History",
  //     url: "/genre/history",
  //   },
  //   {
  //     img:"https://trustedmarketingservices.com/wp-content/uploads/2016/02/mystery-person.jpg",
  //     title: "Mystery",
  //     url:"/genre/mystery",
  
  //   }
  // ];




  useEffect(() => {
    // if (!verifyLogin) {
    //   loginFirst();
    //   navigate("/login");
    // }

    dispatch(() => {
      dispatch(getGenre())
    })
  }, []);



  
  let verifyLogin = localStorage.getItem("user-info");

  const loginFirst = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
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


  const handleChange = (e) => {
    e.preventDefault();
    setSearchGenre(e.target.value);
  };

  if (searchGenre.length > 0) {
    listGenre = listGenre.filter((i) => {
      return i.title.toLowerCase().match(searchGenre.toLowerCase());
    });
  }

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col lg={9}>
            <p className="fs-4 fw-semibold">All Genres</p>
          </Col>
          <Col lg={3}>
            <InputGroup className="mb-3 w-100">
              <Form.Control
                type="text"
                value={searchGenre}
                onChange={handleChange}
                placeholder="Search Genre"
              />
              <InputGroup.Text>
                <i className="bx bx-search-alt-2"></i>
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>

        <Row className="mt-3 g-2">
          {genre.map((item) => (
            <Col key={item.id} md={6} lg={4}>
              <Link to={item.url}>
                <Card className="bg-dark text-white card-genre">
                  <Card.Img
                    src={item.img}
                    className="img-popular-genre"
                    height={150}
                    alt="Card image"
                  />
                  <Card.ImgOverlay className="d-flex justify-content-center align-items-center">
                    <Card.Title>{item.title}</Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default SelfImprovementDetail;
