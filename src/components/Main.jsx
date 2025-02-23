import { useState } from 'react'; // Importa il hook useState da React per gestire lo stato locale

const Main = (props) => {
    // Estrae la proprietà 'languages' dall'oggetto props
    const { languages } = props;

    return (
        <div className="d-flex"> {/* Contenitore flessibile per disporre gli elementi */}
            {
                // Mappa l'array 'languages' e crea un elemento per ciascun linguaggio
                languages.map((element) => {

                    // Definisce uno stato locale per gestire la visibilità della descrizione
                    const [isOpen, setIsOpen] = useState(false);

                    // Funzione per invertire lo stato della descrizione (mostrare/nascondere)
                    const handleLinguaggio = () => setIsOpen(!isOpen);

                    // Estrae le proprietà dell'oggetto language
                    const { id, title, description } = element;

                    return (
                        <div key={id} className=''> {/* Contenitore di ciascun linguaggio */}
                            <button onClick={handleLinguaggio}>{title}</button> {/* Bottone per mostrare/nascondere la descrizione */}
                            <div className='langDescription'>
                                {isOpen && ( // Se isOpen è true, mostra la descrizione del linguaggio
                                    <div>
                                        <h2>{title}</h2>
                                        {description}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Main; // Esporta il componente Main per essere utilizzato altrove