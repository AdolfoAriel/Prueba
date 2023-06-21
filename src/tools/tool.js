import { useEffect, useState } from "react";
 
 
export const useImageBackground = (imageId) => {
    const [imageData, setImageData] = useState({
        url: "",
        title: "Loading...",
    });

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${imageId}`)
            .then((res) => res.json())
            .then((data) => {
                setImageData(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [imageId]);

    return imageData;
};