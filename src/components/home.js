import React,{ useState } from 'react';

function Home() {

   const [dataJson, setDatajson] = useState([]);
    function showData(){
        // import('../utils/data.json').then((data)=>
        //    // console.log(data.default)
        // data.default.map((mydata,key)=>
        // <li>{setDatajson(mydata.employee_name)}</li>
        // )
        // )

        import('../utils/data.json').then((data)=>
            {setDatajson(data.default)}
        )
    }

        return (
            <div className="App">
                <h1>Home</h1>
                <button onClick={showData }>
                    Click me
                </button>
               <div>
                   {dataJson.map((newData,key)=>
                       <div>
                           <li>{newData.employee_name}</li>
                           <li>{newData.employee_salary}</li>
                           <li>{newData.employee_age}</li>
                       </div>

                   )}
               </div>

            </div>
        );

}

export default Home;
