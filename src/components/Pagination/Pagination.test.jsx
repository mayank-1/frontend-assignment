import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import Pagination from "./index";

describe("Pagination", () => {
  it("renders correctly with basic props", () => {
    render(
      <Pagination currentPage={2} totalPages={5} onPageChange={() => {}} />
    );
    expect(screen.getByRole("navigation")).toMatchSnapshot();
  });

  it('renders disabled "Previous" button on first page', () => {
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
    );
    expect(screen.getByRole("button", { name: /Previous/i })).toBeDisabled();
    expect(screen.getByRole("navigation")).toMatchSnapshot();
  });

  it('renders "Previous" button on later pages', () => {
    render(
      <Pagination currentPage={3} totalPages={5} onPageChange={() => {}} />
    );
    expect(
      screen.getByRole("button", { name: /Previous/i })
    ).not.toBeDisabled();
    expect(screen.getByRole("navigation")).toMatchSnapshot();
  });

  it('renders "Next" button on earlier pages', () => {
    render(
      <Pagination currentPage={2} totalPages={5} onPageChange={() => {}} />
    );
    expect(screen.getByRole("button", { name: /Next/i })).not.toBeDisabled();
    expect(screen.getByRole("navigation")).toMatchSnapshot();
  });

  it('renders disabled "Next" button on last page', () => {
    render(
      <Pagination currentPage={5} totalPages={5} onPageChange={() => {}} />
    );
    expect(screen.getByRole("button", { name: /Next/i })).toBeDisabled();
    expect(screen.getByRole("navigation")).toMatchSnapshot();
  });

  it("renders page numbers correctly", () => {
    render(
      <Pagination currentPage={3} totalPages={7} onPageChange={() => {}} />
    );
    const pageButtons = screen.getAllByRole("button", { name: /page/i });
    expect(pageButtons.length).toBe(5);
    expect(pageButtons[0].textContent).toBe("Previous");
    expect(pageButtons[1].textContent).toBe("3");
    expect(pageButtons[2].textContent).toBe("4");
    expect(screen.getByRole("navigation")).toMatchSnapshot();
  });

  it("renders ellipsis for missing pages in the middle", () => {
    render(
      <Pagination currentPage={4} totalPages={10} onPageChange={() => {}} />
    );
    expect(screen.getByText("...")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toMatchSnapshot();
  });

  it("calls onPageChange on button click", async () => {
    const onPageChange = vi.fn();
    render(
      <Pagination currentPage={2} totalPages={5} onPageChange={onPageChange} />
    );

    const nextButton = screen.getByRole("button", { name: /Next/i });
    await userEvent.click(nextButton);

    expect(onPageChange).toHaveBeenCalledTimes(1);
    expect(onPageChange).toHaveBeenCalledWith(3);
  });

  it("does not call onPageChange on disabled button click", async () => {
    const onPageChange = vi.fn();
    render(
      <Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />
    );

    const previousButton = screen.getByRole("button", { name: /Previous/i });
    await userEvent.click(previousButton);

    expect(onPageChange).not.toHaveBeenCalled();
  });
});
