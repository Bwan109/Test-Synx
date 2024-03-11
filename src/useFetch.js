// In this page, it creates a custom hook so that it can be reuse.

/* useState hook. The function is mainly used if have reactive values.
Also known as replacing values
For exp is having a fixed value then user clicks then it will change the value.
*/
import { useState, useEffect } from 'react';

// The keyword useFetch must be used to create custom hook
const useFetch = (url) => {

    //This is a useState, useState variables [oldvalue, newvalue]
    // This is set to null bcs it does not take data from the BlogList anymore 
    const [data, setData] = useState(null);
    // Create for loading msg
    const [isPending, setIsPending] = useState(true);
    // Create for error msg
    const [error, setError] = useState(null);


    /* useEffect is usually use for re-render the page. 
    For exp: it changes the state after doing smth 
    It is useful when fetching data 
    */
    // This renders and fetch the data from the api point and setBlogs as the data in JSON server
    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(res => {
                // To check if response is ok, if not Ok it will catch the error at below.
                if (!res.ok) {
                    throw Error("Could not fetch the data");
                }
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null)

            })
            // Catch networking errors
            .catch(err => {
                if (err.name === "AbortError") {
                    console.log('fetch aborted')

                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
        // abort the fetch
        return () => abortCont.abort();
    }, [url])
    return { data, isPending, error };
}

export default useFetch;
