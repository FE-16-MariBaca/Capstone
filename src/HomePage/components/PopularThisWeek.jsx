import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Card from 'react-bootstrap/Card';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import { getPostPhilosophy } from '../../redux/features/postPhilosophy';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


const PopularThisWeek = () => {
  const dispatch = useDispatch()
  const {postsPhilosophy, loading} = useSelector((state) => state.postPhilosophy)
  const [listPopularBooks, setListPopularBooks] = useState(postsPhilosophy)

  useEffect(() => {
    dispatch(() => {
      dispatch(getPostPhilosophy())
    })
  },[])


  useEffect(() =>{
    setListPopularBooks(postsPhilosophy)
  },[loading])

  return (
    <>
      <p className="fs-4 fw-semibold mt-5 mb-3">Popular This Week</p>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={false}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {listPopularBooks.map((item) => (
          //buat
          <SwiperSlide key={item.id} className="swiper-slide-this-week">
            <Card className="border-0 bg-light">
              <Card.Img variant="top" className="img-book" src={item.cover} />
              <Card.Body className="bg-light">
                <Card.Text className="text-black title-book">{item.title}</Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PopularThisWeek;
