import { useState } from "react"

export const FormFeedback = () => {
    const[score, setScore] = useState('10');
    const[comment, setComment] = useState("");

    const isDisabled = Number(score) < 5 && comment.length < 10;

    const handleSubmit = (e) => {

        e.preventDefault();
        console.log("Feedback received!")
        setScore('10');
        setComment("");
    }

    const placeHolderText = isDisabled ? 
    "Please tell us why the experience was poor. Minimum length is 10" :
    "Optional feedback";

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h1>Feedback Form</h1>
                    <div className="field">
                        <label htmlFor="score">Score: {score}</label>
                        <input
                            id="score" 
                            value={score} 
                            onChange={(e) => setScore(e.target.value)}
                            type="range"
                            min="0"
                            max="10" 
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="comment">Comment: </label>
                        <textarea
                            placeholder={placeHolderText} 
                            id="comment"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                    <button type="submit" disabled={isDisabled}>Submit</button>
                </fieldset>
            </form>
        </div>
    );
}