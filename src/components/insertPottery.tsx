import axios from "axios";
import { useState } from "react";
import Layout from "./Layout";

const InsertPottery = () => {
    type NewPottery = {
        id: number;
        name: string;
        price: number;
        image: string;
    }
    const [newPottery, setNewPottery] = useState<NewPottery>({
        id: 0,
        name: "",
        price: 0,
        image: "",
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPottery({
            ...newPottery,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        axios.post("http://localhost:8000/pottery", newPottery)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <Layout>
            <h1>Insert Pottery</h1>
            <form className="grid grid-cols-1 gap-4">
                <label htmlFor="potteryName">Pottery Name:</label>
                <input type="text" id="name" name="name" onChange={handleChange} required className="w-60 justify-self-center mb-10" />
                <label htmlFor="potteryPrice">Pottery Price:</label>
                <input type="text" id="price" name="price" required className="w-60 justify-self-center mb-10" onChange={handleChange} />
                <label htmlFor="potteryPrice">Pottery Id:</label>
                <input type="text" id="id" name="id" required className="w-60 justify-self-center mb-10" onChange={handleChange} />
                {/* <label htmlFor="potteryDescription">Pottery Description:</label>
                    <input type="text" id="potteryDescription" name="potteryDescription" required /> */}
                <label htmlFor="potteryImage">Pottery Image:</label>
                <input type="text" id="image" name="image" required className="w-60 justify-self-center mb-10" />
                <button className="bg-gray-400 text-slate-950  justify-self-center size-14 rounded-lg" type="submit" onSubmit={handleSubmit}>
                    Insert
                </button>
            </form>
        </Layout>
    );
}

export default InsertPottery;