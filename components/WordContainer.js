import Image from "next/image"
import Link from "next/link"

const WordContainer = (props) => {

    return (
        <Link href={props.link}>
            <a className="lyrics-container">
                <div className="image-div">
                    <Image
                        src="/pen.png"
                        alt="Pen Image"
                        width={50}
                        height={50}
                    />
                </div>
                <div className="song-div">
                    <h2 className="song-heading">{props.word}</h2>
                </div>
            </a>
        </Link>
    )
}

export default WordContainer