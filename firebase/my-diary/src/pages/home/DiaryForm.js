import { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function DiaryForm({ uid }) {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const { addDocument, response } = useFirestore("diary");

    const submitData = (e) => {
        e.preventDefault();
        console.log(title, text);
        addDocument({
            uid,
            title,
            text,
        });
    };

    useEffect(() => {
        if (response.success) {
            setTitle("");
            setText("");
        }
    }, [response.success]);

    return (
        <form onSubmit={submitData}>
            <fieldset>
                <legend>일기 쓰기</legend>
                <label htmlFor="tit">일기 제목</label>
                <input
                    id="tit"
                    type="text"
                    required
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <label htmlFor="txt">일기 내용</label>
                <textarea
                    id="txt"
                    required
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />

                <button type="submit">저장하기</button>
            </fieldset>
        </form>
    );
}
