"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Header from '../Components/Header'

type Data = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number,
    };
};

const Page = () => {
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        const fetchData = async () => {
            const url = await fetch("https://fakestoreapi.com/products");
            const parsedData: Data[] = await url.json();
            setData(parsedData);
        };
        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-green-200 text-[#2c3e50]">
              <Header/>

            {loading ?(

                <div className="flex items-center justify-center h-screen bg-transparent">
  <div className="relative w-16 h-16">
    <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-green-400 border-l-green-400 rounded-full animate-[spin_1.5s_ease-in-out_infinite]"></div>
    <div className="absolute inset-0 w-12 h-12 m-2 border-4 border-transparent border-t-pink-400 border-l-pink-400 rounded-full animate-[spin_1s_ease-in-out_infinite_reverse]"></div>
    <div className="absolute inset-0 w-8 h-8 m-4 border-4 border-transparent border-t-blue-400 border-l-blue-400 rounded-full animate-[spin_0.75s_ease-in-out_infinite]"></div>
    <div className="absolute inset-0 w-8 h-8 m-4 border-4 border-transparent border-t-yellow-300 border-l-yellow-400 rounded-full animate-[spin_0.75s_ease-in-out_infinite]"></div>

  </div>
</div>

            ) : (
                <div className="py-10 px-5 sm:px-8 lg:px-12 ">
                    <h1 className="mb-10 text-center text-xl sm:text-2xl md:text-5xl font-extrabold text-teal-800 tracking-wide">
                        Client-Side Data Fetching
                        </h1>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {data.map((product, index) => (
                            <div
                                key={index}
                                className="w-full bg-white shadow-md p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all"
                            >
                                <div className="h-44 flex items-center justify-center mb-4">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        width={100}
                                        height={100}
                                        className="h-full object-contain"
                                    />
                                </div>
                                <p className="text-sm text-[#95a5a6] capitalize mb-2">{product.category}</p>
                                <p className="font-semibold text-lg text-[#34495e] mb-2 line-clamp-1">{product.title}</p>
                                <p className="text-sm text-[#7f8c8d] mb-4 line-clamp-2">{product.description}</p>
                                <p className="text-lg font-semibold text-[#27ae60] mb-4">${product.price}</p>
                                <div className="flex justify-end">
                                    <button className="py-2 px-4 bg-[#3498db] text-white rounded-full hover:bg-[#2980b9] transition-all">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;
