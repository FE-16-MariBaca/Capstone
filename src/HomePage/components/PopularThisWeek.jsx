import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Card from 'react-bootstrap/Card';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
// import CardBook from './CardBook';

const PopularThisWeek = () => {
  const [listPopularBooks] = useState([
    { img: 'https://ebooks.gramedia.com/ebook-covers/49508/image_highres/ID_BTD2019MTH10BTD.jpg', title: 'Berani Tidak Disukai' },
    { img: 'https://leksikabookstore.com/uploads/6359e547123ea_20221027085623-1.jpg', title: 'Bicara Itu Ada Seninya' },
    { img: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1446023543i/27318448.jpg', title: 'Kitab Anti Bodoh' },
    { img: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Sebuah-seni-untuk-bersikap-bodoh-amat.jpg', title: 'Sebuah Seni untuk Bersikap Bodoamat' },
    { img: 'https://ebooks.gramedia.com/ebook-covers/56534/image_highres/BLK_TATSGOI2020532017.jpg', title: 'Tak Apa-Apa Tak Sempurna' },
    { img: 'https://cdn.gramedia.com/uploads/items/lgkld.jpg', title: 'Sejarah Dunia yang Disembunyikan' },
  ]);

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
        {listPopularBooks.map((item, index) => (
          <SwiperSlide key={index} className="swiper-slide-this-week">
            <Card className="border-0 bg-light">
              <Card.Img variant="top" className="img-book" src={item.img} />
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
