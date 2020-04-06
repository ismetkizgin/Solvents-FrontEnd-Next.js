import Layout from '../components/_layout';
import { randomLetter } from '../public/js/random';
import Request from '../api/request';

const keyUp = () => {
    $(".Letter").keyup(function () {
        if (this.value.match(/[^a-zA-Z]/g)) {
            this.value = this.value.replace(/[^a-zA-Z]/g, '');
        }
    });
}

const getWordSolver = async () => {
    let letters = [];
    for (let i = 0; i < 8; i++) {
        letters[i] = $('#LetterInput' + (i + 1)).val();
    }

    const data = await Request('/wordsolver/' + letters);
    $('.target').val(data.word);
}

function WordSolverPage() {
    return (
        <Layout title="Kelime Bulma">
            <div className="container-fluid">
                <h1>KELİME BULUCU</h1>
                <div className="row">
                    <div className="col">
                        <input id='LetterInput1' onKeyPress={() => { keyUp() }} className="Letter" type="text" maxLength="1" placeholder="Harf 1" required />
                    </div>
                    <div className="col">
                        <input id='LetterInput2' onKeyPress={() => { keyUp() }} className="Letter" type="text" maxLength="1" placeholder="Harf 2" required />
                    </div>
                    <div className="col">
                        <input id='LetterInput3' onKeyPress={() => { keyUp() }} className="Letter" type="text" maxLength="1" placeholder="Harf 3" required />
                    </div>
                    <div className="col">
                        <input id='LetterInput4' onKeyPress={() => { keyUp() }} className="Letter" type="text" maxLength="1" placeholder="Harf 4" required />
                    </div>
                    <div className="col">
                        <input id='LetterInput5' onKeyPress={() => { keyUp() }} className="Letter" type="text" maxLength="1" placeholder="Harf 5" required />
                    </div>
                    <div className="col">
                        <input id='LetterInput6' onKeyPress={() => { keyUp() }} className="Letter" type="text" maxLength="1" placeholder="Harf 6" required />
                    </div>
                    <div className="col">
                        <input id='LetterInput7' onKeyPress={() => { keyUp() }} className="Letter" type="text" maxLength="1" placeholder="Harf 7" required />
                    </div>
                    <div className="col">
                        <input id='LetterInput8' onKeyPress={() => { keyUp() }} className="Letter" type="text" maxLength="1" placeholder="Harf 8" required />
                    </div>
                    <div className="col">
                        <input className="Letter Letter-bonus" type="text" placeholder="Bonus Harf" disabled />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <input className="target" type="text" placeholder="Sonuç" disabled />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <button onClick={() => randomLetter()} type="button"> Rastgele Harf Oluştur </button>
                    </div>
                    <div className="col-md-6">
                        <button onClick={() => getWordSolver()} type="button"> Sonucu Göster </button>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default WordSolverPage;