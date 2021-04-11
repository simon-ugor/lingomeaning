import { useEffect, useState } from "react"
import Layout from "../../components/Layout"
import WordsData from "../../data/words"
import Head from "next/head"
import Footer from "../../components/Footer"

const Word = () => {

    const [word1, setWord1] = useState("")
    const [meaning1, setMeaning1] = useState("")
    const [example1, setExample1] = useState("")

    const [word2, setWord2] = useState("")
    const [meaning2, setMeaning2] = useState("")
    const [example2, setExample2] = useState("")

    const [word3, setWord3] = useState("")
    const [meaning3, setMeaning3] = useState("")
    const [example3, setExample3] = useState("")

    const [word4, setWord4] = useState("")
    const [meaning4, setMeaning4] = useState("")
    const [example4, setExample4] = useState("")

    const [amount, setAmount] = useState()

    const [sliced, setSliced] = useState(WordsData.slice(0, 10))

    let prod = "https://lingomeaning.com/"
    let local = "http://localhost:3000/"

    useEffect(() => {
        let url = window.location.href

        WordsData.map(d => {
            if (url === "https://lingomeaning.com/" + d.link) {
                if (d.meaning1 && d.meaning2 && d.meaning3 && d.meaning4){
                    setAmount(4)
                    setWord1(d.word)
                    setWord2(d.word)
                    setWord3(d.word)
                    setWord4(d.word)
                    setMeaning1(d.meaning1)
                    setMeaning2(d.meaning2)
                    setMeaning3(d.meaning3)
                    setMeaning4(d.meaning4)
                    setExample1(d.example1)
                    setExample2(d.example2)
                    setExample3(d.example3)
                    setExample4(d.example4)
                } else if (d.meaning1 && d.meaning2 && d.meaning3 && !d.meaning4) {
                    setAmount(3)
                    setWord1(d.word)
                    setWord2(d.word)
                    setWord3(d.word)
                    setMeaning1(d.meaning1)
                    setMeaning2(d.meaning2)
                    setMeaning3(d.meaning3)
                    setExample1(d.example1)
                    setExample2(d.example2)
                    setExample3(d.example3)

                } else if (d.meaning1 && d.meaning2 && !d.meaning3 && !d.meaning4) {
                    setAmount(2)
                    setWord1(d.word)
                    setWord2(d.word)
                    setMeaning1(d.meaning1)
                    setMeaning2(d.meaning2)
                    setExample1(d.example1)
                    setExample2(d.example2)
                } else if (d.meaning1 && !d.meaning2 && !d.meaning3 && !d.meaning4) {
                    setAmount(1)
                    setWord1(d.word)
                    setMeaning1(d.meaning1)
                    setExample1(d.example1)
                }
                
            }
        })

    }, [])


    return (
        <Layout>

            <Head>
                <title>{word1 + " Meaning"}</title>
                <meta name="description" content={word1 + " meaning: " + meaning1} />
            </Head>

            {amount === 1 &&
                <div className="lyrics-main-div">
                    <div className="min-height-lyrics-div">
                        <h1 className="artist-lyrics-heading">{word1}</h1>
                        <h1 className="song-lyrics-heading">Meaning</h1>
                        <div className="song-lyrics-div">
                            <p>{meaning1}</p>
                        </div>
                        <h1 className="song-lyrics-heading">Example</h1>
                        <div style={{borderBottom: "3px solid black"}} className="song-lyrics-div">
                            <p style={{marginBottom: "2vh"}}>{example1}</p>
                        </div>
                        <h1 className="song-lyrics-heading">Similar Words</h1>
                        {sliced.map(d => {
                            if (d.word !== word1) {
                                return (<div><h1 className="artist-lyrics-heading">{d.word}</h1>
                                        <h1 className="song-lyrics-heading">Meaning</h1>
                                        <div className="song-lyrics-div"><p>{d.meaning1}</p></div>
                                        <h1 className="song-lyrics-heading">Example</h1>
                                        <div className="song-lyrics-div">
                                        <p>{d.example1}</p>
                                        </div></div>)
                            }
                        })}
                    </div>
                    <Footer />
                </div>
            }


            {amount === 2 &&
                    <div className="lyrics-main-div">
                    <div className="min-height-lyrics-div">
                        <h1 className="artist-lyrics-heading">{word1}</h1>
                        <h1 className="song-lyrics-heading">Meaning</h1>
                        <div className="song-lyrics-div">
                            <p>{meaning1}</p>
                        </div>
                        <h1 className="song-lyrics-heading">Example</h1>
                        <div style={{borderBottom: "3px solid black"}} className="song-lyrics-div">
                            <p style={{marginBottom: "2vh"}}>{example1}</p>
                        </div>

                        <h1 className="song-lyrics-heading">Other definitions</h1>

                        <h1 className="artist-lyrics-heading">{word1}</h1>
                        <h1 className="song-lyrics-heading">Meaning</h1>
                        <div className="song-lyrics-div">
                            <p>{meaning2}</p>
                        </div>
                        <h1 className="song-lyrics-heading">Example</h1>
                        <div style={{borderBottom: "3px solid black"}} className="song-lyrics-div">
                            <p style={{marginBottom: "4vh"}}>{example2}</p>
                        </div>

                        <h1 className="song-lyrics-heading">Similar Words</h1>
                        {sliced.map(d => {
                            if (d.word !== word1) {
                                return (<div><h1 className="artist-lyrics-heading">{d.word}</h1>
                                        <h1 className="song-lyrics-heading">Meaning</h1>
                                        <div className="song-lyrics-div"><p>{d.meaning1}</p></div>
                                        <h1 className="song-lyrics-heading">Example</h1>
                                        <div className="song-lyrics-div">
                                        <p>{d.example1}</p>
                                        </div></div>)
                            }
                        })}
                    </div>
                    <Footer />
                </div>
            }



            {amount === 3 &&
                    <div className="lyrics-main-div">
                    <div className="min-height-lyrics-div">
                        <h1 className="artist-lyrics-heading">{word1}</h1>
                        <h1 className="song-lyrics-heading">Meaning</h1>
                        <div className="song-lyrics-div">
                            <p>{meaning1}</p>
                        </div>
                        <h1 className="song-lyrics-heading">Example</h1>
                        <div style={{borderBottom: "3px solid black"}} className="song-lyrics-div">
                            <p style={{marginBottom: "2vh"}}>{example1}</p>
                        </div>

                        <h1 className="song-lyrics-heading">Other definitions</h1>

                        <h1 className="artist-lyrics-heading">{word1}</h1>
                        <h1 className="song-lyrics-heading">Meaning</h1>
                        <div className="song-lyrics-div">
                            <p>{meaning2}</p>
                        </div>
                        <h1 className="song-lyrics-heading">Example</h1>
                        <div style={{borderBottom: "3px solid black", borderBottomStyle: "dashed"}} className="song-lyrics-div">
                            <p style={{marginBottom: "4vh"}}>{example2}</p>
                        </div>

                        <h1 className="artist-lyrics-heading">{word1}</h1>
                        <h1 className="song-lyrics-heading">Meaning</h1>
                        <div className="song-lyrics-div">
                            <p>{meaning3}</p>
                        </div>
                        <h1 className="song-lyrics-heading">Example</h1>
                        <div style={{borderBottom: "3px solid black", borderBottomStyle: "solid"}} className="song-lyrics-div">
                            <p style={{marginBottom: "2vh"}}>{example3}</p>
                        </div>
                        <h1 className="song-lyrics-heading">Similar Words</h1>
                        {sliced.map(d => {
                            if (d.word !== word1) {
                                return (<div><h1 className="artist-lyrics-heading">{d.word}</h1>
                                        <h1 className="song-lyrics-heading">Meaning</h1>
                                        <div className="song-lyrics-div"><p>{d.meaning1}</p></div>
                                        <h1 className="song-lyrics-heading">Example</h1>
                                        <div className="song-lyrics-div">
                                        <p>{d.example1}</p>
                                        </div></div>)
                            }
                        })}
                    </div>
                    <Footer />
                </div>
            }

            {amount === 4 &&
                    <div className="lyrics-main-div">
                    <div className="min-height-lyrics-div">
                        <h1 className="artist-lyrics-heading">{word1}</h1>
                        <h1 className="song-lyrics-heading">Meaning</h1>
                        <div className="song-lyrics-div">
                            <p>{meaning1}</p>
                        </div>
                        <h1 className="song-lyrics-heading">Example</h1>
                        <div style={{borderBottom: "3px solid black"}} className="song-lyrics-div">
                            <p style={{marginBottom: "2vh"}}>{example1}</p>
                        </div>

                        <h1 className="song-lyrics-heading">Other definitions</h1>

                        <h1 className="artist-lyrics-heading">{word1}</h1>
                        <h1 className="song-lyrics-heading">Meaning</h1>
                        <div className="song-lyrics-div">
                            <p>{meaning2}</p>
                        </div>
                        <h1 className="song-lyrics-heading">Example</h1>
                        <div style={{borderBottom: "3px solid black", borderBottomStyle: "dashed"}} className="song-lyrics-div">
                            <p style={{marginBottom: "2vh"}}>{example2}</p>
                        </div>

                        <h1 className="artist-lyrics-heading">{word1}</h1>
                        <h1 className="song-lyrics-heading">Meaning</h1>
                        <div className="song-lyrics-div">
                            <p>{meaning3}</p>
                        </div>
                        <h1 className="song-lyrics-heading">Example</h1>
                        <div style={{borderBottom: "3px solid black", borderBottomStyle: "dashed"}} className="song-lyrics-div">
                            <p style={{marginBottom: "4vh"}}>{example3}</p>
                        </div>

                        <h1 className="artist-lyrics-heading">{word1}</h1>
                        <h1 className="song-lyrics-heading">Meaning</h1>
                        <div className="song-lyrics-div">
                            <p>{meaning4}</p>
                        </div>
                        <h1 className="song-lyrics-heading">Example</h1>
                        <div style={{borderBottom: "3px solid black", borderBottomStyle: "solid"}} className="song-lyrics-div">
                            <p style={{marginBottom: "2vh"}}>{example4}</p>
                        </div>



                        <h1 className="song-lyrics-heading">Similar Words</h1>
                        {sliced.map(d => {
                            if (d.word !== word1) {
                                return (<div><h1 className="artist-lyrics-heading">{d.word}</h1>
                                        <h1 className="song-lyrics-heading">Meaning</h1>
                                        <div className="song-lyrics-div"><p>{d.meaning1}</p></div>
                                        <h1 className="song-lyrics-heading">Example</h1>
                                        <div className="song-lyrics-div">
                                        <p>{d.example1}</p>
                                        </div></div>)
                            }
                        })}
                    </div>
                    <Footer />
                </div>
            }       
            
        </Layout>
    )
}

export default Word