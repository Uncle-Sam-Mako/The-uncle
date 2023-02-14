
import './index.scss';

// This component takes in three props of letterClass, strArray, and idx 
const AnimatedLetters = ({letterClass, strArray, idx }) => {
    return(
        <span>
            {
                // Loops through the strArray  
                strArray.map((char, i) => (
                    // Renders a span with a class name of the letterClass, plus the current index + idx
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>{char}</span>
                ))
            }
        </span>
    )
}

// Exports out the AnimatedLetters component for other components to use. 
export default AnimatedLetters;
