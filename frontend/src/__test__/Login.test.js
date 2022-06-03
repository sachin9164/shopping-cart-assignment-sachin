import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, waitFor } from "@testing-library/react";
import Login from "../routes/Login";

describe("Login", () => {
  it("both email and password should be empty on component mount", () => {
    const { getByLabelText } = render(<Login />);
    expect(getByLabelText(/password/i).value).toHaveLength(0);
    expect(getByLabelText(/email/i).value).toHaveLength(0);
  });

  it("it should show error when email and password field are empty", async () => {
    const { getByLabelText, getByRole } = render(<Login />);
    const email = getByLabelText(/email/i);
    userEvent.type(email, "sachinkbc@gmail.com");
    const password = getByLabelText(/password/i);
    userEvent.type(password, "123456");

    userEvent.click(
      getByRole("button", {
        name: /login/i,
      })
    );
    await waitFor(() => {
      expect(
        getByRole("heading", {
          name: /! password must be at least 8 chars long/i,
        })
      ).toBeVisible();
    });
  });
});
