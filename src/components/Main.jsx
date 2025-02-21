const Main = (props) => {

    const { languages } = props

    return (
        <div>
            {
                languages.map((element) => {

                    const { id, title, description } = element;

                    return (
                        <div key={id}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main