import { useState } from 'react';
const Main = (props) => {

    const { languages } = props

    return (
        <div className="d-flex">
            {
                languages.map((element) => {

                    const [isOpen, setIsOpen] = useState(false);

                    const handleLinguaggio = () => setIsOpen(!isOpen);

                    const { id, title, description } = element;

                    return (
                        <div key={id} className=''>
                            <button onClick={handleLinguaggio}>{title}</button>
                            <div className='langDescription'>
                                {isOpen && <div>
                                    <h2>{title}</h2>
                                    {description}
                                </div>}
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main