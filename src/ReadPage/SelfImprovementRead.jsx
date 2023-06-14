import { Button, Container, Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import { useParams, Link, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { getSelfImprovementDetail } from '../redux/features/featuresDetail/selfImprovementDetailSlice';

const SelfImprovementRead = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {data, isLoading} = useSelector((state) => state.philosophyDetail)
  const {bookId} = useParams();
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

  useEffect(() => {
    if (!verifyLogin) {
      loginFirst();
      navigate("/login");
    }
    dispatch(getSelfImprovementDetail(bookId))

  }, [bookId]);

  if (isLoading)
    return (
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Spinner animation="border" variant="danger" />
      </Container>
    );

  return (
    <>
      <Container>
        <Link to={`/genre/self-improvement/${data.id}`}>
          <Button className="btn-back my-5">Kembali</Button>
        </Link>
        <div className="mb-4">
          <h1 className="fs-3 fw-semibold text-center">{data.title}</h1>
          <h2 className="text-end fs-5 fst-italic">{data.author}</h2>
        </div>

        <iframe src={data.link} className="w-100 vh-100" allow="autoplay"></iframe>
      </Container>
    </>
  );
};

export default SelfImprovementRead;
