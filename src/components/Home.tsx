import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styles from './home.module.css';
import { Link } from "react-router-dom";
import Layout from './Layout';

const Home = () => {
    type HomeData = {
        id: number;
        name: string;
        image: string;
    }
    const [homeData, setHomeData] = useState<HomeData[]>
        (
            [{
                id: 0,
                name: "",
                image: ""
            }]
        );

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
        <Layout>
            <Row md={2}>
                {homeData.map((item, idx) => (
                    <Col key={idx} >
                        <Link to={`/${item.name}`} className="no-underline">
                            <Card className='bg-gray-900 border-amber-600 shadow-2xl p-10 m-5 h-1/4 '>
                                <Card.Body  >
                                    <Card.Img className=' rounded-lg h-3/5' variant="top" src={item.image} />
                                    <Card.Title className='text-blue-600/100'>{item.name}</Card.Title>
                                    {/* <Card.Text>{item.id}</Card.Text> */}
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col >
                ))}
            </Row >
        </Layout>
    );
}

export default Home;