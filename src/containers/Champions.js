import React, { useEffect, useState } from 'react';
function Champions() {
    const [champion, setData] = useState([]);
    useEffect(() => {
        fetch('https://ddragon.leagueoflegends.com/cdn/12.3.1/data/en_US/champion.json')
        .then(response => {
            if(response.ok){
                return response.clone().json()
            }
            throw response
        }).then(data => {
            setData(data['data'])
        }).catch(error => {
            console.error("Error fetching data", error)
        })
    }, [])
    if(!champion){
        return null;
    }
    return(
        <div style={{marginTop: '10px'}}>
            <input type="text" id="search" name="search" placeholder="search" required></input>
            {Object.keys(champion).map(key => {
                let url = 'https://ddragon.leagueoflegends.com/cdn/12.3.1/img/sprite/'+champion[key]['image']['sprite']
                let x  = champion[key]['image']['x']
                let y =  champion[key]['image']['y']
                return (<div className="champion" style={{
                                                    width: '75px',
                                                    height: '75px',
                                                    textAlign: 'center',
                                                    textTransform: 'uppercase',
                                                    fontSize: '9px',
                                                    display: 'inline-block'}}>
                            <div className="champion-icon" style={{
                                                            margin: '0 auto',
                                                            backgroundImage: `url(${url})` ,
                                                            width: '48px',
                                                            height: '48px',
                                                            backgroundPosition: `-${x}px -${y}px`,
                                                            }}>
                            </div>
                            {key}
                    </div>)   
                })
            }     
        </div>
    )
}
export default Champions