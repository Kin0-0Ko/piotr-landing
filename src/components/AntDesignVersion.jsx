import React, { useState } from 'react'; 
import 'antd/dist/reset.css';
import { Layout, Menu, Typography, Button, Row, Col, Card, Modal, Image,   Drawer, Grid, Form, Input, Divider, Carousel } from 'antd';
import { motion } from 'framer-motion';
import { MenuOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function AntDesignSite() {

	const [drawerVisible, setDrawerVisible] = useState(false);
	
	const screens = useBreakpoint();


	const toggleDrawer = () => setDrawerVisible(!drawerVisible);

  const powerBlocks = [
    { icon: '🥇', title: 'Mistrz świata' },
    { icon: '🧠', title: 'Mentor i trener' },
    { icon: '🥊', title: 'Ponad 30 lat w kickboxingu' },
  ];

  const galleryImages = [
    '/images/One.jpeg',
    '/images/Two.jpg',
    '/images/Three.jpg',
    '/images/Five.jpg',
    '/images/gal5.jpg',
  ];
  const mediaArticles = [
    {
      title: 'Wywiad z Piotrem Siegoczyńskim dla SportNews',
      link: 'https://sportnews.pl/wywiad-piotr-siegoczynski',
      excerpt: '„Kickboxing to moja pasja od dziecka...”',
    },
    {
      title: 'Artykuł o motywacji od Mistrza Świata',
      link: 'https://motywacja.pl/artykul-piotr-siegoczynski',
      excerpt: '„Pasja i dyscyplina to klucz do sukcesu...”',
    },
    {
      title: 'Piotr Siegoczyński w programie TVP Sport',
      link: 'https://tvpsport.pl/program-piotr-siegoczynski',
      excerpt: '„Opowiadam o kulisach przygotowań...”',
    },
  ];

  const achievementsList = [
    'Mistrz Świata WAKO (Full Contact)',
    'Mistrz Europy',
    '10x Mistrz Polski',
    'Reprezentant Polski na mistrzostwach świata i Europy',
    'Wicemistrz Europy',
    'Laureat plebiscytu "Najlepszy sportowiec roku"',
    'Trener i sędzia międzynarodowy',
  ];
  const navItems = ['home','about','power','story','gallery','achievements','offer','media','contact'];

  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1000, width: '100%', padding: '0 24px', display: 'flex', alignItems: 'center', background: '#fff' }}>
        <Title level={4} style={{ margin: 0, flex: 1 }}>Piotr Siegoczyński</Title>
        {/* Desktop Menu */}
        {screens.md && (
          <Menu mode="horizontal" selectable={false} style={{ flex: 2, justifyContent: 'center' }}>
            {navItems.map(key => (
              <Menu.Item key={key} style={{ textTransform: 'capitalize' }}>
                <a href={`#${key}`}>{key}</a>
              </Menu.Item>
            ))}
          </Menu>
        )}
        {/* Mobile Toggle */}
        {!screens.md && (
          <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={toggleDrawer}
          />
        )}
        <Drawer
          title="Nawigacja"
          placement="right"
          onClose={toggleDrawer}
          visible={drawerVisible}
        >
          <Menu mode="inline" selectable={false}>
            {navItems.map(key => (
              <Menu.Item key={key} onClick={toggleDrawer} style={{ textTransform: 'capitalize' }}>
                <a href={`#${key}`}>{key}</a>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </Header>

      <Content style={{ marginTop: 60 }}>
        {/* Home */}
        <motion.section id="home" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }} transition={{ duration: 0.8 }} style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
		<iframe
            title="bg-video"
            src="https://www.youtube-nocookie.com/embed/4zyskOkXD2U?autoplay=1&mute=1&loop=1&playlist=4zyskOkXD2U&controls=0&showinfo=0&modestbranding=1"
            frameBorder="0"
            allow="autoplay; loop; muted"
            style={{pointerEvents: 'none', position: 'absolute', top:0, left:0, width:'100%', height:'100%', objectFit: 'cover', filter: 'brightness(0.4)' }}
          />
          <motion.div initial={{ scale:0.8, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:1 }} style={{ position:'relative', zIndex:1, textAlign:'center', top:`${screens.md ? '40%' : '30%'}`, transform:'translateY(-50%)', padding:'0 20px' }}>
            <Title level={1} style={{ color: '#e60012' }}>Piotr Siegoczyński</Title>
            <Text style={{ fontSize:'1.5rem', color:'#fff' }}>Sportowiec. Trener. Motywator.</Text>
            <Divider style={{ borderColor:'#e60012', width:80, margin:'24px auto' }} />
            <Text style={{ display:'block', maxWidth:700, margin:'24px auto', fontSize:'1.1rem', color:'#ddd' }}>
              Witaj na mojej oficjalnej stronie! Nazywam się Piotr Siegoczyński i od ponad 30 lat jestem związany ze sportami walki. Jako wielokrotny mistrz świata w kickboxingu, wiem, jaką wartość mają pasja, dyscyplina i nieustanne dążenie do celu. Zapraszam Cię do świata sportu, w którym pokonyвание własnych ogranicений stajeся codziennością.
            </Text>
            <Button size="large" style={{ textDecoration: "none", background:'#e60012', borderColor:'#e60012', color:'#fff' }} href="#about">Poznaj więcej</Button>
          </motion.div>
        </motion.section>

        {/* About */}
        <motion.section id="about" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2  }} transition={{ duration:0.8 }} style={{ padding:'80px 50px', background:'linear-gradient(135deg,#faf0f0,#fff7e6)' }}>
          <Row gutter={48} align="middle">
		  <Col xs={24} sm={20} md={16} lg={12}>
              <Title level={2} style={{ textAlign: 'center' }}>Moja droga do mistrzostwa</Title>
              <Text style={{ display: 'block', margin: '16px 0', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Karierę sportową rozpocząłem w latach 80., a moje pierwsze sukcesy przyszły szybko – zarówno na arenie krajowej, jak i międzynarodowej.
              </Text>
              <Text style={{ display: 'block', margin: '16px 0', fontSize: '1.1rem', lineHeight: 1.6 }}>
                W ciągu lat zdobyłem tytuły Mistrza Polski, Europy i świata w kickboxingu. Dziś, oprócz własnych treningów, dzielę się doświadczeniem z innymi – jako trener, mentor i ambasador zdrowego stylu życia.
              </Text>
              <Text style={{ display: 'block', margin: '16px 0', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Uczę nie tylko techniki walki, ale także odwagi, pokory i konsekwencji, pomagając każdemu pokonać własne ograniczenia.
              </Text>
              <div style={{ textAlign: 'center', marginTop: 32 }}>
                <Button size="large" style={{textDecoration: 'none', background: '#e60012', borderColor: '#e60012', color: '#fff' }} href="#power">
                  Dowiedz się więcej
                </Button>
              </div>
            </Col>
            <Col xs={24} md={12} style={{ textAlign:'center' }}>
              <motion.div initial={{ x:100, opacity:0 }} whileInView={{ x:0, opacity:1 }} transition={{ duration:0.6, delay:0.2 }} viewport={{ once: false, amount: 0.2  }}>
                <Image src="/images/One.jpeg" preview={false} style={{  maxWidth:'100%', borderRadius:12, boxShadow:'0 4px 16px rgba(0,0,0,0.1)', marginTop: 15 }} />
              </motion.div>
            </Col>
          </Row>
        </motion.section>

        {/* Moc i Motywacja */}
        <motion.section id="power" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2  }} transition={{ duration:0.8 }} style={{ padding:'80px 50px', background:'#000', color:'#fff' }}>
          <Title level={2} style={{ textAlign:'center', color:'#e60012' }}>Moc i Motywacja</Title>
          <Text style={{ display:'block', textAlign:'center', marginBottom:40, color:'#ddd' }}>Mistrz nie rodzi się na ringu – mistrz rodzi się na treningu.</Text>
          <Row gutter={24} justify="center">
            {powerBlocks.map(block => (
              <Col xs={24} md={8} key={block.title}>
                <Card hoverable style={{ textAlign:'center', border:'3px solid #e60012' }} bodyStyle={{ padding:24 }}>
                  <div style={{ fontSize: '2rem' }}>{block.icon}</div>
                  <Text style={{ display:'block', marginTop:16, fontSize:'1.1rem', color:'#000' }}>{block.title}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.section>

        {/* Z serca do ringu - Story */}
        <motion.section id="story" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2  }} transition={{ duration:0.8 }} style={{ padding:'80px 50px', background:'linear-gradient(135deg,#fff7e6,#faf0f0)' }}>
          <Row gutter={48} align="middle">
            <Col xs={24} md={12} style={{ textAlign:'center' }}>
              <Image src="/images/Three.jpg" preview={false} style={{ maxWidth:'100%', borderRadius:12, boxShadow:'0 4px 16px rgba(0,0,0,0.1)' }} />
              <blockquote style={{ marginTop:16, fontSize:'1rem', color:'#555' }}>
                „Nie urodziłem się mistrzem – stałem się nim.”
              </blockquote>
            </Col>
            <Col xs={24} md={12}>
              <Title level={2}>Z serca do ringu</Title>
              <Text style={{ display:'block', margin:'16px 0', color:'#333' }}>
                Przez lata przeszedłem drogę od amatora do mistrza świata. Każdy etap kariery to osobna historia pełna wyzwań i sukcesów.
              </Text>
              <ul style={{ color:'#333' }}>
                <li>Lata 80: Pierwsze sukcesy krajowe</li>
                <li>Lata 90: Mistrzostwa Europy</li>
                <li>2000+: Mistrzostwa Świata i dalszy rozwój</li>
              </ul>
              <Button type="primary" style={{ textDecoration: 'none', marginRight:16 }} href="#achievements">Zobacz osiągnięcia</Button>
            </Col>
          </Row>
        </motion.section>

        {/* Nowocześnie i dynamicznie - Gallery */}
        <motion.section id="gallery" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2  }} transition={{ duration:0.8 }} style={{ padding:'80px 50px', backgroundColor: '#f000' }}>
		<Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>Moje sportowe chwile</Title>
          <Row
            gutter={[16, 16]}
            justify="center"
            style={{ maxWidth: 1200, margin: '0 auto' }}
          >
            {galleryImages.map(src => (
              <Col xs={24} sm={12} md={8} lg={6} key={src}>
                <Card
                  hoverable
                  bodyStyle={{ padding: 0 }}
                >
                  <Image
                    src={src}
                    preview={true}
                    style={{
                      width: '100%',
                      height: 200,
                      objectFit: 'cover',
                      cursor: 'pointer',
                    }}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </motion.section>

        {/* Achievements */}
        <motion.section id="achievements" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2  }} transition={{ duration:0.8 }} style={{ padding:'80px 50px', background:'#f0f0f0' }}>
          <Title level={2} style={{ textAlign:'center' }}>Najważniejsze sukcesy</Title>
          <Row gutter={[24,24]} justify="center" style={{ marginTop:40 }}>
            {achievementsList.map(item => (
              <Col xs={24} sm={12} md={8} key={item}>
                <Card hoverable style={{ border:'1px solid #e60012' }} bodyStyle={{ padding:20 }}>
                  <Text>{item}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.section>

        {/* Offer */}
        <motion.section id="offer" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2  }} transition={{ duration:0.8 }} style={{ padding:'80px 50px', background:'linear-gradient(135deg,#faf0f0,#fff7e6)' }}>
          <Title level={2} style={{ textAlign:'center' }}>Współpraca i treningi</Title>
          <Row gutter={48} style={{ marginTop:40 }}>
            <Col xs={24} md={12}>
              <Card style={{ padding:20 }}>
                <Title level={4}>Treningi i warsztaty</Title>
                <ul>
                  <li>🔹 Treningi personalne z kickboxingu i samoobrony</li>
                  <li>🔹 Seminaria motywacyjne i warsztaty</li>
                  <li>🔹 Szkolenia dla klubów i trenerów</li>
                  <li>🔹 Wystąpienia gościnne</li>
                </ul>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card style={{ padding:20 }}>  
                <Title level={4}>Inspiracja i rozwój</Title>
                <Text>Ze mną poznasz techniki kickboxingu oraz nauczysz się dyscypliny i pracy nad sobą. Niezależnie od poziomu czy celu — osiągniesz maksimum możliwości.</Text>
              </Card>
            </Col>
          </Row>
        </motion.section>

        {/* Media */}
        <motion.section id="media" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2  }} transition={{ duration:0.8 }} style={{ padding:'80px 50px', background:'#fff' }}>
		<Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>Media o mnie</Title>
          <Row gutter={[16, 16]} justify="center" style={{ maxWidth: 1000, margin: '0 auto' }}>
            {mediaArticles.map(article => (
              <Col xs={24} sm={12} md={8} key={article.link}>
                <Card hoverable style={{ height: '100%' }}>
                  <Title level={4}><a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a></Title>
                  <Text>{article.excerpt}</Text>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          variants={sectionVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ padding: '80px 0', backgroundColor: '#fafafa' }}
        >
          <Title level={2} style={{ textAlign: 'center', marginBottom: 24 }}>Kontakt</Title>
          <Text style={{ display: 'block', textAlign: 'center', marginBottom: 8 }}>📩 E-mail: kontakt@piotrsiegoczynski.pl</Text>
          <Text style={{ display: 'block', textAlign: 'center' }}>📱 Telefon: +48 123 456 789</Text>
        </motion.section>

      </Content>


      <Footer style={{ textAlign: 'center', padding: '24px 50px' }}>
        © {new Date().getFullYear()} Piotr Siegoczyński. Wszelkie prawa zastrzeżone.
      </Footer>
    </Layout>
  );
}
