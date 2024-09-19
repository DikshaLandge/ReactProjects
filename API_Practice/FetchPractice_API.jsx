import React, { useEffect, useState } from "react";
import a_img from '../src/assets/a_img.jpg';

 function FetchPractice_API() {
    let [set, setText]=useState([]);

    async  function setData(){
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setText(data);

    console.log(data);
    }
    // useEffect(()=>{
        setData();
    // })u

    return (
        <>


            {

                set.map((ele,i) => {
                    return (
                        <div key={ele.id}>
                            <img src={ele.image} alt="" />
                            <h1>{ele.title}</h1>
                            <h2>{ele.category}</h2>
                            <p>{ele.description}</p>
                        </div>
                    )

                })
            }

          

        </>
    );
}
export default FetchPractice_API;




// import React, { useEffect, useState } from "react"; // Import React, useEffect, and useState
// import a_img from '../src/assets/a_img.jpg';

// function FetchPractice_API() {
//     const [data, setData] = useState([]); // State to hold fetched data

//     useEffect(() => { // Fetch data when component mounts
//         async function fetchData() {
//             const res = await fetch("https://fakestoreapi.com/products");
//             const fetchedData = await res.json();
//             setData(fetchedData);
//         }
//         fetchData();
//     }, []);

//     return (
//         <>
//             {data.map((ele) => (
//                 <div key={ele.id}>
//                     <img src={ele.image} alt="" />
//                     <h1>{ele.title}</h1>
//                     <p>{ele.description}</p>
//                 </div>
//             ))}
//         </>
//     );
// }

// export default FetchPractice_API;
