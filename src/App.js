import "./App.css";
import { useState } from "react";
function App() {
    const [value, setValue] = useState(0);
    const color = `rgba(255, 0, 0, 0.${value})`;

    const getComment = (val) => {
        switch (val) {
            case 0:
                return "많이 추움";
            case 1:
                return "조금 추움";
            case 2:
                return "추움";
            case 3:
                return "따뜻";
            case 4:
                return "조금 따뜻";
            case 5:
                return "많이 따뜻";
        }
    };

    return (
        <div className="App">
            <img src="https://t1a.coupangcdn.com/thumbnails/remote/300x300ex/image/retail/images/471497860123801-adadc33f-f3ea-46b8-b317-c1e6faf5931f.jpg"></img>
            <div className="heater_color" style={{ backgroundColor: color }}></div>
            <input
                className="drag_bar"
                type="range"
                defaultValue={0}
                min="0"
                max="5"
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <h2>{getComment(value)}</h2>
        </div>
    );
}

export default App;
