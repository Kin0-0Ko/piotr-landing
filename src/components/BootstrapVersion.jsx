import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Image,
} from 'react-bootstrap';

function BootstrapSite() {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  // Hover scaling
  const handleHover = (e, scale = 1.05) => {
    if (e.type === 'mouseenter') e.currentTarget.style.transform = `scale(${scale})`;
    if (e.type === 'mouseleave') e.currentTarget.style.transform = 'scale(1)';
  };

  // Power blocks data
  const powerBlocks = [
    { icon: '🥇', title: 'Mistrz Świata' },
    { icon: '🧠', title: 'Mentor i Trener' },
    { icon: '🥊', title: 'Ponad 30 lat w Kickboxingu' },
  ];

  // Gallery images
  const galleryImages = [
    '/images/One.jpeg',
    '/images/Two.jpg',
    '/images/Three.jpg',
    '/images/Four.jpg',
    '/images/gal5.jpg',
  ];

  // Modal state
  const [modalShow, setModalShow] = useState(false);
  const [modalImg, setModalImg] = useState('');

  const openModal = (src) => {
    setModalImg(src);
    setModalShow(true);
  };
  const closeModal = () => setModalShow(false);

  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" data-aos="fade-down">
        <Container>
          <Navbar.Brand href="#home">Piotr Siegoczyński</Navbar.Brand>
          <Navbar.Toggle aria-controls="nav" />
          <Navbar.Collapse id="nav">
            <Nav className="ms-auto">
              {[
                'home',
                'about',
                'power',
                'story',
                'gallery',
                'achievements',
                'offer',
                'media',
                'contact',
              ].map((sec) => (
                <Nav.Link
                  key={sec}
                  href={`#${sec}`}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHover}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Home Section with Background Video */}
      <header id="home" className="position-relative" style={{ height: '100vh', overflow: 'hidden' }}>
        <div
          className="position-absolute w-100 h-100"
          style={{ top: 0, left: 0, zIndex: -1 }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/4zyskOkXD2U?autoplay=1&mute=1&loop=1&playlist=4zyskOkXD2U&controls=0&showinfo=0&modestbranding=1"
            frameBorder="0"
            allow="autoplay; loop; muted"
            style={{ objectFit: 'cover' }}
            title="Background Video"
          ></iframe>
        </div>
        <div
          className="position-relative d-flex flex-column justify-content-center align-items-center text-white h-100 px-3"
          style={{ zIndex: 1 }}
          data-aos="zoom-in"
        >
          <h1 className="display-4 fw-bold">
            Piotr Siegoczyński – Mistrz Świata w Kickboxingu
          </h1>
          <p className="lead mt-3">Sportowiec. Trener. Motywator.</p>
          <p className="text-center mt-4">
            Witaj na mojej oficjalnej stronie! Nazywam się Piotr Siegoczyński i od ponad 30
            lat jestem związany ze sportami walki. Jako wielokrotny mistrz świata w kickboxingu,
            wiem, jaką wartość mają pasja, dyscyplina i nieustanne dążenie do celu. Zapraszam Cię
            do świata sportu, w którym pokonywanie własnych ograniczeń staje się codziennością.
          </p>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-5 bg-secondary text-white" data-aos="fade-up">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="fade-right">
              <h2>O mnie</h2>
              <p>
                Mam na imię Piotr Siegoczyński. Od ponad 30 lat moje życie to kickboxing — od
                zawodnika, przez reprezentanta Polski, aż po trenera i motywatora. Na swoim koncie
                mam tytuły mistrza Polski, Europy i świata. Dzielę się doświadczeniem, ucząc
                techniki, odwagi i dyscypliny każdego dnia.
              </p>
              <Button
                variant="danger"
                href="#offer"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
              >
                Dowiedz się więcej
              </Button>
            </Col>
            <Col md={6} data-aos="fade-left" className="text-center mt-5">
              <img
                src="/images/Two.jpg"
                alt="O mnie"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '350px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Power Blocks Section */}
      <section id="power" className="bg-dark text-white py-5" data-aos="fade-up">
        <Container>
          <Row>
            {powerBlocks.map((blk, i) => (
              <Col
                md={4}
                className="text-center mb-4"
                key={i}
                data-aos="flip-left"
                data-aos-delay={i * 100}
              >
                <div onMouseEnter={handleHover} onMouseLeave={handleHover} style={{ transition: 'transform 0.3s' }}>
                  <div className="fs-1">{blk.icon}</div>
                  <h4>{blk.title}</h4>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Story Section */}
      <section id="story" className="py-5 bg-light" data-aos="fade-up">
        <Container>
          <Row className="align-items-center">
            <Col md={6} data-aos="fade-right">
              <h2>Nie urodziłem się mistrzem – stałem się nim</h2>
              <p>
                Moja droga rozpoczęła się w małej sali treningowej. Każdy krok, każda kropla potu,
                każda porażka kształtowała mnie. Dziś dzielę się tą historią, aby inspirować
                innych do sięgania wyżej.
              </p>
              <Button variant="danger" href="#achievements" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                Zobacz osiągnięcia
              </Button>
            </Col>
            <Col md={6} data-aos="fade-left" className="text-center mt-5">
              <img
                src="/images/Two.jpg"
                alt="Story"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '350px', objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-5 bg-white" data-aos="fade-up">
        <Container>
          <h2 className="text-center mb-4">Galeria</h2>
          <Row>
            {galleryImages.map((src, i) => (
              <Col key={i} md={4} className="mb-4" data-aos="zoom-in" data-aos-delay={i * 100}>
                <div
                  onClick={() => openModal(src)}
                  style={{
                    cursor: 'pointer',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    height: '200px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Image
                    src={src}
                    alt={`Galeria ${i + 1}`}
                    fluid
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
              </Col>
            ))}
          </Row>
        </Container>

        {/* Image Modal */}
        <Modal show={modalShow} onHide={closeModal} centered size="lg">
          <Modal.Body className="p-0">
            <Image
              src={modalImg}
              alt=""
              fluid
              style={{ objectFit: 'contain', width: '100%' }}
            />
          </Modal.Body>
        </Modal>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-5 bg-secondary text-white" data-aos="fade-up">
        <Container>
          <h2 className="text-center mb-4">Osiągnięcia</h2>
          <Row>
            <Col md={4} data-aos="flip-up" className="mb-4">
              <Card onMouseEnter={handleHover} onMouseLeave={handleHover} style={{ transition: 'transform 0.3s' }}>
                <Card.Body className="text-center">
                  <Card.Title>🥇 Mistrz Świata WAKO (Full Contact)</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} data-aos="flip-up" data-aos-delay={100}>
              <Card onMouseEnter={handleHover} className="mb-4" onMouseLeave={handleHover} style={{ transition: 'transform 0.3s' }}>
                <Card.Body className="text-center">
                  <Card.Title>🥇 Mistrz Europy</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} data-aos="flip-up" data-aos-delay={200}>
              <Card onMouseEnter={handleHover} onMouseLeave={handleHover} style={{ transition: 'transform 0.3s' }}>
                <Card.Body className="text-center">
                  <Card.Title>🥇 10x Mistrz Polski</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-5 bg-light" data-aos="fade-up">
        <Container>
          <h2 className="text-center mb-4">Współpraca i treningi</h2>
          <Row>
            <Col md={6} data-aos="fade-right" className="mb-4">
              <ul>
                <li>🔹 Indywidualne treningi kickboxingu</li>
                <li>🔹 Warsztaty i seminaria motywacyjne</li>
                <li>🔹 Konsultacje dla trenerów i zawodników</li>
                <li>🔹 Wystąpienia gościnne – eventy sportowe, konferencje, szkoły</li>
              </ul>
              <Button variant="danger" href="#contact" onMouseEnter={handleHover} onMouseLeave={handleHover}>
                Chcesz trenować?
              </Button>
            </Col>
            <Col md={6} data-aos="fade-left">
              <p>
                Szukasz czegoś więcej niż zwykłego treningu? Ze mną poznasz techniki kickboxingu, ale
                też nauczysz się dyscypliny, koncentracji i pracy nad sobą.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Media Section */}
      <section
  id="media"
  className="py-5 bg-white"
  data-aos="fade-up"
>
  <Container>
    <h2 className="text-center mb-4">Piotr Siegoczyński w mediach</h2>
    <Row>
      <Col md={4} data-aos="fade-up" className="mb-4">
        <Card
          className="h-100"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          style={{ transition: 'transform 0.3s' }}
        >
          <Card.Body>
            <Card.Title>Gość Życia – Życie Powiatu na Mazowszu</Card.Title>
            <Card.Text>
              Artur Rola zaprosił do studia Życia Powiatu na Mazowszu Piotra Siegoczyńskiego – prezesa Polskiego Związku Kickboxingu.&#8203;
            </Card.Text>
            <Card.Link href="https://zyciepw.pl/gosc-zycia-artur-rola-zaprasza-piotr-siegoczynski">
              Czytaj dalej
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} data-aos="fade-up" data-aos-delay="100" className="mb-4">
        <Card
          className="h-100"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          style={{ transition: 'transform 0.3s' }}
        >
          <Card.Body>
            <Card.Title>Królowe kickboxingu – Przegląd Sportowy</Card.Title>
            <Card.Text>
              Piotr Siegoczyński, legenda polskiego kickboxingu, był pierwszym Polakiem, który triumfował na mistrzostwach świata w 1985 roku.&#8203;
            </Card.Text>
            <Card.Link href="https://przegladsportowy.onet.pl/inne-sporty/krolowe-kickboxingu/ek50sgs">
              Czytaj dalej
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4} data-aos="fade-up" data-aos-delay="200">
        <Card
          className="h-100"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          style={{ transition: 'transform 0.3s' }}
        >
          <Card.Body>
            <Card.Title>Wywiad z Piotrem Siegoczyńskim – PZKB</Card.Title>
            <Card.Text>
              Rozmowa o szkoleniu podstawowym, sprawach licencyjnych i rozwoju kickboxingu w Polsce pod egidą PZKB.&#8203;
            </Card.Text>
            <Card.Link href="https://pzkickboxing.pl/news/1772%2Cwywiad%2Cpiotrem%2Csiegoczynskim%2Cprezesem%2Cpolskiego%2Czwiazku%2Ckickboxingu.html">
              Czytaj dalej
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</section>

      {/* Contact Section */}
      <footer id="contact" className="py-5 bg-dark text-white" data-aos="fade-up">
        <Container className="text-center">
          <p>Masz pytania lub chcesz współpracować?</p>
          <p>📩 kontakt@piotrsiegoczyński.pl | 📱 +48 123 456 789</p>
        </Container>
      </footer>
    </>
  );
}

export default BootstrapSite;
