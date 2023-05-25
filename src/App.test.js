import { fireEvent, render, screen } from '@testing-library/react';
import FormFeedback from './FormFeedback';

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "4";
    const comment = "Not enough cheese on the pizza";
    const handleSubmit = jest.fn();

    render(<FormFeedback onSubmit={handleSubmit}/>);

    const scoreInput = screen.getByLabelText(/Score:/);
    fireEvent.change(scoreInput, {target: { value: score }});

    const commentInput = screen.getByLabelText(/Comments:/);
    fireEvent.change(commentInput, {target: {value: comment}}); 

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "8";
    const handleSubmit = jest.fn();
    
    render(<FormFeedback onSubmit={handleSubmit}/>);
    const scoreInput = screen.getByLabelText(/Score:/);
    fireEvent.change(scoreInput, {target: { value: score }});

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: "",
    });
  })
});
