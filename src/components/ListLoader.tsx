import { ReactNode, useState } from "react"


interface ShowAndHideProps {
    children: ReactNode;
}

export const ShowAndHide: React.FC<ShowAndHideProps> = ({children}) => {
    const show: string = "Pokaż"
    const hide: string = "Ukryj"
    
    
    const [isShowTable, setShowTable] = useState<boolean>(false);
    const [currentText, changeText] = useState<string>(show)
    const toggleInfo = () => {
        setShowTable((prev) => !prev)
        changeText((prevText) => (prevText === show ? hide : show))
    }
    
    return (
        <div>
            {isShowTable && children}
            <button onClick={toggleInfo}>
                {currentText}
            </button>
        </div>
    )

}

