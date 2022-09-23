import Form from 'react-bootstrap/Form';
import { useState } from 'react'

function Home() {

    const [symbol, setSymbol] = useState('');

    function stockSubmit(event) {
        console.log(event.target.symbol.value);
        event.preventDefault();

        setSymbol(''); // clear all input in the form
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
            backgroundColor: '#D9AFD9', backgroundImage: 'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)'
        }}>
            <form onSubmit={(event) => stockSubmit(event)}>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name="symbol" placeholder="enter ticker..."
                        value={symbol} onChange={event => setSymbol(event.target.value)} />
                </Form.Group>
            </form>
        </div>
    );
}

export default Home;
