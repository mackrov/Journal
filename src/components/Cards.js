
export default function Cards(props) {
    console.log(props)
    return (
        <div classname="cards--card">
            <div>
           <img src={props.hahas.img1}/>
           </div>

            <div className="cards--header">
                <img src={props.hahas.map} />
                <span>{props.hahas.country}</span>
                <a href={props.hahas.link}>{props.hahas.anchor}</a>


                <h1>{props.hahas.title}</h1>
                <span className="cards--date">{props.hahas.date}</span>
                <p>{props.hahas.description}</p>
            </div>

        </div>
    )
}