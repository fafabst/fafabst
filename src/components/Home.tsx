import Layout from "./Layout";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styles from './home.module.css';
import { Link } from "react-router-dom";

const Home = () => {
    const [homeData, setHomeData] = useState(
        [
            {
                id: "",
                name: "",
                image: ""
            }
        ]);

    useEffect(() => {
        axios.get('http://localhost:8000/pottery').
            then((response) => {
                console.log(response.data.homeData);
                setHomeData(response.data.homeData);
            }).catch((error) => {
                console.log("error fetching data", error);
            })
            ;
    }, []);
    return (
        <Layout  >
            <Row md={2} className={styles.homeWrapped}>
                {homeData.map((item, idx) => (
                    <Col key={idx} >
                        <Link to={`/${item.name}`} className="no-underline">
                            <Card className={styles.cardWrapped}>
                                <Card.Body className={styles.cardBodyWrapped}>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Title>{item.name}</Card.Title>
                                    {/* <Card.Text>{item.id}</Card.Text> */}
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col >
                ))}
            </Row >
        </Layout >
    );
}

export default Home;