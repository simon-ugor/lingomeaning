import Image from "next/image"
import Link from "next/link"

const WordContainer = (props) => {

    return (
        <Link href={props.link}>
            <a className="lyrics-container">
                <div className="image-div">

                </div>
                <div className="song-div">
                    <h2 className="song-heading">{props.word}</h2>
                </div>
            </a>
        </Link>
    )
}
WordContainer
export default WordContainer