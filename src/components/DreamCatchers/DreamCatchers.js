import React from "react";
// import useFetch from "../../hooks/useFetch";

const DreamCatchers = () => {
    // const { data, loading, error } = useFetch("http://localhost:1337/api/image?populate[2]=collage");
    // console.log(data)

    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    // if(error) {
    //     return <div>Error</div>;
    // }


    return (
        <div>
        <h1>This page has photos of Dream Catchers</h1>
        {/* <div className="row">
            {data.data.attributes.collage.data.map(image => (
                <div>
                    <img src={image.attributes.name} alt={image.alternativeText} />
        </div>
            ))}
           
        </div> */}
        </div>

    );

    }
export default DreamCatchers;
