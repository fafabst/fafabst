import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const NewArrival = () => {
    const [newArrival, setNewArrival] = useState(
        [
            {
                id: "",
                name: "",
                image: "",
                price: ""
            }
        ]);

    useEffect(() => {
        axios.get('http://localhost:8000/pottery').
            then((response) => {
                console.log(response.data.newArrival);
                setNewArrival(response.data.newArrival);
            }).catch((error) => {
                console.log("error fetching data", error);
            })
            ;
    }, []);

    return (
        <Layout>
            <div className="grid gap-10 grid-cols-3 w-full px-20 pb-3">
                {newArrival.map((item, idx) => (
                    <Link key={idx} href="#" className=" col-span-1 flex flex-col items-center bg-gray-main border-none rounded-lg shadow lg:flex-row md:max-w-xl hover:bg-gray-800 mx-6 no-underline">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={item.image} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal no-underline">
                            <h5 className="mb-2 text-2xl tracking-tight text-white-main dark:text-white-main">{item.name}</h5>
                            <p className="mb-3 font-normal text-white-main dark:text-white-main">price:{item.price}</p>
                            <button className="bg-slate-800 hover:bg-gray-700 text-white-main font-bold py-2 px-4 rounded">Add to cart</button>
                        </div>
                    </Link>

                ))}
            </div>
        </Layout>

    );
}

export default NewArrival;