import Link from "next/link"
import Footer from "../components/Footer"
import Layout from "../components/Layout"
import Head from "next/head"

const allWords = () => {
    return (
        <Layout>
            <Head>
                <title>All words</title>
            </Head>
            <div className="content-main-div">
                <div className="min-height-div">
                    <h1 className="top-lyrics-heading">All artists</h1>

                    <div className="three-letters">
                        <Link href="words/a"><a className="letter-artists">A</a></Link>
                        <Link href="words/b"><a className="letter-artists">B</a></Link>
                        <Link href="words/c"><a className="letter-artists">C</a></Link>
                        <Link href="words/d"><a className="letter-artists">D</a></Link>
                    </div>

                    <div className="three-letters">
                        <Link href="words/e"><a className="letter-artists">E</a></Link>
                        <Link href="words/f"><a className="letter-artists">F</a></Link>
                        <Link href="words/g"><a className="letter-artists">G</a></Link>
                        <Link href="words/h"><a className="letter-artists">H</a></Link>
                    </div>

                    <div className="three-letters">
                        <Link href="words/i"><a className="letter-artists">I</a></Link>
                        <Link href="words/j"><a className="letter-artists">J</a></Link>
                        <Link href="words/k"><a className="letter-artists">K</a></Link>
                        <Link href="words/l"><a className="letter-artists">L</a></Link>
                    </div>

                    <div className="three-letters">
                        <Link href="words/m"><a className="letter-artists">M</a></Link>
                        <Link href="words/n"><a className="letter-artists">N</a></Link>
                        <Link href="words/o"><a className="letter-artists">O</a></Link>
                        <Link href="words/p"><a className="letter-artists">P</a></Link>
                    </div>

                    <div className="three-letters">
                        <Link href="words/q"><a className="letter-artists">Q</a></Link>
                        <Link href="words/r"><a className="letter-artists">R</a></Link>
                        <Link href="words/s"><a className="letter-artists">S</a></Link>
                        <Link href="words/t"><a className="letter-artists">T</a></Link>
                    </div>

                    <div className="three-letters">
                        <Link href="words/u"><a className="letter-artists">U</a></Link>
                        <Link href="words/v"><a className="letter-artists">V</a></Link>
                        <Link href="words/w"><a className="letter-artists">W</a></Link>
                        <Link href="words/x"><a className="letter-artists">X</a></Link>
                    </div>

                    <div className="three-letters">
                        <Link href="words/y"><a className="letter-artists">Y</a></Link>
                        <Link href="words/z"><a className="letter-artists">Z</a></Link>
                    </div>
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default allWords