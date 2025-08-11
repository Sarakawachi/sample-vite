import "./App.css";
import { useState } from "react";

function App() {
  // const records = [
  //   { title: "勉強の記録1", time: 1 },
  //   { title: "勉強の記録2", time: 3 },
  //   { title: "勉強の記録3", time: 5 },
  // ];

  const [titleText, setTitleText] = useState("");
  const [timeText, setTimeText] = useState("0");
  const [records, setRecords] = useState([]);
  const [error, setError] = useState("");
  const isError = !titleText || !timeText;

  const changeTitleText = (e) => setTitleText(e.target.value);
  const changeTimeText = (e) => setTimeText(e.target.value);
  const addRecord = () => {
    const displayRecord = {
      title: titleText,
      time: timeText,
    };
    if (isError) {
      setError("入力されていない項目があります");
      return;
    }

    setRecords([...records, displayRecord]);
    setTitleText("");
    setTimeText("0");
    setError("");
  };
  return (
    <>
      <h1>学習記録一覧</h1>
      <div className="form">
        <div className="study-content">
          <p>学習内容</p>
          <input type="text" value={titleText} onChange={changeTitleText} />
        </div>
        <div className="study-content">
          <p>学習時間</p>
          <input type="text" value={timeText} onChange={changeTimeText} />
          <p>時間</p>
        </div>
        <button className="add-button" onClick={addRecord}>
          登録
        </button>
      </div>
      <div className="error"> {error}</div>
      <div>
        <p>入力されている学習内容：{titleText}</p>
        <p>学習内入力されている時間：{timeText}時間</p>
      </div>

      <div className="content-list">
        <p>学習記録リスト</p>
        <ul>
          {records.map((record) => (
            <li>{`${record.title} ${record.time}時間`}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
