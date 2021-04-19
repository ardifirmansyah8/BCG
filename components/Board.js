import { useState, useRef, useEffect } from "react";

import ThrashIcon from "../components/ThrashIcon";

export default function Board({ data, onSave, onDelete }) {
  const [title, setTitle] = useState(data.title);
  const [body, setBody] = useState(data.body);

  const titleRef = useRef(null);

  const handleSave = () => {
    onSave({ ...data, title, body });
  };

  const remainingTxt = 140 - body.length;

  useEffect(() => {
    if (titleRef && data.title === "") {
      titleRef.current.focus();
    }
  }, [titleRef.current, data.title]);

  return (
    <div className="tiles">
      <input
        ref={titleRef}
        placeholder="Please input title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onBlur={() => handleSave()}
      />
      <textarea
        placeholder="Please input your idea"
        rows="5"
        value={body}
        onChange={e => e.target.value.length <= 140 && setBody(e.target.value)}
        onBlur={() => handleSave()}
      />
      <div>
        <ThrashIcon onClick={() => onDelete(data.id)} />
        {remainingTxt <= 15 && (
          <label>{`${remainingTxt > 0 ? `${remainingTxt}/15` : "Max"}`}</label>
        )}
      </div>
    </div>
  );
}
