'use client';

import DataCardsClient from "./DataCardsClient";
import { useEffect, useState } from "react";

export default function DataCardsServer(){
    const [blueprints, setBlueprints] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBlueprints(){
            try{
                const apiUrl = '/api/listBlueprintsAction';
                console.log('Fetching from: ', apiUrl);
                const response = await fetch(apiUrl, {cache: 'no-store'});
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                console.log('Api Response: ', result);
                if(result.success){
                    setBlueprints(result.blueprints);
                }
                else{
                    setError(result.error || 'Failed to Fetch Blueprints.');
                    console.error('Failed to fetch Blueprints', result.error);
                }
            }
            catch(error){
                console.error('Error fetching blueprints: ', error)
                setError((error as Error).message)
            } finally {
                setLoading(false);
            }
        }
        fetchBlueprints();
    }, [])
    if(loading) return(<div> Loading ... </div>)
    if(error) return(<div>Error: {error}</div>)
    return(
        <>
         <DataCardsClient blueprints={blueprints}/>
        </>
)};