import { useEffect, useState } from "react";

const useFetch = (data_url) => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(true);
    //lager en state for å få skrevet ut en error beskjed til brukeren hvis det er
    //noe feil med serveren vi henter data ifra...
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const abortCont = new window.AbortController();

        setTimeout(()=> {
            fetch(data_url, { signal:abortCont.signal })
                .then(res => {
                    //Hvis response objectet vi får (res) ikke har property( ok:"true" )
                    //Så vil vi si ifra om at det er en error med dataen vi henter
                    // (!res.ok) er en forkortelse for: (if res.ok != true)
                    if(!res.ok){
                        throw Error('Could not fetch the data for that resource');
                    }
                    
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    // Hvis vi plutselig skulle ende opp med å få data vil vi også sette tilbake
                    //verdien til error variabelen for å få bort error meldingen
                    // vi vil også ha bort pending variabelen som viser loading...
                    setPending(false);
                    setError(null);
                })
                /* Denne gjelder hvis vi ikke engang kan koble til serveren vi prøver å hente
                data ifra. f.eks hvis den ikke er skrudd på. */
                .catch((err) => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch abborted')
                    } else {
                        setPending(false);
                        setError(err.message);
                    // Her tar vi også bort pending variabelen som viser "loading..." siden vi
                    //ikke lengre loader
                    // vi har default value på error = null som tilsvarer: false
                    // Når vi gir den err.message blir den fylt med noe og blir true
                    // da bruker vi conditional renderingen for å vise den på skjermen.
        
                    // Setter pendingen tilbake hvis vi får false, siden vi ikke lengre loader
                }
        
                })
        }, 300);
        return () => {
            abortCont.abort();
        }
    
        }, [data_url]);

    return {data, pending, error};
    
}

export default useFetch;