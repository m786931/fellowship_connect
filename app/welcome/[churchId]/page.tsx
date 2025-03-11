"use client"
import { Connect_Card } from "./connect_card";
import { useParams } from 'next/navigation';

export default function Page(){ 
    const churchId = useParams<{ churchId: string}>()
    console.log(churchId)
    return (
    <main>
        <Connect_Card />
    </main>
    );  
};
